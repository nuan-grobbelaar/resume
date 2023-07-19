import { useState } from "react";
import { useSprings, animated } from "@react-spring/web";

import Modal from "./Modal";
import Tag from "../ui/Tag";

import "../../style/styles.css";

export const CARD_SIZE = { width: 250, height: 300 };

const BrutalCard = (props) => {
	const [showModal, setShowModal] = useState(false);

	const to = (i) => ({
		x: 0,
		y: 0,
		scale: 1,
		rot: 0,
		delay: props.animation.delay,
	});
	const from = (_i) => ({
		x: props.animation.startingPos.x,
		rot: 0,
		scale: 1,
		y: props.animation.startingPos.y,
	});

	const [springProps] = useSprings(1, (i) => ({
		...to(i),
		from: from(i),
	}));

	const toggleInfo = () => {
		setShowModal(!showModal);
	};

	document.body.style.overflow = showModal ? "hidden" : "auto";

	const tags = props.tags?.map((tag) => {
		return <Tag color={"#F79900"}>{tag}</Tag>;
	});

	console.log(tags);

	const cardContent = (
		<div
			className={"card__content" + (showModal ? "" : " flex-col-container")}
			style={{ width: `${CARD_SIZE.width}px`, height: `${CARD_SIZE.height}px` }}
		>
			<div
				className="card__content__title-bar"
				style={{ backgroundColor: props.color }}
			>
				{props.title}
			</div>
			<div className="card__content__card-body">
				<div className="card__content__card-body__heading">{props.heading}</div>
				<div className="card__content__card-body__accent-text">
					{showModal ? props.accentText : null}
				</div>
				{showModal ? props.children : props.summary}
			</div>
			<div className="card__content__card-body__tags">{tags}</div>
		</div>
	);

	return (
		<>
			{showModal ? (
				<Modal
					className={"card--modal"}
					handleClose={setShowModal.bind(null, false)}
				>
					{cardContent}
				</Modal>
			) : (
				<>
					{springProps.map(({ x, y }, i) => (
						<animated.div key={i} style={{ x, y }}>
							<div
								id={props.id}
								className={"card " + props.className}
								style={{ transform: "rotate(" + props.rotate + "deg)" }}
								onClick={toggleInfo}
							>
								{cardContent}
							</div>
						</animated.div>
					))}
				</>
			)}
		</>
	);
};

export default BrutalCard;
