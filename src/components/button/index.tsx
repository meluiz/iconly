import { ReactNode } from 'react'

/* ------| Styles |------ */
import { Base } from './styles'

/* ------| Types |------ */
type ButtonType = {
  children: ReactNode
}

export const Button = ({ children }: ButtonType) => {
  return (
    <Base>
      {children}
    </Base>
  )
}
