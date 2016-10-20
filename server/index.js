import express from 'express';
import handlebars from 'express-handlebars';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';

//Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux'

//Immutable
import { List, Map, fromJS } from 'immutable';

//Material UI
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue500, blue300, orange400 } from 'material-ui/styles/colors';

//Containers
import App from './generated/app';

import parser from 'rss-parser';

const app = express();

injectTapEventPlugin();

//View Templates
app.engine('handlebars', handlebars({
  layoutsDir: path.join(__dirname, 'views/layouts'),
  defaultLayout: path.join(__dirname, 'views/layouts/main.handlebars')
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views/layouts'));

//Static assets
app.use(express.static(path.resolve(__dirname + '/../public')));
console.log(path.resolve(__dirname + '/../public'));

//Routes
app.get('/', (req, res) => {

  parser.parseURL('http://www.rssmix.com/u/8210201/rss.xml', (err, parsed) => {
    let items = [];

    const rssfeed = parsed.feed.entries, pageSize = rssfeed.length > 20 ? 20 : rssfeed.length;
    for (let i=0; i<pageSize; i++) {
      items.push({
        id: rssfeed[i].link,
        title: rssfeed[i].title,
        summary: rssfeed[i].description,
        article: rssfeed[i].content,
        author: rssfeed[i].author,
        lastUpdated: rssfeed[i].pubDate,
        isLiked: false
      });
    }


    const preloadedState = {
      feed: {
        isFetching: false,
        error: {},
        items: fromJS(items)
      },
      selectedItem: ''
    };

    const store = createStore(
      (state=preloadedState) => state
    );

    const muiTheme = getMuiTheme({
      palette: {
        primary1Color: blue500,
        primary2Color: blue300,
        accent1Color: orange400
      }
    }, {
      userAgent: req.headers['user-agent']
    });

    let output = renderToString(
      <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
          <App />
        </Provider>
      </MuiThemeProvider>
    );

    res.render('app', {
      app: output,
      initialState: JSON.stringify(preloadedState)
    });


  });


});

app.listen(4000, () => console.log('Server running'));
