import axios from "axios"

export const fetchWeatherByCity = async (city) => {
    const res = await axios.get(`http://api.openweathermap.org/data/2.0/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`);

    return res.data;
}