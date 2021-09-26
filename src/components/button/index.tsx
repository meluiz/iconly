import { ReactNode, MouseEvent } from 'react'

/* ------| Styles |------ */
import { Base } from './styles'

/* ------| Types |------ */
type ButtonType = {
  children: ReactNode
  type: 'button' | 'submit' | 'reset'
  theme: 'icons'
  onClick?: (Event: MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({
  children,
  theme,
  type = 'button',
  onClick,
}: ButtonType) => {
  return (
    <Base
      themeType={theme}
      type={type}
      onClick={onClick}
    >
      {children}
    </Base>
  )
}
