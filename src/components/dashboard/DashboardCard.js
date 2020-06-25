import React from "react";

// Material UI components

import { makeStyles } from "@material-ui/core/styles";
import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
	Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { history } from "../../App";

// Material UI styles hook

const useStyles = makeStyles({
	root: {
		width: 340,
	},
	body: {
		height: "80%",
	},
	media: {
		height: 140,
	},
});

// I just want to show the clicking effect before taking to the url
// It is quite nice effect

const goToHelperDetails = (id) => {
	history.push(`/helpers/${id}`);
};

const DashboardCard = ({ helper }) => {
	const { description, id, image, title } = helper;

	const classes = useStyles();
	return (
		<Card className={`m-2 ${classes.root}`}>
			<CardActionArea
				className={classes.body}
				onClick={() => goToHelperDetails(id)}
			>
				<CardMedia className={classes.media} image={image} title={title} />
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>

			<CardActions>
				<Button size="small" color="primary">
					<Link to={`/helpers/${id}`}>Helper details</Link>
				</Button>
			</CardActions>
		</Card>
	);
};

export default DashboardCard;
