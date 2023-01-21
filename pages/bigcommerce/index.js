import React from "react";
import Head from "next/head";

import { SkillsComBanner } from "../../components/SkillsCom/SkillsComBanner";
import { SkillsComBookCall } from "../../components/SkillsCom/SkillsComBookCall";
import { SkillsComRemarkable } from "../../components/SkillsCom/SkillsComRemarkable";
import { SkillsComDes } from "../../components/SkillsCom/SkillsComDes";
import { SkillsComWhyApp } from "../../components/SkillsCom/SkillsComWhyApp";
import { SkillsComWhyBF } from "../../components/SkillsCom/SkillsComWhyBF";
import { bigcommerceData } from "../../components/Data/SkillsData";

function SkillsBigcommerce() {
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
  } = bigcommerceData;

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
      {isRemarkable ? <SkillsComRemarkable data={RemarkableData} /> : null}
    </div>
  );
}

export default SkillsBigcommerce;
