import React from 'react';
import "./BusinessSupportSystem.css";

export const BusinessSupportSystem = () => {
    var BusinessData = {
        title: "Business Support Systems(BSS)",
        description: `Witnessing the ever-growing transformation of the telecom industry, our clients are able to  run their businesses
        in step with the change and create completelmy new business models thanks to:`,
        image: {
            src: "Images/Telecommunication/Orange Line.png"
        },

        CardsData: [

        ]
    }


    return (

        <div className='businessSupportParentDiv'>
            <div className='oprationsSupportTopContentDiv'>
                <div className='businesssSupportHeadingDiv'>
                    <h1> Businesss Support System (BSS)</h1>
                    <p> Witnessing the ever-growing transformation of the telecom industry, our clients are able to  run their businesses
                        in step with the change and create completelmy new business models thanks to:
                    </p>
                </div>

                <div className='businesssSupportImageDiv'>
                    <img className='orangeLine' src='/Images/Telecommunication/Orange Line.png' alt='image' />
                </div>
            </div>

            <div className='businessSupportServices'>
                <div className='businessServicesImageDiv'>
                    <img src='/Images/Telecommunication/TelecomImage3.png' alt='image' />
                </div>

                <div className='businessServicesContentDiv'>
                    <h2> Charging and Billing systems </h2>

                    <ul>
                        Flexible and real-time billing and charging solutions that enable:

                        <li className='businessServicesContentDivList'>
                            Subscribers to have instant control over their plans as well as benefit from multiple offerings;
                        </li>

                        <li className='businessServicesContentDivList'>
                            Operators to create various pricing models and personalized offers for several customer segmets(thanks
                            to CRM integration).
                        </li>
                    </ul>

                </div>


            </div>

            <div className='businessSupportCustomerService'>

                <div className='businessServicesImageDiv'>
                    <img src='/Images/Telecommunication/TelecomImage4.png' alt='image' />
                </div>

                <div className='businessServicesContentDiv'>
                    <h2> CRM Systems </h2>

                    <ul>
                        Engage with subscribers in multiple ways:

                        <li className='businessCustomerServiceContentDivList'>
                            <span>Customer account management:</span>
                            tracking orders history, channel activity, promotion response and others;
                        </li>

                        <li className='businessCustomerServiceContentDivList'>
                            <span> Loyalty program management: </span>
                            creating tailored offers, promotions and information on services and products;
                        </li>

                        <li className='businessCustomerServiceContentDivList'>
                            <span> Customer Retention: </span>
                            predicting customer churn as well as increasing customer value and loyalty by using advanced analytics.
                        </li>

                    </ul>

                </div>

            </div>

            <div className='businessSupportCustomerService'>

                <div className='businessServicesImageDiv'>
                    <img src='/Images/Telecommunication/TelecomImage5.png' alt='image' />
                </div>

                <div className='businessServicesContentDiv'>
                    <h2> Customer self-service portals </h2>

                    <ul>
                        Modern and interactive portals that are:

                        <li className='businessCustomerServiceContentDivList'>
                            Profile-based and personalized;
                        </li>

                        <li className='businessCustomerServiceContentDivList'>
                            Secure, powerful and scalable;
                        </li>

                        <li className='businessCustomerServiceContentDivList'>
                            Integrated with business systems, data analysis tools and social media;
                        </li>

                        <li className='businessCustomerServiceContentDivList'>
                            Optimized for mobile phones and tablets.
                        </li>

                    </ul>

                </div>

            </div>

            <div className='businessSupportCustomerService'>

                <div className='businessServicesImageDiv'>
                    <img src='/Images/Telecommunication/TelecomImage6.png' alt='image' />
                </div>

                <div className='businessServicesContentDiv'>
                    <h2> All-round data analysis and reporting </h2>

                    <ul>
                        Improve the performance of data-rich business processes through:

                        <li className='businessCustomerServiceContentDivList'>
                            <span> Data warehouding:</span>
                            aggregating data from multiple sources into a single, quick and safe database - we do the design
                            and implementation;
                        </li>

                        <li className='businessCustomerServiceContentDivList'>
                            <span>  Advanced reporting and visualization: </span>
                            customizable reports to evaluate campaign effectiveness, predict churn and gain strategic insights
                            for further improvement;
                        </li>

                        <li className='businessCustomerServiceContentDivList'>
                            <span> Predictive analystics: </span>
                            optimizing marketing strategy by analyzing customer behaviour through segmentation and hsitory.
                        </li>

                    </ul>

                </div>

            </div>

            <div className='businessSupportCustomerService'>

                <div className='businessServicesImageDiv'>
                    <img src='/Images/Telecommunication/TelecomImage7.png' alt='image' />
                </div>

                <div className='businessServicesContentDiv'>
                    <h2> Corporate portals </h2>

                    <ul>
                        Fast and secure portals to help your team benefit from:

                        <li className='businessCustomerServiceContentDivList'>
                            Business workflow automation;
                        </li>

                        <li className='businessCustomerServiceContentDivList'>
                            Project and task management;
                        </li>

                        <li className='businessCustomerServiceContentDivList'>
                            Corporate knowledge base;
                        </li>

                        <li className='businessCustomerServiceContentDivList'>
                            Workforce management;
                        </li>

                        <li className='businessCustomerServiceContentDivList'>
                            Procurement management;
                        </li>

                        <li className='businessCustomerServiceContentDivList'>
                            Document management;
                        </li>

                    </ul>

                </div>

            </div>


            <div className='businessSupportCustomerService'>

                <div className='businessServicesImageDiv'>
                    <img src='/Images/Telecommunication/TelecomImage8.png' alt='image' />
                </div>

                <div className='businessCustomerServiceContentDiv'>
                    <h2> Custom mobile and web Applications </h2>

                    <ul>
                        Increase businessed agility with a custom application that is tailored to meet your specific needs. Here
                        are some examples of the custom applicaitons that we have implemented recently:

                        <li className='businessCustomerServiceContentDivList'>
                            Mobile number portability system;
                        </li>

                        <li className='businessCustomerServiceContentDivList'>
                            Sales force automation system.
                        </li>

                    </ul>

                </div>

            </div>


            {/* <div className='valueServicesTopContentDiv'>
                <div className='valueServicesHeadingDiv'>
                    <h1> Customized VAS(Value Added Services) Software </h1>
                    <ul>
                        We help extend their offerings with:
                        <li className='businessCustomerServiceContentDivList'>
                            VoIP apps;
                        </li>

                        <li className='businessCustomerServiceContentDivList'>
                            IPTV apps.
                        </li>
                    </ul>
                </div>

                <div className='valueServicesImageDiv'>
                    <img className='ValueServiceOrangeLine' src='/Images/Telecommunication/Orange Line.png' alt='image' />
                </div>
            </div> */}
        </div>
    )
}
