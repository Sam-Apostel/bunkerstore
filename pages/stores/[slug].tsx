import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import StoreBody from '../../components/store-body'
import Header from '../../components/header'
import StoreHeader from '../../components/store-header'
import Layout from '../../components/layout'
import { getStoreBySlug, getAllStores } from '../../lib/api'
import StoreTitle from '../../components/store-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import StoreType from '../../types/store'

type Props = {
    store: StoreType
    moreStores: StoreType[]
    preview?: boolean
}

const Store = ({ store, moreStores, preview }: Props) => {
    const router = useRouter()
    if (!router.isFallback && !store?.slug) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <Layout preview={preview}>
            <Container>
                <Header store={store} />
                {router.isFallback ? (
                    <StoreTitle>Loading…</StoreTitle>
                ) : (
                    <>
                        <article className="mb-32">
                            <Head>
                                <title>
                                    {store.title} | Next.js Blog Example with {CMS_NAME}
                                </title>
                                <meta property="og:image" content={store.ogImage.url} />
                            </Head>
                            <StoreHeader
                                title={store.title}
                                coverImage={store.coverImage}
                                date={store.date}
                                author={store.author}
                            />
                            <StoreBody content={store.content} />
                        </article>
                    </>
                )}
            </Container>
        </Layout>
    )
}

export default Store

type Params = {
    params: {
        slug: string
    }
}

export async function getStaticProps({ params }: Params) {
    const store = getStoreBySlug(params.slug, [
        'name',
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
    ])
    const content = await markdownToHtml(store.content || '')

    return {
        props: {
            store: {
                ...store,
                content,
            },
        },
    }
}

export async function getStaticPaths() {
    const stores = getAllStores(['slug'])

    return {
        paths: stores.map((store) => {
            return {
                params: {
                    slug: store.slug,
                },
            }
        }),
        fallback: false,
    }
}
