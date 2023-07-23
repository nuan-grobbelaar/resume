import "../../style/styles.css";

const Loading = (props) => {
	return (
		<div id={props.id} className={props.className}>
			<svg
				width="149"
				height="149"
				viewBox="0 0 149 149"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					id="loading-icon-path"
					d="M70 146C57.3333 147.333 28.4 143 18 127C7.6 111 3.99998 91.3333 2.99998 82C0.666651 65.6667 9.99962 34.2177 26 21C49 2 77 -7 112 21C140 43.4 145.667 71 145 82C146.667 92 147 113.8 135 121C136.667 125.667 141 135.2 145 136C149 136.8 128 136.333 117 136C117 125.667 117 105.2 117 106C117 107 125 116 130 114"
					stroke="black"
					strokeWidth="5"
				/>
			</svg>
		</div>
	);
};

export default Loading;
