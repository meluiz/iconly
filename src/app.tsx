import { MouseEvent, useState } from 'react'

/* ------| Hooks |------ */
import { useIcons } from 'hooks/useIcons'

/* ------| Components |------ */
import { IconSingle } from 'components/icon-single'
import { Main } from 'components/main'
import { Sidebar } from 'components/sidebar'

/* ------| Styles |------ */
import { Container, Wrapper } from 'styles/layout'

export function App () {
  const [menuActivated, setMenuActivated] = useState<boolean>(false)
  const {
    categories,
    iconActivated,
    handleActiveCategory,
    handleActiveIcon,
    handleDeleteActivatedIcon,
  } = useIcons()

  const handleSidebarMenu = (event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setMenuActivated(Activated => !Activated)
  }

  return (
    <Wrapper>
      <IconSingle
        iconActivated={iconActivated}
        handleDeleteActivatedIcon={handleDeleteActivatedIcon}
      />
      <Container>
        <Sidebar
          menuActivated={menuActivated}
          categories={categories}
          category={categories.find(category => category.isActivated === true)}
          handleActiveCategory={handleActiveCategory}
          handleSidebarMenu={handleSidebarMenu}
        />
        <Main
          category={categories.find(category => category.isActivated === true)}
          handleSidebarMenu={handleSidebarMenu}
          handleActiveIcon={handleActiveIcon}
        />
      </Container>
    </Wrapper>
  )
}
