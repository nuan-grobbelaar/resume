import { useRef } from "react";
import Container from "./ui/Container";
import List from "./List";
import useOnScreen from "../hooks/useOnScreen";

export default function Skills(props) {
	const positions = {
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
