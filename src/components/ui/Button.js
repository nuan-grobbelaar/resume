import "../../styles.css";

import Arrow from "../icons/Arrow";

import { useEffect, useState } from "react";
import { Typography, Box, CardMedia, Button } from "@mui/material";

const BrutalButton = (props) => {
	const [showArrow, setShowArrow] = useState(false);

	useEffect(() => {
		if (props.wasPressed) {
			setShowArrow(true);
			setTimeout(() => {
				setShowArrow(false);
				props.unsetPressed();
			}, 800);
		}
	}, [props.wasPressed]);

	return (
		<div className="brutalButton">
			<Box
				className={
					"brutalButton__container" + (props.selected ? " selected" : "")
				}
			>
				<Box style={{ transform: "rotate(" + props.rotate + "deg)" }}>
					<Button
						className={"brutalButton__container__button " + props.className}
						style={{ backgroundColor: props.color }}
						onClick={props.onClick}
					>
						<Typography className={"brutalButton__container__button__text"}>
							{props.children}
						</Typography>
					</Button>
				</Box>
			</Box>
			{showArrow && <Arrow className={"brutalButton__selected-arrow"} />}
		</div>
	);
};

export default BrutalButton;
