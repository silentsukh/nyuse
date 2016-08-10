import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import SvgIcon from 'material-ui/SvgIcon';
import IconButton from 'material-ui/IconButton';
import ActionFavourite from 'material-ui/svg-icons/action/favorite';
import ActionFavouriteBorder from 'material-ui/svg-icons/action/favorite-border';
import { darkBlack } from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';

export default class NewsItem extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let newsItem = this.props.newsItem;
		let secondaryText = (<div>{newsItem.summary} - <span style={{color: darkBlack}}>{newsItem.author}</span>, <span></span></div>);
		return (
			<div>
				<ListItem
					leftAvatar={<Avatar src={this.props.feedSource.avatarUrl} />}
					primaryText={newsItem.title}
					secondaryText={secondaryText}
					secondaryTextLines={2}
					rightIconButton={
						<IconButton tooltip={!newsItem.isLiked ? "Like" : "Unlike"}>
							{newsItem.isLiked ? <ActionFavourite /> : <ActionFavouriteBorder />}
						</IconButton>
					}
					
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
		isLiked: PropTypes.bool
	}),
	feedSource: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		avatarUrl: PropTypes.string.isRequired,
		url: PropTypes.string,
		description: PropTypes.string
	})
}