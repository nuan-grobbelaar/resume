import "../../style/styles.css";

import React, { useEffect, useRef, useMemo } from "react";
import Container from "./Container";

function ContainerItem(props) {
	console.log("ContainerItem", "props", props);
	const position = props.position ? props.position : { xPos: 0, yPos: 0 };

	return (
		<div
			id={props.id}
			className="container__item"
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

export default function DragContainer(props) {
	const ref = useRef(null);

	const maxWidth = ref.current?.offsetWidth;
	const maxHeight = ref.current?.offsetHeight;

	useEffect(() => {
		if (props.setContainerSize) props.setContainerSize({ maxWidth, maxHeight });
	}, [maxHeight, maxWidth]);

	const containerItems = useMemo(() => {
		const containerItems = [];

		containerItems.push(
			React.Children.map(props.children, (child) => {
				console.log(props.name);
				if (React.isValidElement(child)) {
					return (
						<ContainerItem
							id={child.props.id}
							position={props.positions[child.props.id]?.position}
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
		<Container forwardRef={ref} name={props.name}>
			{containerItems}
		</Container>
	);
}
