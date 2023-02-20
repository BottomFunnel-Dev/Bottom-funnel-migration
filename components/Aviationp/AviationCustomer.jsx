import React from 'react'
import styles from "./AviationCustomer.module.css" 
import Image from 'next/image'

export default function AviationCustomer () {
  const aviationCustomerdata = [
    {
        icon: "/Images/aviation/Newpage/checkmark.webp",
        headertext: "Search/Book/track Flights",
        paragraph: "Customize this Ice Cream Delivery App however you see fit with our powerful online app builder. You don’t need any design or coding experience You don’t need any design or coding experience You don’t need any design or coding experience",
    },

    {
        icon: "/Images/aviation/Newpage/checkmark.webp",
        headertext: "Navigation",
        paragraph: "Ice cream is important to many people. They use it for more than eating and as a source of dessert. Many people like ice cream in cooking, like pancakes or cupcakes. Ice cream also provides a cooling sensation and can help digestion.",
    },

    {
        icon: "/Images/aviation/Newpage/checkmark.webp",
        headertext: "Push Notification",
        paragraph: "Less time spent in the ordering process means better user experience. Let your app users pay easily using multiple payment options so as to improve their overall app experience.You don’t need any design or coding experience You don’t.",
    },

    {
        icon: "/Images/aviation/Newpage/checkmark.webp",
        headertext: "Feedback & Ratings",
        paragraph: "Better pricing doesn’t always have to be dropping your prices instantly. It’s somehow psychological in nature. There’s a subtle art to make it appear that you’re offering a better price without sacrificing your bottom-line."
    },
]

  return (
    <div className={styles.aviationCustomerMain}>

    <h2> Customer App </h2>
    <div className={styles.aviationCustomerbox}>
        <div className={styles.aviationCustomerleftbox}>
            <div className={styles.aviationCustomerleftboxinsider}>
                <Image src={"/Images/aviation/Newpage/screens/Default model.webp"}
                    alt={'image'}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />
            </div>
        </div>

        <div className={styles.aviationCustomerrightbox}>
            {aviationCustomerdata.map((e) => {
                return (
                    <div className={styles.aviationCustomerindivisual}>
                        <div className={styles.aviationCustomerindivisualicon}>
                            <Image src={e.icon}
                                alt={'image'}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>

                        <div className={styles.aviationCustomerindivisualtext}>
                            <h4> {e.headertext} </h4>
                            <p> {e.paragraph} </p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
</div>
);
}
