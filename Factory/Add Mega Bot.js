var iframe = document.createElement('iframe');
iframe.style.display = 'none';
document.body.appendChild(iframe);
window.prompt = iframe.contentWindow.prompt;

var hack = Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner.stateNode.state;
var u_prompt = parseInt(prompt('How many mega-bots do you want?'));
var multi = parseInt(prompt('How much multi do you want?'));

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
    hack.blooks.push(megaBot)
}
