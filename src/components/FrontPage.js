import { useRef } from "react";
import Container from "./ui/Container";
import Card from "./cards/Card";
import MediaCard from "./cards/MediaCard";
import useOnScreen from "../hooks/useOnScreen";

import me from "../resources/me.jpg";

export default function FrontPage(props) {
	const positions = {
		me: {
			xPos: 0.7,
			yPos: 0.3,
		},
	};

	return (
		<Container index={props.index} positions={positions} name="home">
			<MediaCard
				id="me"
				src={me}
				rotate={"2"}
				title={"Table Mountain"}
			></MediaCard>
		</Container>
	);
}
