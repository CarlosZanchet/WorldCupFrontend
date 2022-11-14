"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBoloesByUser = exports.requestSignIn = exports.signInBolao = exports.getBoloes = exports.saveBolao = void 0;
const api_1 = __importDefault(require("../api/api"));
const Bolao_1 = require("../entities/Bolao");
const CookiesUtil_1 = require("../utils/CookiesUtil");
function converterBolaoJson(bolao) {
    return new Bolao_1.Bolao(bolao.id, bolao.name, bolao.url_image, bolao.user_create, bolao.created_at, bolao.users, bolao.type).toJson();
}
function saveBolao(bolao) {
    return api_1.default.post("/bolao", converterBolaoJson(bolao));
}
exports.saveBolao = saveBolao;
function getBoloes() {
    return api_1.default.get("/bolao");
}
exports.getBoloes = getBoloes;
function signInBolao(idUser, idBolao) {
    return api_1.default.post("/sign-in-bolao", { idUser, idBolao });
}
exports.signInBolao = signInBolao;
function requestSignIn(bolao) {
    const user = (0, CookiesUtil_1.getUsuarioLogadoCookie)();
    return api_1.default.post("/request-sign-in", { idUser: user.id, idBolao: bolao.id });
}
exports.requestSignIn = requestSignIn;
function getBoloesByUser() {
    const userLogged = (0, CookiesUtil_1.getUsuarioLogadoCookie)();
    return api_1.default.get(`/bolao-by-user/${userLogged.id}`);
}
exports.getBoloesByUser = getBoloesByUser;
//# sourceMappingURL=BolaoService.js.map