import React, {FunctionComponent} from 'react';

import {
   StyledDisplay,
   StyledIndicatorList,
   StyleScreen,
   StyledExpression 
} from './Display.styled'

interface DisplayProps {
    value: string | null;
}


export const Screen : FunctionComponent <DisplayProps> = ({value}) => {
    return (
        <StyledDisplay>
            <StyledIndicatorList>
                <StyledExpression>
                </StyledExpression>
            </StyledIndicatorList>
            <StyleScreen >
                    {value}
            </StyleScreen>
        </StyledDisplay>
    )
}

export default Screen;