import { apiAuth } from "../api/apiAtuh";
export function authLogin(username, password) {
    return apiAuth.post('/authenticate', { username: username, password: password });
}
//# sourceMappingURL=AuthService.js.map