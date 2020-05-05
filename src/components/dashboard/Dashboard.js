import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MainContainer from "./MainContainer";
import DashboardCard from "./DashBoardCard";
import ActionCall from "./ActionCall";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: "#fcefee",
	},
	margin: {
		marginTop: "10vh",
		marginBottom: "10vh",
	},
}));

const Dashboard = () => {
	const classes = useStyles();

	return (
		<div className={`container Dashboard ${classes.root} pt-5`}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<MainContainer useStyles={useStyles} />
				</Grid>

				<Grid item xs={12} className={`${classes.margin}`}>
					<ActionCall body={"Everything you need in one place"} />
				</Grid>

				<Grid item xs={6}>
					<DashboardCard
						image={"work.svg"}
						title={"Get more done with less"}
						body={
							"Create rich and powerfull workflows in simple steps. With this information you can store what you are learning to consult it later"
						}
						action={"Check it out"}
					/>
				</Grid>
				<Grid item xs={6}>
					<DashboardCard
						image={"cards.svg"}
						title={"Get more productive with...."}
						body={
							"Create rich and powerfull workflows in simple steps. With this information you can store what you are learning to consult it later"
						}
						action={"Check it out"}
					/>
				</Grid>
				<Grid item xs={12} className={`${classes.margin}`}></Grid>
			</Grid>
		</div>
	);
};

export default Dashboard;
