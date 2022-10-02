flappyPhaserGame = () => {
    let a = Object.values(document.querySelector("#phaser-bouncy"))[0].stateNode
    return a[Object.keys(a).filter(b => b.includes("reactInternalInstance"))].return
}

(() => {
    let n = document.createElement('iframe');
    document.body.append(n);
    window.alert = n.contentWindow.alert.bind(window);
    n.remove();
})();
flappyPhaserGame().stateNode.state.game.instance.events._events['game-over'].fn = () => {}
alert("WARNING: This doesnt work that well, if you crash into anything it just stops your movement and you can't do anything.");