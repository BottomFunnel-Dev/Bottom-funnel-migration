import React from 'react';
import styles from "./TalentNetwork.module.css";

export const TalentNetwork = () => {
    const productsTalentNetworkCardsData = [
        {
            language1: "HTML",
            language2: "ReactJS",
            language3: "AngularJs",
            language4: "Vue.JS",
            language5: "jQuery",
            language6: "Javascript",
            jobprofile: "Front-end Developers",

            buttondetails: "start free trial",
        },
        {
            language1: "Node.js",
            language2: "Laravel",
            language3: "Magento",
            language4: "Hubspot",
            language5: "Kotlin",
            language6: "Ruby",
            jobprofile: "Back-end Developers",

            buttondetails: "See pricing",
        },
        {
            language1: "UX Designer",
            language2: "UI Designer",
            language3: "Product Designers",
            language4: "Visual Designer",
            language5: "Graphic Designer",
            language6: "",
            jobprofile: "Designers",

            buttondetails: "Visit marketplace",
        },
        {
            language1: "Performance Marketers",
            language2: "Programatic Specialists",
            language3: "SEO Experts",
            // language4: "Content-Marketing",
            // language5: "Email Marketing",
            // language6: "Affiliate Marketing",
            jobprofile: "Mobile Marketing",
            buttondetails: "Learn now",
        },
        {
            language1: "Administrators",
            language2: "Technical Consultants",
            language3: "Functional Consultants",
            language4: "Platform Manager",
            // language5: "Project Manager",
            // language6: "Swift",
            jobprofile: "Salesforce Experts",

            buttondetails: "start free trial",
        },
        {
            language1: "Campaign Managers",
            language2: "Marketing Specialists",
            language3: "Developers",
            language4: "Transactional Experts",
            // language5: "Kotlin",
            // language6: "Swift",
            jobprofile: "Email Marketers",

            buttondetails: "See pricing",
        },
        {
            language1: "Python",
            language2: ".Net",
            language3: "Java",
            language4: "Kotlin",
            language5: "C",
            language6: "C#",
            language7: "Pascal",
            language8: "Ruby",
            jobprofile: "Software Engineers",

            buttondetails: "Visit marketplace",
        },
        {
            language1: "iOS",
            language2: "Android",
            language3: "React Native",
            language4: "Flutter",
            language5: "Ruby",
            language6: "Native Script",
            language7: "Xamarin",
            language8: "R",
            jobprofile: "App Developers",
            buttondetails: "Learn now",
        },
    ];


    return (
        <div className={styles.productsTalentNetworkParentDiv}>
            <div className={styles.productsTalentNetworkHeadingDiv}>
                <h1>
                    India's Largest Talent Network
                    {/* <span> SERVICES </span> */}
                </h1>

                <p>
                    Explore the 50,000+ strong top, pre-vetted talent. From India, for the world.
                </p>

            </div>

            {/* <div className='plantBasedServicesBackImageDiv'>
                <img src='/Images/PlantBasedMeat/banners & backgrounds/PlantBasedMeatBackground.png' alt='image' />
            </div> */}

            <div className={styles.productsTalentNetworkContentDiv}>
                {productsTalentNetworkCardsData.map(({ language1, language2, language3, language4, language5, language6, language7, language8, jobprofile }, idx) => (
                    <div key={idx}>
                        <div>
                            <h4>{jobprofile}</h4>
                        </div>
                        <p>{language1}</p>
                        <p>{language2}</p>
                        <p>{language3}</p>
                        <p>{language4}</p>
                        <p>{language5}</p>
                        <p>{language6}</p>
                        <p>{language7}</p>
                        <p>{language8}</p>
                        {/* <p className='productsTalentNetworkContentButton'>{buttondetails}</p> */}
                    </div>
                ))}
            </div>
        </div>
    );
};
