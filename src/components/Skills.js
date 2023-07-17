import { useRef } from "react";
import Container from "./ui/Container";
import Card from "./cards/Card";
import List from "./List";
import useOnScreen from "../hooks/useOnScreen";

export default function Skills(props) {
	return (
		<Container index={props.index} positions={{}} name="skills">
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
