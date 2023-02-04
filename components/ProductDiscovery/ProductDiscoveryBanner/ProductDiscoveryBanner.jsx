import React from 'react'
import styles from "./ProductDiscoveryBanner.module.css";

export const ProductDiscoveryBanner = () => {
  return (
    <div>
        <div className={styles.ProductDiscoveryBannermaindiv}>
          <div className={styles.ProductDiscoveryBannercontain} >
            <h1><span>Product Design</span> Sprint</h1>
            <p>Product design sprint is to evaluate and prioritize the core features of your product. Sprint is a time boxed exercise,
               where we'll act quickly to explore how to create a better user experience for your product.</p>
               <div>
                <button className={styles.ProductDiscoveryBannerbutton}>Get Started</button>
               </div>

          </div>
          <div className={styles.ProductDiscoveryBannerimage}>
            <img src="/Images/Productdiscoveryphotos/productbannerg.png" alt="Bannerimage "  />
          </div>
            
        </div>
    </div>
  )
}
