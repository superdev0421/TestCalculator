"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledDisplay = exports.StyleScreen = exports.StyledExpression = exports.StyledIndicatorList = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.StyledIndicatorList = styled_components_1.default.div `
  font-size: 0.75em;
  line-height: 1;
  opacity: 0.4;
  text-align: right;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25em;
  min-height: 1em;
`;
exports.StyledExpression = styled_components_1.default.span `
  margin-left: auto;
`;
exports.StyleScreen = styled_components_1.default.div `
  font-size: 2.5em;
  min-height: 1.4em;
  display: flex;
  align-items: center;
  justify-content: flex-end;  
  overflow: hidden;
`;
// StyleScreen.displayName = 'StyleScreen'
// ;
exports.StyledDisplay = styled_components_1.default.div `
  background-color: #393939;
  color: #fff;
  padding: 1.5em 1em;
`;
