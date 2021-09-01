import {useState} from 'react';
import Head from 'next/head'
import {Layout} from '../../src/components/Layout'
import styles from './index.module.less'
import { useRouter } from 'next/router'
import ImagePanel from '../../src/components/imagePanel/ImagePanel'
import {useAppSelector, useAppDispatch} from '../../src/app/hook.ts'
import {addToFavorite, removeFromFavorite, getListOfFavorite} from '../../src/pageComponents/favoritePokemon/slice'
import classNames from 'classnames';
import {Pagination} from '@material-ui/lab'
import {Typography} from '@material-ui/core'
import useSWR from 'swr'

export default function Home({post}) {
    const [currentPage, setCurrentPage] = useState(1);
    const router = useRouter();
    const list = useAppSelector(getListOfFavorite);
    const dispatch = useAppDispatch();
    const fetcher = (url) => fetch(url).then((res) => {
        return res.json()
    })
    const { data, error } = useSWR('/api/user', fetcher)


    // const onPageChange = (event, pageNumber) => {
    //     setCurrentPage(pageNumber);
    // };

    console.log(data, error);
    const listSet = new Set(list.map((item) => item.id));
    return (
        <Layout>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                {/*<h1 className="title">*/}
                {/*    Pokemon ({post.count})*/}
                {/*</h1>*/}
                {/*<Typography>Page: {currentPage}</Typography>*/}
                {/*<Pagination*/}
                {/*    showFirstButton*/}
                {/*    showLastButton*/}
                {/*    count={Math.floor(post.count / 50)}*/}
                {/*    onChange={onPageChange}*/}
                {/*/>*/}

                {/*<div className={styles.pokemonList}>*/}
                {/*    {*/}
                {/*        post.results.map((item) => {*/}
                {/*            const urlList = item.url.split('/');*/}
                {/*            const id = urlList[urlList.length - 2];*/}
                {/*            const isAFavoritePokemon = listSet.has(id);*/}

                {/*            return (*/}
                {/*                <ImagePanel*/}
                {/*                    className={classNames({*/}
                {/*                        [styles.favoritePanel]: isAFavoritePokemon*/}
                {/*                    })}*/}
                {/*                    key={urlList}*/}
                {/*                    id={id}*/}
                {/*                    name={item.name}*/}
                {/*                    displayText={(*/}
                {/*                        <>*/}
                {/*                            <button*/}
                {/*                                className={classNames({*/}
                {/*                                    [styles.favorite]: isAFavoritePokemon*/}
                {/*                                })}*/}
                {/*                                onClick={(event) => {*/}
                {/*                                    event.stopPropagation();*/}
                {/*                                    if (isAFavoritePokemon) {*/}
                {/*                                        dispatch(removeFromFavorite(id))*/}
                {/*                                    } else {*/}
                {/*                                        dispatch(addToFavorite({*/}
                {/*                                            name: item.name,*/}
                {/*                                            id*/}
                {/*                                        }))*/}
                {/*                                    }*/}
                {/*                                }}*/}
                {/*                            >*/}
                {/*                                add to favorite*/}
                {/*                            </button>*/}
                {/*                            <div>{item.name}</div>*/}
                {/*                        </>*/}
                {/*                    )}*/}
                {/*                    onClick={() => router.push(`/pokemon/${item.name}`)}*/}
                {/*                />*/}
                {/*            )*/}
                {/*        })*/}
                {/*    }*/}
                {/*</div>*/}
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
// export async function getStaticProps() {
//     const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50`)
//     const post = await res.json()
//
//     const d = post.results.map(async (item) => {
//         const urlList = item.url.split('/');
//
//         return {
//             ...item,
//             imageUrl: `http://pokeapi.co/media/sprites/pokemon/shiny/${urlList[urlList.length - 2]}.png`
//         }
//     });
//
//     // console.log(post);
//
//     // Pass post data to the page via props
//     return {
//         props: { post },
//         revalidate: 1,
//     }
// }