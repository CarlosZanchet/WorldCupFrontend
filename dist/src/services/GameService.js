"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGamesByUserAndStep = void 0;
const CookiesUtil_1 = require("../utils/CookiesUtil");
const apiAtuh_1 = require("../api/apiAtuh");
function getGamesByUserAndStep(step) {
    const userLogged = (0, CookiesUtil_1.getUsuarioLogadoCookie)();
    return apiAtuh_1.apiAuth.get(`/games-by-user-and-step?idUser=${userLogged.id}&step=${step}`);
}
exports.getGamesByUserAndStep = getGamesByUserAndStep;
//# sourceMappingURL=GameService.js.map