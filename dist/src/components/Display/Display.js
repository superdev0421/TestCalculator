"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Screen = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Display_styled_1 = require("./Display.styled");
const Screen = () => {
    return ((0, jsx_runtime_1.jsxs)(Display_styled_1.StyledDisplay, { children: [(0, jsx_runtime_1.jsx)(Display_styled_1.StyledIndicatorList, { children: (0, jsx_runtime_1.jsx)(Display_styled_1.StyledExpression, {}) }), (0, jsx_runtime_1.jsx)(Display_styled_1.StyleScreen, {})] }));
};
exports.Screen = Screen;
exports.default = exports.Screen;
