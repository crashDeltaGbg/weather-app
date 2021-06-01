const initState = {
	search: true
};

export const searchReducer = (state = initState, action) => {
	switch (action.type) {
		case 'SET_SEARCH':
			return {
				...state,
				search: action.payload
			};
		default:
			return state;
	}
};
