import dayjs from "dayjs";
import { useEffect, useState } from "react";

const LocalTime = () => {
    const [time, setTime] = useState(dayjs().format("HH:mm:ss"));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(dayjs().format("HH:mm:ss"));
        }, 1000);

        return () => clearInterval(interval)
    }, [])

    return (

        <p className='text-sm mb-4'>{time}</p>
    );
};

export default LocalTime;