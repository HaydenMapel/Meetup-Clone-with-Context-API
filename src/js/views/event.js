import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Event = () => {
	const { store, actions } = useContext(Context);
	let params = useParams();
	let event = actions.getEvent(params.ID);
	let date = new Date(event.meta_keys.day);
	return (
		<div>
			<div className="bg-dark text-white px-4 pb-1">
				<p>
					{store.months[date.getMonth()]} {date.getDate()}
				</p>
				<h2>{event.post_title}</h2>
				<Link
					className="h5 d-block"
					to={{
						pathname: "/group/" + event.meta_keys._groupId,
						group: actions.getGroup(event.meta_keys._groupId)
					}}>
					{actions.getGroup(event.meta_keys._groupId).post_title}
				</Link>
			</div>
			<div className="container">
				<div className="row my-3">
					<div className="col-8">
						<img className="rounded img-fluid" src="https://via.placeholder.com/800x500" alt="#" />
						<h5 className="my-2">Details</h5>
						<p>{event.post_content}</p>
					</div>
					<div className="col-4">
						<div className="row border p-2">
							<div className="col-3">
								<i className="fas fa-clock" />
							</div>
							<div className="col-9">
								<div>{date.toDateString()}</div>
								<div>{actions.toAMPM(event.meta_keys.time)}</div>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center justify-content-center">
					<Link to="/">
						<span className="btn btn-primary btn-lg" href="#" role="button">
							Back home
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};
