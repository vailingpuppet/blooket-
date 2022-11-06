var iframe = document.createElement('iframe');
iframe.style.display = 'none';
document.body.appendChild(iframe);
window.alert = iframe.contentWindow.alert;
window.prompt = iframe.contentWindow.prompt;

var hack = Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner.stateNode;

var lure = parseInt(prompt('Lure value? (1 to 5)')) - 1;
hack.setState({
    lure: lure
});
alert(`Lure set to ${lure + 1}!`);
