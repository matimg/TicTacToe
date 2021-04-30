import React, { useState } from "react";
import Tablero from "./Tablero.js";
import Menu from "./Menu.js";

//create your first component
export function Home() {
	let juego = ["", "", "", "", "", "", "", "", ""];
	let [turnoActual, setTurnoActual] = useState("");

	return (
		<div className="text-center mt-5">
			<Tablero />
		</div>
	);
}
