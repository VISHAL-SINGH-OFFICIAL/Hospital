import React from 'react'
import Header from './component/Header'
import Hero from './component/Hero'
import RunningCmp from './component/RunningCmp'
import Marquee from "react-fast-marquee";
import AboutStart from './component/AboutStart';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutStart/>
      <Marquee>
      <RunningCmp />
      </Marquee>
    </>
  )
}

export default App;