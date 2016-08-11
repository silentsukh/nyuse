import { connect } from 'react-redux';
import LikeButtonC from '../components/LikeButton';
import { toggleLike } from '../actions';

function mapStateToProps(state) {
	return state;
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		onTouchTap: () => {
			dispatch(toggleLike(ownProps.id));
		}
	}
}

const LikeButton = connect(mapStateToProps, mapDispatchToProps)(LikeButtonC);
export default LikeButton;