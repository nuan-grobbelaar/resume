import { useRef } from "react";
import Container from "./ui/Container";
import Card from "./cards/Card";
import MediaCard from "./cards/MediaCard";
import useOnScreen from "../hooks/useOnScreen";

import me from "../resources/me.jpg";
import uganda from "../resources/uganda.jpg";

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
				animation={{ delay: 500, startingPos: { x: 2000, y: -250 } }}
			></MediaCard>

			<MediaCard
				id="uganda"
				src={uganda}
				rotate={"-1"}
				title={"Uganda"}
				animation={{ delay: 300, startingPos: { x: -2000, y: +250 } }}
			></MediaCard>
		</Container>
	);
}
