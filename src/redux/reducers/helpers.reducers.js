const helpersReducerDefaultState = [];

export const helpersReducer = (state = helpersReducerDefaultState, action) => {
	switch (action.type) {
		case "SET_HELPERS":
			return { ...state, helpers: action.helpers };
		case "SET_PUBLIC_HELPERS":
			return { ...state, publicHelpers: action.publicHelpers };
		default:
			return state;
	}
};

export const helperReducer = (state = {}, action) => {
	switch (action.type) {
		case "SET_CURRENT_HELPER":
			return action.currentHelper;

		default:
			return state;
	}
};
