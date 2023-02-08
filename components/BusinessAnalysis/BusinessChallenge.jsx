import React from "react";
import styles from "./BusinessChallenge.module.css";

export const BusinessChallenge = () => {
  return (
    <div className={styles.businesschallengemainbox}>
      <div className={styles.businesschallengeonlytextbox}>
        <h1>
          <a className={styles.specialcolor}>Tackle</a> big challenge through
          strategic planning and in-depth analysis
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis dui
          non augue rutrum, eu fringilla ante ultrices. Praesent id est
          porttitor purus hendrerit maximus vitae vel felis. Nulla eget molestie
          dui, ut consectetur felis. Aenean cursus mollis metus, ac varius augue
          commodo et. Nullam tempus ac lorem at tincidunt. Fusce non risus nec
          purus sollicitudin lobortis sed vel enim. Lorem ipsum dolor sit Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis dui non
          augue rutrum, eu fringilla ante ultrices. Praesent id est porttitor
          purus hendrerit maximus vitae vel felis. Nulla eget molestie dui, ut
          consectetur felis. Aenean cursus mollis metus, ac varius augue commodo
          et. Nullam tempus ac lorem at tincidunt. Fusce non risus nec purus
          sollicitudin lobortis sed vel enim. Lorem ipsum dolor sit Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Ut mollis dui non augue
          rutrum, eu fringilla ante ultrices. Praesent id est porttitor purus
          hendrerit maximus vitae vel felis. Nulla eget molestie dui, ut
          consectetur felis. Aenean cursus mollis metus, ac varius augue commodo
          et. Nullam tempus ac lorem at tincidunt. Fusce non risus nec purus
          sollicitudin lobortis sed vel enim. Lorem ipsum dolor sit
        </p>
      </div>

      <div className={styles.businessanalysisbackgroundimageboxwithitsconnt}>
        <div className={styles.businessanalysistxtboxinnerbackgroundimage}>
          <h1>The pivote role of a Business Analyst</h1>
        </div>
        <div
          className={
            styles.businessanalysistxtboxinnerbackgroundimageforparagraph
          }
        >
          <ul>
            <li>Align expectations value.</li>
            <li>Define the metrics for sucess.</li>
            <li>
              Work closely with the allocated stakeholders to turn their
              requirements into a viable products.
            </li>
            <li>
              work alongside the development and design team to filterout any
              unseen gaps.
            </li>
            <li>
              Process models and specification to provide direction to the
              cross-functional team
            </li>
            <li>
              Outline project delivery along with potential cost estimates
            </li>
            <li>
              flesh out a tactical roadmap and timeline to accelerate action
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
