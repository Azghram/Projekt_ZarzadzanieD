import React from 'react';

const Result = (props) => {

    const {date, time, city, temp, pressure, wind, humidity, err} = props.weather

    let content = null;

    if(!err && city) {
        content = (
            <div>
                <h2>Wyniki dla stacji <em>{city}</em></h2>
                <h3>Data i czas pomiaru: {date}, {time}:00</h3>
                <h3>Zmierzona temperatura: {temp} &#176;C </h3>
                <h3>Ciśnienie {pressure} hPa</h3>
                <h3>Wilgotność względna {humidity} %</h3>
                <h3>Prędkość wiatru {wind} m/s</h3>
            </div>
        )
    }

    return (
        <div className="result">
            {err ? `Nie mamy w bazie ${city}` : content}
        </div>
    );
}

export default Result;