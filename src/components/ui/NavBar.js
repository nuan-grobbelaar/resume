import "../../style/styles.css";
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
		<div className="navBar">
			{Object.values(props.sections)
				.filter((section) => section.navButton)
				.map((section) => {
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
		</div>
	);
};

export default NavBar;
