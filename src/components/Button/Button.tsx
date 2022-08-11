import { FunctionComponent } from 'react'

import {
  StyledButton
} from './Button.styled'

interface ButtonProps {
  color?: 'red' | 'green' | 'dark'
  isLarge?: boolean
  children?: string
  onClick?: () => void
}


export const Button: FunctionComponent<ButtonProps> = ({ children, color, isLarge, onClick }) => {
    return (
      <StyledButton color={color} isLarge={isLarge} onClick={onClick}>
        {children}
      </StyledButton>
    )
  }
  
  export default Button
  