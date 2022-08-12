// External Dependencies
import { mount, shallow } from "enzyme";
import axios from "axios";
import { waitFor } from "@testing-library/react";
import {
    StyledDisplay,
    StyledIndicatorList,
    StyleScreen,
    StyledExpression 
 } from '../Display/Display.styled'
import {
    StyledButton
} from '../Button/Button.styled'

import Button from "../Button/Button"


// Internal Dependencies


import App from './App';


const testInput = async (btnGroup: any, expr: string) => {
    for (let ch of expr) {
        if (ch >= "0" && ch <= "9") {
            btnGroup.numBtn.simulate("click");
        }
        if (ch === "+") await btnGroup.plusBtn.simulate("click");
        if (ch === "-") await btnGroup.minusBtn.simulate("click");
        if (ch === "*") await btnGroup.timesBtn.simulate("click");
        if (ch === "/") await btnGroup.divBtn.simulate("click");
        if (ch === "=") await btnGroup.eqBtn.simulate("click");
        if (ch === ".") btnGroup.pointBtn.simulate("click");
        if (ch === "C") btnGroup.acBtn.simulate("click");
    }
};



const getButtonGroup = () => {  
    const app = mount(<App/>);
    const display = app.find(StyleScreen);
    // const plusBtn = app.find({children: '+'})
    // const minusBtn =  app.find({children:})
    // const timesBtn = app.find({children:})
    // const divBtn = app.find({children:})
    // const pointBtn = 

    // const button = shallow((<Button onClick={mockCallBack}>6</Button>));
    // const numBtn = button.find("button")
    const numBtn = app.find("[id='6']")
    return {
        app,
        display,
        numBtn
    }

}

describe('test calculation', () => {
    it('input validation', () => {

        const btngroup =  getButtonGroup();
        // console.log(btngroup.display.children())
        testInput(btngroup, "6");
        expect(btngroup.numBtn.getDOMNode().innerHTML).toEqual("6")
        // expect(btngroup.display.getDOMNode().innerHTML).toEqual("6");
    })
})