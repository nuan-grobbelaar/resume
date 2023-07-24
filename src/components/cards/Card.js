import { useState } from "react";

import Modal from "./Modal";
import Tag from "../ui/Tag";

import "../../style/styles.css";
import AnimatedContainer from "../ui/AnimatedContainer";

export const CARD_SIZE = { width: 250, height: 300 };

export default function Card(props) {
	const [showModal, setShowModal] = useState(false);
	const [shouldAnimate, setShouldAnimate] = useState(true);

	const toggleInfo = () => {
		setShowModal(!showModal);
	};

	document.body.style.overflow = showModal ? "hidden" : "auto";

	const tags = props.tags?.map((tag) => {
		return (
			<Tag key={tag} color={"#F79900"}>
				{tag}
			</Tag>
		);
	});

	const closeModal = () => {
		setShouldAnimate(false);
		setShowModal(false);
	};

	const cardContent = (
		<div
			className={"card__content" + (showModal ? "" : " flex-col-container")}
			style={
				!showModal
					? {
							width: `${CARD_SIZE.width}px`,
							height: `${CARD_SIZE.height}px`,
					  }
					: {}
			}
			data-active={true}
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
				<Modal className={"card--modal"} handleClose={closeModal}>
					{cardContent}
				</Modal>
			) : (
				<>
					<AnimatedContainer
						id={props.id}
						animation={props.animation}
						shouldAnimate={shouldAnimate}
					>
						<div
							className={"card " + props.className}
							style={{ transform: "rotate(" + props.rotate + "deg)" }}
							onClick={toggleInfo}
							data-active={true}
						>
							{cardContent}
						</div>
					</AnimatedContainer>
				</>
			)}
		</>
	);
}
