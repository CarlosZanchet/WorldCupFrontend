import api from "../api/api";
import { Bolao } from "../entities/Bolao";
import { getUsuarioLogadoCookie } from "../utils/CookiesUtil";
function converterBolaoJson(bolao) {
    return new Bolao(bolao.id, bolao.name, bolao.url_image, bolao.user_create, bolao.created_at, bolao.users, bolao.type).toJson();
}
export function saveBolao(bolao) {
    return api.post("/bolao", converterBolaoJson(bolao));
}
export function getBoloes() {
    return api.get("/bolao");
}
export function signInBolao(idUser, idBolao) {
    return api.post("/sign-in-bolao", { idUser, idBolao });
}
export function requestSignIn(bolao) {
    const user = getUsuarioLogadoCookie();
    return api.post("/request-sign-in", { idUser: user.id, idBolao: bolao.id });
}
export function getBoloesByUser() {
    const userLogged = getUsuarioLogadoCookie();
    return api.get(`/bolao-by-user/${userLogged.id}`);
}
//# sourceMappingURL=BolaoService.js.map