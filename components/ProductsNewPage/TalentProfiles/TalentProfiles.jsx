import React from 'react';
import styles from "./TalentProfiles.module.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export const TalentProfiles = () => {
    const productsTalentProfilesCardsData = [
        {
            title: "Ashish Verma",
            body: `Full-Stack web developer`,
            image: "/Images/ProductsPage/TalentProfileImage1.png",
            experience: "Ex:6 years",
            communication: "Communication Score",
            technicalscore: "Technical Score",
            buttondetails: "See more",
        },
        {
            title: "Neeti Singh",
            body: `Wordpress developer`,
            image: "/Images/ProductsPage/TalentProfileImage2.png",
            experience: "Ex:4 years",
            communication: "Communication Score",
            technicalscore: "Technical Score",
            buttondetails: "See more",
        },
        {
            title: "Enid Gates",
            body: `Paid search analyst`,
            image: "/Images/ProductsPage/TalentProfileImage3.png",
            experience: "Ex:2 years",
            communication: "Communication Score",
            technicalscore: "Technical Score",
            buttondetails: "See more",
        },
        {
            title: "Bianca Adams",
            body: `React native developer`,
            image: "/Images/ProductsPage/TalentProfileImage4.png",
            experience: "Ex:5 years",
            communication: "Communication Score",
            buttondetails: "See more",
            technicalscore: "Technical Score",
        },
        {
            title: "Ashish Verma",
            body: `Full-Stack web developer`,
            image: "/Images/ProductsPage/TalentProfileImage1.png",
            experience: "Ex:6 years",
            communication: "Communication Score",
            buttondetails: "See more",
            technicalscore: "Technical Score",
        },
        {
            title: "Neeti Singh",
            body: `Wordpress developer`,
            image: "/Images/ProductsPage/TalentProfileImage2.png",
            experience: "Ex:4 years",
            communication: "Communication Score",
            buttondetails: "See more",
            technicalscore: "Technical Score",
        },
        {
            title: "Enid Gates",
            body: `Paid search analyst`,
            image: "/Images/ProductsPage/TalentProfileImage3.png",
            experience: "Ex:2 years",
            communication: "Communication Score",
            buttondetails: "See more",
            technicalscore: "Technical Score",
        },
        {
            title: "Bianca Adams",
            body: `React native developer`,
            image: "/Images/ProductsPage/TalentProfileImage4.png",
            experience: "Ex:5 years",
            communication: "Communication Score",
            buttondetails: "See more",
            technicalscore: "Technical Score",
        }
    ];


    return (
        <div className={styles.productsTalentProfilesParentDiv}>
            <div className={styles.productsTalentProfilesHeadingDiv}>
                <h1>
                    Talent Profiles
                    {/* <span> SERVICES </span> */}
                </h1>

                <p>
                    Check to see what fits-this is what the top talent from India looks like.
                </p>

            </div>

            {/* <div className='plantBasedServicesBackImageDiv'>
                <img src='/Images/PlantBasedMeat/banners & backgrounds/PlantBasedMeatBackground.png' alt='image' />
            </div> */}

            <div className={styles.productsTalentProfilesContentDiv}>
                {productsTalentProfilesCardsData.map(({ title, body, image, buttondetails, experience, communication, technicalscore }, idx) => (
                    <div key={idx}>
                        <div>
                            <img src={image} alt={title} />
                        </div>
                        
                        <h3>{title}</h3>
                        <h4>{body}</h4>
                        <h6>{experience}</h6>

                        <div className={styles.productsTalentCommunication}>
                            <p>{communication}</p>
                            <p style={{ fontSize: "12px", marginTop: "1%" }}>
                                <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiOutlineStar />
                            </p>
                        </div>

                        {/* <div className='productsTalentTechnicalScore'>
                            <p>{technicalscore}</p>
                            <p style={{fontSize:"12px",marginTop:"1%"}}>
                                <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiOutlineStar />
                            </p>
                        </div> */}

                        <p className={styles.productsTalentProfilesContentButton}>
                            {buttondetails}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
