import React, { PropTypes, Component } from 'react';

export default class Article extends Component {
	render() {
		return (
			<article className="article">
				<h1>{this.props.title}</h1>
			</article>
		);
	}
}
Article.PropTypes = {
	article: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
		lastUpdated: PropTypes.string.isRequired,
		author: PropTypes.string.isRequired,
		isLiked: PropTypes.bool.isRequired,
		feed: PropTypes.object.isRequired
	})
};