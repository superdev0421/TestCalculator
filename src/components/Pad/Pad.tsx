import React, { FunctionComponent, useEffect } from 'react'

import Button from '../Button/Button'
import { Digit, Operator } from '../../lib/types'
import {
    StyledPad
} from './Pad.styled';



interface PadProps{
  onOperatorButtonClick: (operator: Operator) => void
  onDigitalButtonClick: (digit: Digit) => void
  onPointButtonClick: () => void
  onClearEntryButtonClick: () => void
}


export const Pad:FunctionComponent<PadProps> = ( 
  {onOperatorButtonClick,
  onDigitalButtonClick,
  onPointButtonClick,
  onClearEntryButtonClick}
) => {
    return (
    <StyledPad>
      <Button >
        MR
      </Button>
      <Button >
        MC
      </Button>
      <Button >
        M+
      </Button>
      <Button >
        M-
      </Button>
      <Button color="red" >
        AC
      </Button>
      <Button onClick={() => onClearEntryButtonClick()}>
        C
      </Button>
      <Button >
        -/+
      </Button>
      <Button color="dark" onClick={() => onOperatorButtonClick('÷')}>
        ÷
      </Button>
      <Button onClick={() => onDigitalButtonClick(7)}>
        7
      </Button>
      <Button onClick={() => onDigitalButtonClick(8)}>
        8
      </Button>
      <Button onClick={() => onDigitalButtonClick(9)}>
        9
      </Button>
      <Button color="dark" onClick={() => onOperatorButtonClick('×')}>
        ×
      </Button>
      <Button onClick={() => onDigitalButtonClick(4)}>                                                
        4
      </Button>
      <Button onClick={() => onDigitalButtonClick(5)}>
        5
      </Button>
      <Button onClick={() => onDigitalButtonClick(6)}>
        6
      </Button>
      <Button color="dark" onClick={() =>onOperatorButtonClick('-')}>
        -
      </Button>
      <Button onClick={() => onDigitalButtonClick(1)}>
        1
      </Button>
      <Button onClick={() => onDigitalButtonClick(2)}>
        2
      </Button>
      <Button onClick={() => onDigitalButtonClick(3)}>
        3
      </Button>
      <Button color="dark" onClick={() => onOperatorButtonClick('+')}>
        +
      </Button>
      <Button onClick={() => onDigitalButtonClick(0)}>
        0
      </Button>
      <Button onClick={() => onPointButtonClick()} >
        .
      </Button>
      <Button color="green" isLarge={true} onClick={() => onOperatorButtonClick('=')} >
        =
      </Button>
    </StyledPad>
    )
}


export default Pad;