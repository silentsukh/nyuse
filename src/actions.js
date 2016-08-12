import { List, Map } from 'immutable';
import fetch from 'isomorphic-fetch';

export const ActionTypes = {
	REQUEST_FEED: 'REQUEST_FEED',
	REQUEST_SUCCESS: 'REQUEST_SUCCESS',
	REQUEST_FAILURE: 'REQUEST_FAILURE',
	SELECT_ITEM: 'SELECT_ITEM',
	TOGGLE_LIKE: 'TOGGLE_LIKE'
};

export function requestFeed() {
	return {
		type: ActionTypes.REQUEST_FEED
	};
}
export function receiveFeedSuccess(items) {
	return {
		type: ActionTypes.REQUEST_SUCCESS,
		items
	};
}
export function receiveFeedFailure(error) {
	return {
		type: ActionTypes.REQUEST_FAILURE,
		error
	};
}
export function selectItem(id) {
	return {
		type: ActionTypes.SELECT_ITEM,
		id
	};
}
export function toggleLike(id) {
	return {
		type: ActionTypes.TOGGLE_LIKE,
		id
	};
}


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
export function fetchFeed(userId = '') {
	return (dispatch) => {
		dispatch(requestFeed());

/*		let result = fetch('https://news.markets/feed/', {
			headers: {
		        'Accept': 'text/html,application/xhtml+xml,application/xml;',
		        'Content-Type': 'application/atom+xml; charset=UTF-8',
		        'Access-Control-Allow-Origin': '*'
			}
  		})
			.then(response => {
				console.log(response);
			}, error => {
				console.error(error);
			});
*/
		return dispatch(receiveFeedSuccess(dummyData));
	}
}