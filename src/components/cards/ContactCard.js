import { useState, useRef } from "react";
import Modal from "./Modal";
import Tag from "../ui/Tag";
import { CARD_SIZE } from "./Card";

import "../../style/styles.css";
import Button from "../ui/Button";
import { validate } from "schema-utils";

export default function ContactCard(props) {
	const [showModal, setShowModal] = useState(props.placed);
	document.body.style.overflow = "auto";

	console.log("rot", "card", props.rotate);

	const nameRef = useRef();
	const emailRef = useRef();
	const subjectRef = useRef();
	const messageRef = useRef();

	const [nameError, setNameError] = useState(null);
	const [emailError, setEmailError] = useState(null);
	const [subjectError, setSubjectError] = useState(null);
	const [messageError, setMessageError] = useState(null);

	const formFields = [
		{ ref: nameRef, setError: setNameError },
		{ ref: emailRef, setError: setEmailError },
		{ ref: subjectRef, setError: setSubjectError },
		{ ref: messageRef, setError: setMessageError },
	];

	const validate = () => {
		console.log("validate");
		formFields.forEach((field) => {
			console.log(!!field.ref.current.value);
			if (!field.ref.current.value) field.setError("required");
		});
	};

	const click = (ref) => {
		ref.current.focus();
	};

	const modalContent = (props) => (
		<div className="card__content">
			<div className="card__content__card-body">{props.children}</div>
		</div>
	);

	const cardContent = (
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
				className="contact-form__container"
				onClick={() => click(props.children.ref)}
			>
				<div className="shadow">
					<div
						className={`contact-form__container__field ${
							props.error ? "error" : ""
						}`}
					>
						<div className="flex-row-container">
							<span>{props.label}</span>
							<span className="ml-auto">{props.error}</span>
						</div>
						{props.children}
					</div>
				</div>
			</div>
		);
	};

	const form = (
		<div className="contact-form">
			<FormField label="Name" error={nameError}>
				<input ref={nameRef} type="text" />
			</FormField>

			<FormField label="Email" error={emailError}>
				<input ref={emailRef} type="text" />
			</FormField>

			<FormField label="Subject" error={subjectError}>
				<input ref={subjectRef} type="text" />
			</FormField>

			<FormField label="Message" error={messageError}>
				<textarea ref={messageRef} spellCheck="false" rows="20" type="text" />
			</FormField>

			<div className="contact-form__action-bar">
				<Button
					className="form-button"
					color={"#00FF00"}
					rotate={0}
					onClick={() => validate()}
					selected={false}
					wasPressed={false}
				>
					Send
				</Button>
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
					{modalContent({ ...props, children: form })}
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
