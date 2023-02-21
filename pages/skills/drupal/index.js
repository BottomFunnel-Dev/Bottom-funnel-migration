import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

// ---------------importing components with lazy loading-----------------------
const SkillsComBanner = dynamic(
  () => import("../../../components/SkillsCom/SkillsComBanner"),
  { loading: () => "loading..." },
);
const SkillsComBookCall = dynamic(
  () => import("../../../components/SkillsCom/SkillsComBookCall"),
  { loading: () => "loading..." },
);
const SkillsComRemarkable = dynamic(
  () => import("../../../components/SkillsCom/SkillsComRemarkable"),
  { loading: () => "loading..." },
);
const SkillsComDes = dynamic(
  () => import("../../../components/SkillsCom/SkillsComDes"),
  { loading: () => "loading..." },
);
const SkillsComWhyApp = dynamic(
  () => import("../../../components/SkillsCom/SkillsComWhyApp"),
  { loading: () => "loading..." },
);
const SkillsComWhyBF = dynamic(
  () => import("../../../components/SkillsCom/SkillsComWhyBF"),
  { loading: () => "loading..." },
);

// ------------------Main page function-----------------
function SkillsDrupal() {
  const drupalData = {
    title: "Best drupal developers in the market | Bottom Funnel",
    description:
      "Looking for experienced Drupal developers? Our team of skilled professionals has the expertise and knowledge required to develop world-class Drupal apps. Contact us today!",
    BannerData: {
      points: [
        "Guaranteed 160 man-hours",
        "Direct access to resources",
        "Agile development process",
        "Daily/Weekly/Monthly reporting",
        "Flexible working hours",
      ],
      icon: "/Images/skillsPhotos/drupalSkillsPhotos/icon.webp",
      image: "/Images/skillsPhotos/banner.webp",
      title: ["Hire", "Drupal", "developer"],
      description:
        "Bottom funnel offer you to hire professional Drupal expert developers on a contract and project basis with a risk-free 14-day trial.",
    },
    desData: {
      title: "Drupal",
      image: "/Images/skillsPhotos/drupalSkillsPhotos/drupal-logo.webp",
      description:
        "Drupal is a free, cross-platform, open-source developer platform that has been designed to support many different types of application development needs. This system uses various languages, editors and libraries which can be used for web, mobile, desktop games and other projects too. The .NET framework has been developed based on certain guidelines to create applications ranging from small scale website creation all the way up to large enterprise level client programmes",
    },
    WhyAppData: {
      title: "POPULAR DRUPAL WEB DEVELOPMENT SERVICES",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/drupalSkillsPhotos/router.webp",
            alt: "drupalSkillsPhotos/router.webp",
          },
          title: "Marketing automation",

          description:
            "Engage in web page design and development that is dynamic, rich, responsive and offers multiple languages for your B2B and B2C website. .Net uses asynchronous programming to make sure your pages load quickly.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/drupalSkillsPhotos/hide-eye.webp",
            alt: "drupalSkillsPhotos/hide-eye.webp",
          },
          title: "Strong Security",
          description:
            "The .Net framework makes XML web application development easy and efficient by providing powerful tools for development, data binding, validation, routing, security, and more. it creates compatible, safe and robust applications.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/drupalSkillsPhotos/database.webp",
            alt: "drupalSkillsPhotos/database.webp",
          },
          title: "Massive template collection",
          description:
            "CMS web application development provides you with the latest and most robust technologies so that your applications run effectively and securely to manage the content in the most effective way.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/drupalSkillsPhotos/fast-run.webp",
            alt: "drupalSkillsPhotos/fast-run.webp",
          },
          title: "Fast performance",
          description:
            "E-commerce web application development using .NET can provide you with industry-standard solutions that will secure your online shopping and protect your data. It makes the application convenient and easy to use.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/drupalSkillsPhotos/support.webp",
            alt: "drupalSkillsPhotos/support.webp",
          },
          title: "Excellent support",
          description:
            "By using .NET for shopping cart web application development, you will have a custom designed shopping cart that that is user-friendly and dynamic with wide range of features such as product management, currecy conversion, etc.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/drupalSkillsPhotos/setting-loading.webp",
            alt: "drupalSkillsPhotos/setting-loading.webp",
          },
          title: "Flexible",
          description:
            "Microsoft SQL is a web-based database used to store and search for data from websites. It operates best with .NET sites and provides an interactive analysis of users' profiles that are updates at all.",
        },
      ],
    },
    WhyBFData: {
      title: "Why Bottom Funnel For Drupal",
      image: "/Images/skillsPhotos/drupalSkillsPhotos/big-left-image.webp",
      bulletPointData: [
        "We use an agile approach.",
        "Provides integrity and transparency.",
        "Commitments with NDA agreements.",
        "Flexible engagement models.",
        "Experienced and talented team of developers.",
        "Offers variety of exclusive drupal solutions.",
      ],
    },
    BookCallData: {
      title: "Need our drupal developers to build your application?",
      btn: "Book a call now",
      image: "/Images/skillsPhotos/nodejsphotos/mid-banner.webp",
    },
    RemarkableData: {
      title: "benefits of using drupal for website development",
      description:
        "We've seen educational institutions, government agencies, and large corporations rely heavily on Drupal to carry out their digitization initiatives. A web development company also uses Drupal as a content management system and his web development platform.",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/angularjsSkillsPhotos/open-source.webp",
            alt: "angularjsSkillsPhotos/open-source.webp",
          },
          title: "Open-source & free to use",
        },
        {
          img: {
            src: "/Images/skillsPhotos/springbootSkillsPhotos/easy-development.webp",
            alt: "springbootSkillsPhotos/easy-development.webp",
          },
          title: "Advanced Development Methods",
        },
        {
          img: {
            src: "/Images/skillsPhotos/angularjsSKillsPhotos/time-saving.webp",
            alt: "angularjsSKillsPhotos/time-saving.webp",
          },
          title: "Mobile-first features",
        },
      ],
    },
  };

  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>{drupalData.title}</title>
        <meta name="description" content={drupalData.description} />
      </Head>
      <SkillsComBanner data={drupalData.BannerData} />
      <hr style={{ margin: 0 }} />
      <SkillsComDes DescrptionData={drupalData.desData} />
      <SkillsComWhyApp data={drupalData.WhyAppData} />
      <SkillsComWhyBF data={drupalData.WhyBFData} />
      <SkillsComBookCall data={drupalData.BookCallData} />
      <SkillsComRemarkable data={drupalData.RemarkableData} />
    </div>
  );
}

export default SkillsDrupal;
