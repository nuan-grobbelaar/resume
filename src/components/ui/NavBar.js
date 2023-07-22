import "../../style/styles.css";
import Button from "./Button";
import { useSprings, animated } from "@react-spring/web";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { navActions } from "../../store/nav-slice.js";

const to = (i) => ({
	x: 0,
	y: 0,
	scale: 1,
	rot: 0,
	delay: i * 100,
});
const from = (_i) => ({
	x: 500,
	rot: 0,
	scale: 1,
	y: -200,
});

const NavBar = (props) => {
	const dispatch = useDispatch();
	const selected = useSelector((state) => state.nav.selected);
	const [wasPressed, setWasPressed] = useState("");

	const [springProps] = useSprings(4, (i) => ({
		...to(i),
		from: from(i),
	}));

	const setSelected = (section) => {
		setWasPressed(section);
		setTimeout(() => {
			dispatch(navActions.setPage(section));
		}, 800);
	};

	return (
		<div className="navBar">
			<div className="name-label">
				<h1 className="text">NUAN</h1>
			</div>
			{springProps.map(({ x, y }, i) => {
				const section = Object.values(props.sections)[i];
				return (
					<animated.div key={i} style={{ x, y }}>
						<Button
							id={`${section.navButton.name}-button`}
							color={section.navButton.color}
							rotate={section.navButton.rotation}
							onClick={setSelected.bind(null, section.navButton.name)}
							selected={selected === section.navButton.name}
							wasPressed={wasPressed === section.navButton.name}
							unsetPressed={() => setWasPressed("")}
						>
							{section.navButton.name}
						</Button>
					</animated.div>
				);
			})}
		</div>
	);
};

export default NavBar;
