import { AxiosResponse } from "axios";
import api from "../api/api";
import { Steps } from "../entities/Steps";

export function getStepsActive():Promise<AxiosResponse<Steps[]>> {
  return api.get('/steps-active')
}