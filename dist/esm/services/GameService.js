import { getUsuarioLogadoCookie } from "../utils/CookiesUtil";
import { apiAuth } from "../api/apiAtuh";
export function getGamesByUserAndStep(step) {
    const userLogged = getUsuarioLogadoCookie();
    return apiAuth.get(`/games-by-user-and-step?idUser=${userLogged.id}&step=${step}`);
}
//# sourceMappingURL=GameService.js.map