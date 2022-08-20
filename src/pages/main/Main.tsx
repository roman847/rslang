import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Opportunities from './components/Opportunities'
import Team from './components/Team'

const Main = () => {
  return (
    <main>
      <Header />
      <MainContent />
      <Opportunities />
      <Team />
      <Footer />
    </main>
  )
}
export default Main
