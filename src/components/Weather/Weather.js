import "./Weather.css"

const Weather = ({data}) => {
    return <>
        <div className="weather">
            <div className="head">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="description">{data.weather[0].description}</p>
                </div>
                <img
                alt="weather"
                className="weater-icon"
                src={`weather-icons/${data.weather[0].icon}.png`}
            />
            </div>
            <div className="bottom">
                <p className="temp">{Math.round(data.main.temp)}&deg;C</p>
                <div className="details">
                    <div className="row">
                        <span className="parameter-label">Feels Like</span>
                        <span className="parameter-value">{Math.round(data.main.feels_like)}C</span>
                    </div>
                    <div className="row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">{data.wind.speed}m/s</span>
                    </div>
                    <div className="row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{data.main.humidity}%</span>
                    </div>
                    <div className="row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">{data.main.pressure} hpa</span>
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default Weather;