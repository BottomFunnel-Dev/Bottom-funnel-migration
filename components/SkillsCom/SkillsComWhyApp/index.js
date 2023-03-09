import Head from "next/head";
import React from "react";
// import styles from "./SkillsComWhyApp.module.css";

export default function SkillsComWhyApp({ data }) {
  const { title, cardsData } = data;

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="/components/SkillsCom/SkillsComWhyApp/SkillsComWhyApp.module.css"
        />
      </Head>
      <div className={"skillswhyapplicationmain"}>
        <h1>{title}</h1>
        <div className={"skillswhyapplicationcontent"}>
          {cardsData.map(({ img, title, description }, idx) => {
            return (
              <div key={idx}>
                <div className={"skillswhyapplcardsimagesdiv"}>
                  <img src={img.src} alt={img.alt} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
