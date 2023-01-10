 import React from 'react'
 import "./EscooterAdmin.css"
 
 export const EscooterAdmin = () => {
   return (
    <div className='szescooteradmin'>
    <div className='szescooteradminsub'>
    <div className='szescooteradminleft'>
        <div>
        <h2>Drive App</h2>
        <ul>
          <li>lorem Ipsum is simply dummy text of</li>  
          <li>lorem Ipsum is simply</li>  
          <li>lorem Ipsum is simply</li>   
          <li>lorem Ipsum is simply</li>   
          <li>lorem Ipsum is simply</li>   
          <li>lorem Ipsum is simply</li> 
           </ul> 
        
        </div>
    </div>

    <div className='szescooteradminright'>
        {/* <div className='szshape'> <img src='Images/Escooter/shape.png'/> </div> */}
        <div className='szscootertab'> <img src='Images/Escooter/tab.png'/> </div>
       <div className='blackbluescooter'> <img src="Images/Escooter/blackbluescooter.png"/></div>
    </div>
    
    </div>
</div>
   )
 }
 