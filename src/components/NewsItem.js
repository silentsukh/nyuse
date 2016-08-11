import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import SvgIcon from 'material-ui/SvgIcon';
import { darkBlack, red500, blue300, red200 } from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import ActionFavourite from 'material-ui/svg-icons/action/favorite';
import ActionFavouriteBorder from 'material-ui/svg-icons/action/favorite-border';


export default class NewsItem extends React.Component {
	constructor(props) {
		super(props);

		this.onClick = () => this._onClick();
		this.onLikeClick = () => this._onLikeClick();
	}
	_onClick(e) {
		this.props.onTouchTap();
	}
	_onLikeClick(e) {
		this.props.onLikeTouchTap();
	}
	render() {
		let newsItem = this.props.newsItem;
		let pubDateTime = new Date(newsItem.get('lastUpdated'));
		let secondaryText = (<div><span style={{color: darkBlack}}>{newsItem.get('author')}</span> - <em>{pubDateTime.toLocaleString()}</em> - {newsItem.get('summary')}</div>);
		let isLiked = newsItem.get('isLiked');
		return (
			<div>
				<ListItem
					leftAvatar={<Avatar src={this.props.feedSource.get('avatarUrl')} />}
					primaryText={newsItem.get('title')}
					secondaryText={secondaryText}
					secondaryTextLines={2}
					rightIconButton={
						<IconButton tooltip={!isLiked ? "Like" : "Unlike"} onTouchTap={this.onLikeClick}>
							{isLiked ? <ActionFavourite color={red500} hoverColor={blue300} /> : <ActionFavouriteBorder color={red200} hoverColor={blue300} />}
						</IconButton>
					}
					onTouchTap={this.onClick}
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
	}),
	onTouchTap: PropTypes.func.isRequired,
	onLikeTouchTap: PropTypes.func.isRequired
}