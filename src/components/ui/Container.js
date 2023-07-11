import { maxHeight } from "@mui/system";
import React, { useEffect } from "react";
import styles from "../../styles.less";

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
	const maxWidth = props.innerRef.current?.offsetWidth;
	const maxHeight = props.innerRef.current?.offsetHeight;

	console.log("width", maxWidth, maxHeight);

	const containerItems = React.Children.map(props.children, (child) => {
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
	});

	return (
		<div ref={props.innerRef} className={styles.container}>
			{containerItems}
		</div>
	);
}
