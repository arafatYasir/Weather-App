import { useEffect, useState } from 'react';
import CountrySelector from './components/CountrySelector';
import { fetchAirPollution, fetchWeatherByCity } from './utils/fetchWeather';
import LocalTime from './components/LocalTime';
import WeatherCard from './components/WeatherCard';
import AirQuality from './components/AirQuality';
import WindCard from './components/WindCard';

const App = () => {
  const [country, setCountry] = useState("Bangladesh");
  const [city, setCity] = useState("Dhaka");
  const [weather, setWeather] = useState(null);
  const [airPollution, setAirPollution] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchWeatherByCity(city);
        const airData = await fetchAirPollution(data.coord.lat, data.coord.lon);
        setWeather(data);
        setAirPollution(airData);
      }
      catch (error) {
        alert(error.message);
      }
    }

    load();
  }, [city])

  console.log(airPollution);

  return (
    <div className='min-h-screen bg-cover bg-center bg-no-repeat px-6 py-8' style={{ backgroundImage: "url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}>

      <div className='bg-black/60 p-6 text-white rounded-lg max-w-4xl mx-auto shadow-lg'>
        <p className='text-xl font-bold mb-4'>
          {country} - {city}
        </p>

        <LocalTime />

        <CountrySelector
          country={country}
          setCountry={setCountry}
          city={city}
          setCity={setCity}
        />
      </div>

      {/* ----Weather---- */}
      {weather && (
        <div className='bg-black/60 p-6 text-white rounded-lg max-w-4xl mx-auto mt-6 shadow-lg grid grid-cols-3 gap-3'>
          <WeatherCard weather={weather} />
          <WindCard weather={weather} />
          <AirQuality airPollution={airPollution} />
        </div>
      )}
    </div>
  );
};

export default App;