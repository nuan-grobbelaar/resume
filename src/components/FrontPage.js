import "../style/style-main.css";

import { useRef } from "react";
import Container from "./ui/Container";
import Card from "./cards/Card";
import MediaCard from "./cards/MediaCard";
import useOnScreen from "../hooks/useOnScreen";

import me from "../resources/me.jpg";

export default function FrontPage(props) {
	const ref = useRef(null);
	const isVisible = useOnScreen(ref);

	console.log("FrontPage", "isVisible", isVisible);

	return (
		<Container innerRef={ref} index={props.index} positions={{}}>
			<MediaCard src={me} rotate={"2"} title={"Table Mountain"}></MediaCard>
		</Container>
	);
}
