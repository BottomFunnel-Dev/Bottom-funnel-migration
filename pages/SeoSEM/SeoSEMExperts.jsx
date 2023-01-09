import React, { useState } from "react";
import './SeoSEMExperts.css'

export default function SeoSEMExperts(){
    const [show,setshow] =useState(false);
    const [num,setnum]=useState();

const data=[{
    heading:"Scale Anytime - Anywhere",
    content:"Scalability is an important factor when it comes to business growth. We help you meet your run-time requirements smartly with real-time resource availability."
},
{
    heading:"Quick Turnaround Time",
    content:"Our teams at Uplers are praised for meeting urgent delivery requirements with quick deliverables. Time-zone adaptability is one more perk you get when you work with SEM SEO agencies like ours"
},
{
    heading:"Single Point of Contact",
    content:"Juggling between multiple points of contact can lead to poor productivity. We, as the best SEM SEO company, provide a dedicated project manager for all your needs as a single point of contact."
},
{
    heading:"Human-friendly Work Environment",
    content:"Our work processes are humanized – it helps us become competitive, stay ahead of the game and loved by our clients."
},
{
    heading:"Human-friendly Work Environment",
    content:"Our work processes are humanized – it helps us become competitive, stay ahead of the game and loved by our clients."
}
]

return(
        <div className="_SeoSEMexpertsmaindiv">
            <h1>What sets us a part as a SEM SEO company?</h1>
              {  data.map((items,i)=>{
                    return(
                        <div key={i} className="_SeoSEMinfodiv">
                            <div  className="_SeoSEMinfodiv1">
                                <p key={i}>
                                    {items.heading}
                                </p>
                            </div>
                            <div className="_SeoSEMinfodiv2">
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