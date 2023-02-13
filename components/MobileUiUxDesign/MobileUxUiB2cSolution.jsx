import React from 'react'
import { useState } from 'react'
import styles from "./MobileUxUiB2cSolution.module.css"
import Image from 'next/image'

export const MobileUxUiB2cSolution = () => {

    const [data, setData] = useState(false)

    const mobileBBCUIdata = [
        {
            icon: "/Images/MobileUIUXDesign/Icons/UI Box icons/photoshop.webp",
            txt: "photoshop",
        },

        {
            icon: "/Images/MobileUIUXDesign/Icons/UI Box icons/illustrator.webp",
            txt: "Illustrator",
        },

        {
            icon: "/Images/MobileUIUXDesign/Icons/UI Box icons/flash.webp",
            txt: "Flash",
        },


        {
            icon: "/Images/MobileUIUXDesign/Icons/UI Box icons/sketch.webp",
            txt: "Sketch",
        },


        {
            icon: "/Images/MobileUIUXDesign/Icons/UI Box icons/Zeplin.webp",
            txt: "Zeplin",
        },


        {
            icon: "/Images/MobileUIUXDesign/Icons/UI Box icons/material_design.webp",
            txt: "Material Design",
        },

        {
            icon: "/Images/MobileUIUXDesign/Icons/UI Box icons/coreldrow.webp",
            txt: "Coreldrow",
        },

    ]


    const mobileBBCUXdata = [
        {
            icon: "/Images/MobileUIUXDesign/Icons/UX Box icons/html-5(img).webp",
            txt: "HTML5",
        },

        {
            icon: "/Images/MobileUIUXDesign/Icons/UX Box icons/css.webp",
            txt: "CSS3",
        },

        {
            icon: "/Images/MobileUIUXDesign/Icons/UX Box icons/js.webp",
            txt: "JavaScript",
        },


        {
            icon: "/Images/MobileUIUXDesign/Icons/UX Box icons/saas.webp",
            txt: "Saas",
        },


        {
            icon: "/Images/MobileUIUXDesign/Icons/UX Box icons/less.webp",
            txt: "LESS",
        },


        {
            icon: "/Images/MobileUIUXDesign/Icons/UX Box icons/bootstrap.webp",
            txt: "Bootstrap",
        },


        {
            icon: "/Images/MobileUIUXDesign/Icons/UX Box icons/foundation.webp",
            txt: "Foundation",
        },


        {
            icon: "/Images/MobileUIUXDesign/Icons/UX Box icons/jquerymobile.webp",
            txt: "JQuery Mobile",
        },

        {
            icon: "/Images/MobileUIUXDesign/Icons/UX Box icons/ionic.webp",
            txt: "IONIC",
        },


        {
            icon: "/Images/MobileUIUXDesign/Icons/UX Box icons/dreamviewer.webp",
            txt: "Dreamweaver",
        },


        {
            icon: "/Images/MobileUIUXDesign/Icons/UX Box icons/photoshop.webp",
            txt: "Photoshop ",
        },


        {
            icon: "/Images/MobileUIUXDesign/Icons/UX Box icons/illustrator.webp",
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
                                    <Image
                                        src={e.icon}
                                        alt={"image"}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                    <p>{e.txt}</p>

                                </div>
                            )
                        })}

                        </div>
                        : <div className={styles.mobiledatapublishb2bb2c}>{mobileBBCUXdata.map((e) => {
                            return (
                                <div className={styles.mobiledatapublishb2bb2caftermappingbox}>
                                    <Image
                                        src={e.icon}
                                        alt={"image"}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "100%", height: "100%" }}
                                    />
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

