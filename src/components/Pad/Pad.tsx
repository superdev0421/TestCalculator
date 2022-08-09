import React, { FunctionComponent, useEffect } from 'react'

import Button from '../Button/Button'
import { Digit, Operator } from '../../lib/types'
import {
    StyledPad
} from './Pad.styled';



interface PadProps{

}


export const Pad:FunctionComponent<PadProps> = ( ) => {
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
      <Button >
        C
      </Button>
      <Button >
        -/+
      </Button>
      <Button color="dark">
        ÷
      </Button>
      <Button >
        7
      </Button>
      <Button >
        8
      </Button>
      <Button >
        9
      </Button>
      <Button color="dark">
        ×
      </Button>
      <Button >
        4
      </Button>
      <Button >
        5
      </Button>
      <Button >
        6
      </Button>
      <Button color="dark" >
        -
      </Button>
      <Button >
        1
      </Button>
      <Button >
        2
      </Button>
      <Button >
        3
      </Button>
      <Button color="dark">
        +
      </Button>
      <Button >
        0
      </Button>
      <Button >
        .
      </Button>
      <Button color="green" isLarge={true} >
        =
      </Button>
    </StyledPad>
    )
}


export default Pad;