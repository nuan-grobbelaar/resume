import "../../styles.less";

const Tag = (props) => {
	return (
		<div className="tag">
			<div className="tag__container">
				<div style={{ transform: "rotate(" + props.rotate + "deg)" }}>
					<a className="tag__container__text">{props.children}</a>
				</div>
			</div>
		</div>
	);
};

export default Tag;
