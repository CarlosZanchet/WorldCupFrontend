import { AxiosResponse } from "axios";
import api from "../api/api";
import { apiAuth } from "../api/apiAtuh";
import { User } from "../entities/User";
import { getUsuarioLogadoCookie } from "../utils/CookiesUtil";

export function saveUser(user: User): Promise<AxiosResponse<User>> {
  return apiAuth.post('/user', user.toJson())
}