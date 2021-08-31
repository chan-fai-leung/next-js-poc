import { useRouter } from 'next/router'
import styles from './evolution.module.less'
import ImagePanel from '../../../components/imagePanel/ImagePanel'

const Evolution = ({evolution}) => {
    const router = useRouter()

     return (
        <div className={styles.evolution}>
            <h3>Evolution</h3>
            <div className={styles.evolutionList}>
                {
                    evolution.map((item, index) => (
                        <ImagePanel
                            id={item.id}
                            key={index} name={item.name}
                            onClick={() => router.push(`/pokemon-toys/${item.name}`)}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Evolution
