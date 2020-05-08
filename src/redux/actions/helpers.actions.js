// import { v4 as uuidv4 } from "uuid";

// import database from "../../firebase/firebase";

// export const setHelpers = (helpers) => ({
// 	type: "SET_HELPERS",
// 	helpers,
// });

// export const startSetHelpers = () => {
// 	return (dispatch, getState) => {
// 		const uid = getState().auth.uid;

// 		return database
// 			.ref(`users/${uid}/helpers`)
// 			.once("value")
// 			.then((snapshot) => {
// 				const helpers = [];
// 				snapshot.forEach((childSnapshot) => {
// 					helpers.push({
// 						id: childSnapshot.key,
// 						...childSnapshot.val(),
// 					});
// 				});
// 				dispatch(setHelpers(helpers));
// 			});
// 	};
// };
