"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
class Result {
    _id;
    _home_result;
    _outside_result;
    _game;
    _user;
    constructor(id, home_result, outside_result, game, user) {
        this._id = id;
        this._home_result = home_result;
        this._outside_result = outside_result;
        this._game = game;
        this._user = user;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get home_result() {
        return this._home_result;
    }
    set home_result(home_result) {
        this._home_result = home_result;
    }
    get outside_result() {
        return this._outside_result;
    }
    set outside_result(outside_result) {
        this._outside_result = outside_result;
    }
    get game() {
        return this._game;
    }
    set game(game) {
        this._game = game;
    }
    get user() {
        return this._user;
    }
    set user(user) {
        this._user = user;
    }
    toJson() {
        return {
            id: this.id,
            home_result: this.home_result,
            outside_result: this.outside_result,
            game: this.game,
            user: this.user
        };
    }
}
exports.Result = Result;
//# sourceMappingURL=Result.js.map