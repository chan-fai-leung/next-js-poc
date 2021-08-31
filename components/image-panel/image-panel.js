import classNames from 'classnames'
import styles from './image-panel.module.less'
import Image from 'next/image'

const ImagePanel = ({className, id, name, onClick, url}) => (
    <div
        className={classNames(styles.rowItem, className)}
        onClick={onClick}
    >
        <div className={styles.image}>
            <Image src={url || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} layout='fill' objectFit='contain'/>
        </div>
        <div className={styles.name}>{name}</div>
    </div>
)

export default ImagePanel