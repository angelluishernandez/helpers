import React from "react";
import {
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Avatar,
} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";

import { connect } from "react-redux";
import { fetchHelpers } from "../../../redux/actions/helpers.actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const SideBarItems = ({ helpers, fetchHelpers }) => {
	console.log(helpers);
	//
	useEffect(() => {
		fetchHelpers();
		// eslint-disable-next-line
	}, []);

	return (
		<List>
			{helpers.map((helper, index) => {
				return (
					<ListItem key={index}>
						<ListItemAvatar>
							<Avatar>
								<FolderIcon />
							</Avatar>
						</ListItemAvatar>
						<Link to={`/helpers/${helper.id}`}>
							<ListItemText primary={helper.title} />
						</Link>
					</ListItem>
				);
			})}
		</List>
	);
};

const mapStateToProps = (state) => ({
	helpers: state.helpers,
});

const mapDispatchToProps = (dispatch) => ({
	fetchHelpers: () => dispatch(fetchHelpers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBarItems);
