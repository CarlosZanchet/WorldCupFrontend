"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLogin = exports.LoginProvider = exports.LoginContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const CookiesUtil_1 = require("../utils/CookiesUtil");
exports.LoginContext = (0, react_1.createContext)({});
const LoginProvider = ({ children }) => {
    function logout() {
        (0, CookiesUtil_1.removeAllCookies)();
    }
    return ((0, jsx_runtime_1.jsx)(exports.LoginContext.Provider, Object.assign({ value: { logout } }, { children: children })));
};
exports.LoginProvider = LoginProvider;
const useLogin = () => {
    return (0, react_1.useContext)(exports.LoginContext);
};
exports.useLogin = useLogin;
//# sourceMappingURL=LoginContext.js.map