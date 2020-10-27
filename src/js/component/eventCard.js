import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const EventCard = props => {
	const { store, actions } = useContext(Context);
	let date = new Date(props.event.meta_keys.day);
	console.log(date);
	return (
		<div className="card my-4">
			<div className="card-header">{date.toDateString()}</div>
			<div className="card-body">
				<div className="row">
					<div className="col-4">{props.event.meta_keys.time}</div>
					<div className="col-8">
						<div>{props.event.post_title}</div>
						<div>{actions.getGroupName(props.event.meta_keys._groupId)}</div>
					</div>
				</div>
			</div>
		</div>
	);
};
EventCard.propTypes = {
	event: PropTypes.object
};
