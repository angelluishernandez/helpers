export default (state = {}, action) => {
	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		case "SET_CURRENT_USER":
			return {
				...state,
				currentUser: action.user,
			};

		case "LOGOUT":
			return {};

		default:
			return state;
	}
};
