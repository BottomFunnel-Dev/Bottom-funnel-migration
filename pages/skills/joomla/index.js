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
function SkillsJoomla() {
  const joomlaData = {
    title: "Best joomla developers in the market | Bottom Funnel",
    description:
      "Looking for a Joomla developer? Our directory of qualified experts covers everything you need to know about hiring a Joomla developer. Read on to know more.",
    BannerData: {
      points: [
        "Guaranteed 160 man-hours",
        "Direct access to resources",
        "Agile development process",
        "Daily/Weekly/Monthly reporting",
        "Flexible working hours",
      ],
      icon: "/Images/skillsPhotos/joomlaSkillsPhotos/icon.webp",
      image: "/Images/skillsPhotos/banner.webp",
      title: ["Hire", "Joomla", "developer"],
      description:
        "Bottom funnel offer you to hire professional Joomla expert developers on a contract and project basis with a risk-free 14-day trial.",
    },
    desData: {
      title: "Joomla",
      image: "/Images/skillsPhotos/joomlaSkillsPhotos/joomla-logo.webp",
      description:
        "Joomla is a free, cross-platform, open-source developer platform that has been designed to support many different types of application development needs. This system uses various languages, editors and libraries which can be used for web, mobile, desktop games and other projects too. The .NET framework has been developed based on certain guidelines to create applications ranging from small scale website creation all the way up to large enterprise level client programmes",
    },
    WhyAppData: {
      title: "POPULAR JOOMLA WEB DEVELOPMENT SERVICES",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/joomlaSkillsPhotos/drone-setting.webp",
            alt: "joomlaSkillsPhotos/drone-setting.webp",
          },
          title: "Free to use",

          description:
            "Engage in web page design and development that is dynamic, rich, responsive and offers multiple languages for your B2B and B2C website. .Net uses asynchronous programming to make sure your pages load quickly.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/joomlaSkillsPhotos/ecomeerce-desktop.webp",
            alt: "joomlaSkillsPhotos/ecomeerce-desktop.webp",
          },
          title: "Suitable for e-commerce",
          description:
            "The .Net framework makes XML web application development easy and efficient by providing powerful tools for development, data binding, validation, routing, security, and more. it creates compatible, safe and robust applications.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/joomlaSkillsPhotos/php-icon.webp",
            alt: "joomlaSkillsPhotos/php-icon.webp",
          },
          title: "Support PHP scripting",
          description:
            "CMS web application development provides you with the latest and most robust technologies so that your applications run effectively and securely to manage the content in the most effective way.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/joomlaSkillsPhotos/community.webp",
            alt: "joomlaSkillsPhotos/community.webp",
          },
          title: "Active forum community",
          description:
            "E-commerce web application development using .NET can provide you with industry-standard solutions that will secure your online shopping and protect your data. It makes the application convenient and easy to use.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/joomlaSkillsPhotos/cache-database.webp",
            alt: "joomlaSkillsPhotos/cache-database.webp",
          },
          title: "Build-in caching",
          description:
            "By using .NET for shopping cart web application development, you will have a custom designed shopping cart that that is user-friendly and dynamic with wide range of features such as product management, currecy conversion, etc.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/joomlaSkillsPhotos/languages.webp",
            alt: "joomlaSkillsPhotos/languages.webp",
          },
          title: "Support multiple language",
          description:
            "Microsoft SQL is a web-based database used to store and search for data from websites. It operates best with .NET sites and provides an interactive analysis of users' profiles that are updates at all.",
        },
      ],
    },
    WhyBFData: {
      title: "Why Bottom Funnel For Joomla",
      image: "/Images/skillsPhotos/joomlaSkillsPhotos/big-left-image.webp",
      bulletPointData: [
        "We use an agile approach.",
        "Provides integrity and transparency.",
        "Commitments with NDA agreements.",
        "Flexible engagement models.",
        "Experienced and talented team of developers.",
        "Offers variety of exclusive joomla solutions.",
      ],
    },
    BookCallData: {
      title: "Need our joomla developers to build your application?",
      btn: "Book a call now",
      image: "/Images/skillsPhotos/nodejsphotos/mid-banner.webp",
    },
    RemarkableData: {
      title: "benefits of using joomla as CMS",
      description:
        "Joomla is one of the most popular platforms for building websites. Its popularity has led to more submissions from various contributors.",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/nodejsphotos/mean-2.webp",
            alt: "nodejsphotos/mean-2.webp",
          },
          title: "Multiple joomla templates",
        },
        {
          img: {
            src: "/Images/skillsPhotos/nextjsSkillsPhotos/fast-run.webp",
            alt: "nextjsSkillsPhotos/fast-run.webp",
          },
          title: "Safe, fast and easy to use",
        },
        {
          img: {
            src: "/Images/skillsPhotos/reactjsSkillsPhotos/performance-ecosystem.webp",
            alt: "reactjsSkillsPhotos/performance-ecosystem.webp",
          },
          title: "Build-in SEO functionality",
        },
      ],
    },
  };

  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>{joomlaData.title}</title>
        <meta name="description" content={joomlaData.description} />
      </Head>
      <SkillsComBanner data={joomlaData.BannerData} />
      <hr style={{ margin: 0 }} />
      <SkillsComDes DescrptionData={joomlaData.desData} />
      <SkillsComWhyApp data={joomlaData.WhyAppData} />
      <SkillsComWhyBF data={joomlaData.WhyBFData} />
      <SkillsComBookCall data={joomlaData.BookCallData} />
      <SkillsComRemarkable data={joomlaData.RemarkableData} />
    </div>
  );
}

export default SkillsJoomla;
