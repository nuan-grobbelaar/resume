import { useState, useRef } from "react";
import Modal from "./Modal";
import Tag from "../ui/Tag";
import { CARD_SIZE } from "./Card";

import "../../style/styles.css";
import Button from "../ui/Button";
import { validate } from "schema-utils";

const FormField = (props) => {
	console.log("click", "prop", props);
	const click = (ref) => {
		console.log("click", ref);
		ref.current.focus();
	};

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
						<span className="ml-auto error-text">{props.error}</span>
					</div>
					{props.children}
				</div>
			</div>
		</div>
	);
};

const Input = (props) => {
	const ref = useRef(null);
	return (
		<FormField label={props.label} error={props.error}>
			<input
				ref={ref}
				type="text"
				value={props.value}
				onChange={(e) => props.onChange(e.target.value)}
			/>
		</FormField>
	);
};

const TextArea = (props) => {
	const ref = useRef(null);
	return (
		<FormField label={props.label} error={props.error}>
			<textarea
				ref={ref}
				spellCheck="false"
				rows="20"
				type="text"
				onChange={(e) => props.onChange(e.target.value)}
			/>
		</FormField>
	);
};

export default function ContactCard(props) {
	const [showModal, setShowModal] = useState(props.placed);
	document.body.style.overflow = "auto";

	console.log("rot", "card", props.rotate);

	const [nameValue, setNameValue] = useState("");
	const [emailValue, setEmailValue] = useState("");
	const [subjectValue, setSubjectValue] = useState("");
	const [messageValue, setMessageValue] = useState("");

	const [nameError, setNameError] = useState(null);
	const [emailError, setEmailError] = useState(null);
	const [subjectError, setSubjectError] = useState(null);
	const [messageError, setMessageError] = useState(null);

	const error = nameError || emailError || subjectError || messageError;

	const formFields = [
		{ value: nameValue, setError: setNameError },
		{ value: emailValue, setError: setEmailError },
		{ value: subjectValue, setError: setSubjectError },
		{ value: messageValue, setError: setMessageError },
	];

	const validate = () => {
		console.log("validate");
		let error = false;
		formFields.forEach((field) => {
			console.log(field.value);
			if (!field.value || field.value === "") {
				error = true;
				field.setError("required");
			} else {
				field.setError(null);
			}
		});

		if (!error) setShowModal(false);
	};

	const setValue = (value, setValue, setError) => {
		if (value && value !== "") {
			setError(null);
		}
		setValue(value);
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
			{messageValue && (
				<>
					<div className="card__content__card-body contact-card-message">
						<span>{messageValue.substring(0, 360) + "..."}</span>
					</div>
					<div className="contact-card-name">
						<span>{"- " + nameValue}</span>
					</div>
				</>
			)}
		</div>
	);

	const form = (
		<div className="contact-form">
			<Input
				label="Name"
				error={nameError}
				value={nameValue}
				onChange={(value) => setValue(value, setNameValue, setNameError)}
			/>

			<Input
				label="Email"
				error={emailError}
				value={emailValue}
				onChange={(value) => setValue(value, setEmailValue, setEmailError)}
			/>

			<Input
				label="Subject"
				error={subjectError}
				value={subjectValue}
				onChange={(value) => setValue(value, setSubjectValue, setSubjectError)}
			/>

			<TextArea
				label="Message"
				error={messageError}
				onChange={(value) => setValue(value, setMessageValue, setMessageError)}
			/>

			<div className="contact-form__action-bar">
				<Button
					className="form-button"
					color={"#00FF00"}
					rotate={0}
					onClick={() => validate()}
					selected={false}
					wasPressed={false}
					disabled={error}
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
