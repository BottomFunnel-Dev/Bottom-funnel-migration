import React from "react";
import './SeoLocalServices.css';
import { BsSearch } from 'react-icons/bs';
import { IconContext } from "react-icons/lib";
import { IoLocationSharp } from 'react-icons/io5';
import { ImLink } from 'react-icons/im';
import { SiGoogleanalytics } from 'react-icons/si';
import { AiOutlineAudit } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import {MdExpandLess} from 'react-icons/md'
import { useState } from "react";

export default function SeoLocalServices() {
    const   [more,setmore]=useState(false);
    const   [num,setnum]=useState();
    const[a,seta]=useState();
 
    const arr1 = [
        {
            servicename: "Local Seo Audits",
            icons: <BsSearch />,
             data:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            servicename: "Google My Business Optimization & Management",
            icons: <IoLocationSharp />,
             data:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            servicename: "Citation Audit and Cleanup Service",
            icons: <SiGoogleanalytics />,
             data:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            servicename: "Local Map Search Optimization",
            icons: <ImLink />,
             data:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            servicename: "Local Business Optimization for Multilocation",
            icons: <AiOutlineAudit />,
             data:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            servicename: "Monthly Local Seo Reporting",
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
        <div className="_SeoLocalservicesmaindiv">

            <span className="_SeoLocalServicesheading">
                OUR SERVICES INCLUDES....
            </span>
            <div className="_SeoLocalservicesslider">
                {
                    arr1.map((items, i) => {
                        return (
                            <div key={i} className=" _SeoLocalServicesnames">

                                <IconContext.Provider value={{ className:more && num==i?"_SeoLocalicons2":"_SeoLocalicons1" }}>
                                    {items.icons}
                                </IconContext.Provider>
                                <div className={more&& num==i?"_SeoLocalName2":"_SeoLocalName"}>{items.servicename}</div>
                                {/* <div className="_SeoLocaluppericon">{<MdExpandLess onClick={()=>toggle(i)}/>}</div> */}
                                <div className={more && num==i?"_SeoLocalservicedata1" :"_SeoLocalservicedata"} onClick={()=>toggle(i)} >{items.data}</div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

