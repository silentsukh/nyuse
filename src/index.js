import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue500, blue300, orange400 } from 'material-ui/styles/colors';
import Feed from './components/Feed';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue500,
    primary2Color: blue300,
    accent1Color: orange400
  }
});

class Nyuse extends React.Component {
	render() {
		return (
			<div>
				<AppBar title="Nyuse" />
				<div className="container">
					<div className="col-xs-12">
						<Feed />
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<MuiThemeProvider muiTheme={muiTheme}>
		<Nyuse />
	</MuiThemeProvider>
	, document.getElementById('content')
);