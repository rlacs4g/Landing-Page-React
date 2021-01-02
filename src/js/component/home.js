import React from "react";
//import .js files
import NavBar from "./navbar.js";
import Jumbo from "./jumbo.js";
import Card from "./card.js";
import Footer from "./footer.js";

//create your first component
export function Home() {
	const menu = [
		{ label: "Home ", url: "/", class: "nav-link active" },
		{ label: "About ", url: "#", class: "nav-link" },
		{ label: "Services ", url: "/", class: "nav-link" },
		{ label: "Contact ", url: "#", class: "nav-link" }
	];

	return (
		<div>
			<div>
				<NavBar menu={menu} brand="Start BootStrap" />
			</div>
			<div className="mt-5">
				<Jumbo name="Hello" />
			</div>
			<div>
				<Card />
			</div>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}
