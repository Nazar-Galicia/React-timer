import './Timer.css'
import TimerControlButton from "../TimerControlButton/TimerControlButton.jsx";
import TimerUnit from "../TimerUnit/TimerUnit.jsx";
import {useTimer} from "../../hooks/useTimer.js";

const Timer = () => {

    const {
        seconds,
        minutes,
        hours,
        miliseconds,
        startTimer,
        pauseTimer,
        resetTimer,
        audioRef,
    } = useTimer();

    return (
        <div className="timer">
            <div className="timer__display">
                <TimerUnit value={hours}>Hours</TimerUnit>

                <span className="timer__separator">:</span>

                <TimerUnit value={minutes}>Minutes</TimerUnit>

                <span className="timer__separator">:</span>

                <TimerUnit value={seconds}>Seconds</TimerUnit>

                <span className="timer__separator">:</span>

                <TimerUnit miliseconds value={miliseconds * 16}/>
            </div>

            <div className="timer__controls">
                <TimerControlButton onClick={startTimer} func='start'>Start</TimerControlButton>
                <TimerControlButton onClick={pauseTimer} func='pause'>Pause</TimerControlButton>
                <TimerControlButton onClick={resetTimer} func='reset'>Reset</TimerControlButton>
            </div>

            <audio loop ref={audioRef} src="../../../public/timer-sound.mp3"></audio>

        </div>
    )
}

export default Timer