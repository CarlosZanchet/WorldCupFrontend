"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAllCookies = exports.getUsuarioLogadoCookie = exports.setUsuarioLogadoCookie = exports.getTokenCookie = exports.setTokenCookie = void 0;
const nookies_1 = require("nookies");
const nookies_2 = __importDefault(require("nookies"));
const User_1 = require("../entities/User");
function setTokenCookie(token) {
    (0, nookies_1.setCookie)(null, "worldcup.token", token, {
        path: "/",
    });
}
exports.setTokenCookie = setTokenCookie;
function getTokenCookie() {
    const { "worldcup.token": token } = (0, nookies_1.parseCookies)();
    return token;
}
exports.getTokenCookie = getTokenCookie;
function setUsuarioLogadoCookie(user) {
    const u = JSON.stringify(user);
    (0, nookies_1.setCookie)(null, "worldcup.usuariologado", u, {
        path: "/",
    });
}
exports.setUsuarioLogadoCookie = setUsuarioLogadoCookie;
function getUsuarioLogadoCookie() {
    const { "worldcup.usuariologado": usuario } = (0, nookies_1.parseCookies)();
    if (usuario === undefined) {
        window.location.href = '/login';
    }
    const u = JSON.parse(usuario);
    return new User_1.User(u.id, u.name, u.username, u.password, u.results).toJson();
}
exports.getUsuarioLogadoCookie = getUsuarioLogadoCookie;
function removeAllCookies() {
    nookies_2.default.destroy(null, "worldcup.token");
    nookies_2.default.destroy(null, "worldcup.usuariologado");
}
exports.removeAllCookies = removeAllCookies;
//# sourceMappingURL=CookiesUtil.js.map