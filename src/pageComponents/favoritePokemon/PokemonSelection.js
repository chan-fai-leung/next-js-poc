import ImagePanel from '../../components/imagePanel/ImagePanel'
import classNames from 'classnames'
import {addToFavorite, getListOfFavorite, removeFromFavorite} from './slice'
import {useRouter} from 'next/router'
import {useAppDispatch, useAppSelector} from '../../app/hook'
import styles from './pokemonSelection.module.less'

export default function PokemonSelection({post}) {
    const router = useRouter();
    const list = useAppSelector(getListOfFavorite);
    const dispatch = useAppDispatch();

    const listSet = new Set(list.map((item) => item.id));

    return (
        <div className={styles.pokemonList}>
            {
                post.results.map((item) => {
                    const urlList = item.url.split('/');
                    const id = urlList[urlList.length - 2];
                    const isAFavoritePokemon = listSet.has(id);

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
                            onClick={() => router.push(`/pokemon/${item.name}`)}
                        />
                    )
                })
            }
        </div>
    );
}