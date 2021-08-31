import styles from './label-value.module.less'
import classNames from 'classnames'

const LabelValue = ({className, labelText, value}) => (
    <div className={classNames(styles.labelValueContainer, className)}>
        <label className={styles.label}>{labelText}</label>
        <div>{value}</div>
    </div>
)

export default LabelValue