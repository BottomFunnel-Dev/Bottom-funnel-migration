import React, { useState } from "react";
import styles from './Seoexperts.module.css';

export default function Seoexperts() {
    const [show, setshow] = useState(false);
    const [num, setnum] = useState();

    const data = [{
        heading: "Have been at that road",
        content: "SEO is all about making your website rank on the first page of search engine results. This is why we offer our brand new bottom funnel SEO services to help you achieve that. We've got years of experience in the industry and know how to optimize your website for maximum traffic, leads, and sales."
    },
    {
        heading: "A NO-NO to SEO malpractice",
        content: "With years of profound experience, one of the most important things that we learned was - do not mess with SEO techniques and Search Engine Algorithms. We stand by that. Thanks to this, we are able to offer a bottom funnel seo services company in India that can help you get your site noticed in no time."
    },
    {
        heading: "SEO demands patience",
        content: "Bottom funnel seo services is a leading SEO marketing company that understands the complexities involved in SEO campaigns. It's competitive, intensive, research-hungry and requires high level of patience. Best of all, it's backed by years of experience in the field."
    },
    {
        heading: "We meet expectations of our client",
        content: "Our real-time insights will help you get an idea about where your website is lacking compared to your competitors and what more needs to be done. If a client asks for SEO services, then we are sure that we are providing cost-effective solutions that give great ROI as well."
    },

    ]

    return (
        <div className={styles._Seoexpertsmaindiv}>
            <h2>What's so special about our Seo Experts ?</h2>
            {data.map((items, i) => {
                return (
                    <div key={i} className={styles._Seoinfodiv}>
                        <div className={styles._Seoinfodiv1}>
                            <p key={i}>
                                {items.heading}
                            </p>
                        </div>

                        <div className={styles._Seoinfodiv2}>
                            <p key={i}>
                                {items.content}
                            </p>
                        </div>
                    </div>
                )
            })
            }
            <div>
            </div>
        </div>
    );
};