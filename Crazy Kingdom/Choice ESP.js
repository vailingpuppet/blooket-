var hack = Object.values(document.querySelector('#app > div > div'))[1].children[1]['_owner'].stateNode.state.guest;
var yes = hack.yes;
var no = hack.no;

var yes_mat = yes.materials == undefined ? "NONE" : yes.materials;
var yes_peop = yes.people == undefined ? "NONE" : yes.people;
var yes_happy = yes.happiness == undefined ? "NONE" : yes.happiness;
var yes_gold = yes.gold == undefined ? "NONE" : yes.gold;

var no_mat = no.materials == undefined ? "NONE" : no.materials;
var no_peop = no.people == undefined ? "NONE" : no.people;
var no_happy = no.happiness == undefined ? "NONE" : no.happiness;
var no_gold = no.gold == undefined ? "NONE" : no.gold;

alert(`YES:\n  Materials: ${yes_mat}\n  People: ${yes_peop}\n  Happiness: ${yes_happy}\n  Gold: ${yes_gold}\n\nNO:\n  Materials: ${no_mat}\n  People: ${no_peop}\n  Happiness: ${no_happy}\n  Gold: ${no_gold}`);
