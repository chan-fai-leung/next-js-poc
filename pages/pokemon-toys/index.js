import Head from 'next/head'
import {Layout} from '../../components/layout'
import styles from './index.module.less'
import { useRouter } from 'next/router'
import ImagePanel from '../../components/image-panel/image-panel'
import {Button} from '@material-ui/core';
import {Skeleton} from '@material-ui/lab';

export default function Home({post}) {
    const router = useRouter();

    // console.log(router.isFallback);
    // // if (true) {
    //     return <Layout>
    //         {
    //             for(let i = 0; i < 5; i++) {
    //                 return (
    //                     <div className={styles.pokemonList}>
    //             z</div>
    //             )
    //             }
    //         }
    //         <Skeleton variant="rect" width={210} height={118}/>
    //         <Skeleton />
    //
    //     </Layout>
    // // }

    return (
        <Layout>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className="title">
                    Pokemon toys
                </h1>

                <div className={styles.pokemonList}>
                    {
                        post.results.map((item) => {
                            const urlList = item.url.split('/');

                            return (
                                <ImagePanel
                                    key={urlList}
                                    id={urlList[urlList.length - 2]}
                                    name={item.name}
                                    onClick={() => router.push(`/pokemon-toys/${item.name}`)}
                                />
                            )
                        })
                    }
                </div>
            </main>
        </Layout>
    )
}

// export async function getStaticPaths() {
//     return {
//         paths: [
//             { params: { individualPokemon: 'pikachu' }} // See the "paths" section below
//         ],
//         fallback: false
//     };
// }

// This also gets called at build time
export async function getStaticProps() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50`)
    const post = await res.json()

    const d = post.results.map(async (item) => {
        const urlList = item.url.split('/');

        return {
            ...item,
            imageUrl: `http://pokeapi.co/media/sprites/pokemon/shiny/${urlList[urlList.length - 2]}.png`
        }
    });

    // console.log(post);

    // Pass post data to the page via props
    return {
        props: { post },
        revalidate: 1,
    }
}