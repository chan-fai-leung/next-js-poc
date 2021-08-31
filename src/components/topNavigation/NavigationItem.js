import classNames from 'classnames';
import { useRouter } from 'next/router'
import styles from './navigationItem.module.less'
import Link from 'next/link'

const NavigationItem = ({href, title}) => {
    const router = useRouter()
    const pathList = router.asPath.split('/');

    return (
        <div
            className={classNames(styles.navLink, {
                [styles.active]: pathList[1] === href.split('/')[1]
            })}
        >
            <Link href={href}>
                <a>{title}</a>
            </Link>
        </div>
    )
}

export default NavigationItem