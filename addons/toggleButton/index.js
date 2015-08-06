var self = require('sdk/self');

// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
function dummy(text, callback) {
  callback(text);
}

exports.dummy = dummy;
var { ToggleButton } = require('sdk/ui/button/toggle');
var button = ToggleButton({
	id: "t-button",
	label: "Click to Toggle me",
	icon: {
		"16": "./icon-16.png",
		"32": "./icon-32.png",
		"64": "./icon-64.png",
	}, 
	onClick: firstClick,
	badgeColor: "#00AAAA", 
	badge: 0
});

function firstClick(state) {
	console.log("You clicked '" + state.label + "'");
	button.removeListener("click", firstClick);
	button.on("click", subsequentClicks);
}
function subsequentClicks(state) {
	console.log("You changed '" + state.label + "' again'");
}
