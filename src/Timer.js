import React, { useState, useEffect } from 'react'

const Timer = () => {
    const [time, setTime] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)


    useEffect(() => {
        const interval = setInterval(() => setTime(time => time + 1), 1000)
        return () => clearInterval(interval)
    }, [])


    if (time === 60) {
        setMinutes(minutes + 1)
        setTime(0)
    }
    if (minutes === 60) {
        setHours(hours + 1)
        setMinutes(0)
        setTime(0)
    }

    if (hours === 24) {
        alert('24時間が経過しました')
    }

    return (
        <>
            <p>経過時間　{hours}　時間　{minutes}　分　{time}　秒</p>
        </>
    )
}

export default Timer


