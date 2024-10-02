import React from 'react'
import './Home.css'
import MainSection from './MainSection'
import CardSection from './CardSection'
import LastSection from './LastSection'
import ViewAll from './Component/ViewAll'
import Footer from './Component/Footer/Footer'





function Home() {
  return (
    <div className='home'>
     
    <MainSection /> 
    <CardSection />
<ViewAll 
  title={'view all'}
/>

    <LastSection />
    <Footer />
    
   

   
    </div>
  )
}

export default Home