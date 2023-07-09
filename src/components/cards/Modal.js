import styles from "../../styles.less";

const Modal = (props) => {
	return (
		<>
			<div className={styles.overlay} onClick={props.handleClose}></div>
			<div
				className={props.className}
				style={{ transform: "rotate(" + props.rotate + "deg)" }}
			>
				{props.children}
			</div>
		</>
	);
};

export default Modal;
