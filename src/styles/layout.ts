import styled, { css } from 'styled-components'

export const Wrapper = styled.div`${({ theme }) => css`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: auto;
  background-color: ${theme.colors.background.primary}
`}`

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: 280px 1fr;
    grid-template-areas: 'sidebar content';
  }
`
