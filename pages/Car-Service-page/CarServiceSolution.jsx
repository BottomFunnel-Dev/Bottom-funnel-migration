import React from 'react'
import "./CarServiceSolution.css"


export const CarServiceSolution = () => {

    const carsolutiondata = [
        {
            img: "Images/CarService/BannersBackgrounds/picture6.png",
            htxt: "90 Min Car Service",
            stxt: "Experience Quick Service Which Completes In Just 90 Minutes, Will Help You Save You Precious Time And Efforts Of Visiting Workshops To Get Your Car Serviced.",
        },

        {
            img: "Images/CarService/BannersBackgrounds/picture5.png",
            htxt: "In-House Technicians",
            stxt: "Metre Per Second Recruits Best In Class German Car Technicians With A Minimum Of 8+ Years Of Experience And Train Them.After Enabling Them With Garage Nations's Standards They Are Assigned For Services/Repairs",
        },


        {
            img: "Images/CarService/BannersBackgrounds/picture4.png",
            htxt: "Saving Up To 40%",
            stxt: "Metre Per Secoubd Provides 100% Transparent Service Which Means All Parts Are Opened Right In Front Of You While Performing Service And No More Surprised Or Extra Spares Or Costa ",
        },


        {
            img: "Images/CarService/BannersBackgrounds/picture.png",
            htxt: "Multiple Payment Options",
            stxt: "Experience Quick Service Which Completes In Jujst 90 Minutes, Which Will Help You Save Your Precious Time And Efforts Of Visiting Workshops To Get Your Car Serviced",
        },

        {
            img: "Images/CarService/BannersBackgrounds/picture (2).png",
            htxt: "Reports & Analytics",
            stxt: "Metre Per Second Recruits Best In Class German Car Technicians With A Minimum Of 8+ Years Of Experience And Train Them.After Enabling Them With Garage Nation's Standards They Are Assigned For Services/Repairs",
        },


        {
            img: "Images/CarService/BannersBackgrounds/picture3.png",
            htxt: "Easy Tracking",
            stxt: "Metre Per Second Provides 100% Transparent Service Which Means All Parts Opened Rights In Fronts Of You While Performing Service And No more Surprised Or Extra Spares Or Costa ",
        },

    ]



    return (
        <div className='carservicesolutionmainboxes'>
            <div className='carservicesolutioninnerboxbackground'>
                <div className='carservicesolutioninnerbanckgroundplainfortext'>
                    <h1>Our Services</h1>
                    <h2>Great Car Services Solutions That We Offer</h2>
                </div>
                <div className='datamaingdivcarservicesolutionforimagedivandtxt'>{carsolutiondata.map((e) => {
                    return (
                        <div className='datamappingafterboxindivisualcarservice'>
                            <div className='datamappingcarservicesolutionforimage'><img src={e.img} alt="carservicesolution" /></div>
                            <div className='datamappingservicesolutionfortext'>
                                <h4>{e.htxt}</h4>
                                <p>{e.stxt}</p>

                            </div>
                        </div>
                    )
                })}</div>

            </div>


        </div>
    )
}

