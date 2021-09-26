import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: block;
  position: fixed;
  top: 0; left: 0;
  overflow: hidden;
  z-index: 20;
  `

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  position: relative;
  backdrop-filter: blur(4px);
  background-color: rgba(0,0,0,.6);
  transition: all 300ms ease;
`
