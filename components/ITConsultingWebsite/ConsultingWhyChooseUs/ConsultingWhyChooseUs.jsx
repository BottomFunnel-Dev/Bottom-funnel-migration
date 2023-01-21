import React from "react";
import styles from "./ConsultingWhyChooseUs.module.css";

export const ConsultingWhyChooseUs = () => {
    const cardsData = [
        {
            title: "Flexible Engagement",
            body: "Distinguish regions of interest for further analysis, individual objects from the background, etc.",
            image: "/Images/ItConsulting/Curved Arrow.png",
        },
        {
            title: "Experienced and talented team",
            body: "Label or classify objects in digital images based on one or several object classes: people, vechicles, electronic components, etc.",
            image: "/Images/ItConsulting/Team.png",
        },
        {
            title: "We are always here for you",
            body: "Recognize individual features of an object and classify it with more precision: identify individual people, specific vehicles, animal species, device models, etc.",
            image: "/Images/ItConsulting/support.png",
        },
        {
            title: "Integrity and Transparency",
            body: "Recognize individual features of an object and classify it with more precision: identify individual people, specific vehicles, animal species, device models, etc.",
            image: "/Images/ItConsulting/Agile Iteration.png",
        }
    ];

    return (
        <div className={styles.consultingServicesWhyChooosecontainer}>
            <h1> But, Why you should consider
                <span> Bottom Funnel </span>
                <h1>for your project</h1>
            </h1>
            <div className={styles.consultingServicesWhyChooosehrline}>
                <span></span>
                <div></div>
                <span></span>
            </div>
            <div className={styles.consultingServicesWhyChooosemain}>
                <div className={styles.consultingServicesWhyChoooseimage}>
                    <img
                        src="/Images/ItConsulting/why choose us 1.png"
                        alt="Image analysis core task vector"
                    />
                </div>
                
                <div className={styles.consultingServicesWhyChooosecards}>
                    {cardsData.map(({ title, body, image }) => (
                        <div key={title}>
                            <div>
                                <img src={image} alt={title} />
                            </div>

                            <div className={styles.consultingServiceWhyChooseUsCardsContentDiv}>
                                <h2>{title}</h2>
                                <p>{body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
