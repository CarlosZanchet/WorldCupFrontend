export class Steps {
  private _id: string;

  private _step: number;

  private _active: boolean;

  private _name: string;

  constructor(id: string, step: number, active: boolean, name: string) {
    this._id = id;
    this._step = step;
    this._active = active;
    this._name = name;
  }

  public get id(): string {
    return this._id;
  }

  public set id(id: string) {
    this._id = id;
  }

  public get step(): number {
    return this._step;
  }

  public set step(step: number) {
    this._step = step;
  }

  public get active(): boolean {
    return this._active;
  }

  public set active(active: boolean) {
    this._active = active;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }
}
