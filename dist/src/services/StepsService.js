"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStepsActive = void 0;
const api_1 = __importDefault(require("../api/api"));
function getStepsActive() {
    return api_1.default.get('/steps-active');
}
exports.getStepsActive = getStepsActive;
//# sourceMappingURL=StepsService.js.map