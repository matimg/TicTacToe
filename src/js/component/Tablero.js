import React, { useState } from "react";
import Celda from "./Celda.js";

const Tablero = () => {
	let juego = ["", "", ""];
	let [turno, setTurno] = useState("X");
	let [valor, setValor] = useState("");
	const marcar = () => {
		if (valor == "") {
			setValor(turno);
			setTurno("O");
		}
	};
	return (
		<div className="text-center mt-5">
			<h1 className="text-white">Tic Tac Toe in React.js</h1>
			<h2 className="text-success">x Wins!</h2>
			<div className="container w-25 p-5">
				<div className="row">
					<Celda
						clase="border-right border-bottom border-secondary"
						id="1"
						value={valor}
						click={marcar}
					/>
					<Celda
						clase="border-right border-bottom border-secondary"
						id="2"
						value={valor}
						click={marcar}
					/>
					<Celda clase="border-bottom border-secondary" id="3" />
				</div>
				<div className="row">
					<Celda clase="border-right border-bottom border-secondary" />
					<Celda clase="border-right border-bottom border-secondary" />
					<Celda clase="border-bottom border-secondary" />
				</div>
				<div className="row">
					<Celda clase="border-right border-secondary" />
					<Celda clase="border-right border-secondary" />
					<Celda clase="" />
				</div>
			</div>
		</div>
	);
};

export default Tablero;
