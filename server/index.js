import express from 'express';
import handlebars from 'express-handlebars';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';

//Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux'

//Immutable
import { List, Map } from 'immutable';

//Material UI
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue500, blue300, orange400 } from 'material-ui/styles/colors';

//Containers
import App from './generated/app';


const app = express();

injectTapEventPlugin();


const dummyfeed = {
  isFetching: false,
  error: {},
  items: Map({
    feedSources: List([
      Map({
        id: 1,
        name: "News.markets",
        avatarUrl: "images/news-markets-logo.jpg",
        url: "",
        description: ""
      }),
      Map({
        id: 2,
        name: "Trade.forex",
        avatarUrl: "images/trade-forex-logo.jpg",
        url: "",
        description: ""
      })
    ]),
    newsItems: List([
      Map({
        id: "https://news.markets/bitcoin/westpac-doubles-fintech-23695/",
        title: "Westpac doubles down on fintech",
        summary: 'Westpac Bank (ASX:WBC), one of Australia’s Big Four lenders, has doubled down on its fintech bets. The company has announced another A$50 million (£29.3 million) for a second fund managed by Reinventure Group, an independent venture capital company. Betting on disruptive fintech technology According to news site Finextra.com, Reinventure has invested in 10 Australian financial technology.',
        article: '<p>Westpac Bank (ASX:WBC), one of Australia’s Big Four lenders, has doubled down on its fintech bets. The company has announced another A$50 million (£29.3 million) for a second fund managed by Reinventure Group, an independent venture capital company. Betting on disruptive fintech technology According to news site Finextra.com, Reinventure has invested in 10 Australian financial technology [&#8230;]</p><p>The post <a rel="nofollow" href="https://news.markets/bitcoin/westpac-doubles-fintech-23695/">Westpac doubles down on fintech</a> appeared first on <a rel="nofollow" href="https://news.markets">News.Markets</a>.</p>',
        author: "David Cottle",
        lastUpdated: "Mon, 08 Aug 2016 15:15:54 +0000",
        isLiked: false,
        sourceId: 1
      }),
      Map({
        id: "https://trade.forex/news/technical-analysis/payrolls-trigger-downside-break-in-eurusd",
        title: "Payrolls trigger downside break in EURUSD",
        summary: 'Friday’s better-than-expected US non-farm payrolls – up 255,000 versus expectations of a 180,000 inc',
        article: '<p>Westpac Bank (ASX:WBC), one of Australia’s Big Four lenders, has doubled down on its fintech bets. The company has announced another A$50 million (£29.3 million) for a second fund managed by Reinventure Group, an independent venture capital company. Betting on disruptive fintech technology According to news site Finextra.com, Reinventure has invested in 10 Australian financial technology [&#8230;]</p><p>The post <a rel="nofollow" href="https://news.markets/bitcoin/westpac-doubles-fintech-23695/">Westpac doubles down on fintech</a> appeared first on <a rel="nofollow" href="https://news.markets">News.Markets</a>.</p>',
        author: "Nick Cawley",
        lastUpdated: "2016-08-08T12:41:28+01:00",
        isLiked: true,
        sourceId: 2
      })
    ])
  })
};

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

  const preloadedState = {
    feed: dummyfeed,
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

app.listen(4000, () => console.log('Server running'));
