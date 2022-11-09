import { AxiosResponse } from "axios";
import api from "../api/api";
import { apiAuth } from "../api/apiAtuh";
import { Request } from "../entities/Request";
import { User } from "../entities/User";
import { getUsuarioLogadoCookie } from "../utils/CookiesUtil";

export function saveUser(user: User): Promise<AxiosResponse<User>> {
  return apiAuth.post('/user', user)
}

export function findUserById(): Promise<AxiosResponse<User>> {
  const user: User = getUsuarioLogadoCookie();
  return api.get(`/user/${user.id}`,)
}

export function findRequestByUser(): Promise<AxiosResponse<Request[]>> {
  const user = getUsuarioLogadoCookie();
  return api.get(`/request-by-user/${user.id}`)
}