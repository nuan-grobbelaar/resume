import { useState } from "react";
import Modal from "./Modal";
import Tag from "../ui/Tag";

import styles from "../../styles.less";

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
			className={
				styles.card__content +
				(showModal ? "" : " " + styles["flex-col-container"])
			}
		>
			<div
				className={styles["card__content__title-bar"]}
				style={{ backgroundColor: props.color }}
			>
				{props.title}
			</div>
			<div className={styles["card__content__card-body"]}>
				<div className={styles["card__content__card-body__heading"]}>
					{props.heading}
				</div>
				<div className={styles["card__content__card-body__accent-text"]}>
					{showModal ? props.accentText : null}
				</div>
				{showModal ? props.children : props.summary}
			</div>
			<div className={styles["card__content__card-body__tags"]}>{tags}</div>
		</div>
	);

	return (
		<>
			{showModal && (
				<Modal
					className={styles["card--modal"]}
					handleClose={setShowModal.bind(null, false)}
				>
					{cardContent}
				</Modal>
			)}
			{!showModal && (
				<div
					className={styles.card + " " + props.className}
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
