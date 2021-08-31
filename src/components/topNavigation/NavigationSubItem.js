import classNames from 'classnames';
import { useRouter } from 'next/router'
import styles from './navigationSubItem.module.less'
import Link from 'next/link'

const NavigationSubItem = ({href, title}) => {
    const router = useRouter()
    const pathList = router.asPath.split('/');

    return (
        <div
            className={classNames(styles.navLink, {
                [styles.active]: pathList[2] === href.split('/')[1]
            })}
        >
            <Link href={href}>
                <a>{title}</a>
            </Link>
        </div>
    )
}

export default NavigationSubItem