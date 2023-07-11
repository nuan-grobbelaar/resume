import styles from "../../styles.less";

const Tag = (props) => {
	return (
		<div className={styles["tag"]}>
			<div className={styles["tag__container"]}>
				<div style={{ transform: "rotate(" + props.rotate + "deg)" }}>
					<a className={styles["tag__container__text"]}>{props.children}</a>
				</div>
			</div>
		</div>
	);
};

export default Tag;
