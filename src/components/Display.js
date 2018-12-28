import React from "react";
import "../css/Display.css";
class Display extends React.Component {
	render() {
		return (
			<div id="display" className="display">
				{this.props.keyPressed !== "" &&
					`You pressed 
				${this.props.keyPressed} key`}
			</div>
		);
	}
}

export default Display;
