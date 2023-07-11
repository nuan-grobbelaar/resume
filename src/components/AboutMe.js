import { useRef } from "react";
import Card from "./cards/Card";
import Container from "./ui/Container";
import useOnScreen from "../hooks/useOnScreen";

const AboutMe = (props) => {
	const ref = useRef(null);
	const isVisible = useOnScreen(ref);

	console.log("About", "isVisible", isVisible);

	return (
		<Container innerRef={ref} index={props.index} positions={{}}>
			<Card
				color={"#E32BD1"}
				title={"Education"}
				heading={"Stellenbosch University"}
				body={"Grad. Dec 2018"}
				rotate={"2"}
			/>
		</Container>
	);
};

export default AboutMe;
