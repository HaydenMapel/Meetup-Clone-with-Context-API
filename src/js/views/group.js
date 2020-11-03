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
		return event.meta_keys._group == group.ID;
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
				<h3 className="m-2 text-center">Next Events</h3>
				<div>{content}</div>
				<div className="text-center justify-content-center">
					<Link to="/">
						<button className="btn btn-primary btn-lg" href="#" role="button">
							Back home
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
