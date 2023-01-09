import React, { useState } from "react";
import './SeoguestExperts.css'

export default function SeoguestExperts(){
    const [show,setshow] =useState(false);
    const [num,setnum]=useState();

const data=[{
    heading:"Deeply Vetted Sites",
    content:"Scalability is an important factor when it comes to business growth. We help you meet your run-time requirements smartly with real-time resource availability."
},
{
    heading:"Contextual guests",
    content:"Our teams at Uplers are praised for meeting urgent delivery requirements with quick deliverables. Time-zone adaptability is one more perk you get when you work with guest SEO agencies like ours"
},
{
    heading:"In-Depth Content Creation",
    content:"Juggling between multiple points of contact can lead to poor productivity. We, as the best guest SEO company, provide a dedicated project manager for all your needs as a single point of contact."
},
{
    heading:"Fast Turn-Around Time",
    content:"Our work processes are humanized – it helps us become competitive, stay ahead of the game and loved by our clients."
},
{
    heading:"100% Replacement Guarantee",
    content:"Our work processes are humanized – it helps us become competitive, stay ahead of the game and loved by our clients."
}
]

return(
        <div className="_Seoguestexpertsmaindiv">
            <h1>What sets us a part as a guest SEO company?</h1>
              {  data.map((items,i)=>{
                    return(
                        <div className="_Seoguestinfodiv">
                            <div  className="_Seoguestinfodiv1">
                                <p key={i}>
                                    {items.heading}
                                </p>
                            </div>
                            <div className="_Seoguestinfodiv2">
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