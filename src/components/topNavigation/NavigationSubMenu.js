import styles from './navigationSubMenu.module.less';
import { useRouter } from 'next/router'
import NavigationSubItem from "./NavigationSubItem";

const NavigationSubMenu = () => {
    const router = useRouter()
    const pathList = router.asPath.split('/');

    return (
        <div className={styles.list}>
            <NavigationSubItem
                href='/pokemon/favorites'
                title='Favorites'
            />
        </div>
    );
};

export default NavigationSubMenu;