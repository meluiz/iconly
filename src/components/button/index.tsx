import { ReactNode, MouseEvent } from 'react'

/* ------| Styles |------ */
import { Base, BaseIcon } from './styles'

/* ------| Types |------ */
type ButtonType = {
  children: ReactNode
  type: 'button' | 'submit' | 'reset'
  theme: 'icons' | 'text'
  icon?: ReactNode
  onClick?: (Event: MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({
  children,
  theme,
  icon,
  type = 'button',
  onClick,
}: ButtonType) => {
  return (
    <Base
      themeType={theme}
      type={type}
      onClick={onClick}
    >
      {icon && (
        <BaseIcon>
          {icon}
        </BaseIcon>
      )}
      {children}
    </Base>
  )
}
