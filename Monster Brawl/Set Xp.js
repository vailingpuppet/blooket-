function reactEventHandler() {
    let react = Object.values(document.querySelector("#body"))[0].stateNode
    return react[Object.keys(react).filter(a => a.includes("reactInternalInstance"))].return.stateNode;
}

(() => {
    let n = document.createElement('iframe');
    document.body.append(n);
    window.prompt = n.contentWindow.prompt.bind(window);
    window.alert = n.contentWindow.alert.bind(window);
    n.remove();
})();
alert("WARNING: Very high XP can cause a loop of selecting a level reward over and over to the point wher the game is unplayable,\nany level 60+ automaticly wins the game.");

xp = parseInt(prompt("Enter XP:"));
reactEventHandler().totalXp = a;
reactEventHandler().xp = a;
reactEventHandler().setState({
    xp: a,
    totalXp: a
});
alert(`Set XP to ${a}.`);