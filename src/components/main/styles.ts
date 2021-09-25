import styled, { css } from 'styled-components'

export const Wrapper = styled.aside`${({ theme }) => css`
  grid-area: content;
  display: flex;
  flex-direction: column;
  flex: content;
  position: relative;
  overflow: hidden;
  background-color: ${theme.colors.background.primary};
`}`
