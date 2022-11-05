var iframe = document.createElement('iframe');
iframe.style.display = 'none';
document.body.appendChild(iframe);
window.alert = iframe.contentWindow.alert;

var hack = Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner.stateNode;

hack.setState({
    materials: 1e308,
    people: 1e308,
    happiness: 1e308,
    gold: 1e308
});

alert("Set resources to max.");
