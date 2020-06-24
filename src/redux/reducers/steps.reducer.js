const stepsReducerDefaultState = [];

const stepsReducer = (state = stepsReducerDefaultState, action) => {
	switch (action.type) {
		case "SET_STEPS":
			return action.steps;
		case "ADD_STEPS":
			return [...state, action.step];
		case "DELETE_STEP":
			return state.filter((step) => step.id !== action.stepId);
		default:
			return state;
	}
};

export default stepsReducer;
