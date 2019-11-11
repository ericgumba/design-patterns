"use strict";
exports.__esModule = true;
var Hero = /** @class */ (function () {
    function Hero(name) {
        this.xp = 0;
        this.name = name;
    }
    Hero.prototype.getName = function () {
        return this.name;
    };
    Hero.prototype.update = function () {
        this.xp += 5;
        console.log("enemy died, xp gained +5, total xp points for " + this.name + ": " + this.xp);
    };
    return Hero;
}());
exports.Hero = Hero;
