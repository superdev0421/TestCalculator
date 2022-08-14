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
const jsx_runtime_1 = require("react/jsx-runtime");
// External Dependencies
const enzyme_1 = require("enzyme");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("@testing-library/react");
const Display_styled_1 = require("../Display/Display.styled");
// Internal Dependencies
const App_1 = __importDefault(require("./App"));
const testInput = (btnGroup, expr) => __awaiter(void 0, void 0, void 0, function* () {
    for (let ch of expr) {
        if (ch >= "0" && ch <= "9") {
            btnGroup.numBtn[Number(ch)].simulate("click");
        }
        if (ch === "+")
            yield btnGroup.plusBtn.simulate("click");
        if (ch === "-")
            yield btnGroup.minusBtn.simulate("click");
        if (ch === "*")
            yield btnGroup.timesBtn.simulate("click");
        if (ch === "/")
            yield btnGroup.divBtn.simulate("click");
        if (ch === "=")
            yield btnGroup.eqBtn.simulate("click");
        if (ch === ".")
            btnGroup.pointBtn.simulate("click");
        if (ch === "C")
            btnGroup.acBtn.simulate("click");
    }
});
const getButtonGroup = () => {
    const app = (0, enzyme_1.mount)((0, jsx_runtime_1.jsx)(App_1.default, {}));
    const display = app.find(Display_styled_1.StyleScreen);
    const plusBtn = app.find("[id='+']");
    // const minusBtn =  app.find({children:})
    // const timesBtn = app.find({children:})
    // const divBtn = app.find({children:})
    // const pointBtn = 
    // const button = shallow((<Button onClick={mockCallBack}>6</Button>));
    // const numBtn = button.find("button")
    const numBtn = Array(10);
    for (let i = 0; i < 10; i++)
        numBtn[i] = app.find(`[id=${i}]`);
    return {
        app,
        display,
        plusBtn,
        numBtn
    };
};
jest.mock("axios");
const getMockedAxios = () => {
    const mockedAxios = axios_1.default;
    mockedAxios.get.mockImplementation((url) => {
        const searchParams = new URLSearchParams(url.slice(url.indexOf("?") + 1));
        if (searchParams == null)
            return Promise.reject();
        let operation = searchParams.get("operation");
        let total = searchParams.get("total");
        let next = searchParams.get("next");
        let rlt;
        let totalNum = isNaN(Number(total)) ? null : Number(total);
        let nextNum = isNaN(Number(next)) ? null : Number(next);
        if (nextNum == null) {
            rlt = totalNum ? totalNum : "0";
        }
        else {
            switch (operation) {
                case "plus":
                    rlt = totalNum + nextNum;
                    break;
                case "minus":
                    rlt = totalNum - nextNum;
                    break;
                case "times":
                    rlt = totalNum * nextNum;
                    break;
                case "divide":
                    rlt = totalNum / nextNum;
                    break;
                default: {
                    rlt = nextNum;
                }
            }
        }
        rlt = String(rlt);
        return Promise.resolve({
            data: rlt,
        });
    });
    return mockedAxios;
};
describe('test calculation', () => {
    it('input validation', () => {
        const btngroup = getButtonGroup();
        // console.log(btngroup.display.children())
        testInput(btngroup, "6");
        expect(btngroup.display.getDOMNode().innerHTML).toEqual("6");
    });
    it("test plus", () => __awaiter(void 0, void 0, void 0, function* () {
        const btnGroup = getButtonGroup();
        const mockedAxios = getMockedAxios();
        testInput(btnGroup, "123+45+6=");
        yield (0, react_1.waitFor)(() => expect(mockedAxios.get).toHaveBeenCalledTimes(5));
        expect(btnGroup.display.getDOMNode().innerHTML).toEqual("174");
    }));
});
