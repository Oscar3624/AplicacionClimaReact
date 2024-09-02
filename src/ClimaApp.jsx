import { useState } from 'react';
import './ClimaApp.css';

export const ClimaApp = () => {

    const [city, setCity] = useState('');
    const [climaData, setClimaData] = useState(null)

    const urlClima = "https://api.openweathermap.org/data/2.5/weather";
    const Key = "ingresear api key aqui";
    const Kelvin = 273.15; // uso esta constante porque me da de manera predeterminada los grados en kelvin y con esto saco para obtener en c°


    const fetchClimaData = async function(){
        try{
            const response = await fetch(`${urlClima}?q=${city}&appid=${Key}&lang=es`)
            const data = await response.json();
            setClimaData(data);
        }catch(error){
            console.error("error: ", error);
        }
    }

    const handleSubmit = function(event){
        event.preventDefault();
        fetchClimaData();
    }

    const handleCityChange = function(event){
        setCity(event.target.value);
        
        
    }

  return (
    
    <div className="container">
        <h1>Clima app</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ingresa la ciudad" value={city} onChange={handleCityChange}/>
            <button type="submit">¡Buscar!</button>
        </form>
        
        {climaData && (
            <div> 
                <h2> {climaData.name}, {climaData.sys.country}</h2>
                <p>La temperatura actual es: {Math.floor(climaData.main.temp - Kelvin)}°C</p>
                <p>La condicion meteorologica actual es: {climaData.weather[0].description}</p>
                <img src={`https://openweathermap.org/img/wn/${climaData.weather[0].icon}@2x.png`} alt={climaData.weather[0].description} />
            </div>
        )}

    </div>
  )
}
