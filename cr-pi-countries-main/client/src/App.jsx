import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
const URL = 'http://localhost:5000/countries';
import HomePage from './components/HomePage/HomePage';
import LandingPage from './components/LandingPage/LandingPage';
import FormPage from './components/FormPage/FormPage';
import DetailPage from './components/DetailPage/DetailPage';
import SearchBar from './components/HomePage/SearchBar'
import Navegation from './components/HomePage/Navegation'

import './App.css';

const App = () => {

  const [country, setcountry] = useState([]);

  const { pathname } = useLocation()

  const onClose = (id) => {
    setcountry(
      country.filter((con) => {
        return con.id !== Number(id)
      })
    )
  };


  const onSearch = async (id) => {
    try {
      const response = await axios.get(`${URL}/${id}`);
      const { data } = response;

      if (data.id) {
        setcountry((currentCountries) => [data, ...currentCountries]);
      } else {
        window.alert('¡No hay países con este ID!');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



  return (
    <div className='App'>


      {pathname !== "/" && <Navegation onSearch={onSearch} />}



      <Routes>

        <Route
          path='/home'
          element={
            <HomePage country={country} onClose={onClose}>
              <SearchBar onSearch={onSearch} />
            </HomePage>
          }
        />

        <Route path='/' element={<LandingPage />} />

        <Route path='/form' element={<FormPage />} />

        <Route path='/detail' element={<DetailPage />} />

      </Routes>

    </div>
  );
};

export default App;
