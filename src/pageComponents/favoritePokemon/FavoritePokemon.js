import React from 'react'
import { useRouter } from 'next/router'
import styles from './favoritePokemon.module.less'
import {useAppSelector} from '../../app/hook'
import {getListOfFavorite} from './slice'
import ImagePanel from '../../../src/components/imagePanel/ImagePanel'
import Image from 'next/image'

export default function FavoritesPokemon() {
    const router = useRouter()
    const list = useAppSelector(getListOfFavorite);

    return (
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
    )
}
