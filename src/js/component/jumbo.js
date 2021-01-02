import React from "react";
import PropTypes from "prop-types";

const Jumbo = props => {
	const jumboStyle = {
		marginTop: "75px"
	};
	return (
		<div style={jumboStyle} className="jumbotron ml-5 mr-5">
			<h1 className="display-4">{props.name}</h1>
			<p className="lead">
				This is a simple hero unit, a simple jumbotron-style component
				for calling extra attention to featured content or information.
			</p>
			<hr className="my-4" />
			<p>
				It uses utility classes for typography and spacing to space
				content out within the larger container.
			</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				Learn more
			</a>
		</div>
	);
};

Jumbo.propTypes = {
	name: PropTypes.string
};

export default Jumbo;
