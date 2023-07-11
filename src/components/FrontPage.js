import "../style/style-main.css";
import classes from "./FrontPage.module.css";

import { useRef } from "react";
import Container from "./ui/Container";
import Grid from "./ui/Grid";
import Card from "./cards/Card";
import MediaCard from "./cards/MediaCard";
import useOnScreen from "../hooks/useOnScreen";

import { Typography, Box, CardMedia } from "@mui/material";

import me from "../resources/me.jpg";

export default function FrontPage(props) {
	const ref = useRef(null);
	const isVisible = useOnScreen(ref);

	console.log("FrontPage", "isVisible", isVisible);

	return (
		<Container innerRef={ref}>
			<Grid columns={4} rows={2}>
				{/* <Typography className={classes['main-text']} variant='h1'>GROBBELAAR</Typography> */}
				<MediaCard
					className={classes["item-1"]}
					src={me}
					rotate={"2"}
					title={"Table Mountain"}
				></MediaCard>

				<div className={classes["item-2"]}>
					<span>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</span>
					<span>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</span>
				</div>
			</Grid>
		</Container>
	);
}
