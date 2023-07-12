import styles from "../../styles.less";

import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { navActions } from "../../store/nav.js";
import useOnScreen from "../../hooks/useOnScreen";

function ContainerItem(props) {
	const position = props.position ? props.position : { xPos: 0, yPos: 0 };

	return (
		<div
			className={styles["container__item"]}
			style={{
				top: `${
					props.containerIndex * props.maxHeight +
					position.yPos * props.maxHeight
				}px`,
				left: `${position.xPos * props.maxWidth}px`,
			}}
		>
			{props.children}
		</div>
	);
}

export default function Container(props) {
	const ref = useRef(null);

	const maxWidth = ref.current?.offsetWidth;
	const maxHeight = ref.current?.offsetHeight;

	const visibilityRef = useRef(null);
	const isVisible = useOnScreen(visibilityRef);

	const dispatch = useDispatch();

	const setSelected = () => {
		dispatch(navActions.setSelected(props.name));
	};

	useEffect(() => {
		if (isVisible) setSelected();
	}, [isVisible]);

	const containerItems = [
		<ContainerItem
			position={{ xPos: 0.5, yPos: 0.5 }}
			containerIndex={props.index}
			maxHeight={maxHeight}
			maxWidth={maxWidth}
		>
			<div ref={visibilityRef}></div>
		</ContainerItem>,
	];

	containerItems.push(
		React.Children.map(props.children, (child) => {
			if (React.isValidElement(child)) {
				return (
					<ContainerItem
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

	return (
		<div ref={ref} className={styles.container}>
			{containerItems}
		</div>
	);
}
