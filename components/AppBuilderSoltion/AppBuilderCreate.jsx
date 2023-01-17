import React from 'react'
import styles from "./AppBuilderCreate.module.css"

export const AppBuilderCreate = () => {

    const cppbuildercreatedata = [
        {
            htxt: "Brand Your mobile app",
            stxt: "make your app truly stand out from the crowd.Branding features include everthing from icons and image to persinalized layouts.Import your logo,design company banners, create custom images and more to make you app just how you envision it.",
        },

        {
            htxt: "Pick a template for your mobile app",
            stxt: "No Need to start coding from scratch when using Shoutem.Our Immense library has something for everyone.With Customizable templates and easy to navigate UI designing your unique app will be a breeze.No prior code knowledge is needed ! ",
        },

        {
            htxt: "Publish your app to app stores",
            stxt: "After you finish your app.publishing it is easy with shoutem.you can add your app to the Google play store or Apple store within just a few clicks. within moments your app will be viewable to thousands of potential customers.",
        },
    ]

    return (
        <div className={styles.appbuildercreatemainboxes}>
            <div className={styles.appbuildercreateleftbox}>
                <h1>
                    Create Your Mobile App in 4 Steps
                </h1>

                <p>
                    Our online app builder allows your to build mobile apps without coding ! follow these steps to make native
                    mobile apps.
                </p>

                <div className={styles.appbuildercreatedatamapper}>
                    {cppbuildercreatedata.map((e) => {
                        return (
                            <div className={styles.appbuildercreatedatawiseinduvisully}>
                                <h4>{e.htxt}</h4>
                                <p>
                                    <small>{e.stxt}</small>
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className={styles.appbuildercreaterightbox}>
                <img src='/Images/Appbuildersolutions/Bannersbackgrounds/Group 340139.png' alt='mobile' />
            </div>
        </div>
    );
};

