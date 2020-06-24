const helpersReducerDefaultState = [];

export const helpersReducer = (state = helpersReducerDefaultState, action) => {
	switch (action.type) {
		case "SET_HELPERS":
			return action.helpers;

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
