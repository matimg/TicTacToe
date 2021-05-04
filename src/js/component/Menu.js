import React from "react";
import Tablero from "./Tablero.js";
import PropTypes from "prop-types";

const Menu = props => {
	return (
		<div
			className="p-5"
			style={{ backgroundColor: "#4a453f", display: props.clase }}>
			<h6 className="text-white">
				<b>CHOOSE YOUR WEAPON</b>
			</h6>
			<input type="text" placeholder="Player 1 username" />
			<input type="text" placeholder="Player 2 username" />
			<br />
			<button
				className="btn mr-2 mt-2"
				style={{
					color: "#edd97d",
					backgroundColor: "#3e3732",
					width: "70px",
					height: "70px",
					fontSize: "40px"
				}}
				onClick={props.onClickX}>
				X
			</button>
			<button
				className="btn ml-2 mt-2"
				style={{
					color: "#3facd6",
					backgroundColor: "#3e3732",
					width: "70px",
					height: "70px",
					fontSize: "40px"
				}}
				onClick={props.onClickO}>
				O
			</button>
		</div>
	);
};

export default Menu;

Menu.propTypes = {
	clase: PropTypes.string,
	onClickX: PropTypes.func,
	onClickO: PropTypes.func
};
