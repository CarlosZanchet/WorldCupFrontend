"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
class Game {
    constructor(date, stadium, group_team, home_team, outside_team, home_score, outside_score) {
        this._date = date;
        this._stadium = stadium;
        this._group_team = group_team;
        this._home_team = home_team;
        this._outside_team = outside_team;
        this._home_score = home_score;
        this._outside_score = outside_score;
    }
    get date() {
        return this._date;
    }
    set date(_date) {
        this._date = _date;
    }
    get stadium() {
        return this._stadium;
    }
    set stadium(_stadium) {
        this._stadium = _stadium;
    }
    get group_team() {
        return this._group_team;
    }
    set group_team(_group_team) {
        this._group_team = _group_team;
    }
    get home_team() {
        return this._home_team;
    }
    set home_team(_home_team) {
        this._home_team = _home_team;
    }
    get outside_team() {
        return this._outside_team;
    }
    set outside_team(_outside_team) {
        this._outside_team = _outside_team;
    }
    get home_score() {
        return this._home_score;
    }
    set home_score(_home_score) {
        this._home_score = _home_score;
    }
    get outside_score() {
        return this._outside_score;
    }
    set outside_score(_outside_score) {
        this._outside_score = _outside_score;
    }
    toJson() {
        return {
            date: this._date,
            stadium: this._stadium,
            group_team: this._group_team,
            home_team: this._home_team,
            outside_team: this._outside_team,
            home_score: this._home_score,
            outside_score: this._outside_score
        };
    }
}
exports.Game = Game;
//# sourceMappingURL=Game.js.map