import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
import { removeAllCookies } from "../utils/CookiesUtil";
export const LoginContext = createContext({});
export const LoginProvider = ({ children }) => {
    function logout() {
        removeAllCookies();
    }
    return (_jsx(LoginContext.Provider, { value: { logout }, children: children }));
};
export const useLogin = () => {
    return useContext(LoginContext);
};
//# sourceMappingURL=LoginContext.js.map