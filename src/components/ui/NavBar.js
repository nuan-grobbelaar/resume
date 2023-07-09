import classes from "./NavBar.module.css";
import Button from "./Button";

import { useSelector, useDispatch } from "react-redux";
import { navActions } from "../../store/nav.js";

import { Typography, Box, CardMedia } from "@mui/material";

const NavBar = (props) => {
	const dispatch = useDispatch();
	const selected = useSelector((state) => state.nav.selected);

	const setSelected = (section) => {
		dispatch(navActions.setPage(section));
	};

	return (
		<Box className={classes.nav}>
			<Box className={classes["name-label"]}>
				<Typography className={classes["alt-text"]} variant="h1">
					NUAN
				</Typography>
			</Box>
			{Object.values(props.sections).map((section) => {
				return (
					<Button
						className={classes.button}
						color={section.navButton.color}
						rotate={section.navButton.rotation}
						onClick={setSelected.bind(null, section.navButton.name)}
						selected={selected === section.navButton.name}
					>
						{section.navButton.name}
					</Button>
				);
			})}
		</Box>
	);
};

export default NavBar;
