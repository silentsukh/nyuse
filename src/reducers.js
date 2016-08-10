import { combineReducers } from 'redux';
import { ActionTypes } from './actions';

const initialState = {
	isFetching: false,
	selectedItem: -1,
	items: [],
	error: {}
};

function selectedItem(state = initialState.selectedItem, action) {
	switch (action.type) {
		case ActionTypes.SELECT_ITEM:
			return action.id;
		default:
			return state;
	}
}
function toggledLike(state = initialState.items, action) {
	switch (action.type) {
		case ActionTypes.TOGGLE_LIKE:
			return state.map((item) => {
				if (item.get('id') === action.id) {
					return item.update('isLiked', isLiked => !isLiked);
				}
				return item;
			});
		default:
			return state;
	}
}
function feed(state = initialState, action) {
	switch(action.type) {
		case ActionTypes.REQUEST_FEED:
			return { ...state, isFetching: true };
		case ActionTypes.REQUEST_SUCCESS:
			return { ...state, isFetching: false, items: action.items };
		case ActionTypes.REQUEST_FAILURE:
			return { ...state, isFetching: false, error: action.error };
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	feed,
	toggledLike,
	selectedItem
});

export default rootReducer;