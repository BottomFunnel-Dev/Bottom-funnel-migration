import React, { useState } from 'react'
import "./Pharmacyadmin.css"

export default function Pharmacyadmin() {
    let Pharmacyadmindata = [
        {
          img: {
            src: "Images/pharmacy/Market Overview.png",
            alt: "Marketimage",
          },

          icon: {
            src: "Images/pharmacy/Market overview icon.png",
            alt: " Marketlogo",
          },

          title: "Market overview",
         para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
        },

        {
          img: {
            src: "Images/pharmacy/Product overview.png",
            alt: "Product ",
          },
          icon: {
            src: "Images/pharmacy/Product overview icon.png",
            alt: "Product logo",
          },
             title: "Product Overview",
             para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
        },
        {
          img: {
            src: "Images/pharmacy/Reports and revenue.png",
            alt: "Revenueimage",
          },
          icon: {
            src: "Images/pharmacy/Revenue & sales icon.png",
            alt: "Revenuelogo",
          },
            title: "Revenue & Sales Analytics",
             para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
       
         },
        {
          img: {
            src: "Images/pharmacy/Customer management.png",
            alt: "Customer image",
          },
          icon: {
            src: "Images/pharmacy/Customer management icon.png",
            alt: "Customer logo",
          },
          title: "Customer Management",
          para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
        },
        
      ];


      const [active, setActive] = useState(0);
  return (
    <div className='pharmacyadmin'> 

    <h1> Admin panel</h1>
    <div className='pharmacyadminsub'> 
             
            <div className='pharmacyadminright'>

            
{Pharmacyadmindata.map(({ title, icon }, idx) => {
  return (
   
    <div
      key={title}
      onMouseOver={() => setActive(idx)}
      className={`Pharmacy-box-${idx}`}
    >
      
      <div className="Pharmacy-logo">
        <img src={icon.src} alt={icon.alt} />
      </div>
      <h3>{title}</h3>
       
    
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, quis eum ev</p>
      </div>
  

  );
})}

    </div>
            <div className='pharmacyadminleft'>
               
               <div className="pharmacy-admin-image">
             <img
                src={Pharmacyadmindata[active].img.src}
                alt={Pharmacyadmindata[active].img.alt}
                />
                 </div>
   
               </div>
 
 
      </div>
  </div>
  )
}
