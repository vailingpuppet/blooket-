(async () => {
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    window.alert = iframe.contentWindow.alert;
    window.prompt = iframe.contentWindow.prompt;

    var hack = Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner.stateNode;
    
    var lure = Number(parseFloat(prompt('What do you want to set your lure to? (1 - 5)'))) - 1;
    hack.setState({
        lure: lure < 0 ? 0 : lure > 4 ? 4 : lure
    });
    alert('Lure set!');
})();
