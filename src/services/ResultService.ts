import { AxiosResponse } from "axios";
import api from "../api/api";
import { apiAuth } from "../api/apiAtuh";
import { Result } from "../entities/Result";
import { getUsuarioLogadoCookie } from "../utils/CookiesUtil";

function convertResult(result: Result): Result {
  return new Result(result.id, result.home_result, result.outside_result, result.game, result.user)
}

export function getResultByUserAndStep(step: string): Promise<AxiosResponse<Result[]>> {
  const user = getUsuarioLogadoCookie();
  return api.get(`/results-by-user?idUser=${user.id}&step=${step}`)
}

export function saveResult(result: Result): Promise<AxiosResponse<Result>> {
  return api.post('/result', convertResult(result).toJson());
}

export function getResultByUser(): Promise<AxiosResponse<number>> {
  const user = getUsuarioLogadoCookie();
  return api.get(`/score-by-user/${user.id}`)
}