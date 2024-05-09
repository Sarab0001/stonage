import React from 'react'
import {  Homecrousel, LetsCreate, Webgl } from '..'
import Script from 'next/script'

const Home = () => {
  
  return (
    <>
      {/* <div className='relative'> */}
      
        {/* <canvas></canvas> */}
            <Webgl />
            <Homecrousel />
            <LetsCreate />
         
        
      {/* </div> */}
      {/* <Script src="/script.js" strategy="lazyOnload" />
      <Script src="/dat.gui.min.js" strategy="lazyOnload" /> */}
    </>

  )
}







export default Home
