"use strict";
exports.__esModule = true;
var Enemy_1 = require("./Enemy");
var Hero_1 = require("./Hero");
(function () {
    var Balrog = new Enemy_1.Enemy();
    var party = [];
    party.push(new Hero_1.Hero("Legolas"), new Hero_1.Hero("Aragorn"), new Hero_1.Hero("Gimli"), new Hero_1.Hero("Gandalf"));
    party.forEach(function (partyMember) {
        Balrog.addObserver(partyMember);
    });
    console.log("Balrog attacks: " + party[party.length - 1].getName() + " ");
    Balrog.removeObserver(party.pop());
    console.log(party[party.length - 1].getName() + " attacks, Balrog dies");
    Balrog.die();
})();
