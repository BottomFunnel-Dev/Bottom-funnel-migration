import React from 'react'
import styles from "./DigitalTransformTechTools.module.css"

export const DigitalTransformTechTools = () => {

    const techtoolsuseddata =[
        {
            icon:"Images/digitaltransformation/Vector.png",
            txt:"Artificial Intelligent ",
        },

        {
            icon:"Images/digitaltransformation/Vector-1.png",
            txt:"Blockchain",
        },

        {
            icon:"Images/digitaltransformation/Vector-2.png",
            txt:"Augmented Reality",
        },

        {
            icon:"Images/digitaltransformation/Layer 3.png",
            txt:"Artificial Inteligent",
        },

        {
            icon:"Images/digitaltransformation/Component 100.png",
            txt:"Artificial Inteligent",
        },

        {
            icon:"Images/digitaltransformation/iot 3.png",
            txt:"Internet of Things ",
        },
    ]


  return (
    <div className={styles.digitaltransformationtechtoolsweusedmainbox}>
    <div className={styles.digitaltransformationtechtoolsweusedmainboxuppertxtbox}>
    <div className={styles.digitaltransformationtechtoolsweusedmainboxuppertxtboxleftbox}>
    <h1><span className={styles.specialcolor}>Tech</span> and <span className={styles.specialcolor}>Tools</span> We Use</h1>
    </div>

    <div className={styles.digitaltransformationtechtoolsweusedmainboxuppertxtboxrightbox}>
    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis orci sed justo volutpat interdum sit amet in metus. Nam at</h4>
    </div>
    
    </div>

<div className={styles.flexingboxofdigitaltransformationtechandtools}>{techtoolsuseddata.map((e)=>{
    return (
        <div className={styles.flexingboxofdigitaltransformationtechandtoolsaftermapping}>
        <div className={styles.techandtoolsdigitaltransformationicon}><img src={e.icon} alt='images' /></div>
        <h4>{e.txt}</h4>
        </div>
    )
})}</div>

    
    </div>
  )
}
