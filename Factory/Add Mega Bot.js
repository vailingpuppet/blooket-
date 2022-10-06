var f = document.createElement('iframe')
f.style.display = 'none'
document.body.appendChild(f)
window.prompt = f.contentWindow.prompt
var world = Object.values(document.querySelector('#app > div > div'))[1]
    .children[1]['_owner'].stateNode.state,
    u_prompt = parseInt(prompt('How many mega-bots do you want?')),
    multi = parseInt(prompt('How much multi do you want?'))
for (var i = 0; i < u_prompt; i++) {
    var megaBot = {
        name: 'Mega Bot',
        color: '#2fa04a',
        class: '\uD83E\uDD16',
        rarity: 'Mythical',
        cash: [80000, 430000, 4200000, 62000000, 1000000000],
        time: [5, 5, 3, 3, 3],
        price: [7000000, 120000000, 1900000000, 35000000000],
        active: false,
        level: 4,
        bonus: multi,
    }
    Object.values(document.querySelector('#app > div > div'))[1].children[1][
        '_owner'
    ].stateNode.state.blooks.push(megaBot)
}
