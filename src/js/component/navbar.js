import React from "react";
import { Link } from "react-router-dom";
import { LoginButton } from "./modal.js";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark border-0">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">4Geeks</span>
			</Link>
			<div className="ml-auto">
				<LoginButton />
			</div>
		</nav>
	);
};
