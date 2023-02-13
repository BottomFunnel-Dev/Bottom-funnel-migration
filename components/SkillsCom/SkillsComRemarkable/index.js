import React from "react";
import dynamic from "next/dynamic";
const TextDropdown = dynamic(
  () => import("../../CommonComponents/faqSection/Faqs"),
  {
    loading: () => "loading",
  },
);
const MainFooter = dynamic(
  () => import("../../CommonComponents/FooterSection/MainFooter"),
  { loading: () => "loading" },
);
const Industries = dynamic(
  () => import("../../CommonComponents/industries/Industries"),
  { loading: () => "loading" },
);
const OndemandSection = dynamic(
  () => import("../../CommonComponents/OnDemandSection/OndemandSection"),
  { loading: () => "loading" },
);
const PlanProject = dynamic(
  () => import("../../CommonComponents/PlanProject/PlanProject"),
  { loading: () => "loading" },
);
const Revamping = dynamic(
  () => import("../../CommonComponents/revamping/Revamping"),
  {
    loading: () => "loading",
  },
);
const SeoblogSection = dynamic(
  () => import("../../CommonComponents/SeoBlogs/Seoblogs"),
  {
    loading: () => "loading",
  },
);
const StoriesSection = dynamic(
  () => import("../../CommonComponents/StoriesSection/StoriesSection"),
  {
    loading: () => "loading",
  },
);
const Companystats = dynamic(() => import("../../CompanyStats/Companystats"), {
  loading: () => "loading",
});
const ContectForm = dynamic(() => import("../../ContectForm/ContectForm"), {
  loading: () => "loading",
});
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
