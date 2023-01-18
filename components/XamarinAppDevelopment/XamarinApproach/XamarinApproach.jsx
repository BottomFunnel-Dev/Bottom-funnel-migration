import React from "react";
import styles from "./XamarinApproach.module.css";

export const XamarinApproach = () => {

  return (
    <>
      <div className={styles.xamarinApproachMainDiv}>
        <div className={styles.xamarinApproachHeadingDiv}>
          <h1 className={styles.xamarinApproachHeadingDivText}>Our Xamarin Developer Approach</h1>
          <p className={styles.xamarinApproachContentText}>Top-Class Experience for Mobile and Wearable Device</p>
          {/* <p className="xamarinApproachContentText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ullam iste sint! Sint, voluptas consectetur at saepe quod consequuntur modi, necessitatibus vitae nisi quidem esse debitis distinctio odit facere labore?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id rem, dolores doloremque, perferendis facilis, sequi quod nesciunt explicabo vitae exercitationem illo dolore! Similique impedit deleniti, harum consectetur doloremque eius iure.
                </p> */}
        </div>
        <div className={styles.xamarinApproachContentDiv}>
          <img className={styles.xamarinApproachImage} src="/Images/Xamarin/Group bg.png" alt="image" />
          <h2 className={styles.xamarinNativeUser}>Native User Interface</h2>
          <p className={styles.xamarinNativeUserText}>
            Using native UI for the branding and designing of the app made sense as it adds to the user experience and gives them a better feel of quality. We incorporated all this into our xamarin application development services.
          </p>
          <h2 className={styles.xamarinIntegration}>Better User Experience</h2>
          <p className={styles.xamarinIntegrationText}>
            When you opt for a cross-platform app development solution like Xamarin, your users will enjoy an enhanced user experience thanks to its highly responsive features.
          </p>
          <h2 className={styles.xamarinCompiled}>Fast Delivery</h2>
          <p className={styles.xamarinCompiledText}>
            Xamarin development companies ensure your project moves fast without breaking things. It can prioritize speed over everything else and build high-quality solutions for the clients at breakneck speeds.
          </p>
          <h2 className={styles.xamarinComponent}>Mature Support</h2>
          <p className={styles.xamarinComponentText}>
            You can count on high-quality documentation and support from Microsoft’s worldwide network of engineers and developers. If you choose a different framework, you might find yourself wishing it had more advanced features
          </p>
          <h2 className={styles.xamarinLogic}>High Security</h2>
          <p className={styles.xamarinLogicText}>
            One of Xamarin’s primary functions is to provide secure mobile app development. All apps created through their software are encrypted on a highly-secured server, making it very difficult for anyone other than users to access them.
          </p>
          <h2 className={styles.xamarinPerformance}>Monitoring Performance</h2>
          <p className={styles.xamarinPerformanceText}>
            Comprehensive performance monitoring solution so that you can easily track the health of your application. Install it on your website, mobile app or desktop application and get real-time insights about its performance.
          </p>
        </div>
      </div>
    </>
  );
};
