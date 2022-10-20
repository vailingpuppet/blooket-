var hack;
var check;
var inc;
var did = false;
setInterval(function() {
	if (
		document.querySelector('#app > div > div > div.arts__regularBody___1TM6E-camelCase') &&
		!document.querySelector('#app > div > div > div.arts__regularBody___1TM6E-camelCase')
		.children[0].className.includes('answer')
	) {
		check = document.querySelector('#app > div > div > div.arts__regularBody___1TM6E-camelCase')
      .children[1].children;
		
		hack = Object.values(document.querySelector('#app > div > div'))[1].children[1]['_owner'].stateNode.state.choices;
		
		if (check.length === 0 && !did) {
			for (i in hack) {
				inc = Number(i) + 1;
				alert(`Pumpkin #${inc}: ${hack[i].text}`);
			}
			did = true;
		} else if (check.length != 0 && did) {
			did = false;
		}
	}
});
