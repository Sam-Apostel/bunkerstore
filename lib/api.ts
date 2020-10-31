import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const storesDirectory = join(process.cwd(), '_stores')

export function getStoreSlugs() {
  return fs.readdirSync(storesDirectory)
}

export function getStoreBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(storesDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllStores(fields: string[] = []) {
  const slugs = getStoreSlugs()
  return slugs
    .map((slug) => getStoreBySlug(slug, fields))
      // TODO: sort stores here (eg: `.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))` )
}
