import { AxiosResponse } from "axios";
import { apiAuth } from "../api/apiAtuh";
import { User } from "../entities/User";

export function saveUser(user: User): Promise<AxiosResponse<User>> {
  return apiAuth.post('/user', user.toJson())
}