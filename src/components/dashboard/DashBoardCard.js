import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		backgroundColor: "#fcefee",
	},
	center: {
		margin: "0 auto",
	},
	media: {
		height: "20vh",
		objectFit: "contain",
	},
	title: {
		height: "5vh",
	},
	body: {
		height: "10vh",
	},
});

const DashboardCard = ({ image, title, body, action }) => {
	const classes = useStyles();

	return (
		<Card className={`${classes.root} DashboardCard ${classes.center}`}>
			<CardActionArea className={classes.center}>
				<CardMedia
					className={classes.media}
					image={image}
					title="Contemplative Reptile"
					component="img"
				/>
				<Typography
					variant="h3"
					component="h3"
					className={`card-typography ${classes.title} mt-3`}
				>
					{title}
				</Typography>
				<CardContent>
					<Typography
						variant="body1"
						component="p"
						className={`card-typography ${classes.body} mt-3`}
					>
						{body}
					</Typography>{" "}
				</CardContent>
			</CardActionArea>
			<CardActions>
				<button class="button">{action}</button>
			</CardActions>
		</Card>
	);
};

export default DashboardCard;
