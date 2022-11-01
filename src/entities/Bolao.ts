import { User } from "./User";

export class Bolao {
  private _id: string | null;
  private _name: string;
  private _url_image: string;
  private _user_create: User;
  private _created_at: Date;
  private _users: User[];

  private _type: "private" | "public";

  constructor(
    id: string | null,
    name: string,
    url_image: string,
    user_create: User,
    created_at: Date,
    users: User[],
    type: "private" | "public"
  ) {
    this._id = id;
    this._name = name;
    this._url_image = url_image;
    this._user_create = user_create;
    this._created_at = created_at;
    this._users = users;
    this._type = type;
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

  public get created_at(): Date {
    return this._created_at;
  }

  public set created_at(created_at: Date) {
    this._created_at = created_at;
  }

  public get type(): "private" | "public" {
    return this._type;
  }

  public set type(type: "private" | "public") {
    this._type = type;
  }

  public get url_image(): string {
    return this._url_image;
  }

  public set url_image(url_image: string) {
    this._url_image = url_image;
  }

  public get user_create(): User {
    return this._user_create;
  }

  public set user_create(user_create: User) {
    this._user_create = user_create;
  }

  public get users(): User[] {
    return this._users;
  }

  public set users(users: User[]) {
    this._users = users;
  }

  toJson(): any {
    return {
      id: this._id,
      name: this._name,
      url_image: this.url_image,
      created_at: this._created_at,
      user_create: this._user_create,
      type: this._type,
    };
  }
}
