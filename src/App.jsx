import React from 'react'
import Hero from './assets/Components/Hero/Hero'
import Services from './assets/Components/Services/Services'
import WhereToBuy from './assets/Components/WhereToBuy/WhereToBuy'
import AppBanner from './assets/Components/AppBanner/AppBanner'
import Footer from './assets/Components/Footer/Footer'


const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Hero/>
      <Services/>
      <WhereToBuy/>
      <AppBanner/>
      <Footer/>
    </div>
  )
}

export default App