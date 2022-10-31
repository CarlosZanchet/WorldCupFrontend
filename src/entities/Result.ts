import { Game } from "./Game";
import { User } from "./User";

export class Result {
  private _id: string;
  private _home_result: number | undefined;
  private _outside_result: number | undefined;
  private _game: Game;
  private _user: User;

  constructor(
    id: string,
    home_result: number | undefined,
    outside_result: number | undefined,
    game: Game,
    user: User
  ) {
    this._id = id;
    this._home_result = home_result;
    this._outside_result = outside_result;
    this._game = game;
    this._user = user;
  }

  public get id(): string {
    return this._id;
  }

  public set id(id: string) {
    this._id = id;
  }

  public get home_result(): number | undefined{
    return this._home_result;
  }

  public set home_result(home_result: number | undefined) {
    this._home_result = home_result;
  }

  public get outside_result(): number | undefined {
    return this._outside_result;
  }

  public set outside_result(outside_result: number | undefined) {
    this._outside_result = outside_result;
  }

  public get game(): Game {
    return this._game;
  }

  public set game(game: Game) {
    this._game = game;
  }

  public get user(): User {
    return this._user;
}

public set user(user: User) {
    this._user = user;
}

  toJson(): any {
    return {
      id: this.id,
      home_result: this.home_result,
      outside_result: this.outside_result,
      game: this.game,
      user: this.user
    }
  }
}
