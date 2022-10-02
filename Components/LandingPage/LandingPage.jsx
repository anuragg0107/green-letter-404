import React from 'react'
import Navbar from '../Navbar/Navbar'
import BestSeller from './BestSeller'
import CleanBeauty from './CleanBeauty'
import DownloadApp from './DownloadApp'
import LovedBy from './LovedBy'
import LoveGreat from './LoveGreat'
import LP_Slider from './LP_Slider'
import TopCatogeries from './TopCategory'
import NewArrival from './NewArrival'
import Spotlight from './Spotlight'
import Reviews from './Reviews'

const LandingPage = () => {
  return (
    <>
        <LP_Slider/>
        <LovedBy/>
        <NewArrival/>
        <BestSeller/>
        <Spotlight/>
        <TopCatogeries/>
        <DownloadApp/>
        <LoveGreat/>
        <CleanBeauty/>
        <Reviews />
    </>
  )
}

export default LandingPage