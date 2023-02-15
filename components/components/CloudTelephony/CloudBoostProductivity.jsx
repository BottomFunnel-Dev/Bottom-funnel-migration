import React from 'react'
import styles from "./CloudBoostProductivity.module.css"

export const CloudBoostProductivity = () => {

const cloudboostproddata=[
    {
        icon:"Images/cloudtelephony/Vector.png",
        htxt:"Train salespeople",
        txt:"Coach young professionals in your team on how to close deals on calls.Easily monitor their ongoing conversations and join their calls to provide hands-on assistance.",
    },

    {
        icon:"Images/cloudtelephony/call 1.png",
        htxt:"Take calls on the Go",
        txt:"With the Freshsales enable your salespeople to sell from any location their work takes them Make phone calls or answer them,create leads on the go and be more productive.",
    },

    {
        icon:"Images/cloudtelephony/phone-record 1.png",
        htxt:"Record calls",
        txt:"Quickly record phone conversations with prospects to capture their requirements and preference for follow-up calls engage contextually and accelerate deal closures.",
    },

    {
        icon:"Images/cloudtelephony/Component 2.png",
        htxt:"Mask calls",
        txt:"Provide a personal touch to your sales conversations with call masking.Simple replace your business number with a sales person's personal number and develop close customer relationships.",
    },

    {
        icon:"Images/cloudtelephony/Component 1.png",
        htxt:"Segment prospects",
        txt:"Plan your sales calls based on previous interactions with your prospects.Segment your prospects list based on contact field that capture call history like last contacted on to never let a prospect call through the cracks.",
    },

    {
        icon:"Images/cloudtelephony/appointment 1.png",
        htxt:"Add tasks and appointments",
        txt:"Schedule a follow-up task or set up an appointment right after every sales calls.Easily continue conversations constextually engage in the follow-up meetings and provide consistent experiences.",
    },


]


  return (
    <div className= {styles.cloudprodcolorbackground}>    
    <div className={styles.cloudboostproductivitymainboxes}>
    <div className={styles.cloudboostproductuppertext}>
    <h1>Improve sales conversions and boost productivity</h1>
    <p>The built-in-phone capabilities in Freshsales provides you with everything that you need for successful sales calls.With a host of functionalities like call recording,call logging after call work etc you can enable your salepeople to maximize conversion and bring in more revenue.</p>
    </div>
    <div className={styles.cloudboostproductmapperbox}>{cloudboostproddata.map((e)=>{
        return (
            <div className={styles.cloudboostproductivityindiboxmapper}>
            <div className={styles.cloudboostprodicon}>
            <img src={e.icon} alt='images' />
            </div>
            <div className={styles.cloudboostprotxt}>
            <h4>{e.htxt}</h4>
            <p>{e.txt}</p>
            </div>
            
            </div>
        )
    })}</div>
    
    </div>
    </div>

  )
}
