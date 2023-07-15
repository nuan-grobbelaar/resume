import { useState } from "react";
import Modal from "./Modal";
import Tag from "../ui/Tag";

import "../../styles.css";

export default function ContactCard(props) {
	const [showModal, setShowModal] = useState(props.placed);
	document.body.style.overflow = "auto";

	console.log("rot", "card", props.rotate);

	const cardContent = (
		<div className="card__content">
			<div className="card__content__card-body">
				<div className="card__content__card-body__heading">{props.heading}</div>
				{props.children}
			</div>
		</div>
	);

	return (
		<>
			{showModal ? (
				<Modal
					className="card--modal"
					handleClose={setShowModal.bind(null, false)}
				>
					{cardContent}
				</Modal>
			) : (
				<div
					className={
						"card " + (props.hasShadow ? "" : "no-shadow ") + props.className
					}
					style={{ transform: "rotate(" + props.rotate + "deg)" }}
				>
					{cardContent}
				</div>
			)}
		</>
	);
}
