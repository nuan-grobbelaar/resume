import classes from "./AboutMe.module.css";

import Grid from "./ui/Grid";
import Card from "./cards/Card";
import Container from "./ui/Container";

const AboutMe = (props) => {
	return (
		<Container>
			<Grid columns={4} rows={2}>
				<Card
					className={classes.card}
					color={"#E32BD1"}
					title={"Education"}
					heading={"Stellenbosch University"}
					body={"Grad. Dec 2018"}
				/>
			</Grid>
		</Container>
	);
};

export default AboutMe;
