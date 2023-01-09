 import React from 'react'
 import "./Fitnessfeature.css"
 
 export default function FitnessFeature() {
           
    const fitnessfeature =[
        {
           img:"Images/fitness/advanced.png",
           p:"Advanced Search"
        },
        {
            img:"Images/fitness/easy.png",
            p:"Easy Payment"
         },
         {
            img:"Images/fitness/video.png",
            p:"Video Calling"
         },
         {
            img:"Images/fitness/ratings.png",
            p:"Ratings"
         },
         {
            img:"Images/fitness/treaking.png",
            p:"Performence Tracking"   
         },
         {
            img:"Images/fitness/live.png",
            p:"Live Training"
         },
  ]

   return (
    <div className='szfitfeaturesection'> 
    <div className='fitfeature'>
        <h1>Features</h1>
        <p>With brand new features like interactive graphs and charts, you'll never miss a beat when it comes to tracking your progress. And our community will help keep you motivated by offering support from other likeminded individuals.</p>
    </div>
    <div className='fitfeaturemedia'>
           {
             fitnessfeature.map((item,i) => {
                return (
                    <div key={i} className='fitfeaturdocs'>
                        <div className="fitdocimg" ><img src={item.img}/>  </div>
                        <p>{item.p}</p> 
                        </div>
                )
             })
           }
    
    </div>

     
</div>
   )
 }
 