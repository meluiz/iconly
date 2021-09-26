import Categories from 'data/icons.json'

/* ------| Typing |------ */
export type IconsType = {
  name: string
  icon: string
  isActived: boolean
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

export const useIcons = () => {
  const [categories, setCategories] = useState<CategoriesType[]>(Categories)

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
  }, [])
  
  return {
    categories,
  }
}
