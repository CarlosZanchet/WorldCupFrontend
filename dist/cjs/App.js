"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Routes_1 = require("./routes/Routes");
require("./styles/global.css");
function App() {
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(Routes_1.RoutesLayout, {}) }));
}
exports.App = App;
//# sourceMappingURL=App.js.map