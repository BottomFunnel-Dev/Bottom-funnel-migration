import React from 'react'
import { useState } from 'react'
import './solutionFrame.css'


export const SolutionFrame = () => {

  const [imageChange,setImageChange] =useState("Images/Trading-investing-App/Admin-Customer-Screens/Component110.png")
    const handleImageChange = (imagepath) => {
      setImageChange(() => imagepath)
   
   }

  const SolutionFrameData = [
    {
      icon: "Images/Trading-investing-App/icons/prototyping.png",
      txt: "Stocks Analysis",
      img: "Images/Trading-investing-App/Admin-Customer-Screens/Component110-1.png"
    },
    {
      icon: "Images/Trading-investing-App/icons/prototyping-3.png",
      txt: "Easy Buying Options",
      img: "Images/Trading-investing-App/Admin-Customer-Screens/Component111.png"
    },
    {
      icon: "Images/Trading-investing-App/icons/prototyping-1.png",
      txt: "Debts Reports",
      img: "Images/Trading-investing-App/Admin-Customer-Screens/Component111.png"
    },
    {
      icon: "Images/Trading-investing-App/icons/prototyping-2.png",
      txt: "Stocks Activity",
      img: "Images/Trading-investing-App/Admin-Customer-Screens/Component112.png"
    },

    ]


  return (

    <div className='solution-Frame-Main-Container'>

          <div className='solution-Frame-Main-Heading'>
          <h1>SOLUTIONS FOR YOUR TRADING & INVESTMENT APP</h1>
          </div>

        
          <div className='solution-Frame-Content-Box-Heading'>
            <h1> Customer's App</h1>
          </div> 
         
    <div className='solution-Frame-Sub-Container'>



           

            {/* box/cards part */}

      <div className='solution-Frame-Left-Content-Holder'>{SolutionFrameData.map((e) => {
          return (
            <div className='solution-Frame-Left-Div-Boxes'
                key={e.txt} onMouseEnter={() => {

                  handleImageChange(e.img)
                }}>

                <div key={e.txt}>
                  <div><img className='solution-Frame-Icons' src={e.icon} alt={e.txt} /></div>
                  <p className='solution-frame-box-text'>{e.txt}</p>
                </div>
            </div>
              )
            })}
      </div>

         {/* IMAGE PART */}

         <div className='solution-Frame-Right-Content-Holder'>
                <div className='solution-Frame-Right-Image-Holder-Div'>
                <img src={imageChange} alt="" />
                </div>
           </div>




    </div>
  </div>
  )
}
