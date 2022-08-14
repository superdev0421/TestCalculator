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


export const Button: FunctionComponent<ButtonProps> = ({ children,  color, isLarge, onClick }) => {
    return (
      <button  color={color} onClick={onClick} id={children}>
        {children}
      </button>
    )
  }
  
  export default Button 
  