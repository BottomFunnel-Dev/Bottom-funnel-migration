import React from 'react';
import styles from "./AiContentHuman.module.css";

export const AiContentHuman = () => {

  const aicontenthumandata = [
    {
      logo: "/Images/AiContentsolution/icons/configuration 7.png",
      htxt: "Powered by AI",
      stxt: "It knows how to write amazing ads that get people excited about your business and understand what makes them tick. From there on out, it's all about making sure that every message is sending the right message at the right time",
    },


    {
      logo: "/Images/AiContentsolution/icons/configuration 8.png",
      htxt: "Powerful settings",
      stxt: "No more tedious editing! Write unique and human-like copy in seconds with Brand: Write. With a powerful settings feature, you can adjust the creativity level or the tone of voice to generate prefect copy for your business.",
    },


    {
      logo: "/Images/AiContentsolution/icons/configuration 9.png",
      htxt: "Optimized for conversions",
      stxt: "Write unique and human-like copy with Brand Voice: an easy way for you to get started on the path of becoming a master at writing sales pages. It lets you choose from different styles like conversational, friendly, and formal, so that your copy sounds more natural.",
    },


    {
      logo: "/Images/AiContentsolution/icons/configuration 12.png",
      htxt: "50+ Available Tools",
      stxt: "Brand:Write is an app that comes with 50+ tools to make your content stand out from the rest. You just have to pick up one of these tools and start typing or writing. The brand will recognize it as special and will be able to generate all types of copy or content for you in no time.",
    },

    {
      logo: "/Images/AiContentsolution/icons/configuration 11.png",
      htxt: "Grammar Check",
      stxt: "Copymatic is here to save you from all sorts of grammatical errors. Just enter your text in and let our AI do the rest! The tool uses advanced algorithms to check for mistakes, and then rewrite it so that it sounds natural and coherent.",
    },

    {
      logo: "/Images/AiContentsolution/icons/configuration 10.png",
      htxt: "Sentence Rewriter",
      stxt: "Writing duplicate content is a pain, but AI can take care of that for you. Sentence Rewriter can understand what you want to say and restructure your sentences accordingly. It also gives you human-like copy that sounds natural.",
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

