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

var blook1 = prompt("Enter blook code 1. (Nothing for blank):", "0#46#13#16#14$0#39#32#4#8#3#4$0");
var blook2 = prompt("Enter blook code 2. (Nothing for blank):", "0#46#13#16#14$0#39#32#4#8#3#4$0");
var blook3 = prompt("Enter blook code 3. (Nothing for blank):", "0#46#13#16#14$0#39#32#4#8#3#4$0");
var blook4 = prompt("Enter blook code 4. (Nothing for blank):", "0#46#13#16#14$0#39#32#4#8#3#4$0");
var blook5 = prompt("Enter blook code 5. (Nothing for blank):", "0#46#13#16#14$0#39#32#4#8#3#4$0");

Object.values(document.querySelector('#app > div > div'))[1].children[1]['_owner'].stateNode.state.customBlooks = [
	blook1,
	blook2,
	blook3,
	blook4,
	blook5
];

alert("Set custom blooks!");
