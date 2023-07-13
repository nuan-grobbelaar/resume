import { useRef } from "react";
import Container from "./ui/Container";
import Card from "./cards/Card";
import List from "./List";
import useOnScreen from "../hooks/useOnScreen";

export default function Skills(props) {
	const positions = {
		education: {
			xPos: 0.35,
			yPos: 0.2,
		},
		frameworks: {
			xPos: 0.06,
			yPos: 0.24,
		},
		languages: {
			xPos: 0.3,
			yPos: 0.6,
		},
		tools: {
			xPos: 0.7,
			yPos: 0.4,
		},
	};

	return (
		<Container index={props.index} positions={positions} name="skills">
			<Card
				id="education"
				color={"#E32BD1"}
				title={"Education"}
				heading={"Stellenbosch University"}
				body={"Grad. Dec 2018"}
				rotate={"2"}
			/>
			<List id="frameworks" title="Frameworks:">
				{["React", "Vue.js", "Node.js", "Pyramid"]}
			</List>
			<List id="languages" title="Languages:">
				{["Java", "Python", "Javascript", "Typescript", "SQL", "HTML", "CSS"]}
			</List>
			<List id="tools" title="Tools:">
				{["Jenkins", "Git", "Docker", "Kubernetes"]}
			</List>
		</Container>
	);
}
