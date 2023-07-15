import React, { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

import ContactCard from "./ContactCard";

import "../../styles.less";

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i) => ({
	x: 0,
	y: i * -4,
	scale: 1,
	rot: -5 + Math.random() * 10,
	delay: i * 100,
});
const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
	`rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

export default function CardStack({ placeCard }) {
	const [cardCount, setCardCount] = useState(5); // The set flags all the cards that are flicked out
	const [isDown, setIsDown] = useState(null);
	const [props, api] = useSprings(cardCount, (i) => ({
		...to(i),
		from: from(i),
	})); // Create a bunch of springs using the helpers above
	// Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
	const bind = useDrag(
		({
			args: [index],
			down,
			movement: [mx, my],
			direction: [xDir, yDir],
			velocity,
		}) => {
			const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
			console.log(xDir);
			const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
			if (!down) {
				placeCard(mx, my, mx / 100);
				setCardCount(cardCount - 1); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
			}
			api.start((i) => {
				if (index !== i) return; // We're only interested in changing spring-data for the current spring
				const x = down ? mx : 0;
				const y = down ? my : 0;
				if (down) setIsDown(index);
				else if (isDown === index) setIsDown(null);
				const rot = mx / 100; // How much the card tilts, flicking it harder makes it rotate faster
				const scale = down ? 1.1 : 1; // Active cards lift up a bit
				console.log("rot", rot);
				return {
					x,
					y,
					rot,
					scale,
					delay: undefined,
					config: { friction: 50, tension: down ? 800 : 500 },
				};
			});
		}
	);
	// Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
	return (
		<>
			{props.map(({ x, y, rot, scale }, i) => (
				<animated.div className="deck" key={i} style={{ x, y }}>
					{/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
					<animated.div
						{...bind(i)}
						className="prevent-select"
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
