import { ChangeEvent, MouseEvent, useEffect, useState } from 'react'

/* ------| Hooks |------ */
import { CategoriesType, IconsType } from 'hooks/useIcons'

/* ------| Components |------ */
import { Button } from 'components/button'
import {
  Codepen,
  GitHub,
  Linkedin,
  Menu,
  Search,
} from 'react-feather'

/* ------| Styles |------ */
import { MenuToggler } from 'styles/layout'
import {
  CardLoader,
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
  IconGridInfinitScroll,
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
  handleSidebarMenu: (event: MouseEvent<HTMLButtonElement>) => void
  handleActiveIcon: (parentId: string, id: string) => (event: MouseEvent<HTMLDivElement>) => void
}

export const Main = ({
  category,
  handleSidebarMenu,
  handleActiveIcon,
}: MainType) => {
  const [inputSearch, setInputSearch] = useState('')
  const [filteredIcons, setFilteredIcons] = useState<IconsType[] | undefined>()

  const handleInputSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setInputSearch(event.target.value)
    if (category) {
      const filtered = category.content.filter(icon => icon.slug.includes(inputSearch))
      setFilteredIcons(filtered)
    }
  }

  useEffect(() => { setInputSearch('') }, [category])

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
              value={inputSearch}
              placeholder='Search for an icon'
              onChange={handleInputSearch}
            />
          </FormContent>
        </Form>
        <Social>
          <SocialList>
            <SocialListItem>
              <SocialListLink
                href='https://github.com/meluiz/Iconly'
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
          {inputSearch.length === 0 && category && (
            <IconGridInfinitScroll
              settings={{
                actual: 0,
                next: 36,
                perPage: 36,
                delay: 600,
              }}
              data={category.content}
              Sentil={CardLoader}
            >
              {(items) => items.map((icon) => (
                <IconCard
                  role='button'
                  key={icon.slug}
                  onClick={handleActiveIcon(icon.slugParent, icon.slug)}
                >
                  <IconCardContent>
                    <IconCardInner>
                      <IconCardIcon
                        dangerouslySetInnerHTML={{
                          __html: `${icon.icon}`,
                        }}
                      />
                      <IconCardText>{icon.slug}</IconCardText>
                    </IconCardInner>
                    <IconCardTag>Free</IconCardTag>
                  </IconCardContent>
                </IconCard>
              ))}
            </IconGridInfinitScroll>
          )}

          {inputSearch.length > 0 && filteredIcons && (
            <IconGridInfinitScroll
              settings={{
                actual: 0,
                next: 36,
                perPage: 36,
                delay: 600,
              }}
              data={filteredIcons}
              Sentil={CardLoader}
            >
              {(items) => items.map((icon) => (
                <IconCard
                  role='button'
                  key={icon.slug}
                  onClick={handleActiveIcon(icon.slugParent, icon.slug)}
                >
                  <IconCardContent>
                    <IconCardInner>
                      <IconCardIcon
                        dangerouslySetInnerHTML={{
                          __html: `${icon.icon}`,
                        }}
                      />
                      <IconCardText>{icon.slug}</IconCardText>
                    </IconCardInner>
                    <IconCardTag>Free</IconCardTag>
                  </IconCardContent>
                </IconCard>
              ))}
            </IconGridInfinitScroll>
          )}
        </IconGrid>
      </Content>
    </Wrapper>
  )
}
