import Image from 'next/image';
import styles from "./MarketplaceFooter.module.css";

const Maketplacefooter = () => {
  return (
    <div>
      <div className={styles.marketplacefooterdiv}>
        <div className={styles.marketplacefooterdivfortext}>
          <h2>
            Why Choose Bottom Funnel As Your Sports Betting App Development Company?
          </h2>
        </div>

        <div className={styles.marketplacefooterdivspecial}>
          <Image className={styles.marketplacefootermaindivrightindex0}
            src={'/Images/Marketplaceapp/Bannersandbackgrounds/Group3399722.png'}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />

          <Image className={styles.marketplacemaindivrightindex2}
            src={'/Images/Marketplaceapp/Bannersandbackgrounds/Group3399722.png'}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />

          <div className={styles.marketplacefooterdivspecialimageflex}>
            <div className={styles.marketplacefooterinnerbox}>
              <div className={styles.marketplaceinnerboxdivfooter}>
                <Image className={styles.marketplacefooterinnerboximg}
                  src={'/Images/Marketplaceapp/icons/sett.png'}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "50%" }}
                />
                <h6 className={styles.smalltxtmarketplace}> Full Customization </h6>
              </div>
            </div>

            <div className={styles.marketplacefooterinnerbox}>
              <div className={styles.marketplaceinnerboxdivfooter}>
                <Image className={styles.marketplacefooterinnerboximg}
                  src={'/Images/Marketplaceapp/icons/sett2.png'}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />

                <h6 className={styles.smalltxtmarketplace}> Highly Scalable </h6>
              </div>
            </div>

            <div className={styles.marketplacefooterinnerbox}>
              <div className={styles.marketplaceinnerboxdivfooter}>
                <Image className={styles.marketplacefooterinnerboximg}
                  src={'/Images/Marketplaceapp/icons/sett3.png'}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
                <h6 className={styles.smalltxtmarketplace}> Dedicated Support </h6>
              </div>
            </div>

            <div className={styles.marketplacefooterinnerbox}>
              <div className={styles.marketplaceinnerboxdivfooter}>
                <Image className={styles.marketplacefooterinnerboximg}
                  src={'/Images/Marketplaceapp/icons/sett4.png'}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
                <h6 className={styles.smalltxtmarketplace}> Global Solution </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maketplacefooter;
