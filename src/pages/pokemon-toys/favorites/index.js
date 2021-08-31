import React from 'react'
import { useRouter } from 'next/router'
import {Layout} from '../../../components/Layout'
import styles from './index.module.less'
import {useAppSelector} from '../../../app/hook'
import {getListOfFavorite} from '../../../pageComponents/pokemonToys/favorite/favoritePokemon/slice'
import ImagePanel from '../../../components/imagePanel/ImagePanel'
import Image from 'next/image'

export default function Favorites() {
    const router = useRouter()
    const list = useAppSelector(getListOfFavorite);

    console.log('--------', list);
    return (
        <Layout>
            <h1>List of favorite Pokemon</h1>
            <div className={styles.pokemon}>
                {
                    list.length > 0 ? list.map((item) => {
                        return (
                            <ImagePanel
                                className={styles.favoritePanel}
                                key={item.name}
                                id={item.id}
                                name={item.name}
                                displayText={item.name}
                                onClick={() => router.push(`/pokemon-toys/${item.name}`)}
                            />
                        )
                    }) : (
                        <div className={styles.sad}>
                            <div>
                                <Image src='/images/sadpikachu.jpg' height={200} width={300} alt="Sad Pikachu"/>
                            </div>

                            <div>Looks like you need to add some favorite pokemon first</div>
                        </div>
                    )
                }
            </div>
        </Layout>
    )
}

Favorites.propTypes = {};
