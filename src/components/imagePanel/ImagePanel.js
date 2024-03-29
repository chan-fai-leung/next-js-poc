import classNames from 'classnames'
import styles from './imagePanel.module.less'
import Image from 'next/image'

const ImagePanel = ({
    className,
    displayText,
    id,
    name,
    onClick,
    url
}) => (
    <div
        className={classNames(styles.rowItem, className)}
        onClick={onClick}
    >
        <div className={styles.image}>
            <Image
                src={url || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt={name}
                layout='fill'
                objectFit='contain'
            />
        </div>
        <div className={styles.name}>{displayText}</div>
    </div>
)

export default ImagePanel