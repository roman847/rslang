import React from 'react'
import { Box } from '@mui/material'
import Footer from 'pages/main/components/Footer'
import Header from 'pages/main/components/Header'
import MainContent from 'pages/main/components/MainContent'
import Opportunities from 'pages/main/components/Opportunities'
import Team from 'pages/main/components/Team'

const Main = () => {
  return (
    <Box sx={{ bgcolor: '#faf8f5' }}>
      <Header />
      <MainContent />
      <Opportunities />
      <Team />
      <Footer />
    </Box>
  )
}
export default Main
