import "./Forecast.css";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";

const Weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
    "Sunday",
];

const Forecast = ({ data }) => {
    const day = new Date().getDay();
    const foreCastDay = Weekdays.slice(day, Weekdays.length).concat(
        Weekdays.slice(0, day)
    );

    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, index) => {
                    return (
                        <AccordionItem key={index}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div className="DailyItem">
                                        <img
                                            alt="weather"
                                            className="DailyIcon"
                                            src={`weather-icons/${item.weather[0].icon}.png`}
                                        />
                                        <label className="weekdays">{foreCastDay[index]}</label>
                                        <label className="Description">
                                            {item.weather[0].description}
                                        </label>
                                        <label className="Avegrage-Temp">
                                            {item.main.temp_min}&deg;C /{" "}
                                        </label>
                                        <label className="Avegrage-Temp">
                                            {item.main.temp_max}&deg;C
                                        </label>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="Daily-Forecast">
                                    <div className="Dialy-description">
                                        <label>Pressure</label>
                                        <label>{item.main.pressure} hpa</label>
                                    </div>
                                    <div className="Dialy-description">
                                        <label>Humidity</label>
                                        <label>{item.main.humidity}%</label>
                                    </div>
                                    <div className="Dialy-description">
                                        <label>Clouds</label>
                                        <label>{item.clouds.all}%</label>
                                    </div>    
                                    <div className="Dialy-description">
                                        <label>Wind Speed</label>
                                        <label>{item.wind.speed} m/s</label>
                                    </div>
                                    <div className="Dialy-description">
                                        <label>Sea Level</label>
                                        <label>{item.main.sea_level}m</label>
                                    </div>
                                    <div className="Dialy-description">
                                        <label>Feels Like</label>
                                        <label>{item.main.feels_like}&deg;C</label>
                                    </div>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </>
    );
};

export default Forecast;
