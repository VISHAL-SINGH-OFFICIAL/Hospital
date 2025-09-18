import React from 'react'
import Header from './component/Header'

import RunningCmp from './component/RunningCmp'
import Marquee from "react-fast-marquee";
import AboutStart from './component/AboutStart';

const App = () => {
  return (
    <>
      <Header />
      
      <AboutStart/>
      <Marquee>
      <RunningCmp />
      </Marquee>
    </>
  )
}

export default App;