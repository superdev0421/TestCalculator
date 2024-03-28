import React, { FunctionComponent, useState } from "react";
import axios from "axios";

import Display from "../Display/Display";
import Pad from "../Pad/Pad";
import { Digit, Operator } from "../../lib/types";
import { StyledApp } from "./App.styled";

const BASE_URL = "http://localhost:1211";

export const App: FunctionComponent = () => {
  const [result, setResult] = useState<string>("0");
  const [nextValue, setNextValue] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [display, setDisplay] = useState<string | null>("0");
  const [operation, setOperation] = useState<string | null>(null);

  const onClearEntryButtonClick = () => {
    setResult("0");
    setNextValue("0");
    setDisplay("0");
    setOperation(null);
    return;
  };

  const onPointButtonClick = () => {
    if (nextValue === null) {
      setNextValue("0.");
      return;
    }
    setNextValue(nextValue + ".");
    return;
  };
  const onOperatorButtonClick = async (operator: Operator): Promise<void> => {
    try {
      let res = await axios.get(
        `${BASE_URL}/api/calc/?total=${result}&next=${nextValue}&operation=${operation}`
      );
      let opt = null;
      if (operator == "+") opt = "plus";
      else if (operator == "-") opt = "minus";
      else if (operator == "×") opt = "times";
      else if (operator == "÷") opt = "divide";
      else if (operator == "=") opt = "equal";
      setOperation(opt);
      setResult(res.data);
      setNextValue(null);
      setDisplay(res.data);
    } catch (err: any) {
      console.log(err);
      setError(true);
    }
  };

  const onDigitalButtonClick = (digit: Digit) => {
    const next =
      nextValue === "0" || !nextValue
        ? digit.toString()
        : nextValue + digit.toString();
    setNextValue(next);
    setDisplay(next);
  };

  return (
    <StyledApp>
      <Display value={error ? "Error occured" : String(display)} />
      <Pad
        onPointButtonClick={onPointButtonClick}
        onDigitalButtonClick={onDigitalButtonClick}
        onOperatorButtonClick={onOperatorButtonClick}
        onClearEntryButtonClick={onClearEntryButtonClick}
      />
    </StyledApp>
  );
};

export default App;
