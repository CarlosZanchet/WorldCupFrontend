import { AxiosResponse } from "axios";
import { apiAuth } from "../api/apiAtuh";
import { TokenDto } from "../dto/TokenDto";

export function authLogin(username: string, password: string): Promise<AxiosResponse<TokenDto>> {
  return apiAuth.post('/authenticate', { username: username, password: password });
}