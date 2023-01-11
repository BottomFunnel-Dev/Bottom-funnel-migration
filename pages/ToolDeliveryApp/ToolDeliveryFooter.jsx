import React from "react";
import styles from "./ToolDeliveryFooter.module.css";

const ToolDeliveryFooter = () => {
  const footerdata = [
    {
      logo: "/Images/tooldeliveryapp/Customizable solution.png",
      stxt: "Tool has partnered with brands to grow faster, create better experiences for users, and have a bigger reach.",
      htxt: "A Fully Customizable Solution",
    },
    {
      logo: "/Images/tooldeliveryapp/Highly scalable.png",
      stxt: "The solution is based on new technology and has been extensively tested to handle large tooling orders.",
      htxt: "Highly Scalable",
    },
    {
      logo: "/Images/tooldeliveryapp/Global solution.png",
      stxt: "It comes with multi-language and multi-currency support so you can deploy our solution globally.",
      htxt: "Global Solution",
    },
    {
      logo: "/Images/tooldeliveryapp/Dedicated support.png",
      stxt: "Guaranteed to maximize your ROI with a tool delivery service app with full support and maintenance.",
      htxt: "Dedicated Support",
    },
  ];

  return (
    <div>
      <h2>
        <h2
          style={{
            marginTop: "3%",
            marginLeft: "40%",
          }}
        >
          Why Choose Bottom Funnel?
        </h2>
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
                <img className={styles.toollogoimg} src={e.logo} alt="imagelogo" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToolDeliveryFooter;
