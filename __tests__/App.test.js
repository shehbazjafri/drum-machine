import React from "react";
import App from "../src/components/App";
import DrumPad from "../src/components/DrumPad";
import Display from "../src/components/Display";

describe("<App/>", () => {
	it("should render one display", () => {
		const wrapper = global.shallow(<App />);
		expect(wrapper.find(Display)).toHaveLength(1);
	});

	it("should render 9 drum pads", () => {
		const wrapper = global.shallow(<App />);
		expect(wrapper.find(DrumPad)).toHaveLength(9);
	});
});
