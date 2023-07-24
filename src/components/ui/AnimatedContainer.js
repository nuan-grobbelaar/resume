import "../../style/styles.css";

import { useSprings, animated } from "@react-spring/web";

export default function AnimatedContainer(props) {
	const to = (i) => ({
		x: 0,
		y: 0,
		scale: 1,
		rot: 0,
		delay: props.animation.delay,
	});
	const from = (_i) => ({
		x: props.animation.startingPos.x,
		rot: 0,
		scale: 1,
		y: props.animation.startingPos.y,
	});

	const [springProps] = useSprings(1, (i) => ({
		...to(i),
		from: from(i),
	}));

	return props.shouldAnimate ? (
		springProps.map(({ x, y }, i) => (
			<animated.div
				id={props.id}
				key={i}
				className={`animated-container ${props.className}`}
				style={{ x, y }}
			>
				{props.children}
			</animated.div>
		))
	) : (
		<div id={props.id} className={props.className}>
			{props.children}
		</div>
	);
}
