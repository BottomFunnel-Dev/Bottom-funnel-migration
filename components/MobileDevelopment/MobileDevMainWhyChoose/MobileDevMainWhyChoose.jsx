
import styles from "./MobileDevMainWhyChoose.module.css";

export const MobileDevMainWhyChoose = () => {
   

  return (
      <>
        <div className={styles.mobileDevMainWhyChooseOuterDiv}>
            <div className={styles.mobileDevMainWhyChooseHeading}>
                <h1>Why Choose Bottom Funnel as Your Mobile Application Development Company</h1>
                <p>Bottom Funnel is a mobile application development company that provides high-quality, 
                innovative mobile apps for businesses of all sizes. We have a team of experienced app 
                developers who are passionate about creating amazing user experiences. Our apps are designed 
                to help businesses increase sales, improve customer engagement, and streamline operations.
                 We offer a free consultation to discuss your needs and determine how we can help you achieve
                  your goals. Contact us today to learn more about our services and get started on your
                   next project!
                </p>
            </div>
            <div className={styles.mobileDevMainWhyChooseImageContainer}>
                <img className={styles.mobileDevMainWhyChooseImage} src="Images/MobileDevMain/bottom.png" alt="image"/>
                <h3 className={styles.mobileDevMainWhyChooseheading1}>Cost Saving</h3>
                
                <h3 className={styles.mobileDevMainWhyChooseheading2}>Hire Experts</h3>
                
                <h3 className={styles.mobileDevMainWhyChooseheading3}>Tech Consultancy</h3>
                
                <h3 className={styles.mobileDevMainWhyChooseheading4}>Culture Fitment</h3>
                
                <h3 className={styles.mobileDevMainWhyChooseheading5}>Diligent Kotlin Developrs</h3>
               
                <h3 className={styles.mobileDevMainWhyChooseheading6}>Accountable Developers</h3>
                
            </div>
        </div>
      </>
  );
};
