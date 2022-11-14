export class Team {
  private _id: string;
  private _name: string;
  private _group_team: string;
  private _urlflag: string;

  public get id(): string {
    return this._id;
  }

  public set id(id: string) {
    this._id = id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

    public get urlflag(): string {
        return this._urlflag;
    }

    public set urlflag(urlflag: string) {
        this._urlflag = urlflag;
    }

    public get group_team(): string {
      return this._group_team;
  }

  public set group_team(group_team: string) {
      this._group_team = group_team;
  }


  constructor(id: string, name: string, urlflag: string, group_team: string) {
    this._id = id
    this._name = name
    this._urlflag = urlflag
    this._group_team = group_team
  }

  toJson(): any {
    return {
      id: this._id,
      name: this._name,
      urlflag: this._urlflag,
      group_team: this._group_team
    }
  }
}
