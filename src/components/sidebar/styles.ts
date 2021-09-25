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

export const Navigation = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 24px 0;
  position: relative;
  overflow: hidden;
  overflow-y: auto;
`

export const NavigationGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const NavigationListItem = styled.li<NavigationListItemType>`${({ theme, activedIcons, activedCategory }) => css`
  min-height: 0;
  position: relative;

  ${activedIcons && css`
    ${NavigationListLink} {
      opacity: 1;
      background: linear-gradient(90deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 95%);

      &:hover {
      opacity: 1;
      background: linear-gradient(90deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 95%);
      }
    }
  `}

  ${activedCategory && css`
    ${NavigationListLink} {
      opacity: 1;
    }
  `}
`}`

export const NavigationListLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  padding: 0 32px 0 28px;
  height: 32px;
  color: #fff;
  opacity: .4;
  font-family: 'Inter', Arial, Helvetica, sans-serif;

  &:focus { outline: none }
  &:hover {
    opacity: 1;
    background: rgba(255,255,255,.04);
  }

`

export const NavigationListLinkGroup = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const NavigationListLinkIcon = styled.span`
  color: #fff;
  display: flex;
  align-items: center;
`

export const NavigationListLinkText = styled.span`
  color: #fff;
  font-size: 14px;
`

export const NavigationListLinkCounter = styled.span`
  color: #fff;
  font-size: 14px;
`
