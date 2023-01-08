import React from 'react'
import ViratKohliProfile from './ViratKohliProfile'
import Reels from './Reels'
import Videos from './Videos'
import Carousel from './Carousel'
import Footer from './Footer'

const HomeSection = () => {
  return (
    <div className='homesection bg-[#fafafa]' >
      <div className="homesection__container m-auto p-4" style={{
        maxWidth: "calc(935px + 40px)",
      }}>
        <ViratKohliProfile />
        <Reels />
        <Videos />
        <Carousel />
        <Footer />
      </div>
    </div>
  )
}

export default HomeSection