import Image from "next/image";
import React from "react";
import styles from "./ToolDeliveryFooter.module.css";

const ToolDeliveryFooter = () => {
  const footerdata = [  
    {
      logo: "/Images/tooldeliveryapp/Customizable solution.webp",
      stxt: "Tool has partnered with brands to grow faster, create better experiences for users, and have a bigger reach.",
      htxt: "A Fully Customizable Solution",
    },
    {
      logo: "/Images/tooldeliveryapp/Highly scalable.webp",
      stxt: "The solution is based on new technology and has been extensively tested to handle large tooling orders.",
      htxt: "Highly Scalable",
    },
    {
      logo: "/Images/tooldeliveryapp/Global solution.webp",
      stxt: "It comes with multi-language and multi-currency support so you can deploy our solution globally.",
      htxt: "Global Solution",
    },
    {
      logo: "/Images/tooldeliveryapp/Dedicated support.webp",
      stxt: "Guaranteed to maximize your ROI with a tool delivery service app with full support and maintenance.",
      htxt: "Dedicated Support",
    },
  ];

  return (
    <div>
        <h2
          style={{
            marginTop: "3%",
            marginLeft: "40%",
          }}
        >
          Why Choose Bottom Funnel?
        </h2>
      
      <div className={styles.tooldeliveryfooterapp}>
        {footerdata.map((e) => {
          return (
            <div className={styles.tooldeliveryfooterbox}>
              <div className={styles.tooldeliverytextmapping}>
                <h4>{e.htxt}</h4>
                <p>{e.stxt}</p>
              </div>

              <div className={styles.tooldeliveryfooterboxlogo}>
                <Image className={styles.toollogoimg}
                  src={e.logo} alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToolDeliveryFooter;
