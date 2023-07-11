import styles from "../../styles.less";

export default function Container(props) {
	return (
		<div ref={props.innerRef} className={styles.container}>
			{props.children}
		</div>
	);
}
