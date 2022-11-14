"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findRequestByUser = exports.findUserById = exports.saveUser = void 0;
const api_1 = __importDefault(require("../api/api"));
const apiAtuh_1 = require("../api/apiAtuh");
const CookiesUtil_1 = require("../utils/CookiesUtil");
function saveUser(user) {
    return apiAtuh_1.apiAuth.post('/user', user);
}
exports.saveUser = saveUser;
function findUserById() {
    const user = (0, CookiesUtil_1.getUsuarioLogadoCookie)();
    return api_1.default.get(`/user/${user.id}`);
}
exports.findUserById = findUserById;
function findRequestByUser() {
    const user = (0, CookiesUtil_1.getUsuarioLogadoCookie)();
    return api_1.default.get(`/request-by-user/${user.id}`);
}
exports.findRequestByUser = findRequestByUser;
//# sourceMappingURL=UserService.js.map