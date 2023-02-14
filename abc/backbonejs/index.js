import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { backbonejsData } from "../../components/Data/SkillsData";

// ---------------importing components with lazy loading-----------------------
const SkillsComBanner = dynamic(
  () => import("../../components/SkillsCom/SkillsComBanner"),
  { loading: () => "loading..." },
);
const SkillsComBookCall = dynamic(
  () => import("../../components/SkillsCom/SkillsComBookCall"),
  { loading: () => "loading..." },
);
const SkillsComRemarkable = dynamic(
  () => import("../../components/SkillsCom/SkillsComRemarkable"),
  { loading: () => "loading..." },
);
const SkillsComDes = dynamic(
  () => import("../../components/SkillsCom/SkillsComDes"),
  { loading: () => "loading..." },
);
const SkillsComWhyApp = dynamic(
  () => import("../../components/SkillsCom/SkillsComWhyApp"),
  { loading: () => "loading..." },
);
const SkillsComWhyBF = dynamic(
  () => import("../../components/SkillsCom/SkillsComWhyBF"),
  { loading: () => "loading..." },
);

// ------------------Main page function-----------------
function SkillsBackbonejs() {
  const {
    title,
    description,
    isBanner,
    BannerData,
    isDes,
    desData,
    isWhyApp,
    WhyAppData,
    isWhyBF,
    WhyBFData,
    isBookCall,
    BookCallData,
    isRemarkable,
    RemarkableData,
  } = backbonejsData;

  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      {isBanner ? <SkillsComBanner data={BannerData} /> : null}
      <hr style={{ margin: 0 }} />
      {isDes ? <SkillsComDes DescrptionData={desData} /> : null}
      {isWhyApp ? <SkillsComWhyApp data={WhyAppData} /> : null}
      {isWhyBF ? <SkillsComWhyBF data={WhyBFData} /> : null}
      {isBookCall ? <SkillsComBookCall data={BookCallData} /> : null}
      <SkillsComRemarkable data={RemarkableData} />
    </div>
  );
}

export default SkillsBackbonejs;
