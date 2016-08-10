import React, { PropTypes } from 'react';
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
		let feedItems = this.props.data.get('newsItems').map((item) => {
			let source = this.props.data.get('feedSources').filter((feedSource) => {
				return feedSource.get('id') === item.get('sourceId');
			}).first();
			return (
				<div key={item.get('id')}>
					<NewsItem newsItem={item} feedSource={source} />
					<Divider />
				</div>
			);
		});
		return (
			<Paper style={paperStyle}>
				<List style={listStyle}>
					{feedItems}
				</List>
			</Paper>
		);
	}
}

Feed.PropTypes = {
	data: PropTypes.shape({
		feedSources: PropTypes.array,
		newsItems: PropTypes.array
	})
};