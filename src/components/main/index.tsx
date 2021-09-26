/* ------| Hooks |------ */
import { CategoriesType } from 'hooks/useIcons'

/* ------| Components |------ */
import { Button } from 'components/button'

/* ------| Styles |------ */
import { MenuToggler } from 'styles/layout'
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

/* ------| Types |------ */
type MainType = {
  category?: CategoriesType
}

export const Main = ({
  category,
}: MainType) => {
  return (
    <Wrapper>
      <Header>
        <MenuToggler>
          <Button
            theme='icons'
            type='button'
            onClick={handleSidebarMenu}
          >
            <Menu />
          </Button>
        </MenuToggler>
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
                href='https://meluiz.com'
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
          {category && category.content.map((icon) => (
            <IconCard key={icon.slug}>
              <IconCardContent>
                <IconCardInner>
                  <IconCardIcon
                    dangerouslySetInnerHTML={{
                      __html: icon.icon,
                    }}
                  />
                  <IconCardText>{icon.name}</IconCardText>
                </IconCardInner>
                <IconCardTag>Free</IconCardTag>
              </IconCardContent>
            </IconCard>
          ))}
        </IconGrid>
      </Content>
    </Wrapper>
  )
}
