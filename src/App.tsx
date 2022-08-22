import React from 'react'
import Main from './pages/main/Main'

import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Authorization from './pages/Authorization'
import AudioCall from './pages/AudioCall'
import Sprint from './pages/Sprint'
import Statistics from './pages/Statistics'
import Textbook from './pages/Textbook'

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
