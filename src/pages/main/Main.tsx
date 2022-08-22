import React from 'react'
import Footer from 'pages/main/components/Footer'
import Header from 'pages/main/components/Header'
import MainContent from 'pages/main/components/MainContent'
import Opportunities from 'pages/main/components/Opportunities'
import Team from 'pages/main/components/Team'

const Main = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Opportunities />
      <Team />
      <Footer />
    </div>
  )
}
export default Main
