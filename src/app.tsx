import { MouseEvent, useState } from 'react'

/* ------| Hooks |------ */
import { useIcons } from 'hooks/useIcons'

/* ------| Components |------ */
import { ToastContainer } from 'react-toastify'
import { IconSingle } from 'components/icon-single'
import { Main } from 'components/main'
import { Sidebar } from 'components/sidebar'

/* ------| Styles |------ */
import 'react-toastify/dist/ReactToastify.css'
import { Container, Wrapper } from 'styles/layout'

export function App () {
  const [menuActivated, setMenuActivated] = useState<boolean>(false)
  const {
    categories,
    iconActivated,
    handleActiveCategory,
    handleActiveIcon,
    handleDownloadActivatedIcon,
    handleCopyActivatedIcon,
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
        handleCopyActivatedIcon={handleCopyActivatedIcon}
        handleDownloadActivatedIcon={handleDownloadActivatedIcon}
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
      <ToastContainer />
    </Wrapper>
  )
}
