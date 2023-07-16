import "../styles.css";

const List = (props) => {
	return (
		<div className="list">
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
