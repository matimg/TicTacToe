import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<h1 className="text-white">Tic Tac Toe in React.js</h1>
			<h2 className="text-success">x Wins!</h2>
			<div className="container w-25 pt-3">
				<div className="row">
					<div className="col-4 p-0">
						<div className="border-right border-bottom border-secondary">
							<p className="display-4">X</p>
						</div>
					</div>
					<div className="col-4 p-0">
						<div className="border-bottom border-secondary">
							<p className="display-4">X</p>
						</div>
					</div>
					<div className="col-4 p-0">
						<div className="border-left border-bottom border-secondary">
							<p className="display-4">X</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-4 p-0">
						<div className="border-right border-bottom border-secondary">
							<p className="display-4">X</p>
						</div>
					</div>
					<div className="col-4 p-0">
						<div className="border-bottom border-secondary">
							<p className="display-4">X</p>
						</div>
					</div>
					<div className="col-4 p-0">
						<div className="border-left border-bottom border-secondary">
							<p className="display-4">X</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-4 p-0">
						<div className="border-right border-secondary">
							<p className="display-4">X</p>
						</div>
					</div>
					<div className="col-4 p-0">
						<div>
							<p className="display-4">X</p>
						</div>
					</div>
					<div className="col-4 p-0">
						<div className="border-left border-secondary">
							<p className="display-4">X</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
