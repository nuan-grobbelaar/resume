import classes from "./Container.module.css";

export default function Container(props) {
	return (
		<div ref={props.innerRef} className={classes.container}>
			{props.children}
		</div>
	);
}
