import {Layout} from '../../src/components/Layout'
import styles from '../pokemon/index.module.less'
import ImagePanel from '../../src/components/imagePanel/ImagePanel'

export default function Home({post}) {
    return (
        <Layout>
            <main>
                <h1 className="title">
                    Pokemon Cards
                </h1>

                <div className={styles.pokemonList}>
                    {
                        post.data.map((item) => (
                            <ImagePanel key={item.id} url={item.images.small} name={item.name}/>
                        ))
                    }
                </div>
            </main>
        </Layout>
    )
}

// This also gets called at build time
export async function getStaticProps() {
    const res = await fetch(`https://api.pokemontcg.io/v2/cards`)
    const post = await res.json()

    // Pass post data to the page via props
    return { props: { post },
    revalidate: 1,}
}
