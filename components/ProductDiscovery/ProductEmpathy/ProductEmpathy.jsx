import React from 'react'
import styles from "./ProductEmpathy.module.css";

export const ProductEmpathy = () => {
  return (
    <div className={styles.ProductEmpathymaindiv}>
        <div className={styles.ProductEmpathycontaindiv}>
        <div className={styles.ProductEmpathyheading} >
        <h2>Empathy</h2>
        </div>
        <div  className={styles.ProductEmpathyheadingcontain}>
            <p>Empathy is the ability to understand, share and recognize the feelings of another person. Empathy is important to our personal relationships as well as our professional relationship when working with clients and co-workers in a team environment. Empathy is crucial in helping us build trust with other people, which leads to greater success in business.</p>
        </div>
        <div className={styles.ProductEmpathyheading} >
        <h2>Originality</h2>
        </div>
        <div className={styles.ProductEmpathyheadingcontain}>
            <p>Originality is a unique, powerful way to express your brand by making it stand out from the crowd. It’s about telling your story in an authentic and meaningful way: through your product and its design, content and communication strategy, global positioning and marketing campaigns, corporate culture, customer experience charm, etc.</p>
        </div>
        <div className={styles.ProductEmpathyheading} >
        <h2>Rationality</h2>
        </div>
        <div className={styles.ProductEmpathyheadingcontain}>
            <p>Rationality is the ability to reason and make decisions utilizing information of past experiences and interpreting that data logically. Rationality is used in making reasoned decisions and can be instrumental in making the right choice.</p>
        
        </div>
       
        <div className={styles.ProductEmpathyheadingcontain2}>
        <hr/>
            <p>Pilot studyis the ability to understand and share someone else's 
                emotions or experience. Empathetic is the trait of being able to feel this way.</p>
        </div>
        

        </div>
        <div className={styles.ProductEmpathyimage}>
            <img src="/Images/Productdiscoveryphotos/pd2image.png" alt="image" />
        </div>
        

    </div>
  )
}
