"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledButton = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const colorToCss = (color) => {
    switch (color) {
        case 'red':
            return (0, styled_components_1.css) `
          background-color: #c04444;
          color: #fff;
  
          &:hover,
          &:focus {
            background-color: #af3b3b;
          }
        `;
        case 'green':
            return (0, styled_components_1.css) `
          background-color: #018645;
          color: #fff;
  
          &:hover,
          &:focus {
            background-color: #016d38;
          }
        `;
        case 'dark':
            return (0, styled_components_1.css) `
          background-color: #272727;
          color: #c5830d;
  
          &:hover,
          &:focus {
            background-color: #1a1a1a;
          }
        `;
        default:
    }
    return (0, styled_components_1.css) `
      background-color: #2e2e2e;
      color: #fff;
  
      &:hover,
      &:focus {
        background-color: #212121;
      }
    `;
};
exports.StyledButton = styled_components_1.default.button `
  font-family: inherit;
  font-size: inherit;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 0;
  padding-top: 1em;
  padding-bottom: 1em;
  transition: background-color 0.15s ease-in-out, opacity 0.15s ease-in-out;
  ${({ color }) => colorToCss(color)}
  ${({ isLarge }) => isLarge &&
    (0, styled_components_1.css) `
      grid-column-end: span 2;
    `}

  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);

  &:focus {
    outline: 0;
  }

  :after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.3s, opacity 1s;
  }

  :active:after {
    transform: scale(0, 0);
    opacity: 0.2;
    transition: 0s;
  }
`;
