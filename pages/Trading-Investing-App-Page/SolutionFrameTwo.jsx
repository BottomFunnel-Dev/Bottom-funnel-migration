import React from 'react'
import { useState } from 'react'
import './solutionFrameTwo.css'


export const SolutionFrameTwo = () => {

  const [imageChange,setImageChange] =useState("Images/Trading-investing-App/Admin-Customer-Screens/Dashboard-Admin-Panel-PSD-Template-1.png")
    const handleImageChange = (imagepath) => {
      setImageChange(() => imagepath)
   
   }

  const SolutionFrameTwoData = [
    {
      icon: "Images/Trading-investing-App/icons/dashboard-3.png",
      txt: "Dashboard Analysis",
      img: "Images/Trading-investing-App/Admin-Customer-Screens/Dashboard-Admin-Panel-PSD-Template-1.png"
    },
    {
      icon: "Images/Trading-investing-App/icons/feed-back.png",
      txt: "Market Reports",
      img: "Images/Trading-investing-App/Admin-Customer-Screens/Dashboard-Admin-Panel-PSD-Template-2.png"
    }
    ]


  return (

    <div className='solution-Frame-Two-Main-Container'>

        
       
      
      <div className='solution-Frame-Two-Content-Box-Heading'>
            <h1> Admin's Pannel</h1>
          </div> 

    <div className='solution-Frame-Two-Sub-Container'>

          {/* IMAGE PART */}

          <div className='solution-Frame-Two-Right-Content-Holder'>
                <div className='solution-Frame-Two-Right-Image-Holder-Div'>
                <img src={imageChange} alt="" />
                </div>
           </div>
   
            {/* box/cards part */}

      <div className='solution-Frame-Two-Left-Content-Holder'>{SolutionFrameTwoData.map((e) => {
          return (
            <div className='solution-Frame-Two-Left-Div-Boxes'
                key={e.txt} onMouseEnter={() => {

                  handleImageChange(e.img)
                }}>

                <div key={e.txt}>
                  <div><img className='solution-Frame-Two-Icons' src={e.icon} alt={e.txt} /></div>
                  <p className='solution-frame-box-text'>{e.txt}</p>
                </div>
            </div>
              )
            })}
      </div>





    </div>
  </div>
  )
}
