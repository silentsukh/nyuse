import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import Feed from './Feed';
import { fetchFeed } from '../actions';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		let { dispatch } = this.props;
		dispatch(fetchFeed());
	}
	render() {
		return (
			<div>
				<AppBar title="Nyuse" />
				<div className="container">
					<div className="col-xs-12">
						<Feed items={this.props.feed.items} />
					</div>
				</div>
			</div>
		);
	}
}
App.PropTypes = {
	feed: PropTypes.shape({
		isFetching: PropTypes.bool.isRequired,
		error: PropTypes.object.isRequired,
		items: PropTypes.object.isRequired
	}),
	selectedItem: PropTypes.string.isRequired
}