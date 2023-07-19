import { useEffect, useState } from "react";
import Modal from "./Modal";
import { useSprings, animated } from "@react-spring/web";

import "../../style/styles.css";
import Loading from "../icons/Loading";

const MediaCard = (props) => {
	const [showModal, setShowModal] = useState(false);
	const [showCard, setShowCard] = useState(false);

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
			{showCard ? (
				springProps.map(({ x, y }, i) => (
					<animated.div
						id={props.id}
						key={i}
						className={"card " + props.className}
						style={{ transform: "rotate(" + props.rotate + "deg)", x, y }}
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
					</animated.div>
				))
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
