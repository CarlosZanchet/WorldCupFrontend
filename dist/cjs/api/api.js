"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const axios_1 = require("axios");
const CookiesUtil_1 = require("../utils/CookiesUtil");
const baseURL = 'http://localhost:3334';
exports.api = axios_1.default.create({ baseURL });
exports.api.interceptors.request.use(async (axiosConfig) => {
    let token = (0, CookiesUtil_1.getTokenCookie)();
    if (axiosConfig.headers === undefined) {
        axiosConfig.headers = {};
    }
    if (token) {
        axiosConfig.headers.Authorization = `Bearer ${token}`;
    }
    axiosConfig.headers = {
        ...axiosConfig.headers
    };
    return axiosConfig;
});
exports.api.interceptors.response.use((response) => response, (error) => {
    const status = error.response?.status;
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