import React from 'react';
import './servicesOffer.css'


export const ServicesOffer = () => {
  return (
    <div className='RG-services-Offer-Container'>

        <h1 className='RG-service-Offer-heading'><span className='RG-service-Offer-Span'>SERVICES </span>THAT WE OFFER FOR YOUR TRADING & INVESTING APP</h1>

        <div className='RG-service-Offer-Three-Boxes-Main'>

            <div className='RG-service-Offer-Box-1-2-Combo'>

                <div className='RG-service-Offer-Box-1'>

                  <img width="100%" src="Images/Trading-investing-App/banners-backgrounds/Rectangle-4804.png" alt="" />
                  <div className='RG-service-Offer-Box1-Img2'>
                    <img width="85%" src="Images/Trading-investing-App/banners-backgrounds/Frame.png" alt="" />
                  </div>
                  <h2 className='RG-service-Offer-box-1-head'>Seamless Account Opening</h2>
                  <p className='RG-service-Offer-box-1-para'>Requires PAN + Aadhaar + KEYC Only</p>
                  
                </div>

                <div className='RG-service-Offer-Box-2'>

                  <img width="100%"src="Images/Trading-investing-App/banners-backgrounds/Rectangle-4805.png" alt="" />
                  <div className='RG-service-Offer-Box2-Img2'>
                    <img width="100%" src="Images/Trading-investing-App/banners-backgrounds/Frame-2.png" alt="" />
                  </div>
                  <h2 className='RG-service-Offer-box-2-head'>Instant Withdrawl</h2>
                  <p className='RG-service-Offer-box-2-para'>Transfer Funds from upstox To Your Bank Account In Just 15 Minutes</p>
                </div>

            </div>

                <div className='RG-service-Offer-Box-3'>

                  <img width="100%"src="Images/Trading-investing-App/banners-backgrounds/Rectangle-4806.png" alt="" />
                  <div className='RG-service-Offer-Box3-Img2'>
                    <img width="100%" src="Images/Trading-investing-App/banners-backgrounds/Frame-1.png" alt="" />
                  </div>
                    <h2 className='RG-service-Offer-box-3-head'>Learn. Decide. Invest.</h2>
                    <p className='RG-service-Offer-box-3-para'>Learn All About Investments From Experts. Make Informed Decisions Using Smart Tools. Invest Easily With Just A Click.</p>
                 
                  </div>
        </div>
        <div className='RG-service-Offer-Button-Div'>
        <button className='RG-service-Offer-Button'>
          Get Started
        </button>
        
        </div>
    </div>
  )
}