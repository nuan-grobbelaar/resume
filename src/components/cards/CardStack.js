import React, { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

import ContactCard from "./ContactCard";

import "../../styles.css";

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i) => ({
	x: i * -4,
	y: i * -4,
	scale: 1,
	rot: 0,
	delay: i * 100,
});
const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
const trans = (r, s) =>
	`rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

export default function CardStack({ placeCard }) {
	const [cardCount, setCardCount] = useState(5);
	const [isDown, setIsDown] = useState(null);
	const [props, api] = useSprings(cardCount, (i) => ({
		...to(i),
		from: from(i),
	}));

	const bind = useDrag(({ args: [index], down, movement: [mx, my] }) => {
		if (!down) {
			placeCard(mx, my, mx / 100);
			setCardCount(cardCount - 1);
		}
		api.start((i) => {
			if (index !== i) return;

			const x = down ? mx : 0;
			const y = down ? my : 0;

			if (down) setIsDown(index);
			else if (isDown === index) setIsDown(null);

			const rot = mx / 100;
			const scale = down ? 1.1 : 1;

			return {
				x,
				y,
				rot,
				scale,
				delay: undefined,
				config: { friction: 50, tension: down ? 800 : 500 },
			};
		});
	});

	return (
		<>
			{props.map(({ x, y, rot, scale }, i) => (
				<animated.div className="deck-card" key={i} style={{ x, y }}>
					<animated.div
						{...bind(i)}
						style={{
							transform: interpolate([rot, scale], trans),
						}}
					>
						<ContactCard hasShadow={i === isDown}></ContactCard>
					</animated.div>
				</animated.div>
			))}
		</>
	);
}
