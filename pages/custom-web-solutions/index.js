import React from "react";
import styles from "./CustomisedWebPage.module.css";
import dynamic from "next/dynamic";
import Head from "next/head";

const CustomisedWebBanner = dynamic(
  () =>
    import(
      "../../components/CustomisedWebPage/CustomisedWebBanner/CustomisedWebBanner"
    ),
  { loading: () => "loading..." },
);
const CustomisedWebUnique = dynamic(
  () =>
    import(
      "../../components/CustomisedWebPage/CustomisedWebUnique/CustomisedWebUnique"
    ),
  { loading: () => "loading..." },
);
const CustomisedWebServices = dynamic(
  () =>
    import(
      "../../components/CustomisedWebPage/CustomisedWebServices/CustomisedWebServices"
    ),
  { loading: () => "loading..." },
);
const CustomWebSolutions = dynamic(
  () =>
    import(
      "../../components/CustomisedWebPage/CustomWebSolutions/CustomWebSolutions"
    ),
  { loading: () => "loading..." },
);
const CustomWebMidBanner = dynamic(
  () =>
    import(
      "../../components/CustomisedWebPage/CustomWebMidBanner/CustomWebMidBanner"
    ),
  { loading: () => "loading..." },
);
const CustomWebWhyBF = dynamic(
  () =>
    import("../../components/CustomisedWebPage/CustomWebWhyBF/CustomWebWhyBF"),
  { loading: () => "loading..." },
);
const CustomWebSlider = dynamic(
  () =>
    import(
      "../../components/CustomisedWebPage/CustomWebSlider/CustomWebSlider"
    ),
  { loading: () => "loading..." },
);
const CustomWebForm = dynamic(
  () =>
    import("../../components/CustomisedWebPage/CustomWebForm/CustomWebForm"),
  { loading: () => "loading..." },
);

export default function CustomisedWebDevelopment() {
  return (
    <div className={styles.CustomisedWebPageContainer}>
      <Head>
        <title>Custom Web Solutions Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you looking for a unique web solution to meet 
          your business needs? Custom Web Solutions 
          provides various web development services. Read 
          on to know more about our services."
        />
      </Head>
      <main>
        <CustomisedWebBanner />
        <CustomisedWebUnique />
        <CustomisedWebServices />
        <CustomWebSolutions />
        <CustomWebMidBanner />
        <CustomWebWhyBF />
        <CustomWebSlider />
        <CustomWebForm />
      </main>
    </div>
  );
}
