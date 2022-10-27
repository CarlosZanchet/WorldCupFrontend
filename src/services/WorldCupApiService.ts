import { Game } from "../entities/Game";
import { AxiosResponse } from "axios";
import { apiWorldCup } from "../api/apiWorldCup";

export function getGamesByStep(step: number): Promise<AxiosResponse<Game[]>> {
  return apiWorldCup.get(`/games-step/${step}`)
}