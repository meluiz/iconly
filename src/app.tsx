/* ------| Hooks |------ */
import { useIcons } from 'hooks/useIcons'

/* ------| Components |------ */
import { Main } from 'components/main'
import { Sidebar } from 'components/sidebar'

/* ------| Styles |------ */
import { Container, Wrapper } from 'styles/layout'

export function App () {
  const {
    categories,
    handleActiveCategory,
  } = useIcons()
  return (
    <Wrapper>
      <Container>
        <Sidebar
          categories={categories}
          handleActiveCategory={handleActiveCategory}
        />
      </Container>
    </Wrapper>
  )
}
