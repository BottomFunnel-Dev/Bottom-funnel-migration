import React from "react";
import './SeoguestServices.css';
import { BsSearch } from 'react-icons/bs';
import { IconContext } from "react-icons/lib";
import { IoLocationSharp } from 'react-icons/io5';
import { ImLink } from 'react-icons/im';
import { SiGoogleanalytics } from 'react-icons/si';
import { AiOutlineAudit } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
// import {MdExpandLess} from 'react-icons/md'
import { useState } from "react";

export default function SeoguestServices() {
    const   [more,setmore]=useState(false);
    const   [num,setnum]=useState();
    const[a,seta]=useState();
 
    const arr1 = [
        {
            servicename: "Backguest Audit",
            icons: <BsSearch />,
             data:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            servicename: "guest Building Strategy Development",
            icons: <IoLocationSharp />,
             data:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            servicename: "Custom guest Building Services",
            icons: <SiGoogleanalytics />,
             data:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            servicename: "Prospect guest Oppertunity",
            icons: <ImLink />,
             data:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            servicename: "High-Quality Content Creation",
            icons: <AiOutlineAudit />,
             data:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            servicename: "Competitor guest Prospecting",
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
        <div className="_Seoguestservicesmaindiv">

            <span className="_SeoguestServicesheading">
                OUR SERVICES INCLUDES....
            </span>
            <div className="_Seoguestservicesslider">
                {
                    arr1.map((items, i) => {
                        return (
                            <div className=" _SeoguestServicesnames">

                                <IconContext.Provider value={{ className:more && num==i?"_Seoguesticons2":"_Seoguesticons1" }}>
                                    {items.icons}
                                </IconContext.Provider>
                                <div className={more&& num==i?"_SeoguestName2":"_SeoguestName"}>{items.servicename}</div>
                                {/* <div className="_Seoguestuppericon">{<MdExpandLess onClick={()=>toggle(i)}/>}</div> */}
                                <div className={more && num==i?"_Seoguestservicedata1" :"_Seoguestservicedata"} onClick={()=>toggle(i)} >{items.data}</div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

