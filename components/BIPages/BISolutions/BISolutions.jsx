import React from "react";
import styles from "./BISolutions.module.css";
export const BISolutions = () => {
const cardsData = [
{
title: "Discuss business requirements",
body: "Our team of bi-experts starts by gathering your business needs. After a thorough understanding of your business goals and needs, we determine the solutions, approaches and technologies that perfectly fit your business needs.",
},
{
title: "Collect & integrate data",
body: "Next, our team will start collecting business data from various sources such as Excel, ERP systems, file systems, etc. and integrate it into our master database. This process makes it easy to access different types of data from one place.",
},
{
title: "Analyze & prepare data",
body: "Collected and integrated data is prepared for research, analysis and modeling. Our BI technology experts implement highly scalable data processing scripts to transform datasets into the right format.",
},
{
title: "Get insights",
body: "We work with you to solve defined business problems by drawing conclusions from data exploration processes using a variety of data mining techniques and advanced BI tools. Our her BI solution helps clients understand not only when and what happened, but why it happened.",
},
{
title: "Create BI dashboards & reports",
body: "Our team creates top-notch BI dashboards and reports that are not only visually appealing, but also easy to understand. Advanced dashboards reduce user interaction and save time so stakeholders can focus on other important business areas. It also helps companies make the right business decisions at the right time and manage all processes smoothly.",
},
];
return (
<div className={styles.BISolutionsContainer}>
<h1>
<span>Business Intelligence</span> Implementation Process
</h1>
<div className={styles.BIPartnerHrLine}>
<span></span>
<div></div>
<span></span>
</div>
<div className={styles.BISolutionsMain}>
{cardsData.map(({ title, body }) => (
<div>
<div className={styles.BISolutionsDot}>
<img src="Images/BIPhotos/dot.png" alt="Point icon" />
</div>
<div className={styles.BISolutionsContent}>
<h2>{title}</h2>
<p>{body}</p>
</div>
</div>
))}
</div>
</div>
);
};
