export const ActionTypes = {
	REQUEST_FEED: 'REQUEST_FEED',
	REQUEST_SUCCESS: 'REQUEST_SUCCESS',
	REQUEST_FAILURE: 'REQUEST_FAILURE',
	SELECT_ITEM: 'SELECT_ITEM',
	TOGGLE_LIKE: 'TOGGLE_LIKE'
};

export function requestFeed() {
	return {
		type: ActionTypes.REQUEST_FEED
	};
}
export function receiveFeedSuccess(items) {
	return {
		type: ActionTypes.REQUEST_SUCCESS,
		items
	};
}
export function receiveFeedFailure(error) {
	return {
		type: ActionTypes.REQUEST_FAILURE,
		error
	};
}
export function selectItem(id) {
	return {
		type: ActionTypes.SELECT_ITEM,
		id
	};
}
export function toggleLike(id) {
	return {
		type: ActionTypes.TOGGLE_LIKE,
		id
	};
}
