import React from "react";

class DrumPad extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			audioKey: this.props.button
		};
		this.handleClick = this.handleClick.bind(this);
		this.playAudio = this.playAudio.bind(this);
	}
	handleClick(event) {
		const button = event.currentTarget;
		this.playAudio(button.children[0], button.id);
	}
	playAudio(audio, key) {
		if (key) this.props.setDisplay(key);
		audio.play();
	}

	componentDidUpdate() {
		if (this.props.keyPressed === this.state.audioKey) {
			this.playAudio(this.refs.buttonRef.children[0]);
		}
	}

	render() {
		// const mp3_file = require("../audio/" + this.props.button + ".mp3");
		const mp3_file = this.props.sound;
		return (
			<button
				className="drum-pad"
				id={this.props.button}
				onClick={this.handleClick}
				ref="buttonRef"
			>
				{this.props.button}
				<audio src={mp3_file} className="clip" id={this.props.button} />
			</button>
		);
	}
}

export default DrumPad;
