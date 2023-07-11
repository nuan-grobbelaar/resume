import classes from "./AboutMe.module.css";

import { useRef } from "react";
import Grid from "./ui/Grid";
import Card from "./cards/Card";
import Container from "./ui/Container";
import useOnScreen from "../hooks/useOnScreen";

const AboutMe = (props) => {
	const ref = useRef(null);
	const isVisible = useOnScreen(ref);

	console.log("About", "isVisible", isVisible);

	return (
		<Container innerRef={ref}>
			<Grid columns={4} rows={2}>
				<Card
					className={classes.card}
					color={"#E32BD1"}
					title={"Education"}
					heading={"Stellenbosch University"}
					body={"Grad. Dec 2018"}
					rotate={"2"}
				/>
			</Grid>
		</Container>
	);
};

export default AboutMe;
