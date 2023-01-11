import React from 'react'
import { useState } from 'react';
import "./Pharmacydrive.css"

export default function Pharmacydrive() {
    let pharmacydrivedata = [
        {
          img: {
            src: "Images/pharmacy/Request.png",
            alt: "registerimage",
          },
          icon: {
            src: "Images/pharmacy/Request accept.png",
            alt: " registerlogo",
          },
          title: "Accept/Reject Request",
         para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
        },
        {
          img: {
            src: "Images/pharmacy/Notificationimage.png ",
            alt: "notification",
          },
          icon: {
            src: "Images/pharmacy/Notification.png",
            alt: "notification logo",
          },
             title: "Notification",
             para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
        },
        {
          img: {
            src: "Images/pharmacy/Order detail.png",
            alt: "order",
          },
          icon: {
            src: "Images/pharmacy/Details.png",
            alt: "order",
          },
            title: "Get order Details",
             para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
       
         },
        {
          img: {
            src: "Images/pharmacy/Navigationimage.png ",
            alt: " Navigationimage",
          },
          icon: {
            src: "Images/pharmacy/Navigation.png",
            alt: "Navigationimage",
          },
          title: "Navigation",
          para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
        },
        
      ];


      const [active, setActive] = useState(0);
 
 
    return (
        <div className='pharmacydrive'> 
        <h1>Drive app</h1>
        <div className='pharmacydrivesub'> 
                 
                <div className='pharmacydriveleft'>
                   
                   <div className="pharmacy-drive-image">
                 <img
                    src={pharmacydrivedata[active].img.src}
                    alt={pharmacydrivedata[active].img.alt}
                    />
                     </div>
       
                   </div>
    
                <div className='pharmacydriveright'>
    
                
            {pharmacydrivedata.map(({ title, icon }, idx) => {
              return (
               
                <div
                  key={title}
                  onMouseOver={() => setActive(idx)}
                  className={`pharmacy-box-${idx}`}
                >
                  
                  <div className="pharmacy-logo">
                    <img src={icon.src} alt={icon.alt} />
                  </div>
                  <h3>{title}</h3>
                   
                
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, quis eum ev</p>
                  </div>
              
            
              );
            })}
          
                </div>
     
          </div>
      </div>
  )
}
