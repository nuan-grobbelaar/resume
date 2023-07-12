import "../style/style-main.css";

import { useRef } from "react";
import Container from "./ui/Container";
import Card from "./cards/Card";
import MediaCard from "./cards/MediaCard";
import useOnScreen from "../hooks/useOnScreen";

import me from "../resources/me.jpg";

export default function FrontPage(props) {
	return (
		<Container index={props.index} positions={{}} name="home">
			<MediaCard src={me} rotate={"2"} title={"Table Mountain"}></MediaCard>
		</Container>
	);
}
