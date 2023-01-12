import React, { useState } from 'react'
import "./CarServiceTechnicianApp.css"

export const CarServiceTechnicianApp = () => {
    const [imageChange,setImageChange] =useState("Images/CarService/Technicianappscreen/Component 87.png")
    const handleImageChange = (imagepath) => {
      setImageChange(() => imagepath)
   
   }
  


const carservicetecnicianappdata = [

{
    img:"Images/CarService/Technicianappscreen/Component 87.png",
    icon:"Images/EyewearDeliveryapp/icons/prototyping-1.png",
    htxt:"Profile Management",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",

},

{
    img:"Images/CarService/Technicianappscreen/earninganalytics.png",
    icon:"Images/EyewearDeliveryapp/icons/prototyping-8.png",
    htxt:"Earning Analytics",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",

},


{
    img:"Images/CarService/Technicianappscreen/profilemanagement.png",
    icon:"Images/EyewearDeliveryapp/icons/prototyping-6.png",
    htxt:"Service Report's Dashboard",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",

},


{
    img:"Images/CarService/Technicianappscreen/alertsetting.png",
    icon:"Images/EyewearDeliveryapp/icons/prototyping-7.png",
    htxt:"Service Alerts",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",

},





]


  return (
    <div className='carservicetechnicianmainbox'>
    <div className='carservicetechnicianappboxfortxt'>
    <h1>Technician Application</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum</p>
    </div>
    <div className='carservicetechnicianppflexingintonew'>
    <div className='carservicetechnicianappflexingintonewleft'>
    <div className='carservicetechnicianappflexingintonewleftinsiderboxformobile'>
    <img src={imageChange} alt="imagemobile" />
   
    </div>
    
    </div>




    <div className='carservicetechnicianappflexingintonewright'>{carservicetecnicianappdata.map((e)=>{
       return (
        <div className='carservicetechnicianaftermappingnewboxes'
        key={e.htxt} onMouseEnter={() => {
            
            handleImageChange(e.img)
        }}
        
        
        
        >
        <div className='logocarservicetechnician'><img src={e.icon} alt="image" /></div>
        <div className='txteyeweardriver'><h4>{e.htxt}</h4>
        <p>{e.stxt}</p>
        </div>
        </div>
       )
    })}</div>
    </div>
    
    </div>
  )
}



