import { database } from "../../firebase/firebase";

//----------------------ACTION GENERATORS----------------------//

//----------------------Fetch Helpers----------------------//

export const fetchHelpers = () => {
	return (dispatch, getState) => {
		const userUid = getState().auth.user;

		return database
			.ref(`users/${userUid}/helpers`)
			.once("value")
			.then((snapshot) => {
				const helpers = [];
				snapshot.forEach((childSnapshot) => {
					helpers.push({
						id: childSnapshot.key,
						...childSnapshot.val(),
					});
				});
				dispatch(setHelpers(helpers));
			});
	};
};

export const getCurrentHelper = (helperId) => {
	return (dispatch, getState) => {
		const userUid = getState().auth.user;

		return database
			.ref(`users/${userUid}/helpers/${helperId}`)
			.once("value")
			.then((snapshot) => {
				const currentHelper = snapshot.val();
				dispatch(setCurrentHelper(currentHelper));
			});
	};
};

//----------------------ACTION TYPES----------------------//

export const setHelpers = (helpers) => ({
	type: "SET_HELPERS",
	helpers,
});

export const setCurrentHelper = (currentHelper) => ({
	type: "SET_CURRENT_HELPER",
	currentHelper,
});
