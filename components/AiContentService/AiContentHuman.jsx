import React from 'react';
import styles from "./AiContentHuman.module.css";

export const AiContentHuman = () => {

  const aicontenthumandata = [
    {
      logo: "/Images/AiContentsolution/icons/configuration 7.png",
      htxt: "Powered by AI",
      stxt: "The GPT-3 AI language model is nothing like you've seen before natural unique and creative Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut maximus  Donec sed dolor dapibus,",
    },


    {
      logo: "/Images/AiContentsolution/icons/configuration 8.png",
      htxt: "Powerful settings",
      stxt: "Adjust the creativity level or the tone of voice to generate the prefect copy for your business. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut maximus tellus. Donec sed dolor dapibus,",
    },


    {
      logo: "/Images/AiContentsolution/icons/configuration 9.png",
      htxt: "Optimized for conversions",
      stxt: "Trained with conversions in mind to write content that captures attention and converts.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut maximus tellus. Phasellus ac eleifend mi. Donec sed dolor dapibus,",
    },


    {
      logo: "/Images/AiContentsolution/icons/configuration 12.png",
      htxt: "50+ Available Tools",
      stxt: "Generate all types of copy or content in seconds with the ultimate creative writing tool Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut maximus tellus. Phasellus ac eleifend mi. Donec sed dolor dapibus,",
    },

    {
      logo: "/Images/AiContentsolution/icons/configuration 11.png",
      htxt: "Grammar Check",
      stxt: "Don't let poor grammer hurt your visitor's trust,Copymatic can check and rewrite your content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut maximus tellus. ",
    },

    {
      logo: "/Images/AiContentsolution/icons/configuration 10.png",
      htxt: "Sentence Rewriter",
      stxt: "AI understands your sentence and reqrites it in a completely unique and smart way. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut maximus tellus. Phasellus ac eleifend mi. Donec sed dolor dapibus,",
    },

  ]

  return (
    <div className={styles.aicontenthumanmainboxes}>

      <div className={styles.aicontenthumantextbox}>
        <p>
          THE WORLDS MOST ADVANCED AI LANGUAGE MODEL
        </p>

        <h1>
          Write unique and human-like copy in seconds
        </h1>
      </div>

      <div className={styles.aicontenthumanbannerimageandtextbox}>
        <div className={styles.aicontentinnerbanneronlybox}>
          <div className={styles.aicontentdatamappermainboxmapping}>
            {aicontenthumandata.map((e) => {
              return (
                <div className={styles.aicontentdataboxesindividually}>
                  <div className={styles.aicontenthumanlogobox}>
                    <img src={e.logo} alt="image" />
                  </div>

                  <div className={styles.aicontenthumantextboxinner}>
                    <h4>{e.htxt}</h4>
                    <p>{e.stxt}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

