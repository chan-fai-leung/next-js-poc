import styles from './navigationMenu.module.less';
import NavigationItem from "./NavigationItem";
import NavigationSubMenu from './NavigationSubMenu';

const NavigationMenu = () => {
    return (
        <nav className={styles.topNavigation}>
            <div className={styles.list}>
                <NavigationItem
                    href='/'
                    title='Home'
                />
                <NavigationItem
                    href='/pokemon'
                    title='Pokemon'
                />
                <NavigationItem
                    href='/pokemon-cards'
                    title='Pokemon Cards'
                />
            </div>
            <NavigationSubMenu/>
        </nav>
    );
};

export default NavigationMenu;