import React, {FunctionComponent, useState} from 'react';
import axios from 'axios';

import Display from '../Display/Display';
import Pad from '../Pad/Pad';
import {Digit, Operator} from '../../lib/types';
import {
    StyledApp
} from './App.styled';


const BASE_URL = "http//localhost:"  

export const App: FunctionComponent = () => {
    
    const [result,setResult] = useState<string>('0');
    const [nextValue,setNextValue] = useState<string | null>(null);
    const [error,setError] = useState<boolean>(false);
    const [display,setDisplay] = useState<string | null>('0');

    const onPointButtonClick = () => {

    }
    const onOperatorButtonClick = async (operator:Operator): Promise<void> => {
        try {
            let operation = null;
            if(operator == '+') operation = "plus"
                else if(operator == '-') operation = "minus"
                else if(operator == '×') operation = "times"
                else if(operator == '÷') operation = "divide"
                else if(operator == '=') operation = "equal"
            let res = await axios.get(`${BASE_URL}/api/calc/?total=${result}&next=${nextValue}&operation=${operation}`)
            setResult(res.data);
            setNextValue(null);
            setDisplay(result)
        } catch(err: any) {
            console.log(err);
            setError(true);   
        }
    }

    const onDigitalButtonClick = (digit: Digit) => {
        const next = nextValue === "0" || !nextValue ? digit.toString() : nextValue + digit.toString()
        setNextValue(next)
        setDisplay(next)
      }


    return (
        <StyledApp>
            <Display value={error ? 'Error occured': String(display)}/>
            <Pad 
                onPointButtonClick={onPointButtonClick}
                onDigitalButtonClick={onDigitalButtonClick}
                onOperatorButtonClick={onOperatorButtonClick}    
            />
        </StyledApp>
    );
}

export default App;