import Head from "next/head";
import React from "react";
// import styles from "./SkillsComDes.module.css";

export default function SkillsComDes({ DescrptionData }) {
  const { title, image, description } = DescrptionData;
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="/components/SkillsCom/SkillsComDes/SkillsComDes.module.css"
        />
      </Head>
      <div className={"skillsdesmain"}>
        <div className={"skillsdescontent"}>
          <h1 className={"skillsdescontenth1"}>{title}</h1>
          <p className={"skillsdescontentp"}>{description}</p>
        </div>
        <div className={"skillsdesimage"}>
          <img
            src={image}
            className={"skillsdesimageimg"}
            alt={`${title} logo`}
          />
        </div>
      </div>
    </>
  );
}
