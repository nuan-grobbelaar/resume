import { useEffect, useState } from "react";
import Modal from "./Modal";
import ExperienceArrow from "../icons/ExperienceArrow";

import "../../style/styles.css";
import Loading from "../icons/Loading";

const MediaCard = (props) => {
	const [showModal, setShowModal] = useState(false);
	const [showCard, setShowCard] = useState(false);

	const toggleInfo = () => {
		setShowModal(!showModal);
	};

	document.body.style.overflow = showModal ? "hidden" : "auto";

	useEffect(() => {
		const img = new Image();
		img.onload = () => {
			// when it finishes loading, update the component state
			setShowCard(true);
		};
		img.src = props.src;
	}, []);

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
			<div
				id={props.id}
				className={"card " + props.className}
				style={{ transform: "rotate(" + props.rotate + "deg)" }}
				onClick={toggleInfo}
			>
				{showCard ? (
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
				) : (
					<div className="card__loader">
						{/* <span>Image Loading</span> */}
						<Loading className="" />
					</div>
				)}
			</div>
		</>
	);
};

export default MediaCard;
