import styled, { css, DefaultTheme } from 'styled-components'

type ButtonType = {
  themeType: 'icons' | 'text'
  theme: DefaultTheme
}

const handleThemeButton = (theme: DefaultTheme) => ({
  icons: css`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    flex-grow: 0;
    border-radius: 8px;
    transition: .15s ease-in-out;
    color: #fff;
    opacity: .4;

    &:hover {
      opacity: 1;
      background-color: rgba(255,255,255,.05);
    }
  `,
  text: css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: white;
    border: 2px solid rgba(255,255,255,.06);
    border-radius: 8px;
    padding: 12px 16px;
    font-weight: 600;
    font-size: 16px;
    font-family: 'Circular', sans-serif;
    transition: all 300ms ease;

    &:hover {
      border: 2px solid ${theme.colors.secondary};
    }
  `,
})

export const ButtonStyle = styled.button<ButtonType>`
  border: 0;
  cursor: pointer;
  background-color: transparent;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
`

export const Base = styled(ButtonStyle)`${({ themeType, theme }) => css`
  min-height: 0;
  border-color: ${theme.colors.background.secondary};
  ${handleThemeButton(theme)[themeType] || handleThemeButton(theme).icons}
`}`

export const BaseIcon = styled.div`
  color: white;

  svg {
    width: 20px;
    height: 20px;
    stroke-width: 2.3;
  }
`
