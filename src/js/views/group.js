import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Group = () => {
	const { store, actions } = useContext(Context);
	let params = useParams();

	return <div />;
};
