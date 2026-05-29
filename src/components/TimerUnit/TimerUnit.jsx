import {memo} from "react";
import './TimerUnit.css'

const TimerUnit = (props) => {
    const {
        children,
        miliseconds=false,
        value='0',
    } = props

    let timerText;

    if (!miliseconds) {
        timerText = value < 10 ? '0' + value : value
    } else {
        timerText = value;
    }

    return miliseconds ? (
        <div className="timer__unit">
            <span className="timer__value timer__value--milliseconds">
                {timerText}
            </span>
            <span className="timer__label">Milliseconds</span>
        </div>
    ) : (
        <div className="timer__unit">
            <span className="timer__value">{timerText}</span>
            <span className="timer__label">{children}</span>
        </div>
    )
}

export default memo(TimerUnit)