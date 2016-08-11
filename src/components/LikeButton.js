import React, { PropTypes, Component } from 'react';
import IconButton from 'material-ui/IconButton';
import ActionFavourite from 'material-ui/svg-icons/action/favorite';
import ActionFavouriteBorder from 'material-ui/svg-icons/action/favorite-border';
import { red500, blue300, red200 } from 'material-ui/styles/colors';

export default class LikeButton extends Component {
	constructor(props) {
		super(props);
		this.onClick = (e) => this._onClick(e);
	}
	_onClick(e) {
		this.props.onTouchTap();
	}
	render() {
		return (
			<IconButton tooltip={!this.props.isLiked ? "Like" : "Unlike"} onTouchTap={this.onClick} style={{position: 'absolute', right: '5px', top: '0'}}>
				{this.props.isLiked ? <ActionFavourite color={red500} hoverColor={blue300} /> : <ActionFavouriteBorder color={red200} hoverColor={blue300} />}
			</IconButton>
		);
	}
}
LikeButton.PropTypes = {
	id: PropTypes.string.isRequired,
	isLiked: PropTypes.bool.isRequired,
	onTouchTap: PropTypes.func.isRequired
}

