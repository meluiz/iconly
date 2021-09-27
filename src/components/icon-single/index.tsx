/* ------| Styles |------ */
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

export const IconSingle = () => {
  return (
        <Wrapper>
          <Container
            onClick={handleDeleteActivedIcon}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
                  onClick={handleDeleteActivedIcon}
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
                        __html: iconActived.icon.icon,
                      }}
                    />
                    <IconPreviewArt
                      size='md'
                      opactiy={0.5}
                      dangerouslySetInnerHTML={{
                        __html: iconActived.icon.icon,
                      }}
                    />
                    <IconPreviewArt
                      size='base'
                      opactiy={1}
                      dangerouslySetInnerHTML={{
                        __html: iconActived.icon.icon,
                      }}
                    />
                    <IconPreviewArt
                      size='md'
                      opactiy={0.5}
                      dangerouslySetInnerHTML={{
                        __html: iconActived.icon.icon,
                      }}
                    />
                    <IconPreviewArt
                      size='sm'
                      opactiy={0.3}
                      dangerouslySetInnerHTML={{
                        __html: iconActived.icon.icon,
                      }}
                    />
                  </IconPreviewExposure>
                  <IconPreviewSamples>
                    <IconPreviewSamplesItem
                      dangerouslySetInnerHTML={{
                        __html: iconActived.icon.icon,
                      }}
                    />
                    <IconPreviewSamplesItem
                      dangerouslySetInnerHTML={{
                        __html: iconActived.icon.icon,
                      }}
                    />
                    <IconPreviewSamplesItem
                      dangerouslySetInnerHTML={{
                        __html: iconActived.icon.icon,
                      }}
                    />
                    <IconPreviewSamplesItem
                      dangerouslySetInnerHTML={{
                        __html: iconActived.icon.icon,
                      }}
                    />
                    <IconPreviewSamplesItem
                      dangerouslySetInnerHTML={{
                        __html: iconActived.icon.icon,
                      }}
                    />
                    <IconPreviewSamplesItem
                      dangerouslySetInnerHTML={{
                        __html: iconActived.icon.icon,
                      }}
                    />
                    <IconPreviewSamplesItem
                      dangerouslySetInnerHTML={{
                        __html: iconActived.icon.icon,
                      }}
                    />
                    <IconPreviewSamplesItem
                      dangerouslySetInnerHTML={{
                        __html: iconActived.icon.icon,
                      }}
                    />
                  </IconPreviewSamples>
                </IconPreview>
                <IconPreviewActions>
                  <Button
                    theme='text'
                    type='button'
                    icon={<Download />}
                  >
                    Download
                  </Button>
                  <Button
                    theme='text'
                    type='button'
                    icon={<Copy />}
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
                  <IconInfoItemText>{iconActived.category.name}</IconInfoItemText>
                </IconInfoItem>
              </IconInfo>
            </Box>
          </Container>
        </Wrapper>
  )
}
