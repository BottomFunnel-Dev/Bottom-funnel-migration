import dynamic from "next/dynamic";
import React from "react";
import { dmpagesLogo } from "../../components/Data/SeopartnerData";

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
    </div>
  );
}
