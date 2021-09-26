/* ------| Hooks |------ */
import { useIcons } from 'hooks/useIcons'

/* ------| Components |------ */
import { Main } from 'components/main'
import { Sidebar } from 'components/sidebar'

/* ------| Styles |------ */
import { Container, Wrapper } from 'styles/layout'

export function App () {
  return (
    <Wrapper>
      <Container>
        <Sidebar />
        <Main />
      </Container>
    </Wrapper>
  )
}
