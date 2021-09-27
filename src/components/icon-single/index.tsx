import { MouseEvent } from 'react'
import { AnimatePresence } from 'framer-motion'

/* ------| Components |------ */
import { Button } from 'components/button'
import { Download, X, Copy } from 'react-feather'

/* ------| Styles |------ */
import {
  Box,
  BoxHeader,
  BoxIcon,
  BoxIconBadge,
  BoxIconName,
  Container,
  IconInfo,
  IconInfoItem,
  IconInfoItemText,
  IconInfoItemTitle,
  IconInfoItemTitleBox,
  IconPreview,
  IconPreviewActions,
  IconPreviewArt,
  IconPreviewBox,
  IconPreviewExposure,
  IconPreviewSamples,
  IconPreviewSamplesItem,
  Wrapper,
} from './styles'

/* ------| Types |------ */
import { IconActivatedType, IconsType } from 'hooks/useIcons'
type IconSingleType = {
  iconActivated?: IconActivatedType
  handleDownloadActivatedIcon: (icon: IconsType) => (event: MouseEvent<HTMLButtonElement>) => void
  handleCopyActivatedIcon: (icon: IconsType) => (event: MouseEvent<HTMLButtonElement>) => void
  handleDeleteActivatedIcon: (event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLDivElement>) => void
}

export const IconSingle = ({
  iconActivated,
  handleDownloadActivatedIcon,
  handleCopyActivatedIcon,
  handleDeleteActivatedIcon,
}: IconSingleType) => {
  const handleStopPropagation = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation()

  return (
    <AnimatePresence>
      {iconActivated && (
        <Wrapper>
          <Container
            onClick={handleDeleteActivatedIcon}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: {
                duration: 0.150,
              },
            }}
          >
            <Box
              onClick={handleStopPropagation}
              initial={{ left: 512 }}
              animate={{ left: 0 }}
              exit={{ left: 512 }}
            >
              <BoxHeader>
                <BoxIcon>
                  <BoxIconName>Anchor</BoxIconName>
                  <BoxIconBadge>Free</BoxIconBadge>
                </BoxIcon>
                <Button
                  theme='icons'
                  type='button'
                  onClick={handleDeleteActivatedIcon}
                >
                  <X size={20} />
                </Button>
              </BoxHeader>
              <IconPreviewBox>
                <IconPreview>
                  <IconPreviewExposure>
                    <IconPreviewArt
                      size='sm'
                      opactiy={0.3}
                      dangerouslySetInnerHTML={{
                        __html: iconActivated.icon.icon,
                      }}
                    />
                    <IconPreviewArt
                      size='md'
                      opactiy={0.5}
                      dangerouslySetInnerHTML={{
                        __html: iconActivated.icon.icon,
                      }}
                    />
                    <IconPreviewArt
                      size='base'
                      opactiy={1}
                      dangerouslySetInnerHTML={{
                        __html: iconActivated.icon.icon,
                      }}
                    />
                    <IconPreviewArt
                      size='md'
                      opactiy={0.5}
                      dangerouslySetInnerHTML={{
                        __html: iconActivated.icon.icon,
                      }}
                    />
                    <IconPreviewArt
                      size='sm'
                      opactiy={0.3}
                      dangerouslySetInnerHTML={{
                        __html: iconActivated.icon.icon,
                      }}
                    />
                  </IconPreviewExposure>
                  <IconPreviewSamples>
                    <IconPreviewSamplesItem
                      dangerouslySetInnerHTML={{
                        __html: iconActivated.icon.icon,
                      }}
                    />
                    <IconPreviewSamplesItem
                      dangerouslySetInnerHTML={{
                        __html: iconActivated.icon.icon,
                      }}
                    />
                    <IconPreviewSamplesItem
                      dangerouslySetInnerHTML={{
                        __html: iconActivated.icon.icon,
                      }}
                    />
                    <IconPreviewSamplesItem
                      dangerouslySetInnerHTML={{
                        __html: iconActivated.icon.icon,
                      }}
                    />
                    <IconPreviewSamplesItem
                      dangerouslySetInnerHTML={{
                        __html: iconActivated.icon.icon,
                      }}
                    />
                    <IconPreviewSamplesItem
                      dangerouslySetInnerHTML={{
                        __html: iconActivated.icon.icon,
                      }}
                    />
                    <IconPreviewSamplesItem
                      dangerouslySetInnerHTML={{
                        __html: iconActivated.icon.icon,
                      }}
                    />
                    <IconPreviewSamplesItem
                      dangerouslySetInnerHTML={{
                        __html: iconActivated.icon.icon,
                      }}
                    />
                  </IconPreviewSamples>
                </IconPreview>
                <IconPreviewActions>
                  <Button
                    theme='text'
                    type='button'
                    icon={<Download />}
                    onClick={handleDownloadActivatedIcon(iconActivated.icon)}
                  >
                    Download
                  </Button>
                  <Button
                    theme='text'
                    type='button'
                    icon={<Copy />}
                    onClick={handleCopyActivatedIcon(iconActivated.icon)}
                  >
                    Copy
                  </Button>
                </IconPreviewActions>
              </IconPreviewBox>
              <IconInfo>
                <IconInfoItem>
                  <IconInfoItemTitleBox>
                    <IconInfoItemTitle>Category</IconInfoItemTitle>
                  </IconInfoItemTitleBox>
                  <IconInfoItemText>{iconActivated.category.name}</IconInfoItemText>
                </IconInfoItem>
              </IconInfo>
            </Box>
          </Container>
        </Wrapper>
      )}
    </AnimatePresence>
  )
}
