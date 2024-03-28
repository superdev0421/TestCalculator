// External Dependencies
import { mount, shallow } from "enzyme";
import axios from "axios";
import { waitFor } from "@testing-library/react";
import {
  StyledDisplay,
  StyledIndicatorList,
  StyleScreen,
  StyledExpression,
} from "../Display/Display.styled";
import { StyledButton } from "../Button/Button.styled";

import Button from "../Button/Button";

// Internal Dependencies

import App from "./App";

const testInput = async (btnGroup: any, expr: string) => {
  for (let ch of expr) {
    if (ch >= "0" && ch <= "9") {
      btnGroup.numBtn[Number(ch)].simulate("click");
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
  const app = mount(<App />);
  const display = app.find(StyleScreen);
  const plusBtn = app.find("[id='+']");
  const eqBtn = app.find("[id='=']");
  // const minusBtn =  app.find({children:})
  // const timesBtn = app.find({children:})
  // const divBtn = app.find({children:})
  // const pointBtn =

  // const button = shallow((<Button onClick={mockCallBack}>6</Button>));
  // const numBtn = button.find("button")
  const numBtn = Array(10);
  for (let i = 0; i < 10; i++) numBtn[i] = app.find(`[id="${i}"]`);
  return {
    app,
    display,
    plusBtn,
    eqBtn,
    numBtn,
  };
};

jest.mock("axios");

const getMockedAxios = () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  mockedAxios.get.mockImplementation((url) => {
    const searchParams = new URLSearchParams(url.slice(url.indexOf("?") + 1));
    if (searchParams == null) return Promise.reject();

    let operation = searchParams.get("operation");
    let total = searchParams.get("total");
    let next = searchParams.get("next");
    let rlt;

    let totalNum = isNaN(Number(total)) ? null : Number(total);
    let nextNum = isNaN(Number(next)) ? null : Number(next);

    if (nextNum == null) {
      rlt = totalNum ? totalNum : "0";
    } else {
      switch (operation) {
        case "plus":
          rlt = (totalNum as number) + nextNum;
          break;
        case "minus":
          rlt = (totalNum as number) - nextNum;
          break;
        case "times":
          rlt = (totalNum as number) * nextNum;
          break;
        case "divide":
          rlt = (totalNum as number) / nextNum;
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

describe("test calculation", () => {
  it("input validation", () => {
    const btngroup = getButtonGroup();
    testInput(btngroup, "6");

    expect(btngroup.display.getDOMNode().innerHTML).toEqual("6");
  });

  it("test plus", async () => {
    const btnGroup = getButtonGroup();
    const mockedAxios = getMockedAxios();

    testInput(btnGroup, "123+45+6=");
    await waitFor(() => expect(mockedAxios.get).toHaveBeenCalledTimes(3));
    expect(btnGroup.display.getDOMNode().innerHTML).toEqual("174");
  });
});
