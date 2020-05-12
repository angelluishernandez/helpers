import { firebase, googleAuthProvider } from "../../firebase/firebase";

export const login = (uid) => ({
	type: "LOGIN",
	uid,
});

export const startLogin = () => {
	return () => {
		return firebase.auth().signInWithPopup(googleAuthProvider);
	};
};

export const logout = () => ({
	type: "LOGOUT",
});

export const startLogout = () => {
	return () => {
		return firebase.auth().signOut();
	};
};

export const setUser = (user) => ({
	type: "SET_USER",
	user,
});

export const startSetUser = () => {
	return () => {
		const user = firebase.auth().currentUser.uid;
		console.log(user);
		if (user) {
			setUser(user);
		}
	};
};
