"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiAuth = void 0;
const axios_1 = __importDefault(require("axios"));
const baseURL = 'http://localhost:3334/';
exports.apiAuth = axios_1.default.create({ baseURL });
//# sourceMappingURL=apiAtuh.js.map