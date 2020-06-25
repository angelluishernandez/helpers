import { database } from "../../firebase/firebase";

//----------------------ACTION GENERATORS----------------------//

//----------------------Fetch Steps----------------------//

export const fetchSteps = (helperId) => {
	return (dispatch, getState) => {
		const userUid = getState().auth.user;
		return database
			.ref(`users/${userUid}/helpers/${helperId}/steps`)
			.once("value")
			.then((snapshot) => {
				const steps = [];
				snapshot.forEach((childSnapshot) => {
					steps.push({
						id: childSnapshot.key,
						...childSnapshot.val(),
					});
				});
				dispatch(setSteps(steps));
			});
	};
};

export const addStep = (step, helperId) => {
	return (dispatch, getState) => {
		const userUid = getState().auth.user;

		database
			.ref(`users/${userUid}/helpers/${helperId}`)
			.child("steps")
			.push({ ...step })
			.then(() => {
				dispatch(addStepToStore({ ...step }));
				dispatch(fetchSteps(helperId));
			});
	};
};

export const removeStep = (stepId, helperId) => {
	return (dispatch, getState) => {
		const userUid = getState().auth.user;
		database
			.ref(`users/${userUid}/helpers/${helperId}/steps/${stepId}`)
			.remove()
			.then(dispatch(deleteStep(stepId)));
	};
};

//----------------------ACTION TYPES----------------------//

export const setSteps = (steps) => ({
	type: "SET_STEPS",
	steps,
});

export const addStepToStore = (step) => ({
	type: "ADD_STEP",
	step,
});

export const deleteStep = (stepId) => ({
	type: "DELETE_STEP",
	stepId,
});
