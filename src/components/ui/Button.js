import styles from "../../styles.less";

import Arrow from "../icons/Arrow";

import { useEffect, useState } from "react";
import { Typography, Box, CardMedia, Button } from "@mui/material";

const BrutalButton = (props) => {
	const [showArrow, setShowArrow] = useState(false);

	useEffect(() => {
		if (props.selected) {
			setShowArrow(true);
			setTimeout(() => {
				setShowArrow(false);
			}, 1000);
		}
	}, [props.selected]);

	return (
		<div className={styles["brutalButton"]}>
			<Box className={styles["brutalButton__container"]}>
				<Box style={{ transform: "rotate(" + props.rotate + "deg)" }}>
					<Button
						className={
							styles["brutalButton__container__button"] + " " + props.className
						}
						style={{ backgroundColor: props.color }}
						onClick={props.onClick}
					>
						<Typography
							className={styles["brutalButton__container__button__text"]}
						>
							{props.children}
						</Typography>
					</Button>
				</Box>
			</Box>
			{showArrow && (
				<Arrow className={styles["brutalButton__selected-arrow"]} />
			)}
		</div>
	);
};

export default BrutalButton;
