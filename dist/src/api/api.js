"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const axios_1 = __importDefault(require("axios"));
const CookiesUtil_1 = require("../utils/CookiesUtil");
const baseURL = 'http://localhost:3334';
exports.api = axios_1.default.create({ baseURL });
exports.api.interceptors.request.use((axiosConfig) => __awaiter(void 0, void 0, void 0, function* () {
    let token = (0, CookiesUtil_1.getTokenCookie)();
    if (axiosConfig.headers === undefined) {
        axiosConfig.headers = {};
    }
    if (token) {
        axiosConfig.headers.Authorization = `Bearer ${token}`;
    }
    axiosConfig.headers = Object.assign({}, axiosConfig.headers);
    return axiosConfig;
}));
exports.api.interceptors.response.use((response) => response, (error) => {
    var _a;
    const status = (_a = error.response) === null || _a === void 0 ? void 0 : _a.status;
    if (status === 500) {
        // window.location.href = '/500'
    }
    else if (status === 401 || status === 403) {
        (0, CookiesUtil_1.removeAllCookies)();
        window.location.href = "/login";
    }
    else if (status === 404) {
        // window.location.href = '/404'
    }
    return Promise.reject(error);
});
exports.default = exports.api;
//# sourceMappingURL=api.js.map