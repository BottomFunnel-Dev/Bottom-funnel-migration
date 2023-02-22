import React from "react";
import styles from "./CustomisedWebServices.module.css";
import Image from "next/image";

export default function CustomisedWebServices() {
  return (
    <div className={styles.CustomisedWebServicesContainer}>
      <div className={styles.CustomisedWebServicesHeading}>
        <h1>
          Custom <span>web development</span> services
        </h1>
        <div className={styles.CustomisedWebServicesHrLine}>
          <span></span>
          <div></div>
          <span></span>
        </div>
      </div>
      <div className={styles.CustomisedWebServicesMain}>
        <div className={styles.CustomisedWebServicesFrontend}>
          <div className={styles.CustomisedWebServicesFrontendContent}>
            <h2>Front End Development</h2>
            <p>
              Evolve Web Development is the go-to company for all things web. We
              have years of experience and expertise, and we're ready to help
              you turn your idea into a reality. From front-end designs to
              back-end technologies, our team has everything it takes to create
              a functional solution that will stand the test of time. We believe
              in working as a team, so we'll be there every step of the way from
              brainstorming ideas to creating a functional solution that will
              last.
            </p>
          </div>
          <div className={styles.CustomisedWebServicesFrontendImage}>
            <Image
              src={"/Images/customWebPhotos/desktop-man.webp"}
              alt={"image"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div className={styles.CustomisedWebServicesBackend}>
          <div className={styles.CustomisedWebServicesBackendImage}>
            <Image
              src={"/Images/customWebPhotos/laptop-man.webp"}
              alt={"image"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className={styles.CustomisedWebServicesBackendContent}>
            <h2>Front End Development</h2>
            <p>
              Bottom Funnel is the go-to company for web programming for small
              businesses and individuals. We understand that your website is
              your business's most important asset, so it's crucial that we
              provide a top-quality service that will help you achieve your
              goals. With our team of experienced developers, we can work
              quickly to bring your ideas to life, so you can get back to what
              really matters - running your business! This customization allows
              you to integrate your in-house data systems, keep your data in
              sync and add dynamic content and flexibility. They make sure that
              your data stays in sync, and makes your website easy to update.
              Why don't you upgrade your backend code with a bottom funnel?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
