import React from "react";
import Head from "next/head";

import { SkillsComBanner } from "../../components/SkillsCom/SkillsComBanner/index";
import { SkillsComBookCall } from "../../components/SkillsCom/SkillsComBookCall/index";
import { SkillsComRemarkable } from "../../components/SkillsCom/SkillsComRemarkable/index";
import { SkillsComDes } from "../../components/SkillsCom/SkillsComDes/index";
import { SkillsComWhyApp } from "../../components/SkillsCom/SkillsComWhyApp/index";
import { SkillsComWhyBF } from "../../components/SkillsCom/SkillsComWhyBF/index";

import { cakePHPData } from "../../components/Data/SkillsData";

function SkillsShopify() {
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
  } = cakePHPData;

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

export default SkillsShopify;
