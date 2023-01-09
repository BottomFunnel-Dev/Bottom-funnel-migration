import React from 'react'
import "./fitnesswhy.css"

export default function Fitnesswhy() {

    const whychoose=[
        {
          img:"Images/education/security.png",
          p:"On Time Delivery"
        },
        { 
          img:"Images/education/customer.png",
          p:"24*7 Supports"
    
        },
         
        { 
          img:"Images/education/arrow.png ",
          p:"Flexibility"
    
        },
        {
          img:"Images/education/teaching.png",
          p:"Customer Satisfaction"
        }
    ]
  return (
    <div className='szfitwhy'>
         <h1>Why choose us</h1>
          <p className='szwhypara'> </p>
        <div className='szfitchoose'>

       
           {
              whychoose.map((item,i) => {
                return (
                    <div key={i}  >
                        <div className='szfitanalysis' ><img src={item.img}/>  </div>
                        <p>{item.p}</p> 
                        </div>
                )
             })
           }
    </div>
    </div>
  )
}
