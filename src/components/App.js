import React, { Component } from "react";
import "./css/App.css";

//This is the outer Drum machine app containting all other components
class App extends Component {
	render() {
		return (
			<div className="drum-machine-display" id="display">
				<p>This will be a drum</p>
			</div>
		);
	}
}

export default App;
