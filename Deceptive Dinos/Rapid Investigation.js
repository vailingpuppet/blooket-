let a = !0,
    b = !0,
    c = setTimeout;
setInterval(() => {
    document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__terminal___-b2QX-camelCase > div.styles__buttonContainer___3yX9w-camelCase") && a && (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__terminal___-b2QX-camelCase > div.styles__buttonContainer___3yX9w-camelCase").firstChild.click(), a = !1)
}, 1), setInterval(() => {
    document.querySelector("#header > div.styles__headerRight___D5pQ1-camelCase > div > i") && (setTimeout = (a, b) => {
        a()
    })
}, 1);
let d = {},
    e = 0;

function f() {
    return Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner
}
const g = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function() {
    arguments[1].startsWith("https://api.blooket.com/api/games?gameId=") && this.addEventListener("load", function() {
        d = JSON.parse(this.responseText)
    }), g.apply(this, arguments)
};
const h = null;
let i = "";

function j(b, c) {
    for (let a of b.questions)
        if (a.question === c) return a.correctAnswers[0]
}
let k = "";
setInterval(() => {
    document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div.styles__pageButton___3uI22-camelCase") && document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div.styles__pageButton___3uI22-camelCase").click(), document.querySelector(".fa-check") && document.querySelector(".fa-check").click(), document.querySelector(".styles__guestButton___2jiD9-camelCase") && document.querySelector(".styles__guestButton___2jiD9-camelCase").click(), document.querySelector("#app > div > div > div:nth-child(2) > div > div > div.styles__container___1-bHf-camelCase") && document.querySelector("#app > div > div > div:nth-child(2) > div > div > div.styles__container___1-bHf-camelCase").click(), document.querySelector("#app > div > div > div:nth-child(2) > div > div.styles__powerUpIconContainer___3rksC-camelCase") && c(() => {
        document.querySelector("#app > div > div > div:nth-child(2) > div > div.styles__powerUpIconContainer___3rksC-camelCase").click()
    }, 1e3)
}, 1), setInterval(() => {
    document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div.styles__answersHolder___3LYNs-camelCase") && Array.from(document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div.styles__answersHolder___3LYNs-camelCase").children).forEach(a => {
        let b = j(d, document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div.styles__questionContainer___3u_c9-camelCase > div > div").innerText);
        a.innerText === b && a.firstChild.click()
    }), document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__feedbackContainer___7PzgR-camelCase > div.styles__choice___1aMOz-camelCase.styles__choice2___3mKbD-camelCase") && document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__feedbackContainer___7PzgR-camelCase > div.styles__choice___1aMOz-camelCase.styles__choice2___3mKbD-camelCase").click()
}, 1), setInterval(() => {
    if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div.styles__buttonRow___Qu1Ro-camelCase > div:nth-child(1) > div > div.styles__center___RkEYP-camelCase") && document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div.styles__buttonRow___Qu1Ro-camelCase > div:nth-child(2) > div").click(), document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div.styles__tabletWrapper___1zyM_-camelCase > div > div.styles__playerHolder___3svS3-camelCase")) {
        let a = f().stateNode.state.players.map((a, b) => !!a.isCheating),
            b = 0;
        a.every(a => !1 === a) || a.indexOf(!0), document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div.styles__tabletWrapper___1zyM_-camelCase > div > div.styles__playerHolder___3svS3-camelCase").children[b].click()
    }
}), setInterval(() => {
    document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div.styles__tabletWrapper___1zyM_-camelCase > div > div.styles__cheaterWrapper___21xVr-camelCase") && document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div.styles__tabletWrapper___1zyM_-camelCase > div > div.styles__cheaterWrapper___21xVr-camelCase").click()
})
