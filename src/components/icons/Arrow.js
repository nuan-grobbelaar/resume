import "../../style/styles.css";

const Arrow = (props) => {
	return (
		<div className={props.className}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 500 600">
				<path
					id="arrow-icon-path"
					fill="none"
					stroke="#000"
					strokeMiterlimit="20"
					strokeWidth="18"
					d="M1 180C7.33333 226.667 37.6 292 108 180C142.667 129.667 216.4 61.2 234 190C248.333 266.667 296.4 379.2 374 216C377.667 173.667 382.8 89 374 89C363 89 311 92 312 97C312.8 101 353.667 34.6667 374 1L444 97C422.667 91.6667 380.4 82.6 382 89"
				/>
			</svg>
		</div>
	);
};

export default Arrow;
