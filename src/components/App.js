import React, { Component } from "react";
import Display from "./Display";
import DrumPad from "./DrumPad";
import "../css/App.css";
import "../css/DrumPad.css";

//This is the outer Drum machine app containting all other components
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			keys: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
			keyPressed: "",
			display: ""
		};
		this.setDisplay = this.setDisplay.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	setDisplay(text) {
		this.setState({
			display: text
		});
	}

	handleKeyPress(event) {
		const key = event.key.toUpperCase();
		if (this.state.keys.includes(key)) this.setDisplay(key);
		else this.setDisplay("");
		this.setState({
			keyPressed: key
		});
	}

	componentDidMount() {
		window.addEventListener("keydown", this.handleKeyPress);
	}

	render() {
		return (
			<div className="drum-machine">
				<Display display={this.state.display} />
				<div className="drum-pads">
					{this.state.keys.map(key => (
						<DrumPad
							key={key}
							button={key}
							keyPressed={this.state.keyPressed}
							handleClick={this.handleClick}
							setDisplay={this.setDisplay}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default App;
