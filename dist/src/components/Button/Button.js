"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Button = ({ children, color, isLarge, onClick }) => {
    return ((0, jsx_runtime_1.jsx)("button", Object.assign({ color: color, onClick: onClick, id: children }, { children: children })));
};
exports.Button = Button;
exports.default = exports.Button;
