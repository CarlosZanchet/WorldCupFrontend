"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    _id;
    _name;
    _username;
    _password;
    _results;
    constructor(id, name, username, password, results) {
        this._id = id;
        this._name = name;
        this._username = username;
        this._password = password;
        this._results = results;
    }
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
    get username() {
        return this._username;
    }
    set username(username) {
        this._username = username;
    }
    get password() {
        return this._password;
    }
    set password(password) {
        this._password = password;
    }
    get results() {
        return this._results;
    }
    set results(results) {
        this._results = results;
    }
    toJson() {
        return {
            id: this._id,
            name: this._name,
            username: this._username,
            password: this._password,
        };
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map