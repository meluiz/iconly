import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
`

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-areas: 'Sidebar Content';
  position: relative;
`
