import React, {FunctionComponent} from 'react';

import {
   StyledDisplay,
   StyledIndicatorList,
   StyleScreen,
   StyledExpression 
} from './Display.styled'

interface DisplayProps {
    
}


export const Screen : FunctionComponent <DisplayProps> = () => {
    return (
        <StyledDisplay>
            <StyledIndicatorList>
                <StyledExpression>
                </StyledExpression>
            </StyledIndicatorList>
            <StyleScreen>
            </StyleScreen>
        </StyledDisplay>
    )
}

export default Screen;