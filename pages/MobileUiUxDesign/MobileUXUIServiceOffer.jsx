import React from 'react'
import styles from "./MobileUXUIServiceOffer.module.css"

export const MobileUXUIServiceOffer = () => {

    const mobileservicesofferdata = [
        {
            htxt: "Research",
            stxt: "At SAG IPL - UI UX Design Firm , we develop the best custom PHP websites for every purpose and every type of business. Get a custom website developed that is unique and specific to your company.   ",
            icon: "Images/MobileUIUXDesign/Icons/coding.png",
        },


        {
            htxt: "Structure",
            stxt: "The design is structured such as to organize the interface in a meaningful and clear, consistent manner, keeping related things together and differentiating unrelated things.",
            icon: "Images/MobileUIUXDesign/Icons/wireframe (1).png",
        },


        {
            htxt: "Simple",
            stxt: "Steps are followed to make sure that the design is simple and easy enough for the end user to understand and use.",
            icon: "Images/MobileUIUXDesign/Icons/ux-interface.png",
        },



        {
            htxt: "Visibility",
            stxt: "We make sure that all the important things are given in the user-visible area or are easy to access. The user should be able to see all the necessary options without getting confused by unneeded information.",
            icon: "Images/MobileUIUXDesign/Icons/solution.png",
        },


        {
            htxt: "Flexible",
            stxt: "Our user interface designs are flexible enough to be changed or updated with new information and/or functionality as and when needed without needing much time or cost. Feedbacks:",
            icon: "Images/MobileUIUXDesign/Icons/ux-interface-1.png",
        },


        {
            htxt: "Testing",
            stxt: "All our app designs are tested by real users in a real-time environment to ensure the simplicity and robustness of the design.",
            icon: "Images/MobileUIUXDesign/Icons/solution-1.png",
        },
    ]




    return (
        <div className={styles.mobileuxuiserviceofferedmainboxes}>
            <h1> Service That We Offers </h1>
            <div className={styles.serviceweofferdatamappinguxuidesign}>{mobileservicesofferdata.map((e) => {
                return (
                    <div className={styles.serviceweofferaftermappingindivisalbox}>
                        <div className={styles.serviceweofferaftermappingindivisalboxicons}>
                            <img src={e.icon} alt='images' />
                        </div>
                        <div className={styles.serviceweofferaftermappingindivisalboxheadingtxt}><h4>{e.htxt}</h4>
                            <p>{e.stxt}</p>
                        </div>

                    </div>
                )
            })}
            </div>

            <button className={styles.mobileuiuxserviceoffersbutton}>Get Started</button>
        </div>
    )
}
