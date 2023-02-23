import Head from "next/head";
import React from "react";
// import styles from "./SkillsComBookCall.module.css";

export default function SkillsComBookCall({ data }) {
  const { title, btn, image } = data;
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://d1krs40fxb67ye.cloudfront.net/components/SkillsCom/SkillsComBookCall/SkillsComBookCall.module.css"
        />
      </Head>
      <div
        className="skillsbookcallmain"
        style={{
          background: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url(${image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="skillsbookcallmainh1">{title}</h1>
        <button className="skillsbookcallmainbutton">{btn}</button>
      </div>
    </>
  );
}
