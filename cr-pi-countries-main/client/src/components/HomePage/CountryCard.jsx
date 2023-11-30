import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const CountryCard = ({ id, nombre, imagenBandera, continente, capital, subRegion, area, poblacion, onClose }) => {

    const dispatch = useDispatch()

    return (

        <div>


            <button onClick={() => onClose(id)}>X</button>
            <Link to={`/detail/${id}`}> <h2>Nombre: {nombre}</h2> </Link>
            <h2>continente: {continente}</h2>
            <h2>capital: {capital}</h2>
            <h2>subRegion: {subRegion}</h2>
            <h2>area: {area}</h2>
            <h2>poblacion: {poblacion}</h2>
            <img src={imagenBandera} alt={nombre} />



        </div>

    )

}



export default CountryCard