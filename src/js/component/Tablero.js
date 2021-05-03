import React, { useState } from "react";
import Celda from "./Celda.js";

const Tablero = () => {
	const [celdas, setCeldas] = useState(["", "", "", "", "", "", "", "", ""]);
	const [turno, setTurno] = useState(true);
	const status = "Next player: " + (turno ? "X" : "O");

	let marcar = celda => {
		const nuevasCeldas = celdas.slice();
		nuevasCeldas[celda] = turno ? "X" : "O";
		setCeldas(nuevasCeldas);
		setTurno(!turno);
	};
	return (
		<div className="text-center mt-5">
			<h1 className="text-white">Tic Tac Toe in React.js</h1>
			<h2 className="text-success">x Wins!</h2>
			<div className="container w-25 p-5">
				<div className="row">
					<Celda
						clase="border-right border-bottom border-secondary"
						value={celdas[0]}
						onClick={() => marcar(0)}
					/>
					<Celda
						clase="border-right border-bottom border-secondary"
						value={celdas[1]}
						onClick={() => marcar(1)}
					/>
					<Celda
						clase="border-bottom border-secondary"
						value={celdas[2]}
						onClick={() => marcar(2)}
					/>
				</div>
				<div className="row">
					<Celda
						clase="border-right border-bottom border-secondary"
						value={celdas[3]}
						onClick={() => marcar(3)}
					/>
					<Celda
						clase="border-right border-bottom border-secondary"
						value={celdas[4]}
						onClick={() => marcar(4)}
					/>
					<Celda
						clase="border-bottom border-secondary"
						value={celdas[5]}
						onClick={() => marcar(5)}
					/>
				</div>
				<div className="row">
					<Celda
						clase="border-right border-secondary"
						value={celdas[6]}
						onClick={() => marcar(6)}
					/>
					<Celda
						clase="border-right border-secondary"
						value={celdas[7]}
						onClick={() => marcar(7)}
					/>
					<Celda
						clase=""
						value={celdas[8]}
						onClick={() => marcar(8)}
					/>
				</div>
			</div>
		</div>
	);
};

export default Tablero;
