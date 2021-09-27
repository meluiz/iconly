import { MouseEvent, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

/* ------| Typing |------ */
import Categories from 'data/icons.json'

/* ------| Typing |------ */
export type IconsType = {
  name: string
  icon: string
  slug: string
  tag: null
  slugParent: string
}

export type CategoriesType = {
    name: string
    slug: string
    isActivated: boolean
    url: string
    icon: string
    total: number
    content: IconsType[]
}

export type IconActivatedType = {
  icon: IconsType,
  category: CategoriesType,
}

export const useIcons = () => {
  const [categories, setCategories] = useState<CategoriesType[]>(Categories)
  const [iconActivated, setIconActivated] = useState<IconActivatedType>()

  useEffect(() => {
    const activated = categories.find(icon => icon.isActivated === true)
    if (!activated) {
      setCategories((oldCategories) => oldCategories.map(icon => {
        if (icon.slug === 'feathericons') {
          return {
            ...icon,
            isActivated: true,
          }
        }
        return icon
      }))
    }
  }, [categories])

  const handleActiveCategory = (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setCategories((oldCategories) => oldCategories.map((category) => {
      if (category.slug === id) {
        return {
          ...category,
          isActivated: true,
        }
      }
      return {
        ...category,
        isActivated: false,
      }
    }))
  }

  const handleActiveIcon = (parentId: string, id: string) => (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault()

    const category = categories.find(category => category.slug === parentId)
    const activated = category?.content.find(icon => icon.slug === id)

    if (category && activated) {
      return setIconActivated({
        icon: activated,
        category: category,
      })
    }

    return setIconActivated(undefined)
  }

  const handleDeleteActivatedIcon = (event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIconActivated(undefined)
  }

  const handleDownloadActivatedIcon = (icon: IconsType) => (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    const element = document.createElement('a')
    const file = new Blob([icon.icon], { type: 'text/svg' })

    element.href = URL.createObjectURL(file)
    element.setAttribute('target', '_blank')
    element.download = `${icon.slugParent}-${icon.slug}.svg`

    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)

    toast(
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4px',
      }}
      >
        <svg width='24' height='24' fill='none' viewBox='0 0 24 24'>
          <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75' />
        </svg>  SVG Downloaded
      </div>
      , {
        position: 'bottom-center',
        closeButton: false,
        className: 'iconly-toast iconly-toast-download',
        hideProgressBar: true,
        autoClose: 3000,
        pauseOnHover: false,
      })
  }

  const handleCopyActivatedIcon = (icon: IconsType) => (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    navigator.clipboard.writeText(icon.icon)
    toast(
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4px',
      }}
      >
        <svg width='24' height='24' fill='none' viewBox='0 0 24 24'>
          <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75' />
        </svg>  SVG Copied
      </div>
      , {
        position: 'bottom-center',
        closeButton: false,
        className: 'iconly-toast iconly-toast-copy',
        hideProgressBar: true,
        autoClose: 3000,
        pauseOnHover: false,
      })
  }

  return {
    categories,
    iconActivated,
    handleActiveCategory,
    handleActiveIcon,
    handleDownloadActivatedIcon,
    handleCopyActivatedIcon,
    handleDeleteActivatedIcon,
  }
}
