import React from 'react'
import Header from 'pages/main/components/Header'
import Footer from 'pages/main/components/Footer'
import StatisticMainContent from './components/StatisticToday/StatisticToday'
import StatisticAllTime from './components/StatisticAllTime'

const Statistics = () => {
  return (
    <div>
      <Header />
      <StatisticMainContent />
      <StatisticAllTime />
      <Footer />
    </div>
  )
}

export default Statistics
