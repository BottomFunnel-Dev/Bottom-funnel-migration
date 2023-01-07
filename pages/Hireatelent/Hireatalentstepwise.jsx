// import React, { useEffect } from 'react'
// import { useState } from 'react'


// export const Hireatalentstepwise = () => {

    // const [developmentcatA , setDevelopmentcatA] = useState("")

    // const [developmentcatB, setDevelopmentcatB] = useState("")

    // const [developmentcatC, setDevelopmentcatC] = useState("")




    // const hireatalentdata = [   




     
       
    //     {
    //         cource:"Web Development",
    //         module:"Mean Stack",
    //         category:"A"
    //     },
    //     {
    //         cource:"Web Development",
    //         module:"Asp.Net",
    //         category:"A"
    //     },
    //     {
    //         cource:"Web Development",
    //         module:"Java",
    //         category:"A"
    //     },
    //     {
    //         cource:"Web Development",
    //         module:"Python",
    //         category:"A"
    //     },
    //     {
    //         cource:"Web Development",
    //         module:"Golang",
    //         category:"A"
    //     },
    //     {
    //         cource:"Web Development",
    //         module:"Javascript",
    //         category:"A"
    //     },
    //     {
    //         cource:"Web Development",
    //         module:"Ruby On Rails",
    //         category:"A"
    //     },
       

    //     {
    //         cource:"Mobile Development",
    //         category:"A",
    //         module:"Java",
           
    //     },

    //     {
    //         cource:"Mobile Development",
    //         category:"A",
    //         module:"Kotlin",
           
    //     },

    //     {
    //         cource:"Mobile Development",
    //         category:"A",
    //         module:"Python",
           
    //     },

    //     {
    //         cource:"Mobile Development",
    //         category:"A",
    //         module:"R programming",
           
    //     },

    //     {
    //         cource:"Mobile Development",
    //         category:"A",
    //         module:"C++",
           
    //     },

    //     {
    //         cource:"Mobile Development",
    //         category:"A",
    //         module:"HTML5",
           
    //     },

    //     {
    //         cource:"Mobile Development",
    //         category:"A",
    //         module:"C#",
           
    //     },

    //     {
    //         cource:"Mobile Development",
    //         category:"A",
    //         module:"Swift",
           
    //     },

    //     {
    //         cource:"Digital Marketing",
    //         category:"A",
    //         module:"Search Engine Optimization",
    //     },

    //     {
    //         cource:"Digital Marketing",
    //         category:"A",
    //         module:"Pay-per-Click",
    //     },

    //     {
    //         cource:"Digital Marketing",
    //         category:"A",
    //         module:"Social Media Marketing",
    //     },

    //     {
    //         cource:"Digital Marketing",
    //         category:"A",
    //         module:"Content Marketing",
    //     },

    //     {
    //         cource:"Digital Marketing",
    //         category:"A",
    //         module:"Email Marketing",
    //     },

    //     {
    //         cource:"Digital Marketing",
    //         category:"A",
    //         module:"Mobile Marketing",
    //     },

    //     {
    //         cource:"Digital Marketing",
    //         category:"A",
    //         module:"Marketing Analytics",
    //     },

    //     {
    //         cource:"Digital Marketing",
    //         category:"A",
    //         module:"Affiliate Marketing ",
    //     },

    //     {
    //         cource:"Trending Technologies",
    //         category:"A",
    //         module:"Blockchain Technology",
    //     },

    //     {
    //         cource:"Trending Technologies",
    //         category:"A",
    //         module:"Progressive Web Apps (PWA)",
    //     },

    //     {
    //         cource:"Trending Technologies",
    //         category:"A",
    //         module:"Internet of Things (IoT)",
    //     },

    //     {
    //         cource:"Trending Technologies",
    //         category:"A",
    //         module:"Accelerated Mobile Pages (AMP)",
    //     },

    //     {
    //         cource:"Trending Technologies",
    //         category:"A",
    //         module:"Voice Search Optimization",
    //     },

    //     {
    //         cource:"Trending Technologies",
    //         category:"A",
    //         module:"API-first Development",
    //     },

    //     {
    //         cource:"Trending Technologies",
    //         category:"A",
    //         module:"AI-Powered Chatbots",
    //     },

    //     {
    //         cource:"Trending Technologies",
    //         category:"A",
    //         module:"Push Notifications",
    //     },

    //     {
    //         cource:"Trending Technologies",
    //         category:"A",
    //         module:"Motion UI",
    //     },


    //     {
    //         cource:"Trending Technologies",
    //         category:"A",
    //         module:"Data Security",
    //     },

    //     {
    //         cource:"Trending Technologies",
    //         category:"A",
    //         module:"Multi-experience",
    //     },

    //     {
    //         cource:"Trending Technologies",
    //         category:"A",
    //         module:"Cybersecurity",
    //     },

    //     {
    //         cource:"Trending Technologies",
    //         category:"A",
    //         module:"Micro Frontends",
    //     },

    //     {
    //         cource:"Trending Technologies",
    //         category:"A",
    //         module:"Virtual Reality",
    //     },

        
    //     {
    //         cource:"Trending Technologies",
    //         category:"A",
    //         module:"Serverless Architecture",
    //     },

    //     {
    //         cource:"Trending Technologies",
    //         category:"A",
    //         module:"Cloud Computing",
    //     },

    //     {
    //         cource:"Trending Technologies",
    //         category:"A",
    //         module:"Single-Page Applications (SPA)",
    //     },

    //     {
    //         cource:"Trending Technologies",
    //         category:"A",
    //         module:"JavaScript Frameworks",
    //     },
    //     {
    //         cource:"Trending Technologies",
    //         category:"A",
    //         module:"Automation Testing",
    //     },
    //     {
    //         cource:"Trending Technologies",
    //         category:"A",
    //         module:"Responsive Websites",
    //     },

    //     {
    //         cource:"Trending Technologies",
    //         category:"A",
    //         module:"Dark Mode",
    //     },

    //     {
    //         cource:"Trending Technologies",
    //         category:"A",
    //         module:"WebAssembly",
    //     },

    //     {
    //         cource:"Trending Technologies",
    //         category:"A",
    //         module:"Augmented Reality",
    //     },

    //     {
    //         cource:"Backend",
    //         category:"B",
    //         module:"Node.js",
    //     },

    //     {
    //         cource:"Backend",
    //         category:"B",
    //         module:".Net",
    //     },

    //     {
    //         cource:"Backend",
    //         category:"B",
    //         module:"PHP",
    //     },

    //     {
    //         cource:"Backend",
    //         category:"B",
    //         module:"laravel",
    //     },

    //     {
    //         cource:"Backend",
    //         category:"B",
    //         module:"springBoot",
    //     },

    //     {
    //         cource:"Backend",
    //         category:"B",
    //         module:"Hibernate",
    //     },

    //     {
    //         cource:"Backend",
    //         category:"B",
    //         module:"Django",
    //     },

    //     {
    //         cource:"Backend",
    //         category:"B",
    //         module:"CakePHP",
    //     },

    //     {
    //         cource:"Backend",
    //         category:"B",
    //         module:"codelgniter",
    //     },

    //     {
    //         cource:"Backend",
    //         category:"B",
    //         module:"Flask",
    //     },

    //     {
    //         cource:"Backend",
    //         category:"B",
    //         module:"Golang",
    //     },

    //     {
    //         cource:"Backend",
    //         category:"B",
    //         module:"Staruts",
    //     },

    //     {
    //         cource:"Backend",
    //         category:"B",
    //         module:"symfony",
    //     },

    //     {
    //         cource:"Backend",
    //         category:"B",
    //         module:"Phalcon",
    //     },

    //     {
    //         cource:"Backend",
    //         category:"B",
    //         module:"JSF",
    //     },

    //     {
    //         cource:"Backend",
    //         category:"B",
    //         module:"Grails",
    //     },

    //     {
    //         cource:"Frontend",
    //         category:"B",
    //         module:"JavaScript",
    //     },

    //     {
    //         cource:"Frontend",
    //         category:"B",
    //         module:"ReactJS",
    //     },

    //     {
    //         cource:"Frontend",
    //         category:"B",
    //         module:"AngularJS",
    //     },

    //     {
    //         cource:"Frontend",
    //         category:"B",
    //         module:"Flutter",
    //     },

    //     {
    //         cource:"Frontend",
    //         category:"B",
    //         module:"Vue.js",
    //     },

    //     {
    //         cource:"Frontend",
    //         category:"B",
    //         module:"Bootstrap",
    //     },

    //     {
    //         cource:"Frontend",
    //         category:"B",
    //         module:"Ionic",
    //     },

    //     {
    //         cource:"Frontend",
    //         category:"B",
    //         module:"HTML5 Boilerplate",
    //     },

    //     {
    //         cource:"Frontend",
    //         category:"B",
    //         module:"Npm",
    //     },

    //     {
    //         cource:"Frontend",
    //         category:"B",
    //         module:"Meteor",
    //     },

    //     {
    //         cource:"Frontend",
    //         category:"B",
    //         module:"Elm",
    //     },

    //     {
    //         cource:"Frontend",
    //         category:"B",
    //         module:"TypeScript",
    //     },

    //     {
    //         cource:"Frontend",
    //         category:"B",
    //         module:"Grunt",
    //     },

    //     {
    //         cource:"Frontend",
    //         category:"B",
    //         module:"Backbone.js",
    //     },

    //     {
    //         cource:"Frontend",
    //         category:"B",
    //         module:"Sencha Ext JS",
    //     },

    //     {
    //         cource:"Mobile",
    //         category:"B",
    //         module:"IOS",
    //     },

    //     {
    //         cource:"Mobile",
    //         category:"B",
    //         module:"Android",
    //     },

    //     {
    //         cource:"Mobile",
    //         category:"B",
    //         module:"React Native",
    //     },

    //     {
    //         cource:"Mobile",
    //         category:"B",
    //         module:"Ionic",
    //     },

    //     {
    //         cource:"Mobile",
    //         category:"B",
    //         module:"Java",
    //     },

    //     {
    //         cource:"Mobile",
    //         category:"B",
    //         module:"Flutter",
    //     },

    //     {
    //         cource:"Mobile",
    //         category:"B",
    //         module:"Xamarin",
    //     },

    //     {
    //         cource:"Mobile",
    //         category:"B",
    //         module:"Swift",
    //     },

    //     {
    //         cource:"Mobile",
    //         category:"B",
    //         module:"Kotlin",
    //     },

    //     {
    //         cource:"CMS Framework",
    //         category:"B",
    //         module:"Wordpress",
    //     },

    //     {
    //         cource:"CMS Framework",
    //         category:"B",
    //         module:"Hubspot CMS Hub",
    //     },

    //     {
    //         cource:"CMS Framework",
    //         category:"B",
    //         module:"Joomla",
    //     },

    //     {
    //         cource:"CMS Framework",
    //         category:"B",
    //         module:"WooCommerce",
    //     },

    //     {
    //         cource:"CMS Framework",
    //         category:"B",
    //         module:"Drupal",
    //     },

    //     {
    //         cource:"CMS Framework",
    //         category:"B",
    //         module:"Wix",
    //     },

    //     {
    //         cource:"CMS Framework",
    //         category:"B",
    //         module:"Big Commerce",
    //     },

    //     {
    //         cource:"CMS Framework",
    //         category:"B",
    //         module:"Ghost website builder",
    //     },

    //     {
    //         cource:"CMS Framework",
    //         category:"B",
    //         module:"Weebly",
    //     },

    //     {
    //         cource:"Industries",
    //         category:"C",
    //         module:"Education",
    //     },

    //     {
    //         cource:"Industries",
    //         category:"C",
    //         module:"Game Development",
    //     },


    //     {
    //         cource:"Industries",
    //         category:"C",
    //         module:"E-commerce",
    //     },

    //     {
    //         cource:"Industries",
    //         category:"C",
    //         module:"Video Streaming",
    //     },

    //     {
    //         cource:"Industries",
    //         category:"C",
    //         module:"Sports Betting",
    //     },

    //     {
    //         cource:"Industries",
    //         category:"C",
    //         module:"IOT Development",
    //     },

    //     {
    //         cource:"Industries",
    //         category:"C",
    //         module:"Fitness",
    //     },

    //     {
    //         cource:"Industries",
    //         category:"C",
    //         module:"Dating",
    //     },

    //     {
    //         cource:"Industries",
    //         category:"C",
    //         module:"Cryptocurrency",
    //     },

    //     {
    //         cource:"Industries",
    //         category:"C",
    //         module:"Social Media",
    //     },

    //     {
    //         cource:"Industries",
    //         category:"C",
    //         module:"Logistics",
    //     },

    //     {
    //         cource:"Industries",
    //         category:"C",
    //         module:"Politics",
    //     },

    //     {
    //         cource:"Industries",
    //         category:"C",
    //         module:"Wellness",
    //     },

    //     {
    //         cource:"Industries",
    //         category:"C",
    //         module:"News",
    //     },

    //     {
    //         cource:"Industries",
    //         category:"C",
    //         module:"SaaS",
    //     },

    //     {
    //         cource:"Industries",
    //         category:"C",
    //         module:"Events",
    //     },

    //     {
    //         cource:"Industries",
    //         category:"C",
    //         module:"eScooter",
    //     },

    //     {
    //         cource:"Industries",
    //         category:"C",
    //         module:"Travel",
    //     },

    //     {
    //         cource:"Industries",
    //         category:"C",
    //         module:"Aviation",
    //     },

    //     {
    //         cource:"Industries",
    //         category:"C",
    //         module:"Telecommunication",
    //     },

       
    //     {
    //         cource:"On Demand Solution",
    //         category:"C",
    //         module:"Food Delivery App",
    //     },

    //     {
    //         cource:"On Demand Solution",
    //         category:"C",
    //         module:"On Demand Home Services",
    //     },

    //     {
    //         cource:"On Demand Solution",
    //         category:"C",
    //         module:"Alcohol Delivery App",
    //     },

    //     {
    //         cource:"On Demand Solution",
    //         category:"C",
    //         module:"Laundry Delivery",
    //     },

    //     {
    //         cource:"On Demand Solution",
    //         category:"C",
    //         module:"Grocery Delivery App",
    //     },

    //     {
    //         cource:"On Demand Solution",
    //         category:"C",
    //         module:"Beauty & Salon App",
    //     },

    //     {
    //         cource:"On Demand Solution",
    //         category:"C",
    //         module:"Cannabis Delivery App",
    //     },

    //     {
    //         cource:"On Demand Solution",
    //         category:"C",
    //         module:"Marketplace Apps",
    //     },

    //     {
    //         cource:"On Demand Solution",
    //         category:"C",
    //         module:"Pickup & Delivery",
    //     },

    //     {
    //         cource:"On Demand Solution",
    //         category:"C",
    //         module:"Pharmacy Delivery App",
    //     },

    //     {
    //         cource:"On Demand Solution",
    //         category:"C",
    //         module:"Flower Delivery App",
    //     },

    //     {
    //         cource:"On Demand Solution",
    //         category:"C",
    //         module:"Carpooling Apps",
    //     },

    //     {
    //         cource:"On Demand Solution",
    //         category:"C",
    //         module:"Taxi Booking App",
    //     },

    //     {
    //         cource:"On Demand Solution",
    //         category:"C",
    //         module:"Tool Delivery App",
    //     },

    //     {
    //         cource:"On Demand Solution",
    //         category:"C",
    //         module:"Icecream Delivery App",
    //     },

    //     {
    //         cource:"On Demand Solution",
    //         category:"C",
    //         module:"Plant Based Meat Delivery App",
    //     },

    //     {
    //         cource:"On Demand Solution",
    //         category:"C",
    //         module:"Car Rental Delivery App",
    //     },

    //     {
    //         cource:"On Demand Solution",
    //         category:"C",
    //         module:"Agriculture App Solutions",
    //     },

    //     {
    //         cource:"On Demand Solution",
    //         category:"C",
    //         module:"Car Service App Solutions",
    //     },

    //     {
    //         cource:"On Demand Solution",
    //         category:"C",
    //         module:"Trading App Solutions",
    //     },

    //     {
    //         cource:"On Demand Solution",
    //         category:"C",
    //         module:"RealState Apps Solutions",
    //     },

    //     {
    //         cource:"On Demand Solution",
    //         category:"C",
    //         module:"Meat Delivery App",
    //     },

    //     {
    //         cource:"On Demand Solution",
    //         category:"C",
    //         module:"Eyewear Delivery App ",
    //     },

    //     {
    //         cource:"On Demand Solution",
    //         category:"C",
    //         module:"Baby & KidsWear App",
    //     },

    //     {
    //         cource:"On Demand Solution",
    //         category:"C",
    //         module:"Online Payment App",
    //     },

    //     {
    //         cource:"On Demand Solution",
    //         category:"C",
    //         module:"Fintech App Solutions",
    //     },

    //     {
    //         cource:"On Demand Solution",
    //         category:"C",
    //         module:"Webiste Builder App",
    //     },

    //     {
    //         cource:"On Demand Solution",
    //         category:"C",
    //         module:"App Builder Solutions",
    //     },

    //     {
    //         cource:"On Demand Solution",
    //         category:"C",
    //         module:"AI Content App Solutions",
    //     },

    //     {
    //         cource:"On Demand Solution",
    //         category:"C",
    //         module:"OTT App Solutions",
    //     },

      
        
    // ]
 
// useEffect(()=>{

//     const cateA = hireatalentdata.filter((e)=>{
//         if(e.category==="A"){
//          setDevelopmentcatA(e.category)
          
//         }
//         else if(e.category==="B"){
//             setDevelopmentcatB(e.category)
//         }
//         else if(e.category ==="c"){
//             setDevelopmentcatC(e.category)
//         }
//     })
// })

    
    


  

//   return (
//     <div className='hireatalentstepwisemainbox'>
//    <div className='hireatalentsteponeleftbox'>
//    <h1><span className='colored'>Bottom Funnel </span>is the fastest way to hire remote talents from India.
//    Let's start by answering a few simple questions.
//    This will allow us to understand your requirements and match the perfect talent.</h1>



// <div className='hireatalentmaindatamappingbox'>
// {developmentcatA}
// </div>

//    </div>
// <div className='hireatalentsteptworightboxforimages'>
// <img src='Images/hireatalent/step 1/Component 188.png' alt='' />
// </div>
//     </div>
//   )
// }



import React, { useEffect, useState } from 'react'

export const Hireatalentstepwise = () => {
    
    const hireatalentdata = [   


        {
            cource:"Web Development",
            module:"Mean Stack",
            category:"A"
        },
        {
            cource:"Web Development",
            module:"Asp.Net",
            category:"A"
        },
        {
            cource:"Web Development",
            module:"Java",
            category:"A"
        },
        {
            cource:"Web Development",
            module:"Python",
            category:"A"
        },
        {
            cource:"Web Development",
            module:"Golang",
            category:"A"
        },
        {
            cource:"Web Development",
            module:"Javascript",
            category:"A"
        },
        {
            cource:"Web Development",
            module:"Ruby On Rails",
            category:"A"
        },
       

        {
            cource:"Mobile Development",
            category:"A",
            module:"Java",
           
        },

        {
            cource:"Mobile Development",
            category:"A",
            module:"Kotlin",
           
        },

        {
            cource:"Mobile Development",
            category:"A",
            module:"Python",
           
        },

        {
            cource:"Mobile Development",
            category:"A",
            module:"R programming",
           
        },

        {
            cource:"Mobile Development",
            category:"A",
            module:"C++",
           
        },

        {
            cource:"Mobile Development",
            category:"A",
            module:"HTML5",
           
        },

        {
            cource:"Mobile Development",
            category:"A",
            module:"C#",
           
        },

        {
            cource:"Mobile Development",
            category:"A",
            module:"Swift",
           
        },

        {
            cource:"Digital Marketing",
            category:"A",
            module:"Search Engine Optimization",
        },

        {
            cource:"Digital Marketing",
            category:"A",
            module:"Pay-per-Click",
        },

        {
            cource:"Digital Marketing",
            category:"A",
            module:"Social Media Marketing",
        },

        {
            cource:"Digital Marketing",
            category:"A",
            module:"Content Marketing",
        },

        {
            cource:"Digital Marketing",
            category:"A",
            module:"Email Marketing",
        },

        {
            cource:"Digital Marketing",
            category:"A",
            module:"Mobile Marketing",
        },

        {
            cource:"Digital Marketing",
            category:"A",
            module:"Marketing Analytics",
        },

        {
            cource:"Digital Marketing",
            category:"A",
            module:"Affiliate Marketing ",
        },

        {
            cource:"Trending Technologies",
            category:"A",
            module:"Blockchain Technology",
        },

        {
            cource:"Trending Technologies",
            category:"A",
            module:"Progressive Web Apps (PWA)",
        },

        {
            cource:"Trending Technologies",
            category:"A",
            module:"Internet of Things (IoT)",
        },

        {
            cource:"Trending Technologies",
            category:"A",
            module:"Accelerated Mobile Pages (AMP)",
        },

        {
            cource:"Trending Technologies",
            category:"A",
            module:"Voice Search Optimization",
        },

        {
            cource:"Trending Technologies",
            category:"A",
            module:"API-first Development",
        },

        {
            cource:"Trending Technologies",
            category:"A",
            module:"AI-Powered Chatbots",
        },

        {
            cource:"Trending Technologies",
            category:"A",
            module:"Push Notifications",
        },

        {
            cource:"Trending Technologies",
            category:"A",
            module:"Motion UI",
        },


        {
            cource:"Trending Technologies",
            category:"A",
            module:"Data Security",
        },

        {
            cource:"Trending Technologies",
            category:"A",
            module:"Multi-experience",
        },

        {
            cource:"Trending Technologies",
            category:"A",
            module:"Cybersecurity",
        },

        {
            cource:"Trending Technologies",
            category:"A",
            module:"Micro Frontends",
        },

        {
            cource:"Trending Technologies",
            category:"A",
            module:"Virtual Reality",
        },

        
        {
            cource:"Trending Technologies",
            category:"A",
            module:"Serverless Architecture",
        },

        {
            cource:"Trending Technologies",
            category:"A",
            module:"Cloud Computing",
        },

        {
            cource:"Trending Technologies",
            category:"A",
            module:"Single-Page Applications (SPA)",
        },

        {
            cource:"Trending Technologies",
            category:"A",
            module:"JavaScript Frameworks",
        },
        {
            cource:"Trending Technologies",
            category:"A",
            module:"Automation Testing",
        },
        {
            cource:"Trending Technologies",
            category:"A",
            module:"Responsive Websites",
        },

        {
            cource:"Trending Technologies",
            category:"A",
            module:"Dark Mode",
        },

        {
            cource:"Trending Technologies",
            category:"A",
            module:"WebAssembly",
        },

        {
            cource:"Trending Technologies",
            category:"A",
            module:"Augmented Reality",
        },

        {
            cource:"Backend",
            category:"B",
            module:"Node.js",
        },

        {
            cource:"Backend",
            category:"B",
            module:".Net",
        },

        {
            cource:"Backend",
            category:"B",
            module:"PHP",
        },

        {
            cource:"Backend",
            category:"B",
            module:"laravel",
        },

        {
            cource:"Backend",
            category:"B",
            module:"springBoot",
        },

        {
            cource:"Backend",
            category:"B",
            module:"Hibernate",
        },

        {
            cource:"Backend",
            category:"B",
            module:"Django",
        },

        {
            cource:"Backend",
            category:"B",
            module:"CakePHP",
        },

        {
            cource:"Backend",
            category:"B",
            module:"codelgniter",
        },

        {
            cource:"Backend",
            category:"B",
            module:"Flask",
        },

        {
            cource:"Backend",
            category:"B",
            module:"Golang",
        },

        {
            cource:"Backend",
            category:"B",
            module:"Staruts",
        },

        {
            cource:"Backend",
            category:"B",
            module:"symfony",
        },

        {
            cource:"Backend",
            category:"B",
            module:"Phalcon",
        },

        {
            cource:"Backend",
            category:"B",
            module:"JSF",
        },

        {
            cource:"Backend",
            category:"B",
            module:"Grails",
        },

        {
            cource:"Frontend",
            category:"B",
            module:"JavaScript",
        },

        {
            cource:"Frontend",
            category:"B",
            module:"ReactJS",
        },

        {
            cource:"Frontend",
            category:"B",
            module:"AngularJS",
        },

        {
            cource:"Frontend",
            category:"B",
            module:"Flutter",
        },

        {
            cource:"Frontend",
            category:"B",
            module:"Vue.js",
        },

        {
            cource:"Frontend",
            category:"B",
            module:"Bootstrap",
        },

        {
            cource:"Frontend",
            category:"B",
            module:"Ionic",
        },

        {
            cource:"Frontend",
            category:"B",
            module:"HTML5 Boilerplate",
        },

        {
            cource:"Frontend",
            category:"B",
            module:"Npm",
        },

        {
            cource:"Frontend",
            category:"B",
            module:"Meteor",
        },

        {
            cource:"Frontend",
            category:"B",
            module:"Elm",
        },

        {
            cource:"Frontend",
            category:"B",
            module:"TypeScript",
        },

        {
            cource:"Frontend",
            category:"B",
            module:"Grunt",
        },

        {
            cource:"Frontend",
            category:"B",
            module:"Backbone.js",
        },

        {
            cource:"Frontend",
            category:"B",
            module:"Sencha Ext JS",
        },

        {
            cource:"Mobile",
            category:"B",
            module:"IOS",
        },

        {
            cource:"Mobile",
            category:"B",
            module:"Android",
        },

        {
            cource:"Mobile",
            category:"B",
            module:"React Native",
        },

        {
            cource:"Mobile",
            category:"B",
            module:"Ionic",
        },

        {
            cource:"Mobile",
            category:"B",
            module:"Java",
        },

        {
            cource:"Mobile",
            category:"B",
            module:"Flutter",
        },

        {
            cource:"Mobile",
            category:"B",
            module:"Xamarin",
        },

        {
            cource:"Mobile",
            category:"B",
            module:"Swift",
        },

        {
            cource:"Mobile",
            category:"B",
            module:"Kotlin",
        },

        {
            cource:"CMS Framework",
            category:"B",
            module:"Wordpress",
        },

        {
            cource:"CMS Framework",
            category:"B",
            module:"Hubspot CMS Hub",
        },

        {
            cource:"CMS Framework",
            category:"B",
            module:"Joomla",
        },

        {
            cource:"CMS Framework",
            category:"B",
            module:"WooCommerce",
        },

        {
            cource:"CMS Framework",
            category:"B",
            module:"Drupal",
        },

        {
            cource:"CMS Framework",
            category:"B",
            module:"Wix",
        },

        {
            cource:"CMS Framework",
            category:"B",
            module:"Big Commerce",
        },

        {
            cource:"CMS Framework",
            category:"B",
            module:"Ghost website builder",
        },

        {
            cource:"CMS Framework",
            category:"B",
            module:"Weebly",
        },

        {
            cource:"Industries",
            category:"C",
            module:"Education",
        },

        {
            cource:"Industries",
            category:"C",
            module:"Game Development",
        },


        {
            cource:"Industries",
            category:"C",
            module:"E-commerce",
        },

        {
            cource:"Industries",
            category:"C",
            module:"Video Streaming",
        },

        {
            cource:"Industries",
            category:"C",
            module:"Sports Betting",
        },

        {
            cource:"Industries",
            category:"C",
            module:"IOT Development",
        },

        {
            cource:"Industries",
            category:"C",
            module:"Fitness",
        },

        {
            cource:"Industries",
            category:"C",
            module:"Dating",
        },

        {
            cource:"Industries",
            category:"C",
            module:"Cryptocurrency",
        },

        {
            cource:"Industries",
            category:"C",
            module:"Social Media",
        },

        {
            cource:"Industries",
            category:"C",
            module:"Logistics",
        },

        {
            cource:"Industries",
            category:"C",
            module:"Politics",
        },

        {
            cource:"Industries",
            category:"C",
            module:"Wellness",
        },

        {
            cource:"Industries",
            category:"C",
            module:"News",
        },

        {
            cource:"Industries",
            category:"C",
            module:"SaaS",
        },

        {
            cource:"Industries",
            category:"C",
            module:"Events",
        },

        {
            cource:"Industries",
            category:"C",
            module:"eScooter",
        },

        {
            cource:"Industries",
            category:"C",
            module:"Travel",
        },

        {
            cource:"Industries",
            category:"C",
            module:"Aviation",
        },

        {
            cource:"Industries",
            category:"C",
            module:"Telecommunication",
        },

       
        {
            cource:"On Demand Solution",
            category:"C",
            module:"Food Delivery App",
        },

        {
            cource:"On Demand Solution",
            category:"C",
            module:"On Demand Home Services",
        },

        {
            cource:"On Demand Solution",
            category:"C",
            module:"Alcohol Delivery App",
        },

        {
            cource:"On Demand Solution",
            category:"C",
            module:"Laundry Delivery",
        },

        {
            cource:"On Demand Solution",
            category:"C",
            module:"Grocery Delivery App",
        },

        {
            cource:"On Demand Solution",
            category:"C",
            module:"Beauty & Salon App",
        },

        {
            cource:"On Demand Solution",
            category:"C",
            module:"Cannabis Delivery App",
        },

        {
            cource:"On Demand Solution",
            category:"C",
            module:"Marketplace Apps",
        },

        {
            cource:"On Demand Solution",
            category:"C",
            module:"Pickup & Delivery",
        },

        {
            cource:"On Demand Solution",
            category:"C",
            module:"Pharmacy Delivery App",
        },

        {
            cource:"On Demand Solution",
            category:"C",
            module:"Flower Delivery App",
        },

        {
            cource:"On Demand Solution",
            category:"C",
            module:"Carpooling Apps",
        },

        {
            cource:"On Demand Solution",
            category:"C",
            module:"Taxi Booking App",
        },

        {
            cource:"On Demand Solution",
            category:"C",
            module:"Tool Delivery App",
        },

        {
            cource:"On Demand Solution",
            category:"C",
            module:"Icecream Delivery App",
        },

        {
            cource:"On Demand Solution",
            category:"C",
            module:"Plant Based Meat Delivery App",
        },

        {
            cource:"On Demand Solution",
            category:"C",
            module:"Car Rental Delivery App",
        },

        {
            cource:"On Demand Solution",
            category:"C",
            module:"Agriculture App Solutions",
        },

        {
            cource:"On Demand Solution",
            category:"C",
            module:"Car Service App Solutions",
        },

        {
            cource:"On Demand Solution",
            category:"C",
            module:"Trading App Solutions",
        },

        {
            cource:"On Demand Solution",
            category:"C",
            module:"RealState Apps Solutions",
        },

        {
            cource:"On Demand Solution",
            category:"C",
            module:"Meat Delivery App",
        },

        {
            cource:"On Demand Solution",
            category:"C",
            module:"Eyewear Delivery App ",
        },

        {
            cource:"On Demand Solution",
            category:"C",
            module:"Baby & KidsWear App",
        },

        {
            cource:"On Demand Solution",
            category:"C",
            module:"Online Payment App",
        },

        {
            cource:"On Demand Solution",
            category:"C",
            module:"Fintech App Solutions",
        },

        {
            cource:"On Demand Solution",
            category:"C",
            module:"Webiste Builder App",
        },

        {
            cource:"On Demand Solution",
            category:"C",
            module:"App Builder Solutions",
        },

        {
            cource:"On Demand Solution",
            category:"C",
            module:"AI Content App Solutions",
        },

        {
            cource:"On Demand Solution",
            category:"C",
            module:"OTT App Solutions",
        },

      
        
    ]

    
    const [developmentcatA , setDevelopmentcatA] = useState(false)



    useEffect(()=>{
        const webdevelopment = hireatalentdata.map((e)=>{
            if(e.cource==="Web Development")
            setDevelopmentcatA(e.module)
         })
    })
    
    const[changecolor,setChangecolor] = useState(false)

    

    return (
    
            <div className={style.hireatalentstepwisemainbox}>
           <div className={style.hireatalentsteponeleftbox}>
           <h2><span className={style.colored}>Bottom Funnel </span>is the fastest way to hire remote talents from India.
           Let's start by answering a few simple questions.
           This will allow us to understand your requirements and match the perfect talent.</h2>
        <div className={style.hireatalentmaindatamappingbox}>
        <div className={style.categoryA}><h4>Web Development</h4>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
        </div>
        <div className={style.category}><h4>Mobile Development</h4>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
      </svg>
        </div>
        <div className={style.categoryA}><h4>Digital Marketing</h4>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
      </svg>
        </div>
        <div className={style.categoryA}><h4>Trending Technology</h4>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
      </svg>
        </div>
        
        </div>
<div className={style.hireatalentwebdevelopmetpage}>
<div className={style.categoryA}><h6>PHP</h6>

</div>
<div className={style.categoryA}><h6>Mern Stack</h6>

</div>
<div className={style.categoryA}><h6>Asp.net</h6>

</div>
<div className={style.categoryA}><h6>Java</h6>

</div>
<div className={style.categoryA}><h6>Python</h6>

</div>
<div className={style.categoryA}><h6>Golang</h6>

</div>
<div className={style.categoryA}><h6>Javascript</h6>

</div>
<div className={style.categoryA}><h6>Ruby on Rails</h6>

</div>

</div>

<div className={style.hireatalentbackendandmanybox}>
<div className={style.categoryB}><h4>Backend</h4>
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
</div>
<div className={style.categoryB}><h4>Frontend</h4>
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
</div>
<div className={style.categoryB}><h4>Mobile</h4>
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
</div>
<div className={style.categoryB}><h4>CMS Framework</h4>
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
</div>
</div>


<div className={style.hireatalentwebdevelopmetpage}>
<div className={style.categoryB}><h6>Node.js</h6>

</div>
<div className={style.categoryB}><h6>.Net</h6>

</div>
<div className={style.categoryB}><h6>PHP</h6>

</div>
<div className={style.categoryB}><h6>Larvel</h6>

</div>
<div className={style.categoryB}><h6>SpringBoot</h6>

</div>
<div className={style.categoryB}><h6>Hibernate</h6>

</div>
<div className={style.categoryB}><h6>Django</h6>

</div>
<div className={style.categoryB}><h6>CakePHP</h6>

</div>
<div className={style.categoryB}><h6>Codelgniter</h6>

</div>
<div className={style.categoryB}><h6>Flask</h6>

</div>
<div className={style.categoryB}><h6>Golang</h6>

</div>
<div className={style.categoryB}><h6>Staruts</h6>

</div>
<div className={style.categoryB}><h6>Symfony</h6>

</div>
<div className={style.categoryB}><h6>Phalcon</h6>

</div>
<div className={style.categoryB}><h6>JSF</h6>

</div>
<div className={style.categoryB}><h6>Grails</h6>

</div>


</div>

<div className={style.hireatalentwebdevelopmetpage}>
        <div className={categoryA}><h4>Industries</h4>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
        </div>
        <div className={style.categoryA}><h4>On Demand Solution</h4>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
        </div>
       
        
        </div>
        <button className={style.hireatalentbutton}>Lets Start</button>

    </div>



    <div className={style.hireatalentsteptworightboxforimages}>
<img src='Images/hireatalent/step 1/Component 188.png' alt='' />
</div>






    </div>
  )
}
