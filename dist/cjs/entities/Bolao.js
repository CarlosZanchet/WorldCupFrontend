"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bolao = void 0;
class Bolao {
    _id;
    _name;
    _url_image;
    _user_create;
    _created_at;
    _users;
    _type;
    constructor(id, name, url_image, user_create, created_at, users, type) {
        this._id = id;
        this._name = name;
        this._url_image = url_image;
        this._user_create = user_create;
        this._created_at = created_at;
        this._users = users;
        this._type = type;
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
    get created_at() {
        return this._created_at;
    }
    set created_at(created_at) {
        this._created_at = created_at;
    }
    get type() {
        return this._type;
    }
    set type(type) {
        this._type = type;
    }
    get url_image() {
        return this._url_image;
    }
    set url_image(url_image) {
        this._url_image = url_image;
    }
    get user_create() {
        return this._user_create;
    }
    set user_create(user_create) {
        this._user_create = user_create;
    }
    get users() {
        return this._users;
    }
    set users(users) {
        this._users = users;
    }
    toJson() {
        return {
            id: this._id,
            name: this._name,
            url_image: this.url_image,
            created_at: this._created_at,
            user_create: this._user_create,
            type: this._type,
        };
    }
}
exports.Bolao = Bolao;
//# sourceMappingURL=Bolao.js.map