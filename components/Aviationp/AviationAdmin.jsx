import React from 'react'
import styles from "./AviationAdmin.module.css" 
import Image from 'next/image'

export default function AviationAdmin () {
  const aviationAdmindata = [
    {
        icon: "/Images/aviation/Newpage/checkmark.webp",
        headertext: "Live Chat-bot Assist",
        paragraph: "Customize this Ice Cream Delivery App however you see fit with our powerful online app builder. You don’t need any design or coding experience You don’t need any design or coding experience You don’t need any design or coding experience",
    },

    {
        icon: "/Images/aviation/Newpage/checkmark.webp",
        headertext: "Admin Panel Features",
        paragraph: "Ice cream is important to many people. They use it for more than eating and as a source of dessert. Many people like ice cream in cooking, like pancakes or cupcakes. Ice cream also provides a cooling sensation and can help digestion.",
    },

    {
        icon: "/Images/aviation/Newpage/checkmark.webp",
        headertext: "Flight Maps",
        paragraph: "Less time spent in the ordering process means better user experience. Let your app users pay easily using multiple payment options so as to improve their overall app experience.You don’t need any design or coding experience You don’t.",
    },

    {
        icon: "/Images/aviation/Newpage/checkmark.webp",
        headertext: "Price drop Alerts",
        paragraph: "Better pricing doesn’t always have to be dropping your prices instantly. It’s somehow psychological in nature. There’s a subtle art to make it appear that you’re offering a better price without sacrificing your bottom-line."
    },
]

  return (
    <div className={styles.aviationAdminMain}>

    <h2> Admin Panel </h2>

    <div className={styles.aviationAdminbox}>
        <div className={styles.aviationAdminrightbox}>
            {aviationAdmindata.map((e) => {
                return (
                    <div className={styles.aviationAdminindivisual}>
                        <div className={styles.aviationAdminindivisualicon}>
                            <Image src={e.icon}
                                alt={'image'}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>

                        <div className={styles.aviationAdminindivisualtext}>
                            <h1> {e.headertext} </h1>
                            <p> {e.paragraph} </p>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className={styles.aviationAdminleftbox}>
            <div className={styles.aviationAdminleftboxinsider}>
                <Image src={"/Images/aviation/Newpage/screens/Group 1000002417.webp"}
                    alt={'image'}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />
            </div>
        </div>
    </div>
</div>
);
}
