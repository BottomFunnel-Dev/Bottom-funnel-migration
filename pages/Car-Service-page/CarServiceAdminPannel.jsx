import React, { useState } from 'react'
import "./CarServiceAdminPannel.css"

export const CarServiceAdminPannel = () => {

  const [imageChange,setImageChange] =useState("Images/CarService/Adminpanelscreens/Dashboard  1601.png")
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)
 
 }



  const carserviceadminpanneldata= [

    {
      img:"Images/CarService/Adminpanelscreens/Dashboard  1601.png",
      logo:"Images/CarService/Icons/prototyping.png",
      htxt:"Dashboard",
      stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in erat tortor. Proin tincidunt laoreet nisi, sit amet suscipit sem. ",
    },

    {
      img:"Images/CarService/Adminpanelscreens/Dashboard 2  1600.png",
      logo:"Images/CarService/Icons/prototyping-9.png",
      htxt:"Reports & Analytics",
      stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in erat tortor. Proin tincidunt laoreet nisi, sit amet suscipit sem. ",
    },


    {
      img:"Images/CarService/Adminpanelscreens/Dashboard 3  1600.png",
      logo:"Images/CarService/Icons/prototyping-11.png",
      htxt:"Notification & Alerts",
      stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in erat tortor. Proin tincidunt laoreet nisi, sit amet suscipit sem. ",
    },


    {
      img:"Images/CarService/Adminpanelscreens/Realtime Overview  1600.png",
      logo:"Images/CarService/Icons/prototyping-10.png",
      htxt:"Payments Management",
      stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in erat tortor. Proin tincidunt laoreet nisi, sit amet suscipit sem. ",
    },




  ]
  return (
    <div className='carserviceadminpannelmainbox'>

    <div className='carserviceadminpannelleftbox'>{carserviceadminpanneldata.map((e)=>{
      return(
  
        <div className='carserviceadminmappingdatabox'
        key={e.htxt} onMouseEnter={() => {
            
          handleImageChange(e.img)
      }}
      
        >
        <div className='carserviceadminpannellogo'>
        <img src={e.logo} />
        </div>
        <div className='carservicetextbox'>
        <h4>{e.htxt}</h4>
        <p>{e.stxt}</p>
        </div>
        </div>
      )
     
    })}</div>
    <div className='carserviceadminpannelrightbox'>
    <img src={imageChange} alt='images' />
    </div>
   
    
    </div>
  )
}

