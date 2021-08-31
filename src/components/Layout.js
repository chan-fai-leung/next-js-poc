import styles from './layout.module.css'
import NavigationMenu from "./topNavigation/navigation-menu";
import BreadCrumbs from './breadCrumbs/BreadCrumbs'

export const Layout = ({ children }) => {
    return <div>
        <NavigationMenu/>
        <div className={styles.container}>
            <BreadCrumbs/>
            {children}
        </div>
    </div>
}