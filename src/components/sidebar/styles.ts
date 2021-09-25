import styled, { css } from 'styled-components'

export const Wrapper = styled.aside`${({ theme }) => css`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  flex: content;
  position: relative;
  overflow: hidden;
  background-color: ${theme.colors.background.secondary};
`}`

export const Header = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  padding-left: 28px;
  padding-right: 28px;
  position: relative;
  border-bottom: 1px solid rgba(255,255,255,.08);
`

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`

export const HeaderBrand = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
`

export const BrandIcon = styled.div`${({ theme }) => css`
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  position: relative;
  background: linear-gradient(90deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 95%);
`}`

export const BrandName = styled.span`
  font-size: 26px;
  line-height: 1.25;
  letter-spacing: -0.04em;
  color: white;
  font-family: 'Circular', 'sans-serif';
`
