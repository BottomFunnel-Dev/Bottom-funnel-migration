import React from "react";
import styles from "./faqs.module.css";

export default function TextDropdown() {
  return (
    <div className={styles.faqSection}>
      <h2>FREQUENTLY ASKED QUESTIONS</h2>

      <div className={styles.questions}>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                How do you proceed with a new project or service inquiry?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                We'll request you to answer a few questions after you express
                interest in collaborating with our firm to help us understand
                your company goals, budget, and project needs more clearly. We
                start by having an introductory call to get to know each other
                and discuss the work that was done and where we are going. Then,
                we have an onboarding call to set up the strategy for the
                project. After that, we start working on the project and plan
                out what will happen. We do communication calls throughout the
                project to make sure that the project is going in the right way.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Do you offer different pricing models for different services?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Yes, we believe that every business, no matter how small or
                large, should be able to have easy access to quality IT
                services, which is why we offer a variety of plans for every
                budget. Not only that, our pricing model includes flat rates,
                monthly payments, and payment plans that allow you to spread out
                your costs over time. So, whether you're looking for an
                affordable plan with minimal restrictions or more comprehensive
                coverage at an increased price tag, we have everything sorted
                for you! We offer different pricing models according to your
                investment plans. Please check our website to learn more about
                the pricing models that we offer.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                What type of custom software development services do you
                deliver?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                We offer a wide range of custom software development services
                that are perfect for businesses of all sizes. We specialize in
                creating innovative and user-friendly solutions that meet the
                needs of our clients. The services provided under CSD includes:
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
