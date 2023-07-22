import "../../style/styles.css";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { useDispatch } from "react-redux";
import { navActions } from "../../store/nav-slice.js";
import useOnScreen from "../../hooks/useOnScreen";

export default function Container(props) {
	const ref = useRef(null);

	const visibilityRef = useRef(null);
	const isVisible = useOnScreen(visibilityRef);

	const dispatch = useDispatch();

	const setSelected = () => {
		dispatch(navActions.setSelected(props.name));
	};

	useEffect(() => {
		if (isVisible) setSelected();
	}, [isVisible]);

	return (
		<div ref={props.forwardRef ? props.forwardRef : ref} className="container">
			<div id={`${props.name}-visibility`} ref={visibilityRef}></div>
			{props.children}
		</div>
	);
}
