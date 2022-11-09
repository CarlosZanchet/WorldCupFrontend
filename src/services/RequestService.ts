import { AxiosResponse } from "axios";
import api from "../api/api";

export function denyRequest(idRequest: string): Promise<AxiosResponse<boolean>> {
  return api.get(`/request-deny/${idRequest}`)
}

export function acceptRequest(idRequest: string): Promise<AxiosResponse<boolean>> {
  return api.get(`/request-accept/${idRequest}`)
}