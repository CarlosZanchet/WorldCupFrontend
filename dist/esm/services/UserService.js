import api from "../api/api";
import { apiAuth } from "../api/apiAtuh";
import { getUsuarioLogadoCookie } from "../utils/CookiesUtil";
export function saveUser(user) {
    return apiAuth.post('/user', user);
}
export function findUserById() {
    const user = getUsuarioLogadoCookie();
    return api.get(`/user/${user.id}`);
}
export function findRequestByUser() {
    const user = getUsuarioLogadoCookie();
    return api.get(`/request-by-user/${user.id}`);
}
//# sourceMappingURL=UserService.js.map