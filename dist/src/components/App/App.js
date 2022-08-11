"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const Display_1 = __importDefault(require("../Display/Display"));
const Pad_1 = __importDefault(require("../Pad/Pad"));
const App_styled_1 = require("./App.styled");
const BASE_URL = "http//localhost:";
const App = () => {
    const [result, setResult] = (0, react_1.useState)('0');
    const [nextValue, setNextValue] = (0, react_1.useState)(null);
    const [error, setError] = (0, react_1.useState)(false);
    const [display, setDisplay] = (0, react_1.useState)('0');
    const onPointButtonClick = () => {
    };
    const onOperatorButtonClick = (operator) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let operation = null;
            if (operator == '+')
                operation = "plus";
            else if (operator == '-')
                operation = "minus";
            else if (operator == '×')
                operation = "times";
            else if (operator == '÷')
                operation = "divide";
            else if (operator == '=')
                operation = "equal";
            let res = yield axios_1.default.get(`${BASE_URL}/api/calc/?total=${result}&next=${nextValue}&operation=${operation}`);
            setResult(res.data);
            setNextValue(null);
            setDisplay(result);
        }
        catch (err) {
            console.log(err);
            setError(true);
        }
    });
    const onDigitalButtonClick = (digit) => {
        const next = nextValue === "0" || !nextValue ? digit.toString() : nextValue + digit.toString();
        setNextValue(next);
        setDisplay(next);
    };
    return ((0, jsx_runtime_1.jsxs)(App_styled_1.StyledApp, { children: [(0, jsx_runtime_1.jsx)(Display_1.default, { value: error ? 'Error occured' : String(display) }), (0, jsx_runtime_1.jsx)(Pad_1.default, { onPointButtonClick: onPointButtonClick, onDigitalButtonClick: onDigitalButtonClick, onOperatorButtonClick: onOperatorButtonClick })] }));
};
exports.App = App;
exports.default = exports.App;
