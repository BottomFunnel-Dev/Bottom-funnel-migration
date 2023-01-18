import React from 'react';
import "./WebsiteInsights.css";

export const WebsiteInsights = () => {
    return (
        <div className='websiteInsightsParentDiv'>

            <div className='websiteInsightsImageMainDiv'>
                <div className='websiteInsightsImageDivBackImage'>
                    <img src='/Images/WebsiteBuilderApp/RightSideBackgroundImage.png' alt="image" />

                    <div className='websiteInsightsImageDivTopImage'>
                        <img src='/Images/WebsiteBuilderApp/WebsiteInsights1.png' alt='image' />
                    </div>
                </div>

            </div>

            <div className='websiteInsightsContentMainDiv'>
                <h1> Get the insights you need to guess less & grow more  </h1>

                <p>
                    Confidently optimize every aspect of your marketing campaigns with the help of an easy-to-read  analytics
                    dashboard, a/b split tests, and real-time conversion tips you won't find anywhere else.
                </p>

                <div className='websiteInsightsOptionsDiv'>
                    <div className='websiteInsightsOptionInnerDiv1'>
                        <button className='websiteInsightsReportButton'> Reports & Analytics </button>
                        <button className='websiteInsightsPaymentButton'> Payment Management </button>
                    </div>
                    <div className='websiteInsightsOptionInnerDiv2'>
                        <button className='websiteInsightsConversationButton'> Real time Conversation </button>
                        <button className='websiteInsightsMoreButton'> And More  </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
