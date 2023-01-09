import React from "react";
import './SeoLinkServices.css';
import { BsSearch } from 'react-icons/bs';
import { IconContext } from "react-icons/lib";
import { IoLocationSharp } from 'react-icons/io5';
import { ImLink } from 'react-icons/im';
import { SiGoogleanalytics } from 'react-icons/si';
import { AiOutlineAudit } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import {MdExpandLess} from 'react-icons/md'
import { useState } from "react";

export default function SeoLinkServices() {
    const   [more,setmore]=useState(false);
    const   [num,setnum]=useState();
    const[a,seta]=useState();
 
    const arr1 = [
        {
            servicename: "Backlink Audit",
            icons: <BsSearch />,
             data:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            servicename: "Link Building Strategy Development",
            icons: <IoLocationSharp />,
             data:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            servicename: "Custom Link Building Services",
            icons: <SiGoogleanalytics />,
             data:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            servicename: "Prospect Link Oppertunity",
            icons: <ImLink />,
             data:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            servicename: "High-Quality Content Creation",
            icons: <AiOutlineAudit />,
             data:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            servicename: "Competitor Link Prospecting",
            icons: <FaShoppingCart />,
             data:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            servicename: "Full Suite Seo",
            icons: <BsSearch />,
             data:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            servicename: "Full Suite Seo",
            icons: <BsSearch />,
            data:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
    ]
  
    const toggle=(i)=>{
        let b=i;
        if(b!=a) {
            // console.log(i,"upper");
            // console.log(more);
            setnum(i)
            setmore(true)
        }
        if(b==a){
            // console.log(i,"lower");
            // console.log(more);
            // // setnum(i)
            setmore(!more)
        }
seta(i);
// console.log(a)
// console.log(b)
        }
       
       
    return (
        <div className="_SeoLinkservicesmaindiv">

            <span className="_SeoLinkServicesheading">
                OUR SERVICES INCLUDES....
            </span>
            <div className="_SeoLinkservicesslider">
                {
                    arr1.map((items, i) => {
                        return (
                            <div className=" _SeoLinkServicesnames">

                                <IconContext.Provider value={{ className:more && num==i?"_SeoLinkicons2":"_SeoLinkicons1" }}>
                                    {items.icons}
                                </IconContext.Provider>
                                <div className={more&& num==i?"_SeoLinkName2":"_SeoLinkName"}>{items.servicename}</div>
                                {/* <div className="_SeoLinkuppericon">{<MdExpandLess onClick={()=>toggle(i)}/>}</div> */}
                                <div className={more && num==i?"_SeoLinkservicedata1" :"_SeoLinkservicedata"} onClick={()=>toggle(i)} >{items.data}</div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

