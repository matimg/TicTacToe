import React, { useState } from "react";
import PropTypes from "prop-types";

const Celda = props => {
	//const [turno, setTurno] = useState("");
	return (
		<div className="col-4 p-0">
			<div
				className={"display-4 text-white pt-2 " + props.clase}
				style={{ height: "90px" }}
				onClick={props.onClick}>
				{props.value}
			</div>
		</div>
	);
};

export default Celda;

Celda.propTypes = {
	clase: PropTypes.string,
	value: PropTypes.string,
	onClick: PropTypes.func
};
