import styles from "../styles.less";

const List = (props) => {
	return (
		<div className={styles.list}>
			<h3>{props.title}</h3>
			<ul>
				{props.children.map((item) => (
					<li>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default List;
