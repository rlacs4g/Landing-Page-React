import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	const cardStyles = {
		marginBottom: "20px",
		marginLeft: "30px",
		marginRight: "30px"
	};
	const centerButton = {
		display: "flex",
		justifyContent: "center"
	};

	return (
		<div style={cardStyles} className="card-deck">
			<div className="card">
				<img
					className="card-img-top"
					src="https://via.placeholder.com/150"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title text-center">Card title</h5>
					<p className="card-text text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor
					</p>
				</div>
				<div className="card-footer">
					<button
						className="btn btn-primary btn-sm mx-auto"
						style={centerButton}
						href="#"
						role="button">
						Find Out More!
					</button>
				</div>
			</div>
			<div className="card">
				<img
					className="card-img-top"
					src="https://via.placeholder.com/150"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title text-center">Card title</h5>
					<p className="card-text text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor
					</p>
				</div>
				<div className="card-footer">
					<button
						className="btn btn-primary btn-sm mx-auto"
						style={centerButton}
						href="#"
						role="button">
						Find Out More!
					</button>
				</div>
			</div>
			<div className="card">
				<img
					className="card-img-top"
					src="https://via.placeholder.com/150"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title text-center">Card title</h5>
					<p className="card-text text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor
					</p>
				</div>
				<div className="card-footer">
					<button
						className="btn btn-primary btn-sm mx-auto"
						style={centerButton}
						href="#"
						role="button">
						Find Out More!
					</button>
				</div>
			</div>
			<div className="card">
				<img
					className="card-img-top"
					src="https://via.placeholder.com/150"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title text-center">Card title</h5>
					<p className="card-text text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor
					</p>
				</div>

				<div className="card-footer">
					<button
						className="btn btn-primary btn-sm mx-auto"
						style={centerButton}
						href="#"
						role="button">
						Find Out More!
					</button>
				</div>
			</div>
		</div>
	);
};

Card.proptypes = {
	name: PropTypes.string
};

export default Card;
