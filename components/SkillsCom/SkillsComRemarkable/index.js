import Head from "next/head";
import React from "react";
// import styles from "./SkillsComRemarkable.module.css";

export default function SkillsComRemarkable({ data }) {
  const { title, description, cardsData } = data;

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="/components/SkillsCom/SkillsComRemarkable/SkillsComRemarkable.module.css"
        />
      </Head>
      <div className={"skillsremarkablemain"}>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className={"skillsremarkablesolutions"}>
          {cardsData.map(({ img, title }) => {
            return (
              <div key={title}>
                <div className={"skillsremarkableimage"}>
                  <img src={img.src} alt={img.alt} />
                </div>
                <h4>{title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
