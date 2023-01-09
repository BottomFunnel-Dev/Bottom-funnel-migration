import React, { useState } from "react";
import './SeoLinkExperts.css'

export default function SeoLinkExperts(){
    const [show,setshow] =useState(false);
    const [num,setnum]=useState();

const data=[{
    heading:"Deeply Vetted Sites",
    content:"Scalability is an important factor when it comes to business growth. We help you meet your run-time requirements smartly with real-time resource availability."
},
{
    heading:"Contextual Links",
    content:"Our teams at Uplers are praised for meeting urgent delivery requirements with quick deliverables. Time-zone adaptability is one more perk you get when you work with Link SEO agencies like ours"
},
{
    heading:"In-Depth Content Creation",
    content:"Juggling between multiple points of contact can lead to poor productivity. We, as the best Link SEO company, provide a dedicated project manager for all your needs as a single point of contact."
},
{
    heading:"Native Content Writers",
    content:"Our work processes are humanized – it helps us become competitive, stay ahead of the game and loved by our clients."
},
{
    heading:"Fast Turn-Around Time",
    content:"Our work processes are humanized – it helps us become competitive, stay ahead of the game and loved by our clients."
}
]

return(
        <div className="_SeoLinkexpertsmaindiv">
            <h1>What sets us a part as a Link SEO company?</h1>
              {  data.map((items,i)=>{
                    return(
                        <div className="_SeoLinkinfodiv">
                            <div  className="_SeoLinkinfodiv1">
                                <p key={i}>
                                    {items.heading}
                                </p>
                            </div>
                            <div className="_SeoLinkinfodiv2">
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
)}