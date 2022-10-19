export class Cla {
  private _id: string;
  private _logo: string;
  private _name: string;
  private _createdAt: Date;
  private _type: "private" | "public";

  constructor(
    id: string,
    logo: string,
    name: string,
    createdAt: Date,
    type: "private" | "public"
  ) {
    this._id = id;
    this._logo = logo;
    this._name = name;
    this._createdAt = createdAt;
    this._type = type;
  }
  public get id(): string {
    return this._id;
  }

  public set id(id: string) {
    this._id = id;
  }

  public get logo(): string {
    return this._logo;
  }

  public set logo(logo: string) {
    this._logo = logo;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }

  public set createdAt(createdAt: Date) {
    this._createdAt = createdAt;
  }

  public get type(): "private" | "public" {
    return this._type;
  }

  public set type(type: "private" | "public") {
    this._type = type;
  }

  toJson(): any {
    return {
      id: this._id,
      logo: this._logo,
      name: this._name,
      createdAt: this._createdAt,
      type: this._type,
    }
  }
}
