import React from 'react'
import "./fitnesssolution.css"

export default function FitnessSolution() {

  const fitnesssolution =[
      
    {
      img:"Images/fitness/wearable.png",
      p:"Wearable Apps"
   },
   {
       img:"Images/fitness/gym.png",
       p:"Gym App"
    },
    {
       img:"Images/fitness/tracker.png",
       p:"Activity Traking app"
    },
    {
       img:"Images/fitness/yoga.png",
       p:"Yoga App"
    },
    {
       img:"Images/fitness/partner.png",
       p:"Gym Partner App"
    },
    {
       img:"Images/fitness/diet.png",
       p:"Diet Planning App"
    },
          
  ]
  return (
    <div className='szfitnesssolution'> 
         <div >
         <h1>Solutions</h1>
        <p>Our team of experts has created many successful apps for a wide range of industries and categories, such as health & wellness, travel & hospitality, real estate & marketing automation, education etc., so you can be sure your project will be taken care of by professionals who know what they're doing best.</p>
         </div>
         
       <div className='fitnesssolutionsub'>
       {
              fitnesssolution.map((item,i) => {
                return (
                    <div key={i} className='szfeaturdocssol'>
                        <div className="szdocimgsol" ><img src={item.img}/>  </div>
                        <p>{item.p}</p> 
                        </div>
                )
             })
           }
       
       
       
       </div>
   
    </div>
  )
}
