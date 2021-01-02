import React from "react";
import PropTypes from "prop-types";

const NavBar = props => {
	const buildMenu = props.menu.map((item, index) => {
		return (
			<li key={index} className="nav-item">
				<a className={item.class} href={item.url}>
					{item.label}
				</a>
			</li>
		);
	});
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
				<a className="navbar-brand ml-5" href="#">
					{props.brand}
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ml-auto mr-5">{buildMenu}</ul>
				</div>
			</nav>
		</div>
	);
};

NavBar.propTypes = {
	menu: PropTypes.array,
	brand: PropTypes.string
};
export default NavBar;
