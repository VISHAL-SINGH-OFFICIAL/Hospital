import React from 'react'
import Header from './component/Header'
import Hero from './component/Hero'
import RunningCmp from './component/RunningCmp'
import Marquee from "react-fast-marquee";

const App = () => {
  return (
    <>
      <Header />
      <Marquee>
      <RunningCmp />
      </Marquee>
    </>
  )
}

export default App