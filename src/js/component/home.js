import React, { useState } from "react";
import Tablero from "./Tablero.js";
import Menu from "./Menu.js";

//create your first component
export function Home() {
	let [displayMenu, setDisplayMenu] = useState("block");
	let [displayTablero, setDisplayTablero] = useState("none");
	let [turnoInicial, setTurnoInicial] = useState();

	let displayM = letra => {
		setDisplayMenu("none");
		setTurnoInicial(letra);
		setDisplayTablero("block");
		MostrarTablero();
	};

	const MostrarTablero = () => {
		return <Tablero clase={displayTablero} turnoInicial={turnoInicial} />;
	};

	return (
		<div className="text-center mt-5">
			<Menu
				clase={displayMenu}
				onClickX={() => displayM(true)}
				onClickO={() => displayM(false)}
			/>
			<MostrarTablero />
		</div>
	);
}
