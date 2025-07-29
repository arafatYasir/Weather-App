import axios from "axios"

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchWeatherByCity = async (city) => {
    const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

    return res.data;
}