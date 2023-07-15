import { useState } from "react";
import Modal from "./Modal";
import Tag from "../ui/Tag";

import "../../styles.css";

export default function ContactCard(props) {
	const [showModal, setShowModal] = useState(props.placed);
	document.body.style.overflow = "auto";

	console.log("rot", "card", props.rotate);

	const cardContent = (props) => (
		<div className="card__content">
			<div className="card__content__card-body">
				<div className="card__content__card-body__heading">{props.heading}</div>
				{props.children}
			</div>
		</div>
	);

	const form = (
		<div className="contactForm">
			<div className="contactForm__container">
				<div className="shadow">
					<div className="contactForm__container__field">
						<span>Name:</span>
						<input type="text"></input>
					</div>
				</div>
			</div>

			<div className="contactForm__container">
				<div className="shadow">
					<div className="contactForm__container__field">
						<span>Email:</span>
						<input type="text"></input>
					</div>
				</div>
			</div>

			<div className="contactForm__container">
				<div className="shadow">
					<div className="contactForm__container__field">
						<span>Subject:</span>
						<input type="text"></input>
					</div>
				</div>
			</div>

			<div className="contactForm__container">
				<div className="shadow--textarea">
					<div className="contactForm__container__field">
						<span>Message:</span>
						<textarea rows="10" type="text"></textarea>
					</div>
				</div>
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
					{cardContent({ ...props, children: form })}
				</Modal>
			) : (
				<div
					className={
						"card " + (props.hasShadow ? "" : "no-shadow ") + props.className
					}
					style={{ transform: "rotate(" + props.rotate + "deg)" }}
				>
					{cardContent(props)}
				</div>
			)}
		</>
	);
}
