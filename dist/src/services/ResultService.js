"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveResult = exports.getResultByUserAndStep = void 0;
const api_1 = __importDefault(require("../api/api"));
const Result_1 = require("../entities/Result");
const CookiesUtil_1 = require("../utils/CookiesUtil");
function convertResult(result) {
    return new Result_1.Result(result.id, result.home_result, result.outside_result, result.game, result.user);
}
function getResultByUserAndStep(step) {
    const user = (0, CookiesUtil_1.getUsuarioLogadoCookie)();
    return api_1.default.get(`/results-by-user?idUser=${user.id}&step=${step}`);
}
exports.getResultByUserAndStep = getResultByUserAndStep;
function saveResult(result) {
    return api_1.default.post('/result', convertResult(result).toJson());
}
exports.saveResult = saveResult;
//# sourceMappingURL=ResultService.js.map