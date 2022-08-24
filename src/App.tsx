import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Statistics from 'pages/Statistics/components/StatisticMainContent/'
import Authorization from 'pages/Authorization'
import AudioCall from 'pages/AudioCall'
import Sprint from 'pages/Sprint'
import Textbook from 'pages/Textbook'
import Main from '../src/pages/main/Main'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='auth' element={<Authorization />} />
        <Route path='audio' element={<AudioCall />} />
        <Route path='sprint' element={<Sprint />} />
        <Route path='statistics' element={<Statistics />} />
        <Route path='textbook' element={<Textbook />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
