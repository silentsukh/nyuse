import { combineReducers } from 'redux';
import { ActionTypes } from './actions';
import { List, Map } from 'immutable';

const initialState = {
	userId: '',
	isFetching: false,
	selectedItem: '',
	items: Map({}),
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
function feed(state = { isFetching: initialState.isFetching, items: initialState.items, error: initialState.error }, action) {
	switch(action.type) {
		case ActionTypes.REQUEST_FEED:
			return { ...state, isFetching: true };
		case ActionTypes.REQUEST_SUCCESS:
			return { ...state, isFetching: false, items: action.items };
		case ActionTypes.REQUEST_FAILURE:
			return { ...state, isFetching: false, error: action.error };
		case ActionTypes.TOGGLE_LIKE:
			return { ...state, items: state.items.set('newsItems', state.items.get('newsItems').map((item) => {
						if (item.get('id') === action.id) {
							return item.update('isLiked', isLiked => !isLiked);
						}
						return item;
					})) };
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	feed,
	selectedItem
});

export default rootReducer;