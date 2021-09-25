import styled, { css } from 'styled-components'

type ButtonType = {
  themeType: 'icons'
}

export const ButtonStyle = styled.button<ButtonType>`
  border: 0;
  cursor: pointer;
  background-color: transparent;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
`

export const Base = styled(ButtonStyle)`
  min-height: 0;
`
