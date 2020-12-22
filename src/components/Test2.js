import React from 'react';
import atomize from "@quarkly/atomize";

const Test2 = props => <div {...props}>
	Say hello Test2
</div>;

export default atomize(Test2)({
	name: "Test2",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "Test2 — my awesome component  test"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});