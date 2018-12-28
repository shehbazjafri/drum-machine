import React, { Component } from "react";
import Display from "./Display";
import DrumPad from "./DrumPad";
import "../css/App.css";

//This is the outer Drum machine app containting all other components
class App extends Component {
	state = {
		keys: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
		keyPressed: ""
	};

	handleKeyPress = event => {
		const key = event.key.toUpperCase();
		if (this.state.keys.includes(key))
			this.setState({
				keyPressed: key
			});
		else
			this.setState({
				keyPressed: ""
			});
	};

	componentDidMount() {
		window.addEventListener("keydown", this.handleKeyPress);
	}

	render() {
		return (
			<div className="drum-machine">
				<Display keyPressed={this.state.keyPressed} />
				<div>
					{this.state.keys.map(key => (
						<DrumPad
							key={key}
							button={key}
							keyPressed={this.state.keyPressed}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default App;
