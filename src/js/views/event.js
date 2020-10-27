import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Event = () => {
	const { store, actions } = useContext(Context);
	let params = useParams();
	return (
		<div className="jumbotron">
			<h1 className="display-4">This will show the Event name: {store.events[params.ID].post_title}</h1>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

// Single.propTypes = {
// 	match: PropTypes.object
// };
