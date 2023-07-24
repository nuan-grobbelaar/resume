import { useEffect, useState } from "react";
import Modal from "./Modal";
import { useSprings, animated } from "@react-spring/web";

import "../../style/styles.css";
import Loading from "../icons/Loading";
import AnimatedContainer from "../ui/AnimatedContainer";

const MediaCard = (props) => {
	const [showModal, setShowModal] = useState(false);
	const [showCard, setShowCard] = useState(false);
	const [shouldAnimate, setShouldAnimate] = useState(true);

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

	useEffect(() => {
		const img = new Image();
		img.onload = () => {
			setShowCard(true);
		};
		img.src = props.src;
	}, []);

	const closeModal = () => {
		setShouldAnimate(false);
		setShowModal(false);
	};

	return (
		<>
			{showModal ? (
				<Modal className="card--modal" handleClose={closeModal}>
					<div className="card__content">
						<div className="card__content__card-body--media"></div>
					</div>
				</Modal>
			) : showCard ? (
				<AnimatedContainer
					id={props.id}
					animation={props.animation}
					className={props.className}
					shouldAnimate={shouldAnimate}
				>
					<div className="card" onClick={toggleInfo} data-active={true}>
						<div className="card__content" data-active={true}>
							<div className="card__content__card-body--media">
								<img
									src={props.src}
									alt="Card Media"
									width="auto"
									height="100%"
									draggable="false"
								/>
							</div>
							<div className="card__content__title-bar card__content__title-bar--media-card">
								{props.title}
							</div>
						</div>
					</div>
				</AnimatedContainer>
			) : (
				<div id={props.id} className={"card " + props.className}>
					<div className="card__loader">
						<Loading className="" />
					</div>
				</div>
			)}
		</>
	);
};

export default MediaCard;
