import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { EventCard } from "../component/eventCard.js";

export const Home = () => {
	const { store, actions } = useContext(Context);
	// no content safety
	let content = "";
	if (store.events.length == 0) {
		content = "nothing to show here";
	}
	// loop through events for name, date, time, and group
	else {
		content = store.events.map((event, index) => <EventCard key={index} event={event} />);
	}
	return (
		<div>
			<div className="bg-dark text-white text-center pb-1">
				<h1>Meetup Clone</h1>
				<h2>Created by Hayden Mapel</h2>
			</div>
			<div className="container">{content}</div>
		</div>
	);
};
