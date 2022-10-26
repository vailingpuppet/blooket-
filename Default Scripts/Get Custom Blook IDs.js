var iframe = document.createElement('iframe');
iframe.style.display = 'none';
document.body.appendChild(iframe);
window.alert = iframe.contentWindow.alert;

var blooks = Object.values(document.querySelector('#app > div > div'))[1].children[1]['_owner']
	.stateNode.state.customBlooks;
var split = "";
for (i in blooks) {
	split += `${blooks[i]}\n`;
}
var tab = window.open("about:blank", "_blank");
tab.document.write("<textarea id=\"hack\" cols=150 rows=50></textarea>");
tab.document.getElementById("hack").value = split;
tab.document.close();
