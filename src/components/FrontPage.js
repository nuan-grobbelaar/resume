import "../style/style-main.css";
import classes from "./FrontPage.module.css";

import Container from "./ui/Container";
import Grid from "./ui/Grid";
import Card from "./cards/Card";
import MediaCard from "./cards/MediaCard";

import { Typography, Box, CardMedia } from "@mui/material";

import me from "../resources/me.jpg";

export default function FrontPage(props) {
	return (
		<Container>
			<Grid columns={4} rows={2}>
				{/* <Typography className={classes['main-text']} variant='h1'>GROBBELAAR</Typography> */}
				<MediaCard
					className={classes["item-1"]}
					src={me}
					rotate={"2"}
					title={"Table Mountain"}
				></MediaCard>
			</Grid>
		</Container>
	);
}
