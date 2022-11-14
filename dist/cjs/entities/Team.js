"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
class Team {
    _id;
    _name;
    _urlflag;
    _group_team;
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get urlflag() {
        return this._urlflag;
    }
    set urlflag(urlflag) {
        this._urlflag = urlflag;
    }
    get group_team() {
        return this._group_team;
    }
    set group_team(group_team) {
        this._group_team = group_team;
    }
    constructor(id, name, urlflag, group_team) {
        this._id = id;
        this._name = name;
        this._urlflag = urlflag;
        this._group_team = group_team;
    }
    toJson() {
        return {
            id: this._id,
            name: this._name,
            urlflag: this._urlflag,
            group_team: this._group_team
        };
    }
}
exports.Team = Team;
//# sourceMappingURL=Team.js.map