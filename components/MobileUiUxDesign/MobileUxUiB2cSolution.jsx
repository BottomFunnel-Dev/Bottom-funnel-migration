import React from 'react'
import { useState } from 'react'
import styles from "./MobileUxUiB2cSolution.module.css"

export const MobileUxUiB2cSolution = () => {

    const [data, setData] = useState(false)

    const mobileBBCUIdata = [
        {
            icon: "Images/MobileUIUXDesign/Icons/UI Box icons/photoshop.png",
            txt: "photoshop",
        },

        {
            icon: "Images/MobileUIUXDesign/Icons/UI Box icons/illustrator.png",
            txt: "Illustrator",
        },

        {
            icon: "Images/MobileUIUXDesign/Icons/UI Box icons/flash.png",
            txt: "Flash",
        },


        {
            icon: "Images/MobileUIUXDesign/Icons/UI Box icons/sketch.png",
            txt: "Sketch",
        },


        {
            icon: "Images/MobileUIUXDesign/Icons/UI Box icons/Zeplin.png",
            txt: "Zeplin",
        },


        {
            icon: "Images/MobileUIUXDesign/Icons/UI Box icons/material_design.png",
            txt: "Material Design",
        },

        {
            icon: "Images/MobileUIUXDesign/Icons/UI Box icons/coreldrow.png",
            txt: "Coreldrow",
        },

    ]


    const mobileBBCUXdata = [
        {
            icon: "Images/MobileUIUXDesign/Icons/UX Box icons/html-5(img).png",
            txt: "HTML5",
        },

        {
            icon: "Images/MobileUIUXDesign/Icons/UX Box icons/css.png",
            txt: "CSS3",
        },

        {
            icon: "Images/MobileUIUXDesign/Icons/UX Box icons/js.png",
            txt: "JavaScript",
        },


        {
            icon: "Images/MobileUIUXDesign/Icons/UX Box icons/saas.png",
            txt: "Saas",
        },


        {
            icon: "Images/MobileUIUXDesign/Icons/UX Box icons/less.png",
            txt: "LESS",
        },


        {
            icon: "Images/MobileUIUXDesign/Icons/UX Box icons/bootstrap.png",
            txt: "Bootstrap",
        },


        {
            icon: "Images/MobileUIUXDesign/Icons/UX Box icons/foundation.png",
            txt: "Foundation",
        },


        {
            icon: "Images/MobileUIUXDesign/Icons/UX Box icons/jquerymobile.png",
            txt: "JQuery Mobile",
        },

        {
            icon: "Images/MobileUIUXDesign/Icons/UX Box icons/ionic.png",
            txt: "IONIC",
        },


        {
            icon: "Images/MobileUIUXDesign/Icons/UX Box icons/dreamviewer.png",
            txt: "Dreamweaver",
        },


        {
            icon: "Images/MobileUIUXDesign/Icons/UX Box icons/photoshop.png",
            txt: "Photoshop ",
        },


        {
            icon: "Images/MobileUIUXDesign/Icons/UX Box icons/illustrator.png",
            txt: "Illustrator",
        },



    ]




    return (
        <div className={styles.mobileuxuib2csolutionmainboxes}>
            <h1>Intuitive UI/UX B2B & B2C Solutions</h1>
            <p>
                <small>BRINGING CONSUMER LEVEL OF USER EXPERIENCE TO ENTERPRISE</small>
            </p>
            <p>
                The user interface is one of the most important components of a mobile app. Most users will leave your app at once if its UI is not simple, attractive and/or user-friendly enough. We understand that a mobile interface design is very much different from that of a web application. Therefore, we have a dedicated team of mobile UI designers who have worked on hundreds of apps so far and know the key to a great user experience.
            </p>

            <div className={styles.mobilesolutionuxuib2bb2cbanner}>
                <div className={styles.mobilesoulutionb2bb2cbannermiddlediv}>
                    <div className={styles.mobileb2bb2cuibox} onClick={() => {
                        setData(false)

                    }}><h1 style={data == false ? {
                        borderBottom: "5px solid white"
                    } : { border: "none" }}>UI</h1></div>
                    <div className={styles.mobileb2bb2cuxbox} onClick={() => {
                        setData(true)

                    }}><h1 style={data == true ? { borderBottom: "5px solid white" } : { border: "none" }}>UX</h1></div>
                </div>
                {
                    data == false ?

                        <div className={styles.mobiledatapublishb2bb2c}>{mobileBBCUIdata.map((e) => {
                            return (
                                <div className={styles.mobiledatapublishb2bb2caftermappingbox}>
                                    <img src={e.icon} alt='images' />
                                    <p>{e.txt}</p>

                                </div>
                            )
                        })}

                        </div>
                        : <div className={styles.mobiledatapublishb2bb2c}>{mobileBBCUXdata.map((e) => {
                            return (
                                <div className={styles.mobiledatapublishb2bb2caftermappingbox}>
                                    <img src={e.icon} alt='images' />
                                    <p>{e.txt}</p>

                                </div>
                            )
                        })}

                        </div>
                }
            </div>


        </div>
    )
}

