import React from 'react'
import { useRouter } from 'next/router'
import {Layout} from '../../../components/Layout'
import LabelValue from '../../../components/labelValue/LabelValue'
import styles from './index.module.less'
import Evolution from '../../../pageComponents/pokemonToys/evolution/evolution'
import PropTypes from 'prop-types';
import Image from 'next/image'

export default function IndividualPokemon({data, evolution}) {
    const router = useRouter()

    return (
        <Layout>
            <h1>{router.query.individualPokemon.replace(/\w/, firstLetter => firstLetter.toUpperCase())} ({data.id})</h1>
            <div className={styles.pokemonStats}>
                <div className={styles.image}>
                    <Image src={data.sprites.front_shiny} alt='shiny-image' layout='fill' objectFit='contain'/>
                </div>
                <div>
                    <LabelValue
                        className={styles.info}
                        labelText='Abilities'
                        value={(<ul className={styles.stats}>
                            {
                                data?.abilities.map((item) => (
                                    <li key={item.ability.name}>{item.ability.name}</li>
                                ))
                            }
                        </ul>)}
                    />
                    <LabelValue
                        className={styles.info}
                        labelText='States'
                        value={(<ul className={styles.stats}>
                            {
                                data?.stats.map((item) => (
                                    <li key={item.stat.name}>{`${item.stat.name}: ${item.base_stat}`}</li>
                                ))
                            }
                        </ul>)}
                    />
                </div>
            </div>
            <Evolution evolution={evolution} />
        </Layout>
    )
}

IndividualPokemon.propTypes = {
    data: PropTypes.shape({
        abilities: PropTypes.arrayOf(PropTypes.shape({
            ability: PropTypes.shape({
                name: PropTypes.string
            }),
            name: PropTypes.string
        })),
        id: PropTypes.number,
        sprites: PropTypes.shape({
            front_shiny: PropTypes.string
        }),
        stats: PropTypes.arrayOf(PropTypes.shape({
            base_stat: PropTypes.number,
            stat: PropTypes.shape({
                name: PropTypes.string
            })
        }))
    }),
    evolution: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
    })),
};

export async function getServerSideProps(context) {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${context.params.individualPokemon}`).then((content) => {
        return content.json();
    })
    const responseEvolution = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${data.id}/`).then((content) => {
        return content.json();
    })

    const evolution = [];
    const getEvolutionItems = (item) => {
        const urlList = item.species.url.split('/');
        const id = urlList[urlList.length - 2];

        if (item?.evolves_to.length === 0) {
            return evolution.push({id, name: item.species.name});
        }

        evolution.push({id, name: item.species.name})
        return getEvolutionItems(item.evolves_to[0]);
    }

    getEvolutionItems(responseEvolution.chain)

    return {
        props: {
            data,
            evolution
        }, // will be passed to the page component as props
    }
}
