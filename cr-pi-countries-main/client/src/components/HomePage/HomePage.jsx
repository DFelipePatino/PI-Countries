import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/actions';
import CountryCard from './CountryCard';

const homePage = ({ country, onClose }) => {

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getCountries())
    }, [])

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