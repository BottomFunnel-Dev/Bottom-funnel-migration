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
function SkillsCassandra() {
  const cassandraData = {
    title: "Best cassandra developers in the market | Bottom Funnel",
    description:
      "Looking to become aCassandra developer? Interested in working on an open-source NoSQL database? Wondering how to get started with the technology? Read on for valuable info on becoming a Cassandra developer.",
    BannerData: {
      points: [
        "Guaranteed 160 man-hours",
        "Direct access to resources",
        "Agile development process",
        "Daily/Weekly/Monthly reporting",
        "Flexible working hours",
      ],
      icon: "/Images/skillsPhotos/cassandraSkillsPhotos/icon.webp",
      image: "/Images/skillsPhotos/banner.webp",
      title: ["Hire", "Cassandra", "developer"],
      description:
        "Bottom funnel offer you to hire professional Cassandra expert developers on a contract and project basis with a risk-free 14-day trial.",
    },
    desData: {
      title: "Cassandra",
      image: "/Images/skillsPhotos/cassandraSkillsPhotos/cassandra-logo.webp",
      description:
        "Cassandra is a free, cross-platform, open-source developer platform that has been designed to support many different types of application development needs. This system uses various languages, editors and libraries which can be used for web, mobile, desktop games and other projects too. The .NET framework has been developed based on certain guidelines to create applications ranging from small scale website creation all the way up to large enterprise level client programmes",
    },
    WhyAppData: {
      title: "POPULAR CASSANDRA WEB DEVELOPMENT SERVICES",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/cassandraSkillsPhotos/box-dimension.webp",
            alt: "cassandraSkillsPhotos/box-dimension.webp",
          },
          title: "Distributed footprint",

          description:
            "Engage in web page design and development that is dynamic, rich, responsive and offers multiple languages for your B2B and B2C website. .Net uses asynchronous programming to make sure your pages load quickly.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/cassandraSkillsPhotos/qr-code.webp",
            alt: "cassandraSkillsPhotos/qr-code.webp",
          },
          title: "Better user experience",
          description:
            "The .Net framework makes XML web application development easy and efficient by providing powerful tools for development, data binding, validation, routing, security, and more. it creates compatible, safe and robust applications.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/cassandraSkillsPhotos/shut-button.webp",
            alt: "cassandraSkillsPhotos/shut-button.webp",
          },
          title: "Fault tolerance",
          description:
            "CMS web application development provides you with the latest and most robust technologies so that your applications run effectively and securely to manage the content in the most effective way.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/cassandraSkillsPhotos/open-source.webp",
            alt: "cassandraSkillsPhotos/open-source.webp",
          },
          title: "Open source",
          description:
            "E-commerce web application development using .NET can provide you with industry-standard solutions that will secure your online shopping and protect your data. It makes the application convenient and easy to use.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/cassandraSkillsPhotos/pip.webp",
            alt: "cassandraSkillsPhotos/pip.webp",
          },
          title: "Scalability",
          description:
            "By using .NET for shopping cart web application development, you will have a custom designed shopping cart that that is user-friendly and dynamic with wide range of features such as product management, currecy conversion, etc.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/cassandraSkillsPhotos/fast-run.webp",
            alt: "cassandraSkillsPhotos/fast-run.webp",
          },
          title: "Fast writes",
          description:
            "Microsoft SQL is a web-based database used to store and search for data from websites. It operates best with .NET sites and provides an interactive analysis of users' profiles that are updates at all.",
        },
      ],
    },
    WhyBFData: {
      title: "Why Bottom Funnel For cassandra",
      image: "/Images/skillsPhotos/cassandraSkillsPhotos/big-left-image.webp",
      bulletPointData: [
        "We use an agile approach.",
        "Provides integrity and transparency.",
        "Commitments with NDA agreements.",
        "Flexible engagement models.",
        "Experienced and talented team of developers.",
        "Offers variety of exclusive cassandra solutions.",
      ],
    },
    BookCallData: {
      title: "Need our cassandra developers to build your application?",
      btn: "Book a call now",
      image: "/Images/skillsPhotos/nodejsphotos/mid-banner.webp",
    },
    RemarkableData: {
      title: "benefits of using cassandra",
      description:
        "Cassandra enables businesses to manage large amounts of data quickly and provides users with the following benefits: It can quickly store large amounts of incoming data and handle hundreds of thousands of writes per second.",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/nextjsSkillsPhotos/fast-run.webp",
            alt: "nextjsSkillsPhotos/fast-run.webp",
          },
          title: "Performance - speed",
        },
        {
          img: {
            src: "/Images/skillsPhotos/elasticSkillsPhotos/pip.webp",
            alt: "elasticSkillsPhotos/pip.webp",
          },
          title: "Scalability",
        },
        {
          img: {
            src: "/Images/skillsPhotos/nodejsphotos/clock.webp",
            alt: "nodejsphotos/clock.webp",
          },
          title: "Reliability",
        },
      ],
    },
  };

  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>{cassandraData.title}</title>
        <meta name="description" content={cassandraData.description} />
      </Head>
      <SkillsComBanner data={cassandraData.BannerData} />
      <hr style={{ margin: 0 }} />
      <SkillsComDes DescrptionData={cassandraData.desData} />
      <SkillsComWhyApp data={cassandraData.WhyAppData} />
      <SkillsComWhyBF data={cassandraData.WhyBFData} />
      <SkillsComBookCall data={cassandraData.BookCallData} />
      <SkillsComRemarkable data={cassandraData.RemarkableData} />
    </div>
  );
}

export default SkillsCassandra;
