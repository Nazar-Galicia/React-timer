import {useEffect, useRef, useState} from "react";

export const useTimer = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [miliseconds, setMiliseconds] = useState(0);

    let isRunning = useRef(false);
    let isPaused = useRef(false);

    let timer = useRef(null);
    let miliTimer = useRef(null);

    let audioRef = useRef(null);

    const secondsInterval = 1000
    const milisecondsInterval = 16

    function changeSeconds() {
        setSeconds((prev) => prev + 1);
    }
    function changeMiliseconds() {
        setMiliseconds((prev) => prev + 1);
    }

    function startTimer() {
        if (!isRunning.current) {
            setSeconds(1)

            isPaused.current = false;
            isRunning.current = true;

            timer.current = setInterval(changeSeconds,secondsInterval)
            miliTimer.current = setInterval(changeMiliseconds,milisecondsInterval)

            audioRef.current.play()
        }
    }

    function pauseTimer() {
        isPaused.current = !isPaused.current;

        if (isRunning.current && isPaused.current) {
            isRunning.current = false;

            clearInterval(timer.current)
            clearInterval(miliTimer.current);

            audioRef.current.pause();

        } else if (!isPaused.current && !isRunning.current) {
            isRunning.current = true;

            setMiliseconds(0)

            timer.current = setInterval(changeSeconds,secondsInterval)
            miliTimer.current = setInterval(changeMiliseconds,milisecondsInterval)

            audioRef.current.play();
        }
    }

    function resetTimer() {
        setSeconds(0);
        setMinutes(0);
        setHours(0);
        setMiliseconds(0);

        clearInterval(timer.current);
        clearInterval(miliTimer.current);

        isRunning.current = false;
        isPaused.current = false;

        audioRef.current.pause()
        audioRef.current.load()
    }

    useEffect(() => {
        setMiliseconds(0);

        if (seconds % 60 === 0 && seconds !== 0) {
            setSeconds(0)
            setMinutes((prev) => prev + 1)
        }

        if (minutes % 60 === 0 && minutes !== 0) {
            setMinutes(0)
            setHours((prev) => prev + 1)
        }

    }, [seconds, minutes])

    useEffect(() => {
        return () => {
            clearInterval(timer.current)
            clearInterval(miliTimer.current)
        }
    }, []);

    return {
        seconds,
        minutes,
        hours,
        miliseconds,
        startTimer,
        pauseTimer,
        resetTimer,
        audioRef,
    }
}