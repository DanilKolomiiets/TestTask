import React, { useState } from 'react'
import Charts from '../Charts/Charts'


const api = {
    key: "df65dad6276f4f1e2e33c5420bc6e385",
    base: "https://api.openweathermap.org/data/2.5/"
  }

function Search() {
    const[query, setQuery] = useState('');
    const[weather, setWeather] = useState({});

    const search = evt => {
        if (evt.key === "Enter"){
          fetch(`${api.base}forecast?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
              setWeather(result);
              setQuery('');
            });
        }
      }

    const dateBuilder = (d) =>{
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
                let year = d.getFullYear();
    
        return `${day} ${date} ${month} ${year}`
    }

    return(
    <div>
        <div className="search-box" >
            <input 
                type="text"
                className="search-bar"
                placeholder="City?"
                onChange={e=> setQuery(e.currentTarget.value)}
                value={query}
                onKeyPress={search}/>
        </div>
        {(typeof weather.city != "undefined") ? (
            <div>
                <div className="location-box">
                    <div className="location">{weather.city.name}, {weather.city.country}</div>
                    <div className="date">{dateBuilder(new Date())}</div>         
                </div>
                <div className="charts-box">
                    <div className="charts">
                    <Charts tempData={weather.list}/>
                    </div> 
                </div>
            </div>
        ): ('')}
    </div>
    );
        
}

export default Search;