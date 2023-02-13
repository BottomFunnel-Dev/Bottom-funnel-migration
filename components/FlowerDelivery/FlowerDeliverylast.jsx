import Image from 'next/image';
import React from 'react';
import styles from "./FlowerDeliverylast.module.css";

const FlowerDeliverylast = () => {
  return (
    <div className={styles.flowerdeliverylastdivstart}>

      <div className={styles.flowerdeliverydisplayflex}>
        <div className={styles.insiderdivflexboxleft}>
          <h5> A Fully Customizable Solution </h5>
          <p>
            <small>Our solution is completely branded and customizable with advanced features, integrations, and enhancements.</small>
          </p>
        </div>

        <div className={styles.insiderdivflexboxright}>
          <Image src={'/Images/Flowerdeliverypage/209449992.png'}
            alt={'image1'}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      <div className={styles.flowerdeliverydisplayflex}>
        <div className={styles.insiderdivflexboxleft}>
          <h5> Highly Scalable </h5>
          <p>
            <small>The solution is built using emerging technologies and is fully tested to handle the high volume of food orders.</small>
          </p>

        </div>
        <div className={styles.insiderdivflexboxright}>
          <Image src={'/Images/Flowerdeliverypage/43807472.png'}
            alt={'image2'}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      <div className={styles.flowerdeliverydisplayflex}>
        <div className={styles.insiderdivflexboxleft}>
          <h5> Global Solution </h5>
          <p>
            <small> You can launch our solution globally as it comes with multi-language and currency support. </small>
          </p>
        </div>

        <div className={styles.insiderdivflexboxright}>
          <Image src={'/Images/Flowerdeliverypage/group767.png'}
            alt={'image3'}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      <div className={styles.flowerdeliverydisplayflex}>
        <div className={styles.insiderdivflexboxleft}>
          <h5> Dedicated Support </h5>
          <p>
            <small>We guarantee that you will get maximum ROI with full support & maintenance with our Food Delivery service app.</small>
          </p>
        </div>

        <div className={styles.insiderdivflexboxright}>
          <Image src={'/Images/Flowerdeliverypage/hajan.png'}
            alt={'image3'}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default FlowerDeliverylast;
