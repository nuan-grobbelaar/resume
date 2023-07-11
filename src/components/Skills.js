import { useRef } from "react";
import Container from "./ui/Container";
import useOnScreen from "../hooks/useOnScreen";

export default function Skills(props) {
	const ref = useRef(null);
	const isVisible = useOnScreen(ref);

	console.log("Skills", "isVisible", isVisible);

	return (
		<Container innerRef={ref} index={props.index} positions={{}}>
			{/* <Grid columns={4} rows={2}></Grid> */}
		</Container>
	);
}
