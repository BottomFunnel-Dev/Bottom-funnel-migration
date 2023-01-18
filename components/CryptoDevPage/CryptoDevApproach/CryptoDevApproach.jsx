import React from "react";
import styles from "./CryptoDevApproach.module.css";
import { CryptoDevApproachDottedline } from "./CryptoDevApproachDottedline/CryptoDevApproachDottedline";

export const CryptoDevApproach = () => {
  return (
    <div className={styles.CryptoDevApproachContainer}>
      <h1>Our Crypto Development Approach</h1>
      <div className={styles.CryptoDevApproachHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        You have heard about the advantages of using cryptocurrencies in your
        business, but you do not know how to go about it. You are also aware of
        the need for skilled developers who are experienced in this field and
        know what they are talking about when they talk about blockchain. Only
        then, you will be able to make that switch from traditional banking and
        trust a software development company like ours. We have experts who can
        understand your needs, work on strategies that will help your business
        reach its full potential, and deliver good results in no time.
      </p>
      <div className={styles.CryptoDevApproachMain}>
        <div className={styles.CryptoDevApproachMainUpper}>
          <div className={styles.CryptoDevApproachUppercards}>
            <div>
              <img
                src="Images/CryptoDevPhotos/paper-plane.png"
                alt="Concept Quotation"
              />
            </div>
            <h2>Concept Quotation</h2>
            <p>Discuss project ideas, business needs and design concepts</p>
            <h3>1</h3>
          </div>
          <div className={styles.CryptoDevApproachUppercards}>
            <div>
              <img
                src="Images/CryptoDevPhotos/document.png"
                alt="Concept Quotation"
              />
            </div>
            <h2>White Paper Creation</h2>
            <p>
              Present a clear document with all specific requirements and viable
              solutions
            </p>
            <h3>2</h3>
          </div>
          <div className={styles.CryptoDevApproachUppercards}>
            <div>
              <img
                src="Images/CryptoDevPhotos/technical-drawing.png"
                alt="Concept Quotation"
              />
            </div>
            <h2>Technical Design</h2>
            <p>
              Technical infrastructure design, includes data flow, is based on a
              written white paper.
            </p>
            <h3>3</h3>
          </div>
          <div className={styles.CryptoDevApproachUppercards}>
            <div>
              <img
                src="Images/CryptoDevPhotos/knowledge.png"
                alt="Concept Quotation"
              />
            </div>
            <h2>PoC Creation</h2>
            <p>
              A customized UI/UX layout is designed and the interface design is
              reviewed.
            </p>
            <h3>4</h3>
          </div>
        </div>
        <CryptoDevApproachDottedline />
        <div className={styles.CryptoDevApproachMainLower}>
          <div className={styles.CryptoDevApproachLowercards}>
            <h3>7</h3>
            <p>
              We also offer application and software upgrade services after
              product delivery.
            </p>
            <h2>Upgrades</h2>
            <div>
              <img
                src="Images/CryptoDevPhotos/system-update.png"
                alt="Concept Quotation"
              />
            </div>
          </div>
          <div className={styles.CryptoDevApproachLowercards}>
            <h3>6</h3>
            <p>
              The final product will be available after successful internal
              audits and tests.
            </p>
            <h2>Testing and Deployment</h2>
            <div>
              <img
                src="Images/CryptoDevPhotos/test.png"
                alt="Concept Quotation"
              />
            </div>
          </div>
          <div className={styles.CryptoDevApproachLowercards}>
            <h3>5</h3>
            <p>
              Smart contracts, source code and other infrastructure are
              developed according to blueprints.
            </p>
            <h2>Development</h2>
            <div>
              <img
                src="Images/CryptoDevPhotos/coding.png"
                alt="Concept Quotation"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
