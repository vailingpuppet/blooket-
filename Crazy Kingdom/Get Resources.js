(async () => {
    let n = document.createElement('iframe');
    document.body.append(n);
    window.alert = n.contentWindow.alert.bind(window);
    window.prompt = n.contentWindow.prompt.bind(window);
    window.confirm = n.contentWindow.confirm.bind(window);
    n.remove();

    function reactHandler() {
        return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
    };
    if (window.location.pathname != '/kingdom') {
        alert('You must be in a crazy kingdom game!');
    } else {
        reactHandler().stateNode.setState({
            materials: 1e308,
            people: 1e308,
            happiness: 1e308,
            gold: 1e308
        });
    };
})();
