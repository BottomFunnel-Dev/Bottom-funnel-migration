import React from "react";
import styles from "./HelpWidget.module.css";

export const HelpWidget = () => {
  const helpwidgetdata = [
    {
      image: "/Images/helpdesk/Component 63.png",
      htxt: "Easy for customers to approach",
      stxt: "Embed a form on your website or inside your product that allows customers to ask questions.",
    },
    {
      image: "/Images/helpdesk/Component 64.png",
      htxt: "Deliver contextual support",
      stxt: "Show helpful solutions based on where your customers are on your website.",
    },
    {
      image: "/Images/helpdesk/Social.png",
      htxt: "Know when customers are irritated",
      stxt: "Detect when your customers are rage clicking ir frustrated.Proactively reach out to them and offer help.",
    },
    {
      image: "/Images/helpdesk/Social-1.png",
      htxt: "Make it yours",
      stxt: "Make the widget reflect your brand by customizing how it looks like on your website.",
    },
  ];

  return (
    <div className={styles.helpwidgetmainboxes}>
      <div className={styles.helpwidgetbannerbox}>
        <h4>Help Widget</h4>
      </div>
      <div className={styles.helpwidgetbannersometextafterbanner}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          volutpat ligula accumsan justo iaculis vehicula. Phasellus tincidunt
          nec lacus vel suscipit. Nulla facilisi. In interdum velit lorem, vitae
          varius quam interdum ut. Pellentesque convallis fringilla nulla, at
          laoreet felis ultrices in. Suspendisse in molestie mauris. Nam leo
          risus, ullamcorper nec molestie at, sagittis sed metus. Praesent
          laoreet ac nisi nec pulvinar. Sed turpis ligula, congue ac enim quis,
          hendrerit mollis enim. Vestibulum sed sagittis metus.
        </p>
      </div>
      <div className={styles.helpwidgetdatamappingbeforebox}>
        <h2>A fully customizable widget to support your customers</h2>
        <p>
          Our Help Widget helps you to always keep a good connect and response
          with your customer
        </p>

        <div className={styles.helpwidgetmappingdataafterbox}>
          {helpwidgetdata.map((e) => {
            return (
              <div
                key={e.htxt}
                className={styles.helpwidgetmaperboxindivisually}
              >
                <div className={styles.helpwidgetmaperboxindivisuallyimage}>
                  <img src={e.image} alt={e.htxt} />
                </div>
                <div className={styles.helpwidgetmaperboxindivisuallytxt}>
                  <h4>{e.htxt}</h4>
                  <p>{e.stxt}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.helpwidgetsipportdeskbox}>
        <div className={styles.helpwidgetsipportdeskboxleft}>
          <h2>Get the complete Supportdesk feature list</h2>
          <p>
            The complete feature list include all deatures available in
            supportdesk,a brif description of each feature and its plan
            information.
          </p>
        </div>
        <div className={styles.helpwidgetsipportdeskboxright}>
          <img src="/Images/helpdesk/Frame.png" alt="helpdesk/Frame.png" />
        </div>
      </div>
    </div>
  );
};
