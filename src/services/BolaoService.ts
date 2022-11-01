import { AxiosResponse } from "axios";
import api from "../api/api";
import { Bolao } from "../entities/Bolao";
import { getUsuarioLogadoCookie } from "../utils/CookiesUtil";

function converterBolaoJson(bolao: Bolao): Bolao {
  return new Bolao(
    bolao.id,
    bolao.name,
    bolao.url_image,
    bolao.user_create,
    bolao.created_at,
    bolao.users,
    bolao.type
  ).toJson();
}

export function saveBolao(bolao: Bolao): Promise<AxiosResponse<Bolao>> {
  return api.post("/bolao", converterBolaoJson(bolao));
}

export function getBoloes(): Promise<AxiosResponse<Bolao[]>> {
  return api.get("/bolao");
}

export function signInBolao(idUser: string, idBolao: string):  Promise<AxiosResponse<void>> {
  return api.post("/sign-in-bolao", {idUser, idBolao})
}

export function getBoloesByUser(): Promise<AxiosResponse<Bolao[]>> {
  const userLogged = getUsuarioLogadoCookie();
  return api.get(`/bolao-by-user/${userLogged.id}`);
}