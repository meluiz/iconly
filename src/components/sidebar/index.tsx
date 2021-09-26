import { MouseEvent } from 'react'

/* ------| Hooks |------ */
import { CategoriesType } from 'hooks/useIcons'

/* ------| Components |------ */
import { Button } from 'components/button'

/* ------| Styles |------ */
import { Feather, GitHub, Menu, Terminal } from 'react-feather'
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
  handleActiveCategory: (id: string) => (event: MouseEvent<HTMLAnchorElement>) => void
}

export const Sidebar = ({
  categories,
  handleActiveCategory,
}: SidebarType) => {
  return (
    <Wrapper>
      <Header>
        <HeaderContainer>
          <HeaderBrand>
            <BrandIcon />
            <BrandName>iconly</BrandName>
          </HeaderBrand>
          <Button
            theme='icons'
            type='button'
          >
            <Menu size={24} />
          </Button>
        </HeaderContainer>
      </Header>
      <Navigation>
        <NavigationGroup>
          <NavigationList>
            <NavigationListItem>
              <NavigationListLink href='/#'>
                <NavigationListLinkGroup>
                  <NavigationListLinkIcon>
                    <Feather size={18} />
                  </NavigationListLinkIcon>
                  <NavigationListLinkText>Feather</NavigationListLinkText>
                </NavigationListLinkGroup>
                <NavigationListLinkCounter>125</NavigationListLinkCounter>
              </NavigationListLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavigationListLink href='/#'>
                <NavigationListLinkGroup>
                  <NavigationListLinkIcon>
                    <GitHub size={18} />
                  </NavigationListLinkIcon>
                  <NavigationListLinkText>Octicons</NavigationListLinkText>
                </NavigationListLinkGroup>
                <NavigationListLinkCounter>235</NavigationListLinkCounter>
              </NavigationListLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavigationListLink href='/#'>
                <NavigationListLinkGroup>
                  <NavigationListLinkIcon>
                    <Terminal size={18} />
                  </NavigationListLinkIcon>
                  <NavigationListLinkText>Tabler</NavigationListLinkText>
                </NavigationListLinkGroup>
                <NavigationListLinkCounter>235</NavigationListLinkCounter>
              </NavigationListLink>
            </NavigationListItem>
            <NavigationListItem activedIcons>
              <NavigationListLink href='/#'>
                <NavigationListLinkGroup>
                  <NavigationListLinkIcon>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='18' height='18' fill='currentColor'>
                      <path fill='none' d='M0 0h24v24H0z' />
                      <path d='M6.364 6l8.784 9.663.72-.283c1.685-.661 2.864-2.156 3.092-3.896A6.502 6.502 0 0 1 12.077 6H6.363zM14 5a4.5 4.5 0 0 0 6.714 3.918c.186.618.286 1.271.286 1.947 0 2.891-1.822 5.364-4.4 6.377L20 21H3V4h11.111A4.515 4.515 0 0 0 14 5zm4.5 2.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM5 7.47V19h10.48L5 7.47z' />
                    </svg>
                  </NavigationListLinkIcon>
                  <NavigationListLinkText>Remix</NavigationListLinkText>
                </NavigationListLinkGroup>
                <NavigationListLinkCounter>235</NavigationListLinkCounter>
              </NavigationListLink>
            </NavigationListItem>
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
