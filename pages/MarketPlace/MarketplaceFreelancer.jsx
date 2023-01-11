
import React from 'react'
import { useState } from 'react'
import "./MarketplaceFreelancer.css"

const MarketplaceFreelancer = () => {

    const [imageChange, setImageChange] = useState("Images/Marketplaceapp/Freelancerappcreen/Register.png")

    const freelancerData = [
        {
            img: "/Images/Marketplaceapp/icons/Group339964.png",
            Htxt: "Register Yourself",
            stxt: " Register yourself and start Approaching clients.This will allow you to create your profile ",
            phone: "Images/Marketplaceapp/Freelancerappcreen/Register.png"
        }, {
            img: "/Images/Marketplaceapp/icons/Component44.png",
            Htxt: "In App Chat",
            stxt: "This is an in-app chat platform that helps you communicate effectively with your clients. ",
            phone: "Images/Marketplaceapp/Freelancerappcreen/inappchat.png"
        }, {
            img: "/Images/Marketplaceapp/icons/Group339974.png",
            Htxt: "Find Popular Jobs",
            stxt: "Such as a built in system for tracking, email notifications for job applications and more. ",
            phone: "Images/Marketplaceapp/Freelancerappcreen/FindPopularjobs.png"
        }, {
            img: "/Images/Marketplaceapp/icons/Group339973.png",
            Htxt: "Easy Apply",
            stxt: "If you are an employer that needs a freelancer, here is the best service for you ",
            phone: "Images/Marketplaceapp/Freelancerappcreen/Easyapply.png"
        }

    ]

    const handleImageChange = (imagepath) => {
        setImageChange(() => imagepath)

    }


    return (
        <div className='marketplacefreelancermainbox'>
            <div className='freelancerboxflexingmain'>
                <div className='freelancermarketboxleftflexing'>

                    <div className='freelancerimagebox1'><img className='imagefreelance1' src="/Images/Marketplaceapp/Bannersandbackgrounds/Component42.png" alt='image1' /></div>
                    <div className='freelancerimagebox2'> <img className='imagefreelance1' src={imageChange} alt='image2' /></div>
                    <div className='freelancerimagebox3'><img className='imagefreelance1' src='/Images/Marketplaceapp/Bannersandbackgrounds/picture.png' alt='image2' /></div>

                </div>

                <div className='freelancermarketboxrightflexing'>
                    <div className='freelancertextboxrightdiv'>
                        <h2>Freelancer Website & App</h2>
                        <h6>Our Freelancer Marketplace (community) was designed to bring together freelancers and businesses for a better way to connect</h6>
                    </div>
                    <div className='freelancerboxforspecialimagedotted'>

                        <div className='dottedimage1'><img className='specialimg' src='Images/Marketplaceapp/Bannersandbackgrounds/Group3399722.png' alt='rightflexboximageindex0' /></div>
                        <div className='dottedimage2'><img className='specialimg' src='Images/Marketplaceapp/Bannersandbackgrounds/Group3399722.png' alt='rightflexboximageindex0' /></div>

                        <div className='afterdottedinnerflecboxfreelancer'>{freelancerData.map((e) => {
                            return (
                                <div className='flexboxdivfreelancer'
                                    key={e.Htxt} onMouseEnter={() => {
                                        console.log(e);
                                        handleImageChange(e.phone)
                                    }
                                    }

                                >
                                    <div className='frelancerinsiderlogo'><img className='imagelogofree' src={e.img} /></div>
                                    <div className='frelancerinsidertxt'>
                                        <h5>{e.Htxt}</h5>
                                        <p>{e.stxt}</p>
                                    </div>
                                </div>
                            )
                        })}

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default MarketplaceFreelancer;



