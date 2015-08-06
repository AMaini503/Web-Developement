var { ToggleButton } = require('sdk/ui/button/toggle');
var panels = require('sdk/panel');
var self = require('sdk/self');

var button = ToggleButton({
	id: "t-button", 
	label: 'Click to toggle me',
	icon: {
		"16": "./icon-16.png"
	},
	onChange: changed
});
var panel = panels.Panel({
	contentURL: self.data.url("panel.html"),
	onHide: handleHide
});

function changed(state) {
	if(state.checked) {
		panel.show({
			position: button
		});
	}
}
function handleHide(state) {
	button.state('window', {checked: false});
}
