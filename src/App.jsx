import { useEffect, useState } from 'react';
import CountrySelector from './components/CountrySelector';
import dayjs from 'dayjs';

const App = () => {
  const [country, setCountry] = useState("Bangladesh");
  const [city, setCity] = useState("Dhaka");
  const [time, setTime] = useState(dayjs().format("HH:mm:ss"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs().format("HH:mm:ss"));
    }, 1000);

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='min-h-screen bg-cover bg-center bg-no-repeat px-6 py-8' style={{ backgroundImage: "url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}>

      <div className='bg-black/60 p-6 text-white rounded-lg max-w-4xl mx-auto shadow-lg'>
        <p className='text-xl font-bold mb-4'>
          {country} - {city}
        </p>

        <p className='text-sm mb-4'>{time}</p>

        <CountrySelector
          country={country}
          setCountry={setCountry}
          city={city}
          setCity={setCity}
        />
      </div>
    </div>
  );
};

export default App;