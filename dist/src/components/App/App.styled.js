"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledApp = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.StyledApp = styled_components_1.default.div `
    font-family: -apple-system;
    font-size: 16px;
    widht: 100%;
    min-width: 320px;
`;
