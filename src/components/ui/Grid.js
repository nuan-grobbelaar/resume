import classes from "./Grid.module.css";

export default function Grid(props) {
	return (
		<div
			className={classes.grid}
			style={{
				gridTemplateColumns: "1fr ".repeat(props.columns),
				gridTemplateRows: "1fr ".repeat(props.rows),
			}}
		>
			{props.children}
		</div>
	);
}
