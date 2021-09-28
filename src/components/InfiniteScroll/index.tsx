import { ReactNode, useEffect, useRef, useState } from 'react'
import { DefaultTheme, StyledComponent } from 'styled-components'

/* ------| Types |------ */
type InfiniteScrollSettingsType = {
  actual: number,
  next: number,
  perPage: number,
  delay: number
}

type InfiniteScrollType = {
  settings: InfiniteScrollSettingsType
  Sentil: StyledComponent<'div', DefaultTheme, {}, never>
  children: (item: Array<Record<string, string>>) => ReactNode
  data?: Array<Record<string, string>>
}

export const InfiniteScroll = ({
  settings,
  Sentil,
  children,
  data,
}: InfiniteScrollType) => {
  const [items, setItems] = useState<Array<Record<string, string>>>([])
  const [hasMore, setHasMore] = useState(false)

  const sentilRef = useRef<HTMLDivElement>(null)
  const page = useRef({ ...settings })

  useEffect(() => {
    setHasMore(true)
    page.current = { ...settings }

    if (data) {
      const array = [...data].slice(
        page.current.actual,
        page.current.next,
      )

      setItems(array)

      page.current = {
        ...page.current,
        actual: page.current.next + 1,
        next: page.current.next + page.current.perPage,
      }
    }
  }, [data, settings])

  const handleScroll = () => {
    if (data) {
      const array = [...data].slice(
        page.current.actual,
        page.current.next,
      )

      page.current = {
        ...page.current,
        actual: page.current.next + 1,
        next: page.current.next + page.current.perPage,
      }

      const timing = setTimeout(() => {
        setItems(prevState => prevState.concat(array))

        if (page.current.actual > data.length) setHasMore(false)
        clearTimeout(timing)
      }, page.current.delay)
    }
  }

  useEffect(() => {
    const intersection = new IntersectionObserver((entries) => {
      if (entries.some(entry => entry.isIntersecting)) handleScroll()
    })

    if (sentilRef.current) intersection.observe(sentilRef.current)
    return () => intersection.disconnect()
  })

  return (
    <>
      {items && children(items)}
      {hasMore && <Sentil ref={sentilRef} />}
    </>
  )
}
