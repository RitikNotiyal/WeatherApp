import './App.css';
import Search from './components/Search';
import Weather from './components/Weather/Weather';
import Forecast from './components/Weather/Forecast';
import { WeatherApi, WeatherApiKey } from './Api';
import { useState } from 'react';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const handleOnSearchChange = (values) => {
    const [lat, long] = values.value.split("");
    
    const currentWeatherFetch = fetch(`${WeatherApi}/weather?lat=${lat}&lon=${long}&appid=${WeatherApiKey}&units=metric`)
    const forecastFetch = fetch(`${WeatherApi}/forecast?lat=${lat}&lon=${long}&appid=${WeatherApiKey}&units=metric`)

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({city: values.label, ...weatherResponse});
        setForecast({city: values.label, ...forecastResponse});
      })
      .catch((err) =>
        console.log(err))
  }

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="Conatiner">
      <Search onSearch={handleOnSearchChange} />
      {currentWeather && <Weather data={currentWeather} />}
      {forecast && <Forecast data={ forecast} />}
    </div>
  );
}

export default App;
