import Author from './author'

type StoreType = {
  name: string

  slug: string
  title: string
  date: string
  coverImage: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
}

export default StoreType
