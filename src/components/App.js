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
			sounds: [
				{
					key: "Q",
					sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
					description: "Heater 1"
				},
				{
					key: "W",
					sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
					description: "Heater 2"
				},
				{
					key: "E",
					sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
					description: "Heater 3"
				},
				{
					key: "A",
					sound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
					description: "Disc"
				},
				{
					key: "S",
					sound: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
					description: "Kick"
				},
				{
					key: "D",
					sound:
						"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
					description: "Punchy Kick"
				},
				{
					key: "Z",
					sound: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
					description: "Side Stick"
				},
				{
					key: "X",
					sound: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
					description: "Snare"
				},
				{
					key: "C",
					sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
					description: "Kick N Hat"
				}
			],
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
					{this.state.sounds.map(sound => (
						<DrumPad
							key={sound.key}
							button={sound.key}
							sound={sound.sound}
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
