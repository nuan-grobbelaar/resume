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
	const cards = useSelector((state) => state.contact.placedCards).reduce(
		(acc, obj) => {
			acc[obj.id] = { position: obj.position };
			return acc;
		},
		{}
	);

	const [containerSize, setContainerSize] = useState(null);
	const [realStackPos, setRealStackPos] = useState(null);

	useEffect(() => {
		setRealStackPos({
			xPos: containerSize
				? cards.stack.position.xPos * containerSize.maxWidth
				: 0,
			yPos: containerSize
				? containerSize.maxHeight * props.index +
				  cards.stack.position.yPos * containerSize.maxHeight
				: 0,
		});
	}, [containerSize, cards.stack.position]);

	const placeCard = (x, y, r) => {
		const id = Object.keys(cards).length;
		const position = {
			xPos: (realStackPos.xPos + x) / containerSize.maxWidth,
			yPos: (realStackPos.yPos + y) / containerSize.maxHeight - props.index,
			rotation: r,
		};
		dispatch(contactActions.placeCard({ id, position }));
	};

	return useMemo(() => {
		return (
			<DragContainer
				index={props.index}
				positions={cards}
				name="contact"
				setContainerSize={setContainerSize}
			>
				<CardStack id="stack" placeCard={placeCard} cardCount={cardCount} />
				{Object.entries(cards)
					.filter((card) => card[0] != "stack")
					.map((card) => (
						<ContactCard
							key={card[0]}
							id={card[0]}
							rotate={card[1].position.rotation}
							formData={card[1].formData}
							placed
						/>
					))}
			</DragContainer>
		);
	}, [cards, placeCard]);
};

export default Contact;
