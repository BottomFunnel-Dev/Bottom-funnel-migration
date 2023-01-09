import React from "react";
import './SeoPPCServices.css';
import { BsSearch } from 'react-icons/bs';
import { IconContext } from "react-icons/lib";
import { IoLocationSharp } from 'react-icons/io5';
import { ImLink } from 'react-icons/im';
import { SiGoogleanalytics } from 'react-icons/si';
import { AiOutlineAudit } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import {MdExpandLess} from 'react-icons/md'
import { useState } from "react";

export default function SeoPPCServices() {
    const   [more,setmore]=useState(false);
    const   [num,setnum]=useState();
    const[a,seta]=useState();
 
    const arr1 = [
        {
            servicename: "Google ads",
            icons: <BsSearch />,
             data:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            servicename: "Bing Ads",
            icons: <IoLocationSharp />,
             data:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            servicename: "Ad Remarketing",
            icons: <SiGoogleanalytics />,
             data:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            servicename: "Seo Services",
            icons: <ImLink />,
             data:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            servicename: "Local Seo Service",
            icons: <AiOutlineAudit />,
             data:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            servicename: "Content Marketing services",
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
        <div className="_SeoPPCservicesmaindiv">

            <span className="_SeoPPCServicesheading">
                OUR SERVICES INCLUDES....
            </span>
            <div className="_SeoPPCservicesslider">
                {
                    arr1.map((items, i) => {
                        return (
                            <div className=" _SeoPPCServicesnames">

                                <IconContext.Provider value={{ className:more && num==i?"_SeoPPCicons2":"_SeoPPCicons1" }}>
                                    {items.icons}
                                </IconContext.Provider>
                                <div className={more&& num==i?"_SeoPPCName2":"_SeoPPCName"}>{items.servicename}</div>
                                {/* <div className="_SeoPPCuppericon">{<MdExpandLess onClick={()=>toggle(i)}/>}</div> */}
                                <div className={more && num==i?"_SeoPPCservicedata1" :"_SeoPPCservicedata"} onClick={()=>toggle(i)} >{items.data}</div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

