import styles from './layout.module.css'
import NavigationMenu from "./top-navigation/navigation-menu";
import BreadCrumbs from './bread-crumbs/bread-crumbs'

export const Layout = ({ children }) => {
    return <div>
        <NavigationMenu/>
        <div className={styles.container}>
            <BreadCrumbs/>
            {children}
        </div>
    </div>
}