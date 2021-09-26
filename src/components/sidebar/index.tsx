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
  menuActived: boolean
  handleActiveCategory: (id: string) => (event: MouseEvent<HTMLAnchorElement>) => void
  handleSidebarMenu: (event: MouseEvent<HTMLButtonElement>) => void
}

export const Sidebar = ({
  categories,
  category,
  menuActived,
  handleActiveCategory,
  handleSidebarMenu,
}: SidebarType) => {
  return (
    <Wrapper actived={menuActived}>
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
              <NavigationListItem key={category.slug} activedIcons={category.isActived}>
                <NavigationListLink
                  href='/'
                  onClick={handleActiveCategory(category.slug)}
                >
                  <NavigationListLinkGroup>
                    <NavigationListLinkIcon
                      dangerouslySetInnerHTML={{
                        __html: category.icon,
                      }}
                    />
                    <NavigationListLinkText>{category.name}</NavigationListLinkText>
                  </NavigationListLinkGroup>
                  <NavigationListLinkCounter>{category.content.length}</NavigationListLinkCounter>
                </NavigationListLink>
              </NavigationListItem>
            ))}
          </NavigationList>
        </NavigationGroup>
        <NavigationGroup>
          <NavigationList>
            {category && (
              <NavigationListItem activedCategory>
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
