import React from 'react'
import styles from "./MobileUxUiDesignPartner.module.css"

export const MobileUxUiDesignPartner = () => {

    const designpartnerdata = [
        {
            icon: "Images/MobileUIUXDesign/Icons/lightbulb.png",
            htxt: "Build Customer Journeys",
            stxt: "Keeping end-users and their expectations in mind, we build up user persinas of all projects,discover and map product's customer journey.",
        },

        {
            icon: "Images/MobileUIUXDesign/Icons/lightbulb-1.png",
            htxt: "Rapid Prototyping",
            stxt: "With fast,cost-effective,easy to change and talk-about concepts,we specialize in graphical user interface design and dev. ",
        },

        {
            icon: "Images/MobileUIUXDesign/Icons/lightbulb-2.png",
            htxt: "Top Visual Design Systems",
            stxt: "We have an exyensive experience remarkable visual interfaces using style guides, grid systems, typography,mood boards.",
        },


        {
            icon: "Images/MobileUIUXDesign/Icons/lightbulb-7.png",
            htxt: "Advance Technology",
            stxt: "The Tools, frameworks and technologies used for UI/UX design at kanstant are latest and as per industry standards.",
        },


        {
            icon: "Images/MobileUIUXDesign/Icons/lightbulb-8.png",
            htxt: "Quality Assurance",
            stxt: "We have a dedicated quality assurance team who are experts in testing merhodologies and proticols.",
        },


        {
            icon: "Images/MobileUIUXDesign/Icons/lightbulb-3.png",
            htxt: "Perfect UI Development",
            stxt: "A team of some of the world's top front-end developers who code high-performance HTML, CSS, and JS interfaces. ",
        },

        {
            icon: "Images/MobileUIUXDesign/Icons/lightbulb-6.png",
            htxt: "Iterative & Collaborative",
            stxt: "We include Clients in every decision we make at each phase of development and work iteratively for the changes required.",
        },


        {
            icon: "Images/MobileUIUXDesign/Icons/lightbulb-5.png",
            htxt: "User-Centric Delivery",
            stxt: "Whether it's design or experience,information architecture or navigation  model,the final project delivery is always user-centered.",
        },

        {
            icon: "Images/MobileUIUXDesign/Icons/lightbulb-4.png",
            htxt: "Accurate Project Estimates",
            stxt: "With our Prototypes so identical to the real-time app.you get the exact time and cost estimates before starting with the project. ",
        },
    ]



    return (
        <div className={styles.mobileuxuidesignpartnermainbox}>
            <h1>Best Design Partner for all your needs</h1>
            <p>
                <small>SEE HOW MAKE YOUR PRODUCT ENGAGING AND USEFUL</small>
            </p>
            <h4>
                Our UIs are smooth, superb-looking and user-friendly, created to make it simple and amusing for the end user to interact with your mobile apps/site.
                We develop outstanding UI designs for almost every type of mobile device and platform, including Android, iOS, Smartphones, Tablet, Windows UI, and more.
                At SAG IPL, we have a proficient team of UI designers who have the experience and skills to create uniquely amazing mobile UIs by analysing the specific
                requirements and features of your app. Hire a professional Mobile UI Designer today with BottomFunnnel!
            </h4>
            <div className={styles.mobileuxuidesignpartnerdatamappingmainbox}>{designpartnerdata.map((e) => {
                return (
                    <div className={styles.mobileuxuidesignpartnerindividualdatabox}>
                        <div className={styles.mobileuxuidesignpartnerindividualdataboxlogo}><img src={e.icon} alt='image' /> </div>
                        <div className={styles.mobileuxuidesignpartnerindividualdataboxtxt}><h4>{e.htxt}</h4>
                            {e.stxt}
                        </div>


                    </div>
                )
            })}</div>



        </div>
    )
}

