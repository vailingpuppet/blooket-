var iframe = document.createElement('iframe');
iframe.style.display = 'none';
document.body.appendChild(iframe);
window.prompt = iframe.contentWindow.prompt;

var hack = Object.values(document.querySelector('#app > div > div'))[1].children[1]['_owner'].stateNode.state;
if (hack.myCard) {
  var u_prompt = window.prompt("What stats do you want to set the enemy's card to?");
  setInterval(function() {
    hack.enemyCard.strength = u_prompt;
    hack.enemyCard.wisdom = u_prompt;
    hack.enemyCard.charisma = u_prompt;
  });
}
