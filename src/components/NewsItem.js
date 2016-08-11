import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import SvgIcon from 'material-ui/SvgIcon';
import { darkBlack } from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
import LikeButton from '../containers/LikeButton';
import IconButton from 'material-ui/IconButton';


export default class NewsItem extends React.Component {
	constructor(props) {
		super(props);

		this.onLikeClick = () => this._onLikeClick();
	}
	render() {
		let newsItem = this.props.newsItem;
		let pubDateTime = new Date(newsItem.get('lastUpdated'));
		let secondaryText = (<div><span style={{color: darkBlack}}>{newsItem.get('author')}</span> - <em>{pubDateTime.toLocaleString()}</em> - {newsItem.get('summary')}</div>);
		return (
			<div>
				<ListItem
					leftAvatar={<Avatar src={this.props.feedSource.get('avatarUrl')} />}
					primaryText={newsItem.get('title')}
					secondaryText={secondaryText}
					secondaryTextLines={2}
					rightIconButton={<LikeButton id={newsItem.get('id')} isLiked={newsItem.get('isLiked')} />}
				/>
			</div>
		);
	}
}
NewsItem.PropTypes = {
	newsItem: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		summary: PropTypes.string.isRequired,
		article: PropTypes.string.isRequired,
		author: PropTypes.string.isRequired,
		lastUpdated: PropTypes.string.isRequired,
		isLiked: PropTypes.bool.isRequired
	}),
	feedSource: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		avatarUrl: PropTypes.string.isRequired,
		url: PropTypes.string,
		description: PropTypes.string
	})
}