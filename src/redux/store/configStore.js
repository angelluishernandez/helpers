import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/auth.reducer";
import { createLogger } from "redux-logger";
import helpersReducer from "../reducers/helpers.reducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createLoggerMiddleware = createLogger();

let middleware = [thunk, createLoggerMiddleware];

const rootReducer = combineReducers({
	auth: authReducer,
	helpers: helpersReducer,
});

export default () => {
	const store = createStore(
		rootReducer,
		composeEnhancers(applyMiddleware(...middleware))
	);

	return store;
};
