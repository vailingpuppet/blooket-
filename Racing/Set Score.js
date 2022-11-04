var iframe = document.createElement('iframe');
iframe.style.display = 'none';
document.body.appendChild(i);
window.alert = iframe.contentWindow.alert;
window.prompt = iframe.contentWindow.prompt;

var hack = Object.values(document.querySelector('#app > div > div'))[1].children[1]['_owner'].stateNode.state;
var u_prompt = prompt("How many questions do you want to be at?");

hack.progress = world.goalAmount - u_prompt - 1;
alert('Get the answer correct to set score');
