import { Result } from "./Result";

export class User {
  private _id: string | null;
  private _name: string;
  private _username: string;
  private _password: string;
  private _results: Result[];

  constructor(
    id: string | null,
    name: string,
    username: string,
    password: string,
    results: Result[]
  ) {
    this._id = id;
    this._name = name;
    this._username = username;
    this._password = password;
    this._results = results;
  }

  public get id(): string | null {
    return this._id;
  }

  public set id(id: string | null) {
    this._id = id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get username(): string {
    return this._username;
  }

  public set username(username: string) {
    this._username = username;
  }

  public get password(): string {
    return this._password;
  }

  public set password(password: string) {
    this._password = password;
  }

  public get results(): Result[] {
    return this._results;
  }

  public set results(results: Result[]) {
    this._results = results;
  }

  toJson(): any {
    return {
      id: this._id,
      name: this._name,
      username: this._username,
      password: this._password,
    };
  }
}
