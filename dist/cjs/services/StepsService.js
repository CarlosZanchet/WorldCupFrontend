"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStepsActive = void 0;
const api_1 = require("../api/api");
function getStepsActive() {
    return api_1.default.get('/steps-active');
}
exports.getStepsActive = getStepsActive;
//# sourceMappingURL=StepsService.js.map