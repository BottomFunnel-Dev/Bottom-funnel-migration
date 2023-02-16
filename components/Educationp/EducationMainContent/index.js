import React from "react";
import dynamic from "next/dynamic";
import { studentData, dashboardData, panelData } from "./Data/educationData";
import styles from "./EducationMainContent.module.css";

const DashboardCards = dynamic(() => import("./DashboardCards"));
const StudentApplication = dynamic(() => import("./StudentApplication"));

export default function EducationMainContent() {
  return (
    <div className={styles.educationMainContainer}>
      <h1>
        Our e-Learning Solution Allows learners to Access Content Anywhere &
        Anytime
      </h1>
      <StudentApplication cardsData={studentData} />
      <DashboardCards data={dashboardData} position={true} />
      <DashboardCards data={panelData} position={false} />
    </div>
  );
}
