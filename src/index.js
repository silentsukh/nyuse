import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue500, blue300, orange400 } from 'material-ui/styles/colors';
import Feed from './components/Feed';
import { List, Map } from 'immutable';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue500,
    primary2Color: blue300,
    accent1Color: orange400
  }
});

const dummyData = Map({
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
});


class Nyuse extends React.Component {
	render() {
		return (
			<div>
				<AppBar title="Nyuse" />
				<div className="container">
					<div className="col-xs-12">
						<Feed data={dummyData} />
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