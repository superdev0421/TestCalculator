import { FunctionComponent } from 'react'

import {
  StyledButton
} from './Button.styled'

interface ButtonProps {
  color?: 'red' | 'green' | 'dark'
  isLarge?: boolean
  children?: string
}


export const Button: FunctionComponent<ButtonProps> = ({ children, color, isLarge }) => {
    return (
      <StyledButton color={color} isLarge={isLarge} >
        {children}
      </StyledButton>
    )
  }
  
  export default Button
  