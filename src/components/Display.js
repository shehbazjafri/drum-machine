import React from "react";
import "../css/Display.css";
class Display extends React.Component {
	render() {
		return (
			<div id="display" className="display">
				{this.props.display !== "" && this.props.display}
			</div>
		);
	}
}

export default Display;
