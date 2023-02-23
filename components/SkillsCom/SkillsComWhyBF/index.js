import Head from "next/head";
import React from "react";
// import styles from "./SkillsComWhyBF.module.css";

export default function SkillsComWhyBF({ data }) {
  const { title, image, bulletPointData } = data;

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://d1krs40fxb67ye.cloudfront.net/components/SkillsCom/SkillsComWhyBF/SkillsComWhyBF.module.css"
        />
      </Head>
      <div className={"skillswhymain"}>
        <h1>{title}</h1>
        <div className={"skillswhycontent"}>
          <div className={"skillsbulletspointsimage"}>
            <img src={image} alt="big-left-image.webp" />
          </div>
          <div className={"skillsbulletspointsmain"}>
            <div className={"skillsbulletspoints"}>
              {bulletPointData.map((elem) => {
                return (
                  <p key={elem}>
                    <i
                      class="bi bi-hand-index-fill"
                      style={{ transform: "rotate(90deg)" }}
                    ></i>
                    {elem}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
