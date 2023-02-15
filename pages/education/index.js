import React from "react";
import { EducationAdministration } from "../../components/Education/EducationAdministration";
import { EducationBanner } from "../../components/Education/EducationBanner";
import { EducationGroupwise } from "../../components/Education/EducationGroupwise";
import { EducationITteams } from "../../components/Education/EducationITteams";
import { EducationSupport } from "../../components/Education/EducationSupport";

import Head from "next/head";

export default function Education() {
  return (
    <div>
      <Head>
        <title>Education Web App development | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you in need of an education web app that can help increase 
          student engagement and retention? Our team of experts can 
          help design and build a web app that meets your specific needs 
          and requirements."
        />
      </Head>
      <main>
        <EducationBanner />
        <EducationSupport />
        <EducationITteams />
        <EducationAdministration />
        <EducationGroupwise />
      </main>
    </div>
  );
}
