import Head from "next/head";
import React from "react";
// import styles from "./SkillsComBanner.module.css";

export default function SkillsComBanner({ data }) {
  const { image, title, description, icon, points } = data;

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://d1krs40fxb67ye.cloudfront.net/components/SkillsCom/SkillsComBanner/SkillsComBanner.module.css"
        />
      </Head>
      <div
        className="skillsbannermain"
        style={{
          background: `url(${image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="skillsbannercontent">
          <h1>
            {title[0]} <span>{title[1]}</span> {title[2]}
          </h1>
          <p>{description}</p>
          <ul>
            {points.map((elem) => (
              <li key={elem}>{elem}</li>
            ))}
          </ul>
          <button>Get Started</button>
        </div>
        <img src={icon} alt={icon} />
      </div>
    </>
  );
}
