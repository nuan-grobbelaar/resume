import { useState, useRef } from "react";
import Modal from "./Modal";
import Tag from "../ui/Tag";
import { CARD_SIZE } from "./Card";

import "../../styles.css";

export default function ContactCard(props) {
	const [showModal, setShowModal] = useState(props.placed);
	document.body.style.overflow = "auto";

	console.log("rot", "card", props.rotate);

	const nameRef = useRef();
	const emailRef = useRef();
	const subjectRef = useRef();
	const messageRef = useRef();

	const click = (ref) => {
		ref.current.focus();
	};

	const cardContent = (props) => (
		<div className="card__content">
			<div className="card__content__card-body">{props.children}</div>
		</div>
	);

	const formValues = (
		<div
			className="card__content flex-col-container"
			style={{ width: `${CARD_SIZE.width}px`, height: `${CARD_SIZE.height}px` }}
		>
			{messageRef.current?.value && (
				<>
					<div className="card__content__card-body contact-card-message">
						<span>{messageRef.current?.value.substring(0, 360) + "..."}</span>
					</div>
					<div className="contact-card-name">
						<span>{"- " + nameRef.current?.value}</span>
					</div>
				</>
			)}
		</div>
	);

	const FormField = (props) => {
		return (
			<div
				className="contactForm__container"
				onClick={() => click(props.children.ref)}
			>
				<div className="shadow">
					<div className="contactForm__container__field">
						<span>{props.label}</span>
						{props.children}
					</div>
				</div>
			</div>
		);
	};

	const form = (
		<div className="contactForm">
			<FormField label="Name">
				<input ref={nameRef} type="text" />
			</FormField>

			<FormField label="Email">
				<input ref={emailRef} type="text" />
			</FormField>

			<FormField label="Subject">
				<input ref={subjectRef} type="text" />
			</FormField>

			<FormField label="Message">
				<textarea ref={messageRef} spellcheck="false" rows="20" type="text" />
			</FormField>
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
					{formValues}
				</div>
			)}
		</>
	);
}
