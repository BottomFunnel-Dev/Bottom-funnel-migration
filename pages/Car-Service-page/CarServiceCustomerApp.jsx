import React, { useState } from 'react'
import "./CarServiceCustomerApp.css"




export const CarServiceCustomerApp = () => {
    const [imageChange,setImageChange] =useState("Images/CarService/Customerappscreens/Component 93.png")
    const handleImageChange = (imagepath) => {
      setImageChange(() => imagepath)
   
   }
  

const carservicecustomerappdata = [
{
    img:"Images/CarService/Customerappscreens/Component 93.png",
    icon:"Images/EyewearDeliveryapp/icons/prototyping-2.png",
    htxt:"Easy App On-Boarding",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",
},


{
    img:"Images/CarService/Customerappscreens/Component 88.png",
    icon:"Images/EyewearDeliveryapp/icons/prototyping-5.png",
    htxt:"Shoping Bag",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",
},


{
    img:"Images/CarService/Customerappscreens/Component 87.png",
    icon:"Images/EyewearDeliveryapp/icons/prototyping-3.png",
    htxt:"Special Offers & Discounts",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",
},


{
    img:"Images/CarService/Customerappscreens/Component 86.png",
    icon:"Images/EyewearDeliveryapp/icons/prototyping-4.png",
    htxt:"Cart For Your Favourites",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",
},



]


  return (
    <div className='carservicecustomerappmainboxes'>
    <div className='carservicecustomerappuppertextbox'>
    <h1>An Overview of Our Car Srvice Customer App</h1>
    <p>Design Sprint facilitates quick ideation,Prototyping and validation of a product idea. Find solutions for business problems through an integrated design thinking approach.A Complete Scope of car Service and ridesharing app development app development solutions for coordinating and moving travellers together</p>
    </div>
    <div className='carserviceappcustomerappboxflextype'>
    <div className='carserviceappcustomerappboxflextypeleftbox'>
    <div className='carserviceappcustomerappboxflextypeleftboxinsidertext' >
    <h1>Customer App</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum</p>
    </div>
    
<div className='carservicecustomermappingdatabox'>{carservicecustomerappdata.map((e)=>{
    return (
        <div className='carservicecustomeraftermap1box'
        key={e.htxt} onMouseEnter={() => {
            
            handleImageChange(e.img)
        }}
        
        >
        <div className='flexingcarservicecustomerforlogo'>
        <img src={e.icon} alt="image" />
        </div>
        <div><h4>{e.htxt}</h4>
        <p className='carserviceboxsmalltextforcustomerapp'>{e.stxt}</p>
        </div>
        </div>
    )
})}</div>



    </div>
    <div className='carserviceappcustomerappboxflextyperightbox'> 
    <div className='carservicemobileforcustomerappdeliverybackgroundimages'>
    <div className='carservicecustomerapprightboxupperimage'>
    <img src={imageChange} alt="mobile image" />
</div>
    
    </div>
    </div>
    </div>
    
    
    </div>
  )
}

