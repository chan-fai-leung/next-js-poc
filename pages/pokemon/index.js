import {useState} from 'react';
import Head from 'next/head'
import {Layout} from '../../src/components/Layout'
import {Pagination} from '@material-ui/lab'
import {Typography} from '@material-ui/core'
import PokemonSelection from '../../src/pageComponents/favoritePokemon/PokemonSelection'

export default function Home({post}) {
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (event, pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <Layout>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className="title">
                    Pokemon ({post.count})
                </h1>
                <Typography>Page: {currentPage}</Typography>
                <Pagination
                    showFirstButton
                    showLastButton
                    count={Math.floor(post.count / 50)}
                    onChange={onPageChange}
                />

                <PokemonSelection post={post}/>
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