import "../../style/styles.css";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { useDispatch } from "react-redux";
import { navActions } from "../../store/nav.js";
import useOnScreen from "../../hooks/useOnScreen";

function ContainerItem(props) {
	const position = props.position ? props.position : { xPos: 0, yPos: 0 };

	return (
		<div
			id={props.id}
			className="container__item"
			style={
				position && {
					top: `${
						props.containerIndex * props.maxHeight +
						position.yPos * props.maxHeight
					}px`,
					left: `${position.xPos * props.maxWidth}px`,
				}
			}
		>
			{props.children}
		</div>
	);
}

export default function Container(props) {
	const ref = useRef(null);

	const visibilityRef = useRef(null);
	const isVisible = useOnScreen(visibilityRef);

	const maxWidth = ref.current?.offsetWidth;
	const maxHeight = ref.current?.offsetHeight;

	useEffect(() => {
		if (props.setContainerSize) props.setContainerSize({ maxWidth, maxHeight });
	}, [maxHeight, maxWidth]);

	const dispatch = useDispatch();

	const setSelected = () => {
		dispatch(navActions.setSelected(props.name));
	};

	useEffect(() => {
		if (isVisible) setSelected();
	}, [isVisible]);

	const VisibilityElement = (
		<ContainerItem
			position={{ xPos: 0.5, yPos: 0.5 }}
			containerIndex={props.index}
			maxHeight={maxHeight}
			maxWidth={maxWidth}
		>
			<div ref={visibilityRef}></div>
		</ContainerItem>
	);

	const containerItems = useMemo(() => {
		const containerItems = [VisibilityElement];

		containerItems.push(
			React.Children.map(props.children, (child) => {
				console.log(props.name);
				if (React.isValidElement(child)) {
					return (
						<ContainerItem
							id={child.props.id}
							position={props.positions[child.props.id]}
							containerIndex={props.index}
							maxHeight={maxHeight}
							maxWidth={maxWidth}
						>
							{child}
						</ContainerItem>
					);
				}
			})
		);

		return containerItems;
	}, [props.positions, props.children, props.index, maxHeight, maxWidth]);

	return (
		<div ref={ref} className="container">
			{containerItems}
		</div>
	);
}
