import { setCookie, destroyCookie, parseCookies }  from "nookies";
import nookies from 'nookies'

import { User } from "../entities/User";

export function setTokenCookie(token: string) {
  setCookie(null, "worldcup.token", token, {
    path: "/",
  })
}

export function getTokenCookie(): string {
  const { "worldcup.token": token } = parseCookies()
  return token
}

export function setUsuarioLogadoCookie(user: User) {
  const u = JSON.stringify(user)
  setCookie(null, "worldcup.usuariologado", u, {
    path: "/",
  })
}

export function getUsuarioLogadoCookie(): User {
  const { "worldcup.usuariologado": usuario } = parseCookies()
  if(usuario === undefined) {
    window.location.href = '/login'
  }
  const u: User = JSON.parse(usuario)
  return new User(u.id, u.name, u.username, u.password, u.results).toJson()
}

export function removeAllCookies() {
  nookies.destroy(null, "worldcup.token");
  nookies.destroy(null, "worldcup.usuariologado");
}