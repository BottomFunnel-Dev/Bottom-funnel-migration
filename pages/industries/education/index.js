import dynamic from "next/dynamic";
import React from "react";
// import { dmpagesLogo } from "../../components/Data/SeopartnerData";
import {
  whyChooseUsData,
  oursuiteData,
} from "../../../components/Educationp/EducationMainContent/Data/educationData";

const EducationLearningSolutions = dynamic(
  () => import("../../../components/Educationp/EducationLearningSolutions"),
  { loading: () => "loading..." },
);
const EducationMainContent = dynamic(
  () => import("../../../components/Educationp/EducationMainContent"),
  { loading: () => "loading..." },
);
const EducationOurSuite = dynamic(
  () => import("../../../components/Educationp/EducationOurSuite"),
  { loading: () => "loading..." },
);
const EducationMidBanner = dynamic(
  () => import("../../../components/Educationp/EducationMidBanner"),
  { loading: () => "loading..." },
);
const EducationWhyUS = dynamic(
  () => import("../../../components/Educationp/EducationWhyUS"),
  { loading: () => "loading..." },
);
const EducationBanner = dynamic(
  () => import("../../../components/Educationp/EducationBanner"),
  { loading: () => "loading..." },
);
// const Trust = dynamic(
//   () => import("../../components/SEO/SeoTrustedCompanies/Seotrusted"),
//   { loading: () => "loading..." },
// );

export default function Education() {
  return (
    <div>
      <EducationBanner />
      {/* <Trust partnerLogo={dmpagesLogo} /> */}
      <EducationMainContent />
      <EducationLearningSolutions />
      <EducationOurSuite data={oursuiteData} />
      <EducationMidBanner />
      <EducationWhyUS data={whyChooseUsData} />
    </div>
  );
}
