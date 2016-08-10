import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import NewsItem from './NewsItem';

const paperStyle = {
	marginTop: '20px',
	marginBottom: '20px'
};
const listStyle = {
	paddingTop: '0',
	paddingBottom: '0'
};

export default class Feed extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Paper style={paperStyle}>
				<List style={listStyle}>
					<NewsItem
						feedSource={
							{
								id: 1,
								name: "News.markets",
								avatarUrl: "images/news-markets-logo.jpg",
								url: "",
								description: ""
							}
						}
						newsItem={
							{
								id: "https://news.markets/bitcoin/westpac-doubles-fintech-23695/",
								title: "Westpac doubles down on fintech",
								summary: '<p>Westpac Bank (ASX:WBC), one of Australia’s Big Four lenders, has doubled down on its fintech bets. The company has announced another A$50 million (£29.3 million) for a second fund managed by Reinventure Group, an independent venture capital company. Betting on disruptive fintech technology According to news site Finextra.com, Reinventure has invested in 10 Australian financial technology [&#8230;]</p><p>The post <a rel="nofollow" href="https://news.markets/bitcoin/westpac-doubles-fintech-23695/">Westpac doubles down on fintech</a> appeared first on <a rel="nofollow" href="https://news.markets">News.Markets</a>.</p>',
								article: '<p>Westpac Bank (ASX:WBC), one of Australia’s Big Four lenders, has doubled down on its fintech bets. The company has announced another A$50 million (£29.3 million) for a second fund managed by Reinventure Group, an independent venture capital company. Betting on disruptive fintech technology According to news site Finextra.com, Reinventure has invested in 10 Australian financial technology [&#8230;]</p><p>The post <a rel="nofollow" href="https://news.markets/bitcoin/westpac-doubles-fintech-23695/">Westpac doubles down on fintech</a> appeared first on <a rel="nofollow" href="https://news.markets">News.Markets</a>.</p>',
								author: "David Cottle",
								lastUpdated: "Mon, 08 Aug 2016 15:15:54 +0000",
								isLiked: false							
							}
						}
					/>
					<Divider />
					<NewsItem
						feedSource={
							{
								id: 2,
								name: "Trade.forex",
								avatarUrl: "images/trade-forex-logo.jpg",
								url: "",
								description: ""
							}
						}
						newsItem={
							{
								id: "https://trade.forex/news/technical-analysis/payrolls-trigger-downside-break-in-eurusd",
								title: "Payrolls trigger downside break in EURUSD",
								summary: 'Friday’s better-than-expected US non-farm payrolls – up 255,000 versus expectations of a 180,000 inc',
								article: '<p>Westpac Bank (ASX:WBC), one of Australia’s Big Four lenders, has doubled down on its fintech bets. The company has announced another A$50 million (£29.3 million) for a second fund managed by Reinventure Group, an independent venture capital company. Betting on disruptive fintech technology According to news site Finextra.com, Reinventure has invested in 10 Australian financial technology [&#8230;]</p><p>The post <a rel="nofollow" href="https://news.markets/bitcoin/westpac-doubles-fintech-23695/">Westpac doubles down on fintech</a> appeared first on <a rel="nofollow" href="https://news.markets">News.Markets</a>.</p>',
								author: "Nick Cawley",
								lastUpdated: "2016-08-08T12:41:28+01:00",
								isLiked: true							
							}
						}
					/>
				</List>
			</Paper>
		);
	}
}