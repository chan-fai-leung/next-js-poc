import styles from './navigation-menu.module.less';
import classNames from 'classnames';
import { useRouter } from 'next/router'
import NavigationItem from "./navigation-item";

const NavigationMenu = () => {
    return (
        <nav className={styles.topNavigation}>
            <div className={styles.list}>
                <NavigationItem
                    href='/'
                    title='Home'
                />
                <NavigationItem
                    href='/pokemon-toys'
                    title='Pokemon Toys'
                />
                <NavigationItem
                    href='/pokemon-cards'
                    title='Pokemon Cards'
                />
            </div>
        </nav>
    );
};

export default NavigationMenu;