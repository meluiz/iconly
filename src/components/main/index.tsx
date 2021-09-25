/* ------| Components |------ */
import { Button } from 'components/button'

/* ------| Styles |------ */
import { Codepen, GitHub, Linkedin, Search } from 'react-feather'
import {
  Content,
  Form,
  FormContent,
  FormInput,
  Header,
  IconCard,
  IconCardContent,
  IconCardIcon,
  IconCardInner,
  IconCardTag,
  IconCardText,
  IconGrid,
  Social,
  SocialList,
  SocialListItem,
  SocialListLink,
  SocialListLinkAlt,
  SocialListLinkAltText,
  Wrapper,
} from './styles'

export const Main = () => {
  return (
    <Wrapper>
      <Header>
        <Form>
          <FormContent>
            <Button
              theme='icons'
              type='button'
            >
              <Search size={20} />
            </Button>
            <FormInput
              placeholder='Search for an icon'
            />
          </FormContent>
        </Form>
        <Social>
          <SocialList>
            <SocialListItem>
              <SocialListLink
                href='https://github.com/meluiz'
                target='_blank'
              >
                <GitHub size={20} />
              </SocialListLink>
            </SocialListItem>
            <SocialListItem>
              <SocialListLink
                href='https://codepen.io/meluiz'
                target='_blank'
              >
                <Codepen size={20} />
              </SocialListLink>
            </SocialListItem>
            <SocialListItem>
              <SocialListLink
                href='https://www.linkedin.com/in/luiz-felipe-133b4a206/'
                target='_blank'
              >
                <Linkedin size={20} />
              </SocialListLink>
            </SocialListItem>
            <SocialListItem>
              <SocialListLinkAlt
                href='https://www.linkedin.com/in/luiz-felipe-133b4a206/'
                target='_blank'
              >
                <SocialListLinkAltText>meluiz.com</SocialListLinkAltText>
              </SocialListLinkAlt>
            </SocialListItem>
          </SocialList>
        </Social>
      </Header>
      <Content>
        <IconGrid>
          <IconCard>
            <IconCardContent>
              <IconCardInner>
                <IconCardIcon>
                  <Codepen size={20} />
                </IconCardIcon>
                <IconCardText>Codepen</IconCardText>
              </IconCardInner>
              <IconCardTag>Free</IconCardTag>
            </IconCardContent>
          </IconCard>
          <IconCard>
            <IconCardContent>
              <IconCardInner>
                <IconCardIcon>
                  <Codepen size={20} />
                </IconCardIcon>
                <IconCardText>Codepen</IconCardText>
              </IconCardInner>
              <IconCardTag>Free</IconCardTag>
            </IconCardContent>
          </IconCard>
          <IconCard>
            <IconCardContent>
              <IconCardInner>
                <IconCardIcon>
                  <Codepen size={20} />
                </IconCardIcon>
                <IconCardText>Codepen</IconCardText>
              </IconCardInner>
              <IconCardTag>Free</IconCardTag>
            </IconCardContent>
          </IconCard>
          <IconCard>
            <IconCardContent>
              <IconCardInner>
                <IconCardIcon>
                  <Codepen size={20} />
                </IconCardIcon>
                <IconCardText>Codepen</IconCardText>
              </IconCardInner>
              <IconCardTag>Free</IconCardTag>
            </IconCardContent>
          </IconCard>
          <IconCard>
            <IconCardContent>
              <IconCardInner>
                <IconCardIcon>
                  <Codepen size={20} />
                </IconCardIcon>
                <IconCardText>Codepen</IconCardText>
              </IconCardInner>
              <IconCardTag>Free</IconCardTag>
            </IconCardContent>
          </IconCard>
          <IconCard>
            <IconCardContent>
              <IconCardInner>
                <IconCardIcon>
                  <Codepen size={20} />
                </IconCardIcon>
                <IconCardText>Codepen</IconCardText>
              </IconCardInner>
              <IconCardTag>Free</IconCardTag>
            </IconCardContent>
          </IconCard>
          <IconCard>
            <IconCardContent>
              <IconCardInner>
                <IconCardIcon>
                  <Codepen size={20} />
                </IconCardIcon>
                <IconCardText>Codepen</IconCardText>
              </IconCardInner>
              <IconCardTag>Free</IconCardTag>
            </IconCardContent>
          </IconCard>
          <IconCard>
            <IconCardContent>
              <IconCardInner>
                <IconCardIcon>
                  <Codepen size={20} />
                </IconCardIcon>
                <IconCardText>Codepen</IconCardText>
              </IconCardInner>
              <IconCardTag>Free</IconCardTag>
            </IconCardContent>
          </IconCard>
          <IconCard>
            <IconCardContent>
              <IconCardInner>
                <IconCardIcon>
                  <Codepen size={20} />
                </IconCardIcon>
                <IconCardText>Codepen</IconCardText>
              </IconCardInner>
              <IconCardTag>Free</IconCardTag>
            </IconCardContent>
          </IconCard>
          <IconCard>
            <IconCardContent>
              <IconCardInner>
                <IconCardIcon>
                  <Codepen size={20} />
                </IconCardIcon>
                <IconCardText>Codepen</IconCardText>
              </IconCardInner>
              <IconCardTag>Free</IconCardTag>
            </IconCardContent>
          </IconCard>
        </IconGrid>
      </Content>
    </Wrapper>
  )
}
