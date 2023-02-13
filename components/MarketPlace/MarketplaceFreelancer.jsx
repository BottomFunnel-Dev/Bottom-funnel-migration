
import Image from 'next/image';
import React, { useState } from 'react';
import styles from "./MarketplaceFreelancer.module.css";

const MarketplaceFreelancer = () => {

    const [imageChange, setImageChange] = useState("/Images/Marketplaceapp/Freelancerappcreen/Register.png")

    const freelancerData = [
        {
            img: "/Images/Marketplaceapp/icons/Group339964.png",
            Htxt: "Register Yourself",
            stxt: " Register yourself and start Approaching clients.This will allow you to create your profile ",
            phone: "/Images/Marketplaceapp/Freelancerappcreen/Register.png"
        }, {
            img: "/Images/Marketplaceapp/icons/Component44.png",
            Htxt: "In App Chat",
            stxt: "This is an in-app chat platform that helps you communicate effectively with your clients. ",
            phone: "/Images/Marketplaceapp/Freelancerappcreen/inappchat.png"
        }, {
            img: "/Images/Marketplaceapp/icons/Group339974.png",
            Htxt: "Find Popular Jobs",
            stxt: "Such as a built in system for tracking, email notifications for job applications and more. ",
            phone: "/Images/Marketplaceapp/Freelancerappcreen/FindPopularjobs.png"
        }, {
            img: "/Images/Marketplaceapp/icons/Group339973.png",
            Htxt: "Easy Apply",
            stxt: "If you are an employer that needs a freelancer, here is the best service for you ",
            phone: "/Images/Marketplaceapp/Freelancerappcreen/Easyapply.png"
        }

    ]

    const handleImageChange = (imagepath) => {
        setImageChange(() => imagepath)
    }

    return (
        <div className={styles.marketplacefreelancermainbox}>
            <div className={styles.freelancerboxflexingmain}>
                <div className={styles.freelancermarketboxleftflexing}>

                    <div className={styles.freelancerimagebox1}>
                        <Image className={styles.imagefreelance1}
                            src={"/Images/Marketplaceapp/Bannersandbackgrounds/Component42.png"}
                            alt={"image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                        {/* <img className={styles.imagefreelance1} src="/Images/Marketplaceapp/Bannersandbackgrounds/Component42.png" alt='image1' /> */}
                    </div>

                    <div className={styles.freelancerimagebox2}>
                        <Image className={styles.imagefreelance1}
                            src={imageChange}
                            alt={'image2'}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>

                    <div className={styles.freelancerimagebox3}>
                        <img className={styles.imagefreelance1} src='/Images/Marketplaceapp/Bannersandbackgrounds/picture.png' alt='image2' />
                    </div>

                </div>

                <div className={styles.freelancermarketboxrightflexing}>
                    <div className={styles.freelancertextboxrightdiv}>
                        <h2> Freelancer Website & App </h2>
                        <h6>
                            Our Freelancer Marketplace (community) was designed to bring together freelancers and businesses
                            for a better way to connect
                        </h6>
                    </div>

                    <div className={styles.freelancerboxforspecialimagedotted}>
                        <div className={styles.dottedimage1}>
                            <Image className={styles.specialimg}
                                src={'/Images/Marketplaceapp/Bannersandbackgrounds/Group3399722.png'}
                                alt={'rightflexboximageindex0'}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>

                        <div className={styles.dottedimage2}>
                            <Image className={styles.specialimg}
                                src={'/Images/Marketplaceapp/Bannersandbackgrounds/Group3399722.png'}
                                alt={'rightflexboximageindex0'}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>

                        <div className={styles.afterdottedinnerflecboxfreelancer}>
                            {freelancerData.map((e) => {
                                return (
                                    <div className={styles.flexboxdivfreelancer}
                                        key={e.Htxt} onMouseEnter={() => {
                                            // console.log(e);
                                            handleImageChange(e.phone)
                                        }
                                        }
                                    >
                                        <div className={styles.frelancerinsiderlogo}>
                                            <Image className={styles.imagelogofree}
                                                src={e.img}
                                                alt={"image"}
                                                width={"0"}
                                                height={"0"}
                                                sizes={"100vw"}
                                                style={{ width: "100%", height: "100%" }}
                                            />
                                        </div>

                                        <div className={styles.frelancerinsidertxt}>
                                            <h5> {e.Htxt} </h5>
                                            <p> {e.stxt} </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketplaceFreelancer;



