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
