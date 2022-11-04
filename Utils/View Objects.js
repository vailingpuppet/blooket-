var obj = Object.values(document.querySelector('#app > div > div'))[1].children[1]['_owner'].stateNode.state;
var pretty = JSON.stringify(obj, undefined, 2);

var tab = window.open("about:blank", "_blank");
tab.document.write("<textarea id=\"hack\" cols=150 rows=50></textarea>");
tab.document.getElementById("hack").value = pretty;
tab.document.close();
