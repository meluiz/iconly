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
