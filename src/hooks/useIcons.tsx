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
    isActived: boolean
    url: string
    icon: string
    total: number
    content: IconsType[]
}

export type IconActivedType = {
  icon: IconsType,
  category: CategoriesType,
}

export const useIcons = () => {
  const [categories, setCategories] = useState<CategoriesType[]>(Categories)
  const [iconActived, setIconActived] = useState<IconActivedType>()

  useEffect(() => {
    const actived = categories.find(icon => icon.isActived === true)
    if (!actived) {
      setCategories((oldCategories) => oldCategories.map(icon => {
        if (icon.slug === 'feathericons') {
          return {
            ...icon,
            isActived: true,
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
          isActived: true,
        }
      }
      return {
        ...category,
        isActived: false,
      }
    }))
  }

  const handleActiveIcon = (parentId: string, id: string) => (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault()

    const category = categories.find(category => category.slug === parentId)
    const actived = category?.content.find(icon => icon.slug === id)

    if (category && actived) {
      return setIconActived({
        icon: actived,
        category: category,
      })
    }

    return setIconActived(undefined)
  }

  return {
    categories,
    iconActived,
    handleActiveCategory,
    handleActiveIcon,
  }
}
