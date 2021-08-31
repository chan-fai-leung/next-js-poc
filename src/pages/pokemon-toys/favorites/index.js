import React from 'react'
import { useRouter } from 'next/router'
import {Layout} from '../../../components/Layout'
import styles from './index.module.less'

export default function Favorites() {
    const router = useRouter()

    return (
        <Layout>
            <h1>List of favorite Pokemon</h1>
            <div className={styles.pokemon}>
                Pokemons
            </div>
        </Layout>
    )
}

Favorites.propTypes = {};
