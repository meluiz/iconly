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
  const [menuActived, setMenuActived] = useState<boolean>(false)
  const {
    categories,
    iconActived,
    handleActiveCategory,
  } = useIcons()

  const handleSidebarMenu = (event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setMenuActived(actived => !actived)
  }

  return (
    <Wrapper>
      <IconSingle iconActived={iconActived} />
      <Container>
        <Sidebar
          menuActived={menuActived}
          categories={categories}
          category={categories.find(category => category.isActived === true)}
          handleActiveCategory={handleActiveCategory}
          handleSidebarMenu={handleSidebarMenu}
        />
        <Main
          category={categories.find(category => category.isActived === true)}
          handleSidebarMenu={handleSidebarMenu}
        />
      </Container>
    </Wrapper>
  )
}
