import Image from 'next/image'
import React from 'react'
import styles from "./PoliticsApptextbox.module.css"


export const PoliticsApptextbox = () => {

    const politicstxtdata = [
        {
            icon:"/Images/politics Re/Rectangle 34624101.webp",
            htxt:"Volunteer Engagement",
            stxt:"Our Volunteer management and engagement apps ensure that your political party is shown in the best light.",
        },

        {
            icon:"/Images/politics Re/Rectangle 34624101-1.webp",
            htxt:"Engagement",
            stxt:"Our Political App Design gives you a platform that allows you to be in constant touch with the constituents no matter what corner of the world they belong to.",
        },


        {
            icon:"/Images/politics Re/Rectangle 34624101-2.webp",
            htxt:"Transparency",
            stxt:"We help you show the real values of your party to the constituents in the medium that they understand.",
        },

        {
            icon:"/Images/politics Re/Rectangle 34624101-3.webp",
            htxt:"Reputation Management",
            stxt:"Our Apps can help you succeed in the competitive political landscape unscathed by helping you sway the constituent's opiniouns in real time",
        },

    ]

  return (
    <div className={styles.politicalappetxtboxmainboxes}>
    
    <div className={styles.politicstxtbox}>
    <h2>What is the Role of Apps for Political Parties ?</h2>
    <p>Political Parties from around the world consantly struggle with creating an impactful, direct link with the millions of prospective voters who hold their future in own hands.The result if this disorentation almost always results in the nationals not knowing the values that the political parties stand for and voting for the opposition.
    </p>
    <p>Through our political campaign & volunteers management app development services, we are here to help you change that.We are here to make your party reach the constituents.
    </p>

    <h2>Features</h2>
<p>Every single one of our political app development services are devised to help create image about your political party and bring your closer to your volunteers hearts. We are the political app development agency who knows the right political app features that help you reap all the benefits a Political App Building ecosystem can offer inside out.</p>
    </div>
    
<div className={styles.politicalapptxtdatamappingbox}>{politicstxtdata.map((e)=>{
    return (
        <div className={styles.politicsapptxtboxmappingind}>
        <div className={styles.politicsinditxtandiconboxflex}>
        <div className={styles.politicsindiiconbox}>
        <Image
          src={e.icon}
          alt={"icon"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit:"contain" , padding:"10px"}}
        />
        </div>
        <div className={styles.politicsinditxtboxes}><h5>{e.htxt}</h5></div>        
        </div>
        <p>{e.stxt}</p>
        </div>
    )
})}</div>


    </div>
  )
}
