import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/auth.reducer";
import { createLogger } from "redux-logger";
import { helpersReducer, helperReducer } from "../reducers/helpers.reducers";
import stepsReducer from "../reducers/steps.reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const createLoggerMiddleware = createLogger();

let middleware = [thunk /*createLoggerMiddleware*/];

const rootReducer = combineReducers({
	auth: authReducer,
	helpers: helpersReducer,
	currentHelper: helperReducer,
	steps: stepsReducer,
});

export default () => {
	const store = createStore(
		rootReducer,
		composeEnhancers(applyMiddleware(...middleware))
	);

	return store;
};
