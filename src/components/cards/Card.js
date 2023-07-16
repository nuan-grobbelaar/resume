import { useState } from "react";
import Modal from "./Modal";
import Tag from "../ui/Tag";

import "../../styles.css";

export const CARD_SIZE = { width: 250, height: 300 };

const BrutalCard = (props) => {
	const [showModal, setShowModal] = useState(false);

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
				<div
					className={"card " + props.className}
					style={{ transform: "rotate(" + props.rotate + "deg)" }}
					onClick={toggleInfo}
				>
					{cardContent}
				</div>
			)}
		</>
	);
};

export default BrutalCard;
