import React from "react";
import { SkillsComBanner } from "../../Global/SkillsCom/SkillsComBanner";
import { SkillsComBookCall } from "../../Global/SkillsCom/SkillsComBookCall";
import { SkillsComRemarkable } from "../../Global/SkillsCom/SkillsComRemarkable";
import { SkillsComDes } from "../../Global/SkillsCom/SkillsComDes";

import { gitData } from "../../Data/SkillsData";
import { SkillsComWhyApp } from "../../Global/SkillsCom/SkillsComWhyApp";
import { SkillsComWhyBF } from "../../Global/SkillsCom/SkillsComWhyBF";
import Head from "next/head";

function SkillsGit() {
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
  } = gitData;

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

export default SkillsGit;
