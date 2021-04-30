import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<div className="p-5" style={{ backgroundColor: "#4a453f" }}>
				<h6 className="text-white">
					<b>CHOOSE YOUR WEAPON</b>
				</h6>
				<input type="text" placeholder="Player 1 username" />
				<input type="text" placeholder="Player 2 username" />
				<br />
				<button
					className="btn mr-2 mt-2 display-4"
					style={{
						color: "#edd97d",
						backgroundColor: "#3e3732",
						width: "70px",
						height: "70px"
					}}>
					X
				</button>
				<button
					className="btn ml-2 mt-2"
					style={{
						color: "#3facd6",
						backgroundColor: "#3e3732",
						width: "70px",
						height: "70px"
					}}>
					O
				</button>
			</div>
		</div>
	);
}
