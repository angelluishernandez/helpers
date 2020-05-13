import { firebase, googleAuthProvider } from "../../firebase/firebase";

//----------------------ACTION GENERATORS----------------------//

//----------------------Start Login----------------------//

export const startSetUser = () => {
	return () => {
		const user = firebase.auth().currentUser.uid;
		if (user) {
			setUser(user);
		}
	};
};

//----------------------ACTION TYPES----------------------//

export const login = (uid) => ({
	type: "LOGIN",
	uid,
});

export const logout = () => ({
	type: "LOGOUT",
});

export const setUser = (user) => ({
	type: "SET_USER",
	user,
});
