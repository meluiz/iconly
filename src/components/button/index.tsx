import { ReactNode } from 'react'

/* ------| Styles |------ */
import { Base } from './styles'

/* ------| Types |------ */
type ButtonType = {
  children: ReactNode
  type: 'button' | 'submit' | 'reset'
  theme: 'icons'
}

export const Button = ({
  children,
  theme,
  type = 'button',
}: ButtonType) => {
  return (
    <Base
      themeType={theme}
      type={type}
    >
      {children}
    </Base>
  )
}
