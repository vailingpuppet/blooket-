if (Object.values(document.querySelector('#app > div > div'))[1].children[1]['_owner'].stateNode.state.randomTries) {
	Object.values(document.querySelector('#app > div > div'))[1].children[1]['_owner'].stateNode.state.randomTries = parseInt(prompt("How many tries?", "999"));
} else {
	alert("Use this on the nickname selector page.");
}
