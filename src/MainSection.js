import React from 'react'
import './MainSection.css'
import NavBarComponent from './Component/NavBarComponent/NavBarComponent'
import NormalButton from './Component/Button/NormalButton'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';



function  MainSection() {

  
  return (
    <div className='mainSection'>
    <div className='footerimg'>
    <NavBarComponent />

    <header className="App-header">
        <div className="hero-section">
          <h1 className='welcome'>Welcome to</h1>
          <h1 className='welcome_p'>Pop Rock Crystal Shop!</h1>
          <p>
            Here you will find unique phone accessories, crystals, jewelry and more.
            Free shipping inside the U.S. and our phone grips come with a limited warranty.
            Enjoy!
          </p>
         <NormalButton 
          bname={'SHOP NOW'}
         />
        </div>
        <div className="product-section">
          <span className="new-lot">New lot</span>
          <Carousel showArrows={true} showThumbs={false} autoPlay={true}  showStatus={false} >

          <div>
                    <img src="/clipwise/img/Crystal_Agate.png" />
                
                </div>
                <div>
                <img src="/clipwise/img/Crystal_Agate.png" />
                </div>
                <div>
                <img src="/clipwise/img/Crystal_Agate.png" />
                </div>
               
            </Carousel>
          {/* <img src='img/Crystal_Agate.png' alt="Crystal Agate Phone Grip" className="crystal-img" /> */}
          <p className='pricetag'>CRYSTAL AGATE PHONE GRIP - <span className="price">18.99$</span></p>
        </div>




        
      </header>
      
      <div className='MouseScroll'>
          <img src='/clipwise/img/mouse.png' alt='Mouse Icon'/>
          <span>Scroll Down</span>

        </div>
      </div>
    </div>
  )
}

export default MainSection