import styled, { css } from 'styled-components'

type ButtonType = {
  themeType: 'icons'
}

const handleThemeButton = {
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
}

export const ButtonStyle = styled.button<ButtonType>`
  border: 0;
  cursor: pointer;
  background-color: transparent;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
`

export const Base = styled(ButtonStyle)`${({ themeType }) => css`
  min-height: 0;
  ${handleThemeButton[themeType] || handleThemeButton.icons}
`}`
