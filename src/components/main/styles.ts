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

export const Header = styled.header`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 28px;
  padding-right: 28px;
  position: sticky;
  top: 0; left: 0;
  flex-grow: 0;
  flex-shrink: 0;
  border-bottom: 1px solid rgba(255,255,255,.08);
`

export const Form = styled.form`
  height: 40px;
  flex-grow: 1;
`

export const FormContent = styled.div`${({ theme }) => css`
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 2px solid transparent;
  border-image-slice: 1;
  
  &:hover {
    border-radius: 8px;
    background-color: rgba(255,255,255,.04);

    button { background-color: transparent }
  }

  &:focus-within {
    background-image: linear-gradient(
      ${theme.colors.background.primary},
      ${theme.colors.background.primary}),
      linear-gradient(
        90deg,
        ${theme.colors.primary} 0%,
        ${theme.colors.secondary} 95%
      );
    background-origin: border-box;
    background-clip: content-box, border-box;
  }
`}`

export const FormInput = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
  background-color: transparent;
  color: white;
  font-size: 14px;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
`

export const Social = styled.nav`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-grow: 0;
`

export const SocialList = styled.ul`
  list-style: none;
  display: flex;
`

export const SocialListItem = styled.ul`
  display: flex;
  align-items: center;
  min-height: 0;
  position: relative;
`

export const SocialListLink = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  flex-grow: 0;
  border-radius: 8px;
  transition: .15s ease-in-out;
  text-decoration: none;
  color: #fff;
  opacity: .4;
  cursor: pointer;
  text-decoration: none;

  &:focus { outline: none }
  &:hover {
    opacity: 1;
    background-color: rgba(255,255,255,.05);
  }
`

export const SocialListLinkAlt = styled(SocialListLink)`${({ theme }) => css`
  width: auto;
  height: 48px;
  font-weight: 600;
  border: 2px solid transparent;
  margin-left: 8px;

  &:hover {
    background-color: transparent;
    background-image: linear-gradient(
      ${theme.colors.background.primary},
      ${theme.colors.background.primary}),
      linear-gradient(
        90deg,
        ${theme.colors.primary} 0%,
        ${theme.colors.secondary} 95%
      );
    background-origin: border-box;
    background-clip: content-box, border-box;
  }
`}`

export const SocialListLinkAltText = styled.span`
  display: inline-block;
  padding: 0 16px;
`

export const Content = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
`

export const IconGrid = styled.div`
  width: 100%;
  display: grid;
  padding: 24px 32px;
  gap: 8px;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto;
  transition: .15s ease-in-out;
  overflow: hidden;
  overflow-y: auto;
`

export const IconCard = styled.div`
  height: 144px;
  position: relative;
  animation: fadein 250ms ease both;

  @keyframes fadein {
    from { opacity: 0 }
    to { opacity: 1 }
  }
`

export const IconCardContent = styled.div`${({ theme }) => css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 8px;
  color: rgba(255,255,255,.5);
  background-color: ${theme.colors.background.secondary};
  position: relative;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    background-image: linear-gradient(
      ${theme.colors.background.secondary},
      ${theme.colors.background.secondary}),
      linear-gradient(
        90deg,
        ${theme.colors.primary} 0%,
        ${theme.colors.secondary} 95%
      );
    background-origin: border-box;
    background-clip: content-box, border-box;

    ${IconCardTag} {
      opacity: 1;
      visibility: visible;
    }
  }
`}`

export const IconCardInner = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const IconCardIcon = styled.div`
  height: 24px;
  margin-bottom: 8px;
  color: #fff;
`

export const IconCardText = styled.span`
  width: 100%;
  padding: 0 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  font-size: 12px;
  line-height: 2;
  color: rgba(255,255,255,.5);
  font-family: 'Inter',Arial,Helvetica,sans-serif;
`

export const IconCardTag = styled.div`${({ theme }) => css`
  border-radius: 0 8px;
  padding: 6px 8px;
  position: absolute;
  top: -2px; right: -2px;
  background: linear-gradient(56deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 95%);
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  visibility: hidden;
  opacity: 0;
`}`
