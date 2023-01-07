import React from "react";
import styles from "./EnterpriseWebSolutions.module.css";

export const EnterpriseWebSolutions = () => {
  return (
    <div className={styles.EnterpriseWebSolutionsContainer}>
      <h1>
        <span>Enterprise</span> Development Solutions
      </h1>
      <div className={styles.EnterpriseWebSolutionsHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <div className={styles.EnterpriseWebSolutionsMain}>
        <div className={styles.EnterpriseWebSolutionsCard}>
          <div>
            <img
              src="Images/enterpriseWebPhotos/ux-design.png"
              alt="UX Design Logo"
            />
          </div>
          <h2>
            Web <span>UI/UX</span> Development
          </h2>
          <p>
            Our web designer team enhances, shapes and enhances the customer
            experience by developing customer-centric, user-friendly and
            intuitive web interfaces that align with your business strategy and
            enterprise architecture.
          </p>
        </div>
        <div className={styles.EnterpriseWebSolutionsCard}>
          <div>
            <img
              src="Images/enterpriseWebPhotos/app-development.png"
              alt="Custom Web Development Logo"
            />
          </div>
          <h2>
            Custom <span>Web</span> Development
          </h2>
          <p>
            We help our clients create a better customer experience by providing
            highly scalable, secure and performant websites enhanced with
            cutting-edge features and functionality using the latest
            technologies and frameworks. so that we can provide
          </p>
        </div>
        <div className={styles.EnterpriseWebSolutionsCard}>
          <div>
            <img
              src="Images/enterpriseWebPhotos/saas.png"
              alt="SaaS Product Development Logo"
            />
          </div>
          <h2>
            <span>SaaS</span> Product Development
          </h2>
          <p>
            Get SaaS product development services designed for rapid turnaround,
            scalable custom software as a service. With a strong development
            portfolio, we provide custom SaaS development with various solutions
            such as SaaS CMS development, SaaS-based e-commerce solutions.
          </p>
        </div>
        <div className={styles.EnterpriseWebSolutionsCard}>
          <div>
            <img
              src="Images/enterpriseWebPhotos/e-payment.png"
              alt="eCommerce Development Logo"
            />
          </div>
          <h2>
            <span>eCommerce</span> Development
          </h2>
          <p>
            Leverage the strength of our responsive, customer-centric e-commerce
            website development services to launch a scalable, secure, and
            performant e-commerce store. Our products include custom e-commerce
            website designs.
          </p>
        </div>
        <div className={styles.EnterpriseWebSolutionsCard}>
          <div>
            <img
              src="Images/enterpriseWebPhotos/maintenance.png"
              alt="Support & Maintenance Logo"
            />
          </div>
          <h2>
            Support & <span>Maintenance</span>
          </h2>
          <p>
            To keep your web solution ready to go, our system development
            experts provide round-the-clock support to maintain optimal software
            performance. We will identify the problem as soon as it is reported
            and take prompt action to resolve it.
          </p>
        </div>
        <div className={styles.EnterpriseWebSolutionsRequestQuote}>
          <h1>Want the best solutions for your enterprise</h1>
          <button>Request A Quote</button>
        </div>
      </div>
    </div>
  );
};
