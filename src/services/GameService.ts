import { Game } from "../entities/Game";
import { AxiosResponse } from "axios";
import api from "../api/api";
import { getUsuarioLogadoCookie } from "../utils/CookiesUtil";
import { apiAuth } from "../api/apiAtuh";

export function getGamesByUserAndStep(step: string): Promise<AxiosResponse<Game[]>> {
  const userLogged = getUsuarioLogadoCookie();
  return apiAuth.get(`/games-by-user-and-step?idUser=${userLogged.id}&step=${step}`)
}
