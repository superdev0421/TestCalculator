"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pad = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_1 = __importDefault(require("../Button/Button"));
const Pad_styled_1 = require("./Pad.styled");
const Pad = () => {
    return ((0, jsx_runtime_1.jsxs)(Pad_styled_1.StyledPad, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { children: "MR" }), (0, jsx_runtime_1.jsx)(Button_1.default, { children: "MC" }), (0, jsx_runtime_1.jsx)(Button_1.default, { children: "M+" }), (0, jsx_runtime_1.jsx)(Button_1.default, { children: "M-" }), (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ color: "red" }, { children: "AC" })), (0, jsx_runtime_1.jsx)(Button_1.default, { children: "C" }), (0, jsx_runtime_1.jsx)(Button_1.default, { children: "-/+" }), (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ color: "dark" }, { children: "\u00F7" })), (0, jsx_runtime_1.jsx)(Button_1.default, { children: "7" }), (0, jsx_runtime_1.jsx)(Button_1.default, { children: "8" }), (0, jsx_runtime_1.jsx)(Button_1.default, { children: "9" }), (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ color: "dark" }, { children: "\u00D7" })), (0, jsx_runtime_1.jsx)(Button_1.default, { children: "4" }), (0, jsx_runtime_1.jsx)(Button_1.default, { children: "5" }), (0, jsx_runtime_1.jsx)(Button_1.default, { children: "6" }), (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ color: "dark" }, { children: "-" })), (0, jsx_runtime_1.jsx)(Button_1.default, { children: "1" }), (0, jsx_runtime_1.jsx)(Button_1.default, { children: "2" }), (0, jsx_runtime_1.jsx)(Button_1.default, { children: "3" }), (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ color: "dark" }, { children: "+" })), (0, jsx_runtime_1.jsx)(Button_1.default, { children: "0" }), (0, jsx_runtime_1.jsx)(Button_1.default, { children: "." }), (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ color: "green", isLarge: true }, { children: "=" }))] }));
};
exports.Pad = Pad;
exports.default = exports.Pad;
