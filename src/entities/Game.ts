import { Team } from "./Team";

 export class Game {
  private _date: Date;
  private _stadium: string;
  private _group_team: string | null;
  private _home_team: Team | null;
  private _outside_team: Team | null;
  private _home_score: number | null;
  private _outside_score: number | null;

  constructor(
    date: Date, 
    stadium: string, 
    group_team: string | null, 
    home_team: Team | null, 
    outside_team: Team | null, 
    home_score: number | null , 
    outside_score: number | null
) {
    this._date = date
    this._stadium = stadium
    this._group_team = group_team
    this._home_team = home_team
    this._outside_team = outside_team
    this._home_score = home_score
    this._outside_score = outside_score
  }

    public get date(): Date {
        return this._date;
    }

    public setdate(_date: Date) {
        this._date = _date;
    }

    public get stadium(): string {
        return this._stadium;
    }

    public setstadium(_stadium: string) {
        this._stadium = _stadium;
    }

    public get group_team(): string | null {
        return this._group_team;
    }

    public setgroup_team(_group_team: string | null) {
        this._group_team = _group_team;
    }

    public get home_team(): Team | null {
        return this._home_team;
    }

    public sethome_team(_home_team: Team | null) {
        this._home_team = _home_team;
    }

    public get outside_team(): Team | null {
        return this._outside_team;
    }

    public setoutside_team(_outside_team: Team | null) {
        this._outside_team = _outside_team;
    }

    public get home_score(): number | null {
        return this._home_score;
    }

    public sethome_score(_home_score: number | null) {
        this._home_score = _home_score;
    }

    public get outside_score(): number | null {
        return this._outside_score;
    }

    public setoutside_score(_outside_score: number | null) {
        this._outside_score = _outside_score;
    }

    toJson(): any {
      return {
        date: this._date, 
        stadium: this._stadium, 
        group_team: this._group_team, 
        home_team: this._home_team, 
        outside_team: this._outside_team, 
        home_score: this._home_score, 
        outside_score: this._outside_score
      }
    }

}