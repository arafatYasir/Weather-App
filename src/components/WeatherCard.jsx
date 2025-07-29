const WeatherCard = ({weather}) => {
    const icon = weather?.weather[0]?.icon;

    return (
        <div className="bg-gray-800 p-4 text-white rounded-lg text-center place-items-center">
            <p className="text-lg font-semibold">Current Weather</p>
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
            <p className="text-xl">{weather.weather[0].main}</p>
            <p className="text-sm">{weather.weather[0].description}</p>
            <p className="text-sm">{weather.main.temp}°C (Feels Like: ${weather.main.feels_like})</p>
        </div>
    );
};

export default WeatherCard;