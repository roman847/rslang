import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Opportunities from './components/Opportunities'
import Team from './components/Team'

function Main() {
  return (
    <div className='App'>
      <Header />
      <MainContent />
      <Opportunities />
      <Team />
      <Footer />
    </div>
  )
}
export default Main
