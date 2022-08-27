import React from 'react'
import Header from 'pages/main/components/Header'
import Footer from 'pages/main/components/Footer'
import Diagram from 'pages/Statistics/components/Diagram'
import StatisticMainContent from 'pages/Statistics/components/StatisticToday'
import StatisticAllTime from 'pages/Statistics/components/StatisticAllTime'

const Statistics = () => {
  return (
    <div>
      <Header />
      <StatisticMainContent />
      <StatisticAllTime />
      <Diagram />
      <Footer />
    </div>
  )
}

export default Statistics
