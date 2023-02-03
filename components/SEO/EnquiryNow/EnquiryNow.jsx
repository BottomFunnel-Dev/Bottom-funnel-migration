import React from "react";
import styles from "./EnquiryNow.module.css";
// import Enq from "../images/EnquiryNow.jpg";
// import Enq from "../../ImageSection/EnquiryNow.jpg";

export default function EnquiryNow() {
  return (
    <div className={styles._EnquiryNowMaindiv}>
      <div className={styles._EnquiryNow}>
        <img src="/Images/seopages/seoenquery.png" alt="enq.img" />
        {/* <img src={Enq} alt="enq.img" /> */}
      </div>
      <div className={styles._EnquiryNow}>
        <h3>
          We help your business to be discovered by the people and not just
          spiders
        </h3>
        <p>
        With our SEO services, you can rest assured that we will be targeting the biggest keywords in your industry, ensuring that yours ranks high in search results. We are an expert team with years of experience and know-how, which ensures that we deliver results quickly and efficiently. Our freelancers are well-versed in all aspects of SEO and know how to implement strategies that work best for each specific site. With our services, you can be sure to gain more visibility online and increase customer conversion rates!
        </p>
       <button>Enquiry Now</button>
      </div>
    </div>
  );
}
