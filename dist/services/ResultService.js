import api from "../api/api";
import { Result } from "../entities/Result";
import { getUsuarioLogadoCookie } from "../utils/CookiesUtil";
function convertResult(result) {
    return new Result(result.id, result.home_result, result.outside_result, result.game, result.user);
}
export function getResultByUserAndStep(step) {
    const user = getUsuarioLogadoCookie();
    return api.get(`/results-by-user?idUser=${user.id}&step=${step}`);
}
export function saveResult(result) {
    return api.post('/result', convertResult(result).toJson());
}
//# sourceMappingURL=ResultService.js.map