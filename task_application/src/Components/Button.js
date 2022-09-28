import React from "react";
import propTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
	return (
		<button
			onClick={onClick}
			style={{ backgroundColor: color }}
			className="btn"
		>
			{text}
		</button>
	);
};

Button.defaultProps = {
	color: "steelblue",
};

Button.propTypes = {
	title: propTypes.string,
	color: propTypes.string,
	OnClick: propTypes.func,
};

export default Button;
