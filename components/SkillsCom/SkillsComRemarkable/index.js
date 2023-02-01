import React from "react";
import { TextDropdown } from "../../CommonComponents/faqSection/Faqs";
import MainFooter from "../../CommonComponents/FooterSection/MainFooter";
import Industries from "../../CommonComponents/industries/Industries";
import OndemandSection from "../../CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../CommonComponents/PlanProject/PlanProject";
import Revamping from "../../CommonComponents/revamping/Revamping";
import { SeoblogSection } from "../../CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../CommonComponents/StoriesSection/StoriesSection";
import { Companystats } from "../../CompanyStats/Companystats";
import ContectForm from "../../ContectForm/ContectForm";
import styles from "./SkillsComRemarkable.module.css";

export const SkillsComRemarkable = ({ data }) => {
  const { title, description, cardsData } = data;

  return (
    <>
      <div className={styles.skillsremarkablemain}>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className={styles.skillsremarkablesolutions}>
          {cardsData.map(({ img, title }) => {
            return (
              <div key={title}>
                <div className={styles.skillsremarkableimage}>
                  <img src={img.src} alt={img.alt} />
                </div>
                <h4>{title}</h4>
              </div>
            );
          })}
        </div>
      </div>
      <StoriesSection />
      <Industries />
      <OndemandSection />
      <PlanProject />
      <Companystats />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </>
  );
};
