import React from 'react'
import {Layout} from '../../../src/components/Layout'
import FavoritesPokemon from '../../../src/pageComponents/favoritePokemon/FavoritePokemon'

export default function Favorites() {
    return (
        <Layout>
            <h1>List of favorite Pokemon</h1>
            <FavoritesPokemon/>
        </Layout>
    )
}

Favorites.propTypes = {};
