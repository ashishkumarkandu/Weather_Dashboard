import React from "react";

function Forecast({ data }) {
  const dailyData = data.list.reduce((acc, item) => {
    const date = new Date(item.dt_txt).toDateString();
    if (!acc.find((entry) => entry.date === date)) {
      acc.push({
        date,
        temp: item.main.temp,
        weather: item.weather[0].main,
        icon: item.weather[0].icon, // Add icon
      });
    }
    return acc;
  }, []);

  return (
    <div className="forecast">
      <h3>5-Day Forecast</h3>
      <div className="forecast-cards">
        {dailyData.slice(0, 5).map((day, index) => (
          <div key={index} className="forecast-card">
            <h4>{day.date.split(" ").slice(0, 3).join(" ")}</h4>
            <img
              src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
              alt={day.weather}
              style={{ width: "50px", height: "50px" }}
            />
            <p>{day.weather}</p>
            <p>{Math.round(day.temp)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
