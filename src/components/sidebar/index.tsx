/* ------| Components |------ */
import { Button } from 'components/button'

/* ------| Styles |------ */
import { Menu } from 'react-feather'
import {
  BrandIcon,
  BrandName,
  Header,
  HeaderBrand,
  HeaderContainer,
  Wrapper,
} from './styles'

export const Sidebar = () => {
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
            <Menu
              size={24}
            />
          </Button>
        </HeaderContainer>
      </Header>
    </Wrapper>
  )
}
