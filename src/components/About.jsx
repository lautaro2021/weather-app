import React from 'react';
import {StyledAbout} from './StyledAbout.jsx'
//componente funcional

export default function About (){
    return(
        <StyledAbout>
            <div className = 'container'>
                <div className = "container2">
                    <h4 className="h4__sobrenos">Sobre nosotros</h4>
                    <p>
                        Weather App es una SPA (Single Page Aplication) realizada bajo la informacion de la API externa
                        OpenWeatherApp y muestra en pantalla el clima de la ciudad elegida mediante
                        la barra de busqueda.
                    </p>
                </div>
                <div className = "container2">
                    <h4 className="h4__sobrenos">Sobre nosotros</h4>
                    <p>
                        Weather App it's a SPA (Single Page Application) made under the information of the external API
                        OpenWeatherApp and displays the weather of the chosen city on the screen using
                        the search bar.
                    </p>
                </div>
            </div>
        </StyledAbout>
    )
}