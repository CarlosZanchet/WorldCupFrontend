import { Bolao } from "./Bolao";
import { User } from "./User";

export class Request {
  private _id: string;
  private _id_administrator: string;
  private _user_request: User;
  private _bolao: Bolao;

  constructor(
    id: string,
    id_administrator: string,
    user_request: User,
    bolao: Bolao
  ) {
    this._id = id;
    this._id_administrator = id_administrator;
    this._user_request = user_request;
    this._bolao = bolao;
  }

  public get id(): string {
    return this._id;
  }

  public set id(id: string) {
    this._id = id;
  }

  public get id_administrator(): string {
    return this._id_administrator;
  }

  public set id_administrator(id_administrator: string) {
    this._id_administrator = id_administrator;
  }

  public get user_request(): User {
    return this._user_request;
  }

  public set user_request(user_request: User) {
    this._user_request = user_request;
  }

  public get bolao(): Bolao {
    return this._bolao;
  }

  public set bolao(bolao: Bolao) {
    this._bolao = bolao;
  }
}
