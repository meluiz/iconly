import { MouseEvent, useState } from 'react'

/* ------| Hooks |------ */
import { useIcons } from 'hooks/useIcons'

/* ------| Components |------ */
import { Main } from 'components/main'
import { Sidebar } from 'components/sidebar'

/* ------| Styles |------ */
import { Container, Wrapper } from 'styles/layout'

export function App () {
  const [menuActived, setMenuActived] = useState<boolean>(false)
  const {
    categories,
    handleActiveCategory,
  } = useIcons()

  const handleSidebarMenu = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setMenuActived(actived => !actived)
  }

  return (
    <Wrapper>
      <Container>
        <Sidebar
          menuActived={menuActived}
          categories={categories}
          category={categories.find(category => category.isActived === true)}
          handleActiveCategory={handleActiveCategory}
          handleSidebarMenu={handleSidebarMenu}
        />
        <Main
          handleSidebarMenu={handleSidebarMenu}
          category={categories.find(category => category.isActived === true)}
        />
      </Container>
    </Wrapper>
  )
}
