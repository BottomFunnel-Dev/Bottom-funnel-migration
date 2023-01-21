import React from 'react';
import styles from "./ConsultingServices.module.css";

export const ConsultingServices = () => {
    const consultingServicesWeOffer = [
        {
            title: "Business Processes and Cost Optimization",
            body: `As an IT Consulting company, we have extensive experience in digitally transforming our client's businesses, giving them key insights into different industires.
            Our consultants leverage their experience to analyze your technology spending, optimize IT costs,  and enhance business processes.`,
            image: "/Images/ItConsulting/Component 98.png",
        },
        {
            title: "Architecture and Security",
            body: `As an IT Consulting company, we have extensive experience in digitally transforming our client's businesses, giving them key insights into different industires.
            Our consultants leverage their experience to analyze your technology spending, optimize IT costs,  and enhance business processes.`,
            image: "/Images/ItConsulting/Vector-1.png",
        },
        {
            title: "Digital Technology Integration",
            body: `As an IT Consulting company, we have extensive experience in digitally transforming our client's businesses, giving them key insights into different industires.
            Our consultants leverage their experience to analyze your technology spending, optimize IT costs,  and enhance business processes.`,
            image: "/Images/ItConsulting/Group.png",
        },
        {
            title: "Program and Project Management",
            body: `As an IT Consulting company, we have extensive experience in digitally transforming our client's businesses, giving them key insights into different industires.
            Our consultants leverage their experience to analyze your technology spending, optimize IT costs,  and enhance business processes.`,
            image: "/Images/ItConsulting/Vector.png",
        },
        {
            title: "IT Solution Consulting",
            body: `As an IT Consulting company, we have extensive experience in digitally transforming our client's businesses, giving them key insights into different industires.
            Our consultants leverage their experience to analyze your technology spending, optimize IT costs,  and enhance business processes.`,
            image: "/Images/ItConsulting/Component 99.png",
        },
        // {
        //     title: "Promote Your Business Effectively",
        //     body: "Meter per second provied 100% Transparent Service which means all parts are opened right in front of you while performing service and no more surprised or extra spares or costs.",
        //     image: "/Images/PlantBasedMeat/banners & backgrounds/ServicesOfferImage6.png",
        // },
        // {
        //     title: "Lighting Solution Implementation",
        //     body: "Salesforce is leading the pack with its platform as a service. The Lightning platform is the first PaaS for developers and has proved to be immensely popular among enterprises.",
        //     image: "/Images/PlantBasedMeat/banners & backgrounds/ServicesOfferImage1.png",
        // },
    ];


    return (
        <div className={styles.consultingServicesWeOfferParentDiv}>
            <div className={styles.consultingServicesWeOfferHeadingDiv}>
                <h1>
                    CONSULTING
                    <span> SERVICES </span>
                    WE OFFER
                </h1>
            </div>

            {/* <div className='consultingServicesBackImageDiv'>
                <img src='/Images/PlantBasedMeat/banners & backgrounds/PlantBasedMeatBackground.png' alt='image' />
            </div> */}

            <div className={styles.consultingServicesWeOffers}>
                {consultingServicesWeOffer.map(({ title, body, image }, idx) => (
                    <div key={idx}>
                        <div style={{ width: "100%" }}>
                            <img src={image} alt={title} />
                        </div>

                        <div className={styles.consultingServicesWeOfferContentCardDiv}>
                            <h3>{title}</h3>
                            <p>{body}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
