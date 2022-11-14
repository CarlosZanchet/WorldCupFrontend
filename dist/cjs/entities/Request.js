"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = void 0;
class Request {
    _id;
    _id_administrator;
    _user_request;
    _bolao;
    constructor(id, id_administrator, user_request, bolao) {
        this._id = id;
        this._id_administrator = id_administrator;
        this._user_request = user_request;
        this._bolao = bolao;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get id_administrator() {
        return this._id_administrator;
    }
    set id_administrator(id_administrator) {
        this._id_administrator = id_administrator;
    }
    get user_request() {
        return this._user_request;
    }
    set user_request(user_request) {
        this._user_request = user_request;
    }
    get bolao() {
        return this._bolao;
    }
    set bolao(bolao) {
        this._bolao = bolao;
    }
}
exports.Request = Request;
//# sourceMappingURL=Request.js.map