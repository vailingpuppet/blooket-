function reactEventHandler() {
    let react = Object.values(document.querySelector("#body"))[0].stateNode;
    return react[Object.keys(react).filter(a => a.includes("reactInternalInstance"))].return.stateNode;
}

(() => {
    let n = document.createElement('iframe');
    document.body.append(n);
    window.prompt = n.contentWindow.prompt.bind(window);
    window.alert = n.contentWindow.alert.bind(window);
    n.remove();
})();
damage = parseInt(prompt("Enter damage:"));

dmgSetter = setInterval(() => {
    reactEventHandler().state.dmgArray.map(a => a.dmg = damage);
}, 1);

listener = (e) => {
    if (e.key.toLowerCase() == "e") {
        clearInterval(dmgSetter);
        reactEventHandler().state.dmgArray.map(a => a.dmg = 0);
        alert("Stoped setting damage.");
        window.removeEventListener("keydown", listener);
    }
}
window.addEventListener("keydown", listener);

alert(`Started setting damage to ${damage}, press "e" to stop.`);