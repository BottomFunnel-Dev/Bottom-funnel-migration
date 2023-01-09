import React, { useState } from "react";
import './SeoLocalExperts.css'

export default function SeoLocalExperts(){
    const [show,setshow] =useState(false);
    const [num,setnum]=useState();

const data=[{
    heading:"Scale Anytime - Anywhere",
    content:"Scalability is an important factor when it comes to business growth. We help you meet your run-time requirements smartly with real-time resource availability."
},
{
    heading:"Quick Turnaround Time",
    content:"Our teams at Uplers are praised for meeting urgent delivery requirements with quick deliverables. Time-zone adaptability is one more perk you get when you work with local SEO agencies like ours"
},
{
    heading:"Single Point of Contact",
    content:"Juggling between multiple points of contact can lead to poor productivity. We, as the best local SEO company, provide a dedicated project manager for all your needs as a single point of contact."
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
        <div className="_SeoLocalexpertsmaindiv">
            <h1>What sets us a part as a Local SEO company?</h1>
              {  data.map((items,i)=>{
                    return(
                        <div key={i} className="_SeoLocalinfodiv">
                            <div  className="_SeoLocalinfodiv1">
                                <p key={i}>
                                    {items.heading}
                                </p>
                            </div>
                            <div className="_SeoLocalinfodiv2">
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