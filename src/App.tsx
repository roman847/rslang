import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Statistics from 'pages/Statistics/StatisticsPage'
import Authorization from 'pages/Authorization'
import AudioCall from 'pages/AudioCall'
import Sprint from 'pages/Sprint'
import Textbook from 'pages/Textbook'
import Main from 'pages/main/Main'
import Registration from 'pages/Registration'
import DifficultWords from 'pages/Textbook/components/DifficultWords/DifficultWords'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='auth' element={<Authorization />} />
        <Route path='reg' element={<Registration />} />
        <Route path='audio' element={<AudioCall />} />
        <Route path='sprint' element={<Sprint />} />
        <Route path='statistics' element={<Statistics />} />
        <Route path='textbook' element={<Textbook />} />
        <Route path='difficultwords' element={<DifficultWords />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
