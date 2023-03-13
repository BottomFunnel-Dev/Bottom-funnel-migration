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
function SkillsElastic() {
  const elasticData = {
    title: "Best elasticsearch developers in the market | Bottom Funnel",
    description:
      "Get certified to develop with Elasticsearch, a leading open source search platform. Learn the tools and techniques needed for successful Elasticsearch development",
    BannerData: {
      points: [
        "Guaranteed 160 man-hours",
        "Direct access to resources",
        "Agile development process",
        "Daily/Weekly/Monthly reporting",
        "Flexible working hours",
      ],
      icon: "/Images/skillsPhotos/elasticSkillsPhotos/icon.webp",
      image: "/Images/skillsPhotos/banner.webp",
      title: ["Hire", "Elasticsearch", "developer"],
      description:
        "Bottom funnel offer you to hire professional Elasticsearch expert developers on a contract and project basis with a risk-free 14-day trial.",
    },
    desData: {
      title: "Elasticsearch",
      image: "/Images/skillsPhotos/elasticSkillsPhotos/elastic-logo.webp",
      description:
        "Elasticsearch is a free, cross-platform, open-source developer platform that has been designed to support many different types of application development needs. This system uses various languages, editors and libraries which can be used for web, mobile, desktop games and other projects too. The .NET framework has been developed based on certain guidelines to create applications ranging from small scale website creation all the way up to large enterprise level client programmes",
    },
    WhyAppData: {
      title: "POPULAR ELASTICSEARCH WEB DEVELOPMENT SERVICES",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/elasticSkillsPhotos/security.webp",
            alt: "elasticSkillsPhotos/security.webp",
          },
          title: "Security",

          description:
            "Engage in web page design and development that is dynamic, rich, responsive and offers multiple languages for your B2B and B2C website. .Net uses asynchronous programming to make sure your pages load quickly.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/elasticSkillsPhotos/management.webp",
            alt: "elasticSkillsPhotos/management.webp",
          },
          title: "Management",
          description:
            "The .Net framework makes XML web application development easy and efficient by providing powerful tools for development, data binding, validation, routing, security, and more. it creates compatible, safe and robust applications.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/elasticSkillsPhotos/pip.webp",
            alt: "elasticSkillsPhotos/pip.webp",
          },
          title: "Scalability and resiliency",
          description:
            "CMS web application development provides you with the latest and most robust technologies so that your applications run effectively and securely to manage the content in the most effective way.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/elasticSkillsPhotos/switch.webp",
            alt: "elasticSkillsPhotos/switch.webp",
          },
          title: "Integrations",
          description:
            "E-commerce web application development using .NET can provide you with industry-standard solutions that will secure your online shopping and protect your data. It makes the application convenient and easy to use.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/elasticSkillsPhotos/upgrade-database.webp",
            alt: "elasticSkillsPhotos/upgrade-database.webp",
          },
          title: "Data enrichment",
          description:
            "By using .NET for shopping cart web application development, you will have a custom designed shopping cart that that is user-friendly and dynamic with wide range of features such as product management, currecy conversion, etc.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/elasticSkillsPhotos/database-search.webp",
            alt: "elasticSkillsPhotos/database-search.webp",
          },
          title: "Automatic node recovery",
          description:
            "Microsoft SQL is a web-based database used to store and search for data from websites. It operates best with .NET sites and provides an interactive analysis of users' profiles that are updates at all.",
        },
      ],
    },
    WhyBFData: {
      title: "Why Bottom Funnel For Elasticsearch",
      image: "/Images/skillsPhotos/elasticSkillsPhotos/big-left-image.webp",
      bulletPointData: [
        "We use an agile approach.",
        "Provides integrity and transparency.",
        "Commitments with NDA agreements.",
        "Flexible engagement models.",
        "Experienced and talented team of developers.",
        "Offers variety of exclusive elasticsearch solutions.",
      ],
    },
    BookCallData: {
      title: "Need our elasticsearch developers to build your application?",
      btn: "Book a call now",
      image: "/Images/skillsPhotos/nodejsphotos/mid-banner.webp",
    },
    RemarkableData: {
      title: "benefits of using elasticsearch",
      description:
        "Elasticsearch is an open source, widely distributable, and easily extensible enterprise-class search engine based on Lucene and released under the terms of the Apache license.",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/angularjsSkillsPhotos/open-source.webp",
            alt: "angularjsSkillsPhotos/open-source.webp",
          },
          title: "Open-source",
        },
        {
          img: {
            src: "/Images/skillsPhotos/phpskillsphotos/php-web-portals.webp",
            alt: "phpskillsphotos/php-web-portals.webp",
          },
          title: "Lots of search options",
        },
        {
          img: {
            src: "/Images/skillsPhotos/mongodbSkillsPhotos/docs-checked.webp",
            alt: "mongodbSkillsPhotos/docs-checked.webp",
          },
          title: "Document-oriented",
        },
        {
          img: {
            src: "/Images/skillsPhotos/redisSkillsPhotos/fast-run.webp",
            alt: "redisSkillsPhotos/fast-run.webp",
          },
          title: "Speed",
        },
        {
          img: {
            src: "/Images/skillsPhotos/backbonejsSkillsPhotos/database-docs.webp",
            alt: "backbonejsSkillsPhotos/database-docs.webp",
          },
          title: "Data record",
        },
        {
          img: {
            src: "/Images/skillsPhotos/mongodbSkillsPhotos/analysis.webp",
            alt: "mongodbSkillsPhotos/analysis.webp",
          },
          title: "Query fine tuning",
        },
      ],
    },
  };

  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>{elasticData.title}</title>
        <meta name="description" content={elasticData.description} />
      </Head>
      <SkillsComBanner data={elasticData.BannerData} />
      <hr style={{ margin: 0 }} />
      <SkillsComDes DescrptionData={elasticData.desData} />
      <SkillsComWhyApp data={elasticData.WhyAppData} />
      <SkillsComWhyBF data={elasticData.WhyBFData} />
      <SkillsComBookCall data={elasticData.BookCallData} />
      <SkillsComRemarkable data={elasticData.RemarkableData} />
    </div>
  );
}

export default SkillsElastic;
