"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_styled_1 = require("./Button.styled");
const Button = ({ children, color, isLarge, onClick }) => {
    return ((0, jsx_runtime_1.jsx)(Button_styled_1.StyledButton, Object.assign({ color: color, isLarge: isLarge, onClick: onClick }, { children: children })));
};
exports.Button = Button;
exports.default = exports.Button;
