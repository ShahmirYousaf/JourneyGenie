import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './WeatherForecast.css'
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

const WeatherForecast = () => {
    const [currentCity, setCurrentCity] = useState('Lahore');
    const [weatherData, setWeatherData] = useState(null);

    // const [contentReady, setContentReady] = useState(false);

    // const forecastRef = useRef(null);

    const getWeatherData = async () => {
        if (!currentCity)
        {
            setWeatherData(null); 
            return;
        }

        try {
          const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=848e4c9efef048e494f100521210205&q=${currentCity}&days=3&aqi=no&alerts=no`);
          const data = await response.json();
          setWeatherData(data);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };
    
    useEffect(() => {
        getWeatherData();
    }, [currentCity]);

    // useEffect(() => {
    //   // Check if the content is ready for PDF generation
    //   if (weatherData && weatherData.forecast && weatherData.forecast.forecastday.length > 0) {
    //     setContentReady(true);
    //   }
    // }, [weatherData]);

    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthName = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    const displayTodayWeather = () => {
        if (!weatherData || !weatherData.forecast || !weatherData.forecast.forecastday[0]) 
        {
            return null;
        }

        const date = new Date();
        const dateApi = weatherData.forecast.forecastday[0].date;
        const dateComponents = dateApi.split("-");
        const currentDay = dateComponents[2];


  return (
    <div className="temp-card shadow">
    <div className="day-and-date d-flex justify-content-between">
      <p>{weekDays[date.getDay()]}</p>
      <p>{`${currentDay} ${monthName[date.getMonth()]}`}</p>
    </div>
    <div className="temp-datails">
      <p>{weatherData.location.name}</p>
      <div className="d-flex justify-content-between my-4">
        <div className="pt-3">
          <h2 className="d-inline-block">{Math.round(weatherData.current.temp_c)}</h2>
          <h2 className="d-inline-block"><sup>o</sup>C</h2>
        </div>
        <img src={`https:${weatherData.current.condition.icon}`} alt="weather icon" width="90" />
      </div>
      <p>{weatherData.current.condition.text}</p>
      <div className="details">
        <i className="fas fa-umbrella pr-1"></i>
        <span>{weatherData.current.humidity}</span> <span>%</span>
        <i className="fas fa-wind pl-3 pr-1"></i>
        <span>{weatherData.current.wind_kph}</span> <span>km/h</span>
        <i className="far fa-compass pl-3 pr-1"></i>
        <span>{weatherData.current.wind_dir}</span>
      </div>
    </div>
  </div>
  );
};

const displayNextDaysWeather = () => {
    if (!weatherData || !weatherData.forecast) {
        return null;
      }

    return weatherData.forecast.forecastday.slice(1).map((day, index) => (
      <div className="temp-card text-center shadow" key={index}>
        <div className="day-and-date d-flex justify-content-between">
          <p>{getNextDays(day.date)}</p>
          <p>{`${day.date.split("-")[2]} ${getNextDayMonth(day.date)}`}</p>
        </div>
        <div className="temp-datails">
          <div>
            <img src={`https:${day.day.condition.icon}`} alt="weather icon" width="90" />
          </div>
          <h2 className="max-degree d-inline-block">{Math.round(day.day.maxtemp_c)}</h2>
          <h2 className="d-inline-block"><sup>o</sup>C</h2>
          <br />
          <p className="min-degree d-inline-block">{Math.round(day.day.mintemp_c)}</p>
          <p className="d-inline-block"><sup>o</sup>C</p>
          <p className="nextDay-description">{day.day.condition.text}</p>
        </div>
      </div>
    ));
  };

  const getNextDays = (nextDateApi) => {
    const d = new Date(nextDateApi);
    return d && weekDays[d.getDay()];
  };

  const getNextDayMonth = (nextDateApi) => {
    const m = new Date(nextDateApi);
    return m && monthName[m.getMonth()];
  };

  const handleOnChange = (e) => {
    setCurrentCity(e.target.value);
  };

  // // Function to generate PDF of weather forecast
  // const generatePDF = () => {
  //   // Check if the content is ready for PDF generation
  //   if (!contentReady) {
  //     return;
  //   }

  //   // Get the HTML content to be converted to PDF
  //   const element = forecastRef.current;

  //   // Create a new jsPDF instance
  //   const pdf = new jsPDF('p', 'mm', 'a4');
  //   const imgWidth = 208; // Adjust as needed
  //   let imgHeight = 0;
  

  //   // Create canvas from HTML content
  //   html2canvas(element).then(canvas => {
  //     const imgData = canvas.toDataURL('image/png');
  //     imgHeight = (canvas.height * imgWidth) / canvas.width;
  
  //     // Add image to PDF
  //     pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
  
  //     // Extract text content
  //     const textContent = element.innerText;
  
  //     // Add text to PDF
  //     pdf.setFontSize(10);
  //     pdf.text(5, imgHeight + 15, textContent);
  //     pdf.save('weather_forecast.pdf');
  //   });
  // };
  

  return (
    <section className="display-temp my-5 py-2" id="search">
      <div className="container">
        <div className="search m-auto">
          <input
            type="text"
            id="search-bar"
            className="w-100 mb-5"
            placeholder="&#xF002; Search City..."
            onChange={handleOnChange}
            value={currentCity}
          />
        </div>
        <div className="city-temp d-flex">
          {displayTodayWeather()}
          {displayNextDaysWeather()}
        </div>
        {/* <button className="btn btn-primary mt-3" onClick={generatePDF}>Generate PDF</button> */}
      </div>
    </section>
  );
};

export default WeatherForecast;
