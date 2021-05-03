import React, { useState, Fragment } from "react";
import Celda from "./Celda.js";

const Tablero = () => {
	const [celdas, setCeldas] = useState(["", "", "", "", "", "", "", "", ""]);
	const [turno, setTurno] = useState(true);

	let verificarGanador = tablero => {
		const combinaciones = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];
		for (let i = 0; i < combinaciones.length; i++) {
			const [a, b, c] = combinaciones[i];
			if (
				tablero[a] &&
				tablero[a] === tablero[b] &&
				tablero[a] === tablero[c]
			) {
				return tablero[a];
			}
		}
		return null;
	};

	let marcar = celda => {
		const nuevasCeldas = celdas.slice();
		if (verificarGanador(nuevasCeldas) || nuevasCeldas[celda]) {
			return;
		}
		nuevasCeldas[celda] = turno ? "X" : "O";
		setCeldas(nuevasCeldas);
		setTurno(!turno);
	};

	const limpiar = () => {
		setCeldas(["", "", "", "", "", "", "", "", ""]);
		setTurno(true);
	};

	const Estado = () => {
		const ganador = verificarGanador(celdas);
		let estado = "";
		if (ganador) {
			return (
				<Fragment>
					<h2 className="text-success">{ganador} Wins!</h2>
				</Fragment>
			);
		} else {
			return (
				<h2 className="text-white">It is {turno ? "X" : "O"} turn!</h2>
			);
		}
	};

	return (
		<div className="text-center mt-5">
			<h1 className="text-white">Tic Tac Toe in React.js</h1>
			<Estado />
			<button onClick={() => limpiar()}>Start Over</button>
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
