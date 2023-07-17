import { useState } from "react";
import Modal from "./Modal";

import "../../style/styles.css";

const MediaCard = (props) => {
	const [showModal, setShowModal] = useState(false);

	const toggleInfo = () => {
		setShowModal(!showModal);
	};

	document.body.style.overflow = showModal ? "hidden" : "auto";

	return (
		<>
			{showModal && (
				<Modal
					className="card--modal"
					handleClose={setShowModal.bind(null, false)}
				>
					<div className="card__content">
						<div className="card__content__card-body--media"></div>
					</div>
				</Modal>
			)}
			{!showModal && (
				<div
					id={props.id}
					className={"card " + props.className}
					style={{ transform: "rotate(" + props.rotate + "deg)" }}
					onClick={toggleInfo}
				>
					<div className="card__content">
						<div className="card__content__card-body--media">
							<img
								src={props.src}
								alt="Card Media"
								width="auto"
								height="100%"
								draggable="false"
							/>
						</div>
						<div className="card__content__title-bar">{props.title}</div>
					</div>
				</div>
			)}
		</>
	);
};

export default MediaCard;
