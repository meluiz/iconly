/* ------| Styles |------ */
import { Button } from 'components/button'
import { Anchor, Download, X, Copy } from 'react-feather'
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
      <Container>
        <Box>
          <BoxHeader>
            <BoxIcon>
              <BoxIconName>Anchor</BoxIconName>
              <BoxIconBadge>Free</BoxIconBadge>
            </BoxIcon>
            <Button
              theme='icons'
              type='button'
            >
              <X size={20} />
            </Button>
          </BoxHeader>
          <IconPreviewBox>
            <IconPreview>
              <IconPreviewExposure>
                <IconPreviewArt size='sm' opactiy={0.3}>
                  <Anchor />
                </IconPreviewArt>
                <IconPreviewArt size='md' opactiy={0.5}>
                  <Anchor />
                </IconPreviewArt>
                <IconPreviewArt size='base' opactiy={1}>
                  <Anchor />
                </IconPreviewArt>
                <IconPreviewArt size='md' opactiy={0.5}>
                  <Anchor />
                </IconPreviewArt>
                <IconPreviewArt size='sm' opactiy={0.3}>
                  <Anchor />
                </IconPreviewArt>
              </IconPreviewExposure>
              <IconPreviewSamples>
                <IconPreviewSamplesItem>
                  <Anchor size={20} />
                </IconPreviewSamplesItem>
                <IconPreviewSamplesItem>
                  <Anchor size={20} />
                </IconPreviewSamplesItem>
                <IconPreviewSamplesItem>
                  <Anchor size={20} />
                </IconPreviewSamplesItem>
                <IconPreviewSamplesItem>
                  <Anchor size={20} />
                </IconPreviewSamplesItem>
                <IconPreviewSamplesItem>
                  <Anchor size={20} />
                </IconPreviewSamplesItem>
                <IconPreviewSamplesItem>
                  <Anchor size={20} />
                </IconPreviewSamplesItem>
                <IconPreviewSamplesItem>
                  <Anchor size={20} />
                </IconPreviewSamplesItem>
                <IconPreviewSamplesItem>
                  <Anchor size={20} />
                </IconPreviewSamplesItem>
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
              <IconInfoItemText>Feather</IconInfoItemText>
            </IconInfoItem>
          </IconInfo>
        </Box>
      </Container>
    </Wrapper>
  )
}
