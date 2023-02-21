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
function SkillsIbmdb() {
  const ibmData = {
    title: "Best IBM db2 developers in the market | Bottom Funnel",
    description:
      "Interested in becoming an IBM-DB developer? Join the growing community of IBMs DB experts and create cutting-edge applications for our clients using our comprehensive documentation.",
    BannerData: {
      points: [
        "Guaranteed 160 man-hours",
        "Direct access to resources",
        "Agile development process",
        "Daily/Weekly/Monthly reporting",
        "Flexible working hours",
      ],
      icon: "/Images/skillsPhotos/ibmSkillsPhotos/icon.webp",
      image: "/Images/skillsPhotos/banner.webp",
      title: ["Hire", "IBM db2", "developer"],
      description:
        "Bottom funnel offer you to hire professional IBM db2 expert developers on a contract and project basis with a risk-free 14-day trial.",
    },
    desData: {
      title: "IBM db2",
      image: "/Images/skillsPhotos/ibmSkillsPhotos/ibm-logo.webp",
      description:
        "IBM db2 is a free, cross-platform, open-source developer platform that has been designed to support many different types of application development needs. This system uses various languages, editors and libraries which can be used for web, mobile, desktop games and other projects too. The .NET framework has been developed based on certain guidelines to create applications ranging from small scale website creation all the way up to large enterprise level client programmes",
    },
    WhyAppData: {
      title: "POPULAR IBM DB2 WEB DEVELOPMENT SERVICES",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/ibmSkillsPhotos/graph.webp",
            alt: "ibmSkillsPhotos/graph.webp",
          },
          title: "Industry-leading performance",

          description:
            "Engage in web page design and development that is dynamic, rich, responsive and offers multiple languages for your B2B and B2C website. .Net uses asynchronous programming to make sure your pages load quickly.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/ibmSkillsPhotos/security.webp",
            alt: "ibmSkillsPhotos/security.webp",
          },
          title: "Advance protection",
          description:
            "The .Net framework makes XML web application development easy and efficient by providing powerful tools for development, data binding, validation, routing, security, and more. it creates compatible, safe and robust applications.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/ibmSkillsPhotos/loading-24.webp",
            alt: "ibmSkillsPhotos/loading-24.webp",
          },
          title: "Continuous availability",
          description:
            "CMS web application development provides you with the latest and most robust technologies so that your applications run effectively and securely to manage the content in the most effective way.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/ibmSkillsPhotos/pip.webp",
            alt: "ibmSkillsPhotos/pip.webp",
          },
          title: "Scaling",
          description:
            "E-commerce web application development using .NET can provide you with industry-standard solutions that will secure your online shopping and protect your data. It makes the application convenient and easy to use.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/ibmSkillsPhotos/frames.webp",
            alt: "ibmSkillsPhotos/frames.webp",
          },
          title: "Multiple data types",
          description:
            "By using .NET for shopping cart web application development, you will have a custom designed shopping cart that that is user-friendly and dynamic with wide range of features such as product management, currecy conversion, etc.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/ibmSkillsPhotos/user-building.webp",
            alt: "ibmSkillsPhotos/user-building.webp",
          },
          title: "Automated administration",
          description:
            "Microsoft SQL is a web-based database used to store and search for data from websites. It operates best with .NET sites and provides an interactive analysis of users' profiles that are updates at all.",
        },
      ],
    },
    WhyBFData: {
      title: "Why Bottom Funnel For IBM db2",
      image: "/Images/skillsPhotos/bigcommerceSkillsPhotos/big-left-image.webp",
      bulletPointData: [
        "We use an agile approach.",
        "Provides integrity and transparency.",
        "Commitments with NDA agreements.",
        "Flexible engagement models.",
        "Experienced and talented team of developers.",
        "Offers variety of exclusive ibm db2 solutions.",
      ],
    },
    BookCallData: {
      title: "Need our ibm db2 developers to build your application?",
      btn: "Book a call now",
      image: "/Images/skillsPhotos/nodejsphotos/mid-banner.webp",
    },
    RemarkableData: {
      title: "benefits of using ibm db2",
      description:
        "IBM's DB2 has been around for many years and has matured into a robust relational database management system (RDBMS). DB2 has a significant market share with competitors such as Oracle, MS SQL and MySQL, but still has a strong market presence.",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/mssqlSKillsPhotos/sql-server.webp",
            alt: "mssqlSKillsPhotos/sql-server.webp",
          },
          title: "Powerfull SQL",
        },
        {
          img: {
            src: "/Images/skillsPhotos/vuejsSkillsPhotos/cross-platform.webp",
            alt: "vuejsSkillsPhotos/cross-platform.webp",
          },
          title: "Multiple platform support",
        },
        {
          img: {
            src: "/Images/skillsPhotos/nextjsSkillsPhotos/computer-research.webp",
            alt: "nextjsSkillsPhotos/computer-research.webp",
          },
          title: "IBM Support",
        },
      ],
    },
  };

  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>{ibmData.title}</title>
        <meta name="description" content={ibmData.description} />
      </Head>
      <SkillsComBanner data={ibmData.BannerData} />
      <hr style={{ margin: 0 }} />
      <SkillsComDes DescrptionData={ibmData.desData} />
      <SkillsComWhyApp data={ibmData.WhyAppData} />
      <SkillsComWhyBF data={ibmData.WhyBFData} />
      <SkillsComBookCall data={ibmData.BookCallData} />
      <SkillsComRemarkable data={ibmData.RemarkableData} />
    </div>
  );
}

export default SkillsIbmdb;
