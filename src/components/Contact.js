import { useEffect, useState, useMemo } from "react";
import Card from "./cards/Card";
import CardStack from "./cards/CardStack";
import DragContainer from "./ui/DragContainer";
import useOnScreen from "../hooks/useOnScreen";
import ContactCard from "./cards/ContactCard";

const Contact = (props) => {
	const [containerSize, setContainerSize] = useState(null);
	const [realStackPos, setRealStackPos] = useState(null);
	const [cards, setCards] = useState([]);
	const [positions, setPositions] = useState({
		stack: {
			xPos: 0.05,
			yPos: 0.6,
		},
	});

	useEffect(() => {
		setRealStackPos({
			xPos: containerSize ? positions.stack.xPos * containerSize.maxWidth : 0,
			yPos: containerSize
				? containerSize.maxHeight * props.index +
				  positions.stack.yPos * containerSize.maxHeight
				: 0,
		});
	}, [containerSize, positions]);

	console.log("real", realStackPos);

	const placeCard = (x, y, r) => {
		const id = cards.length;
		console.log("size", `${containerSize}`);
		positions[id] = {
			xPos: (realStackPos.xPos + x) / containerSize.maxWidth,
			yPos: (realStackPos.yPos + y) / containerSize.maxHeight - props.index,
		};
		console.log("pos", positions);
		setPositions(positions);
		setCards([...cards, <ContactCard id={`${id}`} rotate={r} placed />]);
	};

	return useMemo(() => {
		return (
			<DragContainer
				index={props.index}
				positions={positions}
				name="contact"
				setContainerSize={setContainerSize}
			>
				<CardStack id="stack" placeCard={placeCard} />
				{cards.map((card) => card)}
			</DragContainer>
		);
	}, [positions, cards, placeCard]);
};

export default Contact;
