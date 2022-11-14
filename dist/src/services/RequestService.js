"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.acceptRequest = exports.denyRequest = void 0;
const api_1 = __importDefault(require("../api/api"));
function denyRequest(idRequest) {
    return api_1.default.get(`/request-deny/${idRequest}`);
}
exports.denyRequest = denyRequest;
function acceptRequest(idRequest) {
    return api_1.default.get(`/request-accept/${idRequest}`);
}
exports.acceptRequest = acceptRequest;
//# sourceMappingURL=RequestService.js.map