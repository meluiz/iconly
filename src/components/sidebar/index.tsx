import { MouseEvent } from 'react'

/* ------| Hooks |------ */
import { CategoriesType } from 'hooks/useIcons'

/* ------| Components |------ */
import { Button } from 'components/button'
import { Menu } from 'react-feather'

/* ------| Styles |------ */
import { MenuToggler } from 'styles/layout'
import {
  BrandIcon,
  BrandName,
  Header,
  HeaderBrand,
  HeaderContainer,
  Navigation,
  NavigationGroup,
  NavigationList,
  NavigationListItem,
  NavigationListLink,
  NavigationListLinkCounter,
  NavigationListLinkGroup,
  NavigationListLinkIcon,
  NavigationListLinkText,
  Wrapper,
} from './styles'

type SidebarType = {
  categories: CategoriesType[]
  category?: CategoriesType
  menuActivated: boolean
  handleActiveCategory: (id: string) => (event: MouseEvent<HTMLAnchorElement>) => void
  handleSidebarMenu: (event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLAnchorElement>) => void
}

export const Sidebar = ({
  categories,
  category,
  menuActivated,
  handleActiveCategory,
  handleSidebarMenu,
}: SidebarType) => {
  return (
    <Wrapper activated={menuActivated}>
      <Header>
        <HeaderContainer>
          <HeaderBrand>
            <BrandIcon />
            <BrandName>iconly</BrandName>
          </HeaderBrand>
          <MenuToggler>
            <Button
              theme='icons'
              type='button'
              onClick={handleSidebarMenu}
            >
              <Menu size={24} />
            </Button>
          </MenuToggler>
        </HeaderContainer>
      </Header>
      <Navigation>
        <NavigationGroup>
          <NavigationList>
            {categories && categories.map((category) => (
              <NavigationListItem key={category.slug} activatedIcons={category.isActivated}>
                <NavigationListLink
                  href='/'
                  onClick={(event) => {
                    handleActiveCategory(category.slug)(event)
                    handleSidebarMenu(event)
                  }}
                >
                  <NavigationListLinkGroup>
                    <NavigationListLinkIcon
                      dangerouslySetInnerHTML={{
                        __html: category.icon,
                      }}
                    />
                    <NavigationListLinkText>{category.name}</NavigationListLinkText>
                  </NavigationListLinkGroup>
                </NavigationListLink>
              </NavigationListItem>
            ))}
          </NavigationList>
        </NavigationGroup>
        <NavigationGroup>
          <NavigationList>
            {category && (
              <NavigationListItem activatedCategory>
                <NavigationListLink href='/#'>
                  <NavigationListLinkText>All</NavigationListLinkText>
                  <NavigationListLinkCounter>{category.content.length}</NavigationListLinkCounter>
                </NavigationListLink>
              </NavigationListItem>
            )}
          </NavigationList>
        </NavigationGroup>
      </Navigation>
    </Wrapper>
  )
}
