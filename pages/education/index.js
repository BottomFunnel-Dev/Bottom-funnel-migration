import dynamic from "next/dynamic";
import React from "react";
import { dmpagesLogo } from "../../components/Data/SeopartnerData";

const EducationMidBanner = dynamic(
  () => import("../../components/Educationp/EducationMidBanner"),
  { loading: () => "loading..." },
);
const EducationWhyUS = dynamic(
  () => import("../../components/Educationp/EducationWhyUS"),
  { loading: () => "loading..." },
);
const EducationBanner = dynamic(
  () => import("../../components/Educationp/EducationBanner"),
  { loading: () => "loading..." },
);
const Trust = dynamic(
  () => import("../../components/SEO/SeoTrustedCompanies/Seotrusted"),
  { loading: () => "loading..." },
);

export default function Education() {
  return (
    <div>
      <EducationBanner />
      <Trust partnerLogo={dmpagesLogo} />
      <EducationMidBanner />
      <EducationWhyUS />
    </div>
  );
}
