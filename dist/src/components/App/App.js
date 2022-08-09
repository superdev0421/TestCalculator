"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Display_1 = __importDefault(require("../Display/Display"));
const Pad_1 = __importDefault(require("../Pad/Pad"));
const App_styled_1 = require("./App.styled");
const App = () => {
    return ((0, jsx_runtime_1.jsxs)(App_styled_1.StyledApp, { children: [(0, jsx_runtime_1.jsx)(Display_1.default, {}), (0, jsx_runtime_1.jsx)(Pad_1.default, {})] }));
};
exports.App = App;
exports.default = exports.App;
