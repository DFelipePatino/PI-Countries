import React from 'react';
import CountryCard from './CountryCard';

const homePage = ({ country, onClose }) => {

    return (
        <div>
            {
                country.map(({ id, nombre, imagenBandera, continente }) => {
                    return <CountryCard
                        id={id}
                        key={id}
                        nombre={nombre}
                        imagenBandera={imagenBandera}
                        continente={continente}
                        onClose={onClose}
                    />
                })
            }
        </div>


    )
}

export default homePage