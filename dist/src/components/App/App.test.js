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
const Display_styled_1 = require("../Display/Display.styled");
// Internal Dependencies
const App_1 = __importDefault(require("./App"));
const testInput = (btnGroup, expr) => __awaiter(void 0, void 0, void 0, function* () {
    for (let ch of expr) {
        if (ch >= "0" && ch <= "9") {
            btnGroup.numBtn.simulate("click");
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
    // const plusBtn = app.find({children: '+'})
    // const minusBtn =  app.find({children:})
    // const timesBtn = app.find({children:})
    // const divBtn = app.find({children:})
    // const pointBtn = 
    // const button = shallow((<Button onClick={mockCallBack}>6</Button>));
    // const numBtn = button.find("button")
    const numBtn = app.find("[id='6']");
    return {
        app,
        display,
        numBtn
    };
};
describe('test calculation', () => {
    it('input validation', () => {
        const btngroup = getButtonGroup();
        // console.log(btngroup.display.children())
        testInput(btngroup, "6");
        expect(btngroup.numBtn.getDOMNode().innerHTML).toEqual("6");
        // expect(btngroup.display.getDOMNode().innerHTML).toEqual("6");
    });
});
