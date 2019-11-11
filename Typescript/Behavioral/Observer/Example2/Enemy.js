"use strict";
exports.__esModule = true;
var Enemy = /** @class */ (function () {
    function Enemy() {
        this.isAlive = true;
        this.heroes = [];
    }
    Enemy.prototype.addObserver = function (hero) {
        this.heroes.push(hero);
    };
    Enemy.prototype.removeObserver = function (heroToRemove) {
        console.log(heroToRemove.getName() + " dies");
        for (var i = 0; i < this.heroes.length; i++) {
            if (heroToRemove === this.heroes[i]) {
                this.heroes.splice(i, 1);
            }
        }
    };
    Enemy.prototype.die = function () {
        this.isAlive = false;
        this.notifyAllObservers();
    };
    Enemy.prototype.notifyAllObservers = function () {
        this.heroes.forEach(function (hero) {
            hero.update();
        });
    };
    return Enemy;
}());
exports.Enemy = Enemy;
