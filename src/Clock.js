import { useEffect, useState } from "react"

export default function Clock () {
    const [date, setDate] = useState(new Date())

    const refreshClock = () => setDate(new Date())

    useEffect(() => {
        const intervalId = setInterval(refreshClock, 1000)
        return () => clearInterval(intervalId)
    }, [])

    return (
        <h2>{date.toLocaleTimeString()}</h2>
    )
}
