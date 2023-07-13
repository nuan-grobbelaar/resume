import styles from "../../styles.less";
import Button from "./Button";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { navActions } from "../../store/nav.js";

import { Typography, Box, CardMedia } from "@mui/material";

const NavBar = (props) => {
	const dispatch = useDispatch();
	const selected = useSelector((state) => state.nav.selected);
	const [wasPressed, setWasPressed] = useState("");

	const setSelected = (section) => {
		setWasPressed(section);
		setTimeout(() => {
			dispatch(navActions.setPage(section));
		}, 800);
	};

	return (
		<Box className={styles.navBar}>
			<Box className={styles["navBar__name-label"]}>
				<Typography className={styles.text} variant="h1">
					NUAN
				</Typography>
			</Box>
			{Object.values(props.sections).map((section) => {
				return (
					<Button
						color={section.navButton.color}
						rotate={section.navButton.rotation}
						onClick={setSelected.bind(null, section.navButton.name)}
						selected={selected === section.navButton.name}
						wasPressed={wasPressed === section.navButton.name}
						unsetPressed={() => setWasPressed("")}
					>
						{section.navButton.name}
					</Button>
				);
			})}
		</Box>
	);
};

export default NavBar;
