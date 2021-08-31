import classNames from 'classnames';
import { useRouter } from 'next/router'
import styles from './bread-crumbs.module.less'
import Link from 'next/link'

const BreadCrumbs = ({href, title}) => {
    const router = useRouter()
    const pathList = router.asPath.split('/');

    pathList.splice(0, 1);
    pathList.splice(pathList.length - 1, 1);

    const urlList = pathList.reduce((arr, item, index) => {
        if (index === 0) {
            arr.push({
                name: item.replace(/\w/, firstLetter => firstLetter.toUpperCase()).replace('-', ' '),
                url: `/${item}`
            });
        } else {
            arr.push({
                name: '',
                url: `${arr[index]}/${item}`
            });
        }

        return arr;
    }, []);

    return urlList.length > 0 && (<div>{
        urlList.map((item) => (
            <Link key={item.url} href={item.url}><a>{item.name}</a></Link>
        ))
    }</div>)
}

export default BreadCrumbs