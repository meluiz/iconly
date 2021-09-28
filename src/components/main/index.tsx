import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react'

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
  const [icons, setIcons] = useState<IconsType[]>()
  const [loading, setLoading] = useState(true)
  const sentilRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const page = useRef({
    actual: 0,
    next: 36,
    perPage: 36,
  })

  const handleInputSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setInputSearch(event.target.value)
    if (category) {
      const filtered = category.content.filter(icon => icon.slug.includes(inputSearch))
      setFilteredIcons(filtered)
    }
  }

  useEffect(() => {
    const intersection = new IntersectionObserver((entries) => {
      if (entries.some(entry => entry.isIntersecting)) handleScroll()
    })

    if (sentilRef.current) intersection.observe(sentilRef.current)
    return () => intersection.disconnect()
  })

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
      <Content ref={contentRef}>
        <IconGrid>
          {inputSearch.length > 0 &&
            category &&
            category.content.filter(
              icon => icon.slug.includes(inputSearch),
            ).map((icon) => (
              <IconCard
                role='button'
                key={icon.slug}
                onClick={handleActiveIcon(icon.slugParent, icon.slug)}
              >
                <IconCardContent>
                  <IconCardInner>
                    <IconCardIcon
                      dangerouslySetInnerHTML={{
                        __html: icon.icon,
                      }}
                    />
                    <IconCardText>{icon.slug}</IconCardText>
                  </IconCardInner>
                  <IconCardTag>Free</IconCardTag>
                </IconCardContent>
              </IconCard>
            ))}
          {inputSearch.length === 0 && icons && icons.map((icon) => (
            <IconCard
              role='button'
              key={icon.slug}
              onClick={handleActiveIcon(icon.slugParent, icon.slug)}
            >
              <IconCardContent>
                <IconCardInner>
                  <IconCardIcon
                    dangerouslySetInnerHTML={{
                      __html: icon.icon,
                    }}
                  />
                  <IconCardText>{icon.slug}</IconCardText>
                </IconCardInner>
                <IconCardTag>Free</IconCardTag>
              </IconCardContent>
            </IconCard>
          ))}

          {inputSearch.length === 0 && loading && <CardLoader ref={sentilRef} />}
        </IconGrid>
      </Content>
    </Wrapper>
  )
}
