"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authLogin = void 0;
const apiAtuh_1 = require("../api/apiAtuh");
function authLogin(username, password) {
    return apiAtuh_1.apiAuth.post('/authenticate', { username: username, password: password });
}
exports.authLogin = authLogin;
//# sourceMappingURL=AuthService.js.map