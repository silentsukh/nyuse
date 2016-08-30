import { connect } from 'react-redux';
import NewsItemC from '../components/NewsItem';
import { selectItem, toggleLike } from '../actions';

function mapStateToProps(state) {
	return state;
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		onTouchTap: () => {
			dispatch(selectItem(ownProps.newsItem.get('id')));
		},
		onLikeTouchTap: () => {
			dispatch(toggleLike(ownProps.newsItem.get('id')));
		}
	}
}

const NewsItem = connect(mapStateToProps, mapDispatchToProps)(NewsItemC);
export default NewsItem;