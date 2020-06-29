import React from "react";
import {
	makeStyles,
	Box,
	Typography,
	Container,
	Avatar,
} from "@material-ui/core";

import { connect } from "react-redux";

const ProfilePage = ({ currentUser, helpers }) => {
	const useStyles = makeStyles((theme) => ({
		box: {
			margin: "0 auto",
			marginTop: "5em",
			maxWidth: "75%",
			height: "50vh",
		},
		container: {
			display: "flex",

			flexDirection: "column",
			padding: "0.5em",
			justifyContent: "center",
		},
		title: {
			marginTop: "1em",
		},
		avatar: {
			alignSelf: "center",
		},
	}));

	const classes = useStyles();
	return (
		<Box className={classes.box} boxShadow={3} p={2} m={2}>
			<Typography variant="h5" gutterBottom>
				Hi! {currentUser.name}
			</Typography>
			<Container className={classes.container}>
				<Avatar alt={currentUser.name} src={currentUser.photoURL} />
				<Typography variant="h5">
					You have created {helpers.length} helpers
				</Typography>
				!!! Here I should put some info on categories etc etc
			</Container>
		</Box>
	);
};

const mapStateToProps = (state) => ({
	currentUser: state.auth.currentUser,
	helpers: state.helpers.helpers,
});

export default connect(mapStateToProps)(ProfilePage);
