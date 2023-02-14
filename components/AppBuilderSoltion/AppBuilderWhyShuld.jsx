import React from "react";
import styles from "./AppBuilderWhyShuld.module.css";

export default function AppBuilderWhyShuld() {
  const whyshoulddata = [
    {
      htxt: "Efficient Use of Internal Resources",
      stxt: "Using external resources and agencies for developing enterprise-grade application can burn a hole in your pocket. Moreover,it would be a challenging exercise,as it requires constant back-and-forth on every minute aspect,which makes it limiting and restrictive.At the same time,you would hardly ever be able to access the application backend.",
    },

    {
      htxt: "Easier to Change and Customize",
      stxt: "with no-code application development, users can enjoy a plethora of customization features that allow them to modify their applications based on their evolving requirements.Users can change anything they want instantly without worrying about introducing bugs or glitcheswhile trying to improve their application and add better features through the appy pie platform.",
    },

    {
      htxt: "Faster development and delivery",
      stxt: "Traditional application development requires anywhere between 4 to 12 months and involves constant deliberations and discussions with the tech department.Every new feature additional would require a cycle if discussions and meetings with deliberations and discussions with the tech department.Every  like appy pie can reduce the development time by 90%. ",
    },
  ];

  return (
    <div className={styles.appbuilderwhyshouldmainboxes}>
      <div className={styles.appbuildersomeheadertxtboxwhyshould}>
        <h1>
          Why Should You Choose a No-code App Development Platform like Bottom
          Funnel ?
        </h1>

        <div className={styles.whyshouldappbuildersolmapperbox}>
          {whyshoulddata.map((e) => {
            return (
              <div className={styles.appbuilderwhydataindi}>
                <div className={styles.appbuilderwhydataindiforhtxt}>
                  <h4>{e.htxt}</h4>
                </div>

                <div className={styles.appbuilderwhydataindiforstxt}>
                  <p>{e.stxt}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
