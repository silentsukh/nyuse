//React
import React from 'react';
import ReactDOM from 'react-dom';

//Redux
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux'

//Immutable
import { List, Map, fromJS } from 'immutable';

//Material UI
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue500, blue300, orange400 } from 'material-ui/styles/colors';

//Containers
import AppC from './containers/App';

// inject tap event for Material UI
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue500,
    primary2Color: blue300,
    accent1Color: orange400
  }
});

const loggerMiddleware = createLogger();

let preloadedState = window.__PRELOADED_STATE__;
preloadedState.feed.items = fromJS(preloadedState.feed.items);

const store = createStore(
	rootReducer,
	preloadedState,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
);

ReactDOM.render(
	<MuiThemeProvider muiTheme={muiTheme}>
		<Provider store={store}>
			<AppC />
		</Provider>
	</MuiThemeProvider>
	, document.getElementById('content')
);