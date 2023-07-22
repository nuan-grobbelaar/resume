import { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "./cards/Card";
import CardStack from "./cards/CardStack";
import DragContainer from "./ui/DragContainer";
import useOnScreen from "../hooks/useOnScreen";
import ContactCard from "./cards/ContactCard";
import { contactActions } from "../store/contact-slice.js";

const Contact = (props) => {
	const dispatch = useDispatch();
	const cardCount = useSelector((state) => state.contact.cardCount);
	const cardsX = useSelector((state) => state.contact.placedCards).reduce(
		(acc, obj) => {
			acc[obj.id] = { position: obj.position };
			return acc;
		},
		{}
	);
	console.log("Contact", cardsX);

	const [containerSize, setContainerSize] = useState(null);
	const [realStackPos, setRealStackPos] = useState(null);
	const [cards, setCards] = useState([]);

	useEffect(() => {
		setRealStackPos({
			xPos: containerSize
				? cardsX.stack.position.xPos * containerSize.maxWidth
				: 0,
			yPos: containerSize
				? containerSize.maxHeight * props.index +
				  cardsX.stack.position.yPos * containerSize.maxHeight
				: 0,
		});
	}, [containerSize, cardsX.stack.position]);

	console.log("real", realStackPos);

	const placeCard = (x, y, r) => {
		const id = cards.length;
		console.log("size", `${containerSize}`);
		const position = {
			xPos: (realStackPos.xPos + x) / containerSize.maxWidth,
			yPos: (realStackPos.yPos + y) / containerSize.maxHeight - props.index,
		};
		dispatch(contactActions.placeCard({ id, position }));
		setCards([...cards, <ContactCard id={`${id}`} rotate={r} placed />]);
	};

	return useMemo(() => {
		return (
			<DragContainer
				index={props.index}
				positions={cardsX}
				name="contact"
				setContainerSize={setContainerSize}
			>
				<CardStack id="stack" placeCard={placeCard} cardCount={cardCount} />
				{cards.map((card) => card)}
			</DragContainer>
		);
	}, [cardsX, cards, placeCard]);
};

export default Contact;
