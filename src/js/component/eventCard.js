import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const EventCard = props => {
	const { store, actions } = useContext(Context);
	let date = new Date(props.event.meta_keys.day);
	return (
		<div className="card my-4">
			<h2 className="card-header">
				{store.months[date.getMonth()]} {date.getDate()}
			</h2>
			<div className="card-body">
				<div className="row">
					<h3 className="col-4">{actions.toAMPM(props.event.meta_keys.time)}</h3>
					<div className="col-8">
						<Link
							className="d-block h4"
							to={{
								pathname: "/event/" + props.event.ID,
								event: props.event
							}}>
							{props.event.post_title}
						</Link>
						<Link
							className="d-block"
							to={{
								pathname: "/group/" + props.event.meta_keys._groupId,
								group: actions.getGroup(props.event.meta_keys._groupId)
							}}>
							{actions.getGroup(props.event.meta_keys._groupId).post_title}
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
EventCard.propTypes = {
	event: PropTypes.object
};
