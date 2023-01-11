import React, { useState } from 'react'
import "./MarketPlaceClient.css"

const MarketPlaceClients = () => {



    const[imageChange,setImageChange] = useState("Images/Marketplaceapp/Clientsappscreen/detailsofposts.png")



    const handleImageChange = (imagepath) => {
        setImageChange(() => imagepath)
        console.log(imagepath)
     }



    const marketplaceclientdata = [

            {
                img: "/Images/Marketplaceapp/icons/Component47.png",
                Htxt:"Details of Posts",
                stxt: "A detailed post about freelancers, project managers and entrepreneurs who like to use the platform to earn their income.",
                Cphone: "Images/Marketplaceapp/Clientsappscreen/detailsofposts.png"
            },
            {
                img: "/Images/Marketplaceapp/icons/Component44.png",
                Htxt:"In-App-Chat",
                stxt: "This is an in-app chat platform that helps you communicate effectively with your clients. ",
                Cphone: "Images/Marketplaceapp/Clientsappscreen/inappchat.png"
            },
            {
                img: "/Images/Marketplaceapp/icons/Component46.png",
                Htxt:"Employee Details",
                stxt: " If you are an employer that needs a freelancer, here is the best service for you.",
                Cphone: "Images/Marketplaceapp/Clientsappscreen/employeedetails.png"
            },
        
            {
                img: "/Images/Marketplaceapp/icons/Component45.png",
                Htxt:"List of Applicants",
                stxt: "Such as a built in system for submission tracking, email notifications for job applications and more.",
                Cphone: "Images/Marketplaceapp/Clientsappscreen/people applied.png"
            }
        
        ]
        



  return (
    <div className='marketplaceclientmainboxing'>
      <div className='clientmarketplaceflexboxbig'>
      
      <div className='clientmarketplaceflexleft'>
      <div className='clientmarketplaceflexlefttxtbox'><h2>Client's Website & Site</h2>
      <p>The client has a wonderful site that is beautifully designed and clear to navigate. You can see how much care was put into the creating of their website, as well as their services.</p></div>
    
      <div className='marketplaceclientsboxingfordoingflex'>
      <div className='marketplaceclientsflexboxing'>{marketplaceclientdata.map((el)=>{
   return (
       <div className='marketplaceclientflexboxingforimageandtxtcontain'
       
       key={el.Htxt} onMouseEnter={() => {
        console.log(el);
             handleImageChange(el.Cphone)
               }}
       
       >
       <div className='marketplaceclientsflexboxingforimagecontain'><img className='marketplaceadminlogo' src={el.img} alt="" /></div>
       <div className='marketplaceclientflexboxingfortxtcontain'><h5>{el.Htxt}</h5>
       <p>{el.stxt}</p>
       </div>
       
       </div>
   
   )
      })}
     
      </div>
      </div>
      
      
      </div>
      
















  <div className='clientmarketplaceflexright'>
      <div className='clientmarketplaceflexrightinsiderimagesthreebox'>
      
      
      <div className='clientflexingrightdiv1forimage'><img className='marketplaceimageclientimage1' src='Images/Marketplaceapp/Bannersandbackgrounds/Component44.png' alt='image1' /></div>
      <div className='clientflexingrightdiv2forimage'><img className='marketplaceimageclientimage1'  src={imageChange} alt='image2' /></div>
      <div className='clientflexingrightdiv3forimage'><img className='marketplaceimageclientimage1'  src='Images/Marketplaceapp/Bannersandbackgrounds/picture(2).png' alt='image2' /></div>      
      
      </div>
      
      
      </div>


      </div>

    </div>
  )
}

export default MarketPlaceClients



