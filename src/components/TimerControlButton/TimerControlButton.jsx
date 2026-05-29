import {memo} from "react";
import styles from './TimerControlButton.module.css'

const TimerControlButton = (props) => {
    const {
        children,
        func='',
        onClick,
    } = props

    return (
        <button onClick={onClick} className={`${styles.timerButton} ${styles[func] || ''}`}>
            {children}
        </button>
    )
}

export default memo(TimerControlButton)