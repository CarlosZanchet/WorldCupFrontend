import { useToast } from "coheza-ui";
import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authLogin } from "../services/AuthService";
import { removeAllCookies, setTokenCookie, setUsuarioLogadoCookie } from "../utils/CookiesUtil";

export interface LoginProviderProps {
  children: React.ReactNode;
}

export interface LoginContextData {
  logout: () => void;
}

export const LoginContext = createContext<LoginContextData>(
  {} as LoginContextData
);

export const LoginProvider = ({ children }: LoginProviderProps) => {
  

  function logout() {
    removeAllCookies();
  }

  return (
    <LoginContext.Provider value={{ logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  return useContext(LoginContext);
};

