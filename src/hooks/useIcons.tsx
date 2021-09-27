import { MouseEvent, useEffect, useState } from 'react'

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

  return {
    categories,
    iconActivated,
    handleActiveCategory,
    handleActiveIcon,
    handleDeleteActivatedIcon,
  }
}
