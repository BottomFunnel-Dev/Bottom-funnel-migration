import Image from 'next/image';
import React from 'react';
import styles from "./MarketplaceBorder.module.css";

const Marketplaceborder = () => {
  return (
    <div className={styles.marketplacemainborderdiv}>

      <div className={styles.marketplacebordermobilediv}>

        <Image className={styles.bannerimagemobileinnerdiv}
          src={'/Images/Marketplaceapp/Bannersandbackgrounds/Group339972.webp'}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />

        <div className={styles.bordertextinnerdivmarketplace}>

          <h3>
            Have a Unique & Exceptional Idea For Fiverr Clone App?
          </h3>

          <h2>
            We Can Turn Your Vision into an Interactive & fully Functional app like fiverr
          </h2>

          <button className={styles.marketplacebutton}> Get Started </button>
        </div>
      </div>
    </div>
  );
};

export default Marketplaceborder
