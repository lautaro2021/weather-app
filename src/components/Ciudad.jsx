import React from "react";

import {StyledCiudad} from './StyledCiudad.jsx';

export default function Ciudad({city}) {
    return (
        <StyledCiudad className="ciudad">
                <div className="container">
                    <div>
                    <h2>{city.name}</h2>
                    <div className="info">
                        <div>Temperatura: {Math.round(city.temp / 17.22)} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
                    </div>
            </div>
        </StyledCiudad>
    )
}