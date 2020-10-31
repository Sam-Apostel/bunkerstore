import Container from '../components/container'
import MoreStores from '../components/more-stores'
import HeroStore from '../components/hero-store'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllStores } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Store from '../types/store'

type Props = {
  allStores: Store[]
}

const Index = ({ allStores }: Props) => {
  const heroStore = allStores[0]
  const moreStores = allStores.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroStore && (
            <HeroStore
              title={heroStore.title}
              coverImage={heroStore.coverImage}
              date={heroStore.date}
              author={heroStore.author}
              slug={heroStore.slug}
              excerpt={heroStore.excerpt}
            />
          )}
          {moreStores.length > 0 && <MoreStores stores={moreStores} />}
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allStores = getAllStores([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allStores },
  }
}
