import Head from 'next/head'
import {Layout} from '../../components/Layout'
import styles from './index.module.less'
import { useRouter } from 'next/router'
import ImagePanel from '../../components/imagePanel/ImagePanel'
import {useAppSelector, useAppDispatch} from '../../app/hook.ts'
import {addToFavorite, removeFromFavorite, getListOfFavorite} from '../../pageComponents/pokemonToys/favorite/favoritePokemon/slice'
import classNames from 'classnames';

export default function Home({post}) {
    const router = useRouter();
    const list = useAppSelector(getListOfFavorite);
    const dispatch = useAppDispatch();

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
                            const id = urlList[urlList.length - 2];
                            const isAFavoritePokemon = list.findIndex((item) => {
                                return item.id === id
                            }) >= 0;

                            return (
                                <ImagePanel
                                    className={classNames({
                                        [styles.favoritePanel]: isAFavoritePokemon
                                    })}
                                    key={urlList}
                                    id={id}
                                    name={item.name}
                                    displayText={(
                                        <>
                                            <button
                                                className={classNames({
                                                    [styles.favorite]: isAFavoritePokemon
                                                })}
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    if (isAFavoritePokemon) {
                                                        dispatch(removeFromFavorite(id))
                                                    } else {
                                                        dispatch(addToFavorite({
                                                            name: item.name,
                                                            id
                                                        }))
                                                    }
                                                }}
                                            >
                                                add to favorite
                                            </button>
                                            <div>{item.name}</div>
                                        </>
                                    )}
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