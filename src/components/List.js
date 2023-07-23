import "../style/styles.css";

const List = (props) => {
	return (
		<div id={props.id} className="list">
			<h3>{props.title}</h3>
			<ul>
				{props.children.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default List;
