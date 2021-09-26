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
            <NavigationListItem activedCategory>
              <NavigationListLink href='/#'>
                <NavigationListLinkText>All</NavigationListLinkText>
                <NavigationListLinkCounter>125</NavigationListLinkCounter>
              </NavigationListLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavigationListLink href='/#'>
                <NavigationListLinkText>Buildings</NavigationListLinkText>
                <NavigationListLinkCounter>20</NavigationListLinkCounter>
              </NavigationListLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavigationListLink href='/#'>
                <NavigationListLinkText>Business</NavigationListLinkText>
                <NavigationListLinkCounter>18</NavigationListLinkCounter>
              </NavigationListLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavigationListLink href='/#'>
                <NavigationListLinkText>Communication</NavigationListLinkText>
                <NavigationListLinkCounter>16</NavigationListLinkCounter>
              </NavigationListLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavigationListLink href='/#'>
                <NavigationListLinkText>Design</NavigationListLinkText>
                <NavigationListLinkCounter>23</NavigationListLinkCounter>
              </NavigationListLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavigationListLink href='/#'>
                <NavigationListLinkText>Development</NavigationListLinkText>
                <NavigationListLinkCounter>2</NavigationListLinkCounter>
              </NavigationListLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavigationListLink href='/#'>
                <NavigationListLinkText>Device</NavigationListLinkText>
                <NavigationListLinkCounter>8</NavigationListLinkCounter>
              </NavigationListLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavigationListLink href='/#'>
                <NavigationListLinkText>Document</NavigationListLinkText>
                <NavigationListLinkCounter>25</NavigationListLinkCounter>
              </NavigationListLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavigationListLink href='/#'>
                <NavigationListLinkText>Editor</NavigationListLinkText>
                <NavigationListLinkCounter>26</NavigationListLinkCounter>
              </NavigationListLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavigationListLink href='/#'>
                <NavigationListLinkText>Finance</NavigationListLinkText>
                <NavigationListLinkCounter>12</NavigationListLinkCounter>
              </NavigationListLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavigationListLink href='/#'>
                <NavigationListLinkText>Health & Medical</NavigationListLinkText>
                <NavigationListLinkCounter>22</NavigationListLinkCounter>
              </NavigationListLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavigationListLink href='/#'>
                <NavigationListLinkText>Logos</NavigationListLinkText>
                <NavigationListLinkCounter>3</NavigationListLinkCounter>
              </NavigationListLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavigationListLink href='/#'>
                <NavigationListLinkText>Map</NavigationListLinkText>
                <NavigationListLinkCounter>12</NavigationListLinkCounter>
              </NavigationListLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavigationListLink href='/#'>
                <NavigationListLinkText>Media</NavigationListLinkText>
                <NavigationListLinkCounter>45</NavigationListLinkCounter>
              </NavigationListLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavigationListLink href='/#'>
                <NavigationListLinkText>System</NavigationListLinkText>
                <NavigationListLinkCounter>8</NavigationListLinkCounter>
              </NavigationListLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavigationListLink href='/#'>
                <NavigationListLinkText>User & Faces</NavigationListLinkText>
                <NavigationListLinkCounter>7</NavigationListLinkCounter>
              </NavigationListLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavigationListLink href='/#'>
                <NavigationListLinkText>Weather</NavigationListLinkText>
                <NavigationListLinkCounter>15</NavigationListLinkCounter>
              </NavigationListLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavigationListLink href='/#'>
                <NavigationListLinkText>Others</NavigationListLinkText>
                <NavigationListLinkCounter>25</NavigationListLinkCounter>
              </NavigationListLink>
            </NavigationListItem>
          </NavigationList>
        </NavigationGroup>
      </Navigation>
    </Wrapper>
  )
}
