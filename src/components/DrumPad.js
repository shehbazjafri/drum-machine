import React from "react";
import "../css/DrumPad.css";

class DrumPad extends React.Component {
	audioKey = this.props.button;

	handleClick = event => {
		const audio = event.currentTarget.children[0];
		audio.play();
	};

	playAudio = button => {
		button.click();
	};

	componentDidUpdate() {
		if (this.props.keyPressed === this.audioKey) {
			this.playAudio(this.refs.buttonRef);
		}
	}

	render() {
		const mp3_file = require("../audio/" + this.props.button + ".mp3");

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
