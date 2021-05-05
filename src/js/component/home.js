import React, { useState } from "react";
import Tablero from "./Tablero.js";

//create your first component
export function Home() {
	let [displayMenu, setDisplayMenu] = useState("block");
	let [displayTablero, setDisplayTablero] = useState("none");
	let [turnoInicial, setTurnoInicial] = useState();
	let [player1, setPlayer1] = useState("");
	let [player2, setPlayer2] = useState("");

	const MostrarTablero = turno => {
		setDisplayMenu("none");
		setDisplayTablero("block");
		setTurnoInicial(turno);
		IniciarTablero();
	};

	const IniciarTablero = () => {
		return (
			<Tablero
				clase={displayTablero}
				turnoInicial={turnoInicial}
				player1={player1}
				player2={player2}
			/>
		);
	};

	return (
		<div className="text-center mt-5">
			<h1 className="text-white">Tic Tac Toe in React.js</h1>
			<h3 className="text-white" style={{ display: displayMenu }}>
				Pic A Weapon
			</h3>
			<div
				className="p-5 mt-5"
				style={{
					backgroundColor: "#4a453f",
					display: displayMenu
				}}>
				<h6 className="text-white">
					<b>CHOOSE YOUR WEAPON</b>
				</h6>
				<input
					type="text"
					placeholder="Player 1 username"
					value={player1}
					onChange={() => setPlayer1(event.target.value)}
				/>
				<input
					type="text"
					placeholder="Player 2 username"
					onChange={() => setPlayer2(event.target.value)}
				/>
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
					onClick={() => MostrarTablero(true)}>
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
					onClick={() => MostrarTablero(false)}>
					O
				</button>
			</div>
			<IniciarTablero />
		</div>
	);
}
