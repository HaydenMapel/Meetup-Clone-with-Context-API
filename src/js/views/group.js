import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { EventCard } from "../component/eventCard.js";

export const Group = () => {
	const { store, actions } = useContext(Context);
	let params = useParams();
	let group = actions.getGroup(params.ID);

	let groupEvents = store.events.filter(event => {
		return event.meta_keys._groupId == group.ID;
	});
	let content = groupEvents.map((event, index) => <EventCard key={index} event={event} />);

	return (
		<div>
			<div className="bg-dark text-white p-4 row">
				<div className="col-6">
					<img className="rounded img-fluid" src="https://via.placeholder.com/800x500" alt="#" />
				</div>
				<div className="col-6">
					<h1>{group.post_title}</h1>
					<p className="text-secondary">Location</p>
					<p>Miami, FL</p>
				</div>
			</div>
			<div className="container">
				<p className="m-2">Next Events</p>
				<div>{content}</div>
				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		</div>
	);
};

{
	/* <h1 className="display-4">This will show the Group name: {actions.getGroup(params.ID).post_title}</h1>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link> */
}
