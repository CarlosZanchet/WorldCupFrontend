export class Steps {
    _id;
    _step;
    _active;
    _name;
    constructor(id, step, active, name) {
        this._id = id;
        this._step = step;
        this._active = active;
        this._name = name;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get step() {
        return this._step;
    }
    set step(step) {
        this._step = step;
    }
    get active() {
        return this._active;
    }
    set active(active) {
        this._active = active;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
}
//# sourceMappingURL=Steps.js.map