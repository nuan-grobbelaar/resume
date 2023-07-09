import { useState } from "react";
import Modal from "./Modal";

import styles from "../../styles.less";

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
					className={styles["card--modal"]}
					handleClose={setShowModal.bind(null, false)}
				>
					<div className={styles.card__content}>
						<div className={styles["card__content__card-body--media"]}></div>
					</div>
				</Modal>
			)}
			{!showModal && (
				<div
					className={styles.card + " " + props.className}
					style={{ transform: "rotate(" + props.rotate + "deg)" }}
					onClick={toggleInfo}
				>
					<div className={styles.card__content}>
						<div className={styles["card__content__card-body--media"]}>
							<img
								src={props.src}
								alt="Card Media"
								width="auto"
								height="100%"
							/>
						</div>
						<div className={styles["card__content__title-bar"]}>
							{props.title}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default MediaCard;
