import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

type IconPreviewType = {
  size: 'base' | 'md' | 'sm'
  opactiy?: number
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: block;
  position: fixed;
  top: 0; left: 0;
  overflow: hidden;
  z-index: 20;
  `

export const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  position: relative;
  background-color: rgba(0,0,0,.6);
  transition: all 300ms ease;
`

export const Box = styled(motion.div)`${({ theme }) => css`
  width: 100%;
  max-width: 512px;
  height: 100%;
  position: relative;
  background-color: ${theme.colors.background.secondary};
  overflow: hidden;
  overflow-y: auto;
`}`

export const BoxHeader = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255,255,255,.04);
  padding: 0 40px;
  position: relative;
  `

export const BoxIcon = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
`

export const BoxIconName = styled.h1`
  overflow: hidden;
  white-space: nowrap;
  color: white;
  font-size: 24px;
  font-family: 'Circular', 'sans-serif';
  `

export const BoxIconBadge = styled.span`${({ theme }) => css`
 border-radius: 999px;
 padding: 8px 12px;
 font-size: 14px;
 color: white;
 background: ${theme.colors.secondary};
 text-shadow: 0 1px 0 rgba(0,0,0,.06);
 font-weight: 600;
 font-family: 'Circular', 'sans-serif';
 `}`

export const IconPreviewBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 40px;
  border-bottom: 1px solid rgba(255,255,255,.04);
`

export const IconPreview = styled.div`${({ theme }) => css`
  overflow: hidden;
  border-radius: 8px;
  background-color: ${theme.colors.background.primary};
`}`

export const IconPreviewExposure = styled.div`
  padding: 56px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`

export const IconPreviewArt = styled.div<IconPreviewType>`
  color: white;
  opacity: ${({ opactiy }) => opactiy || 1};

  ${({ size }) => css`
    ${size === 'sm' && css`
      width: 18px;
      height: 18px;

      @media screen and (min-width: 640px) {
        width: 24px;
        height: 24px;
      }
    `}

    ${size === 'md' && css`
      width: 32px;
      height: 32px;

      @media screen and (min-width: 640px) {
        width: 40px;
        height: 40px;
      }
    `}

    ${size === 'base' && css`
      width: 56px;
      height: 56px;

      @media screen and (min-width: 640px) {
        width: 72px;
        height: 72px;
      }
    `}
  `}

  svg {
    width: 100%;
    height: 100%;
  }
`

export const IconPreviewSamples = styled.div`
  height: 56px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr)
                         minmax(0, 1fr) minmax(0, 1fr)
                         minmax(0, 1fr);
  
  @media screen and (min-width: 640px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr)
                         minmax(0, 1fr) minmax(0, 1fr)
                         minmax(0, 1fr) minmax(0, 1fr)
                         minmax(0, 1fr) minmax(0, 1fr);
  }
`

export const IconPreviewSamplesItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  &:nth-child(1) { background-color: #F53D6B }
  &:nth-child(2) { background-color: #FF7D52 }
  &:nth-child(3) { background-color: #FFC233 }
  &:nth-child(4) { background-color: #2DCA72 }
  &:nth-child(5) { background-color: #00ACFF }
  &:nth-child(6) {
    display: none;
    background-color: #EB459E;

    @media screen and (min-width: 640px) {
      display: flex;
    }
  }

  &:nth-child(7) {
    display: none;
    background-color: #F75FDE;

    @media screen and (min-width: 640px) {
      display: flex;
    }
  }

  &:nth-child(8) {
    color: black;
    display: none;
    background-color: white;

    @media screen and (min-width: 640px) {
      display: flex;
    }
  }
`

export const IconPreviewActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  @media screen and (min-width: 420px) {
    display: grid;
    gap: 16px;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
`

export const IconInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 40px;
  border-bottom: 1px solid rgba(255,255,255,.04);
`

export const IconInfoItem = styled.div`
  display: flex;
`

export const IconInfoItemTitleBox = styled.div`
  min-width: 106px;
`

export const IconInfoItemTitle = styled.span`
  color: #ffffff;
  font-weight: 600;
`

export const IconInfoItemText = styled.div`
  display: flex;
  color: rgba(255,255,255,.5);
`
