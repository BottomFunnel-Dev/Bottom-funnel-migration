import React from "react";
import career from "./CareerReferral.module.css";

export const CareerReferral = () => {
  return (
    <div className={career.careerReferralContainer}>
      <h1>
        We Appreciate <span>Referrals</span>
      </h1>
      <p>
        We encourage references from our existing team members. If you know
        someone, request them to refer you, it would increase you chances of
        getting shortlisted for the interview (if the profile matches our
        present vacancies.)
      </p>

      <div>
        <div>
          <h2>What you need</h2>
          <ul>
            <li>Updated CV</li>
            <li>Current Salary / Package (where applicable)</li>
            <li>Expected Salary / Package</li>
            <li>Years of experience</li>
            <li>Notice preiod</li>
          </ul>
        </div>

        <span></span>

        <div>
          <h2>Re-apply</h2>
          <ul>
            <li>Reappear after 3 / 6 months, with an updated CV.</li>
            <li>
              This will add the recently acquired skills and experience, which
              may match up with any present vacanies. On top of it, vacancies
              keep on opening and would ensure your CV is at the top.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
