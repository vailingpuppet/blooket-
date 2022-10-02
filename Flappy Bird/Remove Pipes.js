flappyPhaserGame = () => {
    let a = Object.values(document.querySelector("#phaser-bouncy"))[0].stateNode
    return a[Object.keys(a).filter(b => b.includes("reactInternalInstance"))].return
}

setInterval(() => {
    flappyPhaserGame().stateNode.state.game.scene.children.list.filter(a => a.texture?.key == 'pipe').map(a => {
        a.scaleY = 0.1
        a.y = 0
    })
})