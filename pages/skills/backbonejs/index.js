import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { backbonejsData } from "../../../components/Data/SkillsData";

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
function SkillsBackbonejs() {
  const backbonejsData = {
    title:
      "Best backbonejs developers in the market | Bottom Funnel Technologies Pvt. Ltd",
    description:
      "Bottom Funnel's backbone.js web development services enhance your business with clean and attractive web applications. Contact our backbone.js developers now to get the most out of your business.",
    BannerData: {
      points: [
        "Guaranteed 160 man-hours",
        "Direct access to resources",
        "Agile development process",
        "Daily/Weekly/Monthly reporting",
        "Flexible working hours",
      ],
      icon: "/Images/skillsPhotos/backbonejsSkillsPhotos/icon.webp",
      image: "/Images/skillsPhotos/banner.webp",
      title: ["Hire", "Backbone.js", "developer"],
      description:
        "Bottom funnel offer you to hire professional Backbone.js expert developers on a contract and project basis with a risk-free 14-days trial.",
    },
    desData: {
      title: "Backbonejs",
      image: "/Images/skillsPhotos/backbonejsSkillsPhotos/backbone-logo.webp",
      description:
        "Backbone.js is a JavaScript rich-client web app framework based on the model-view-controller design paradigm, intended to connect to an API over a RESTful JSON interface. Backbone is known for being lightweight, as its only hard dependency is on one JavaScript library, Underscore.js, plus jQuery for use of the full library. It is designed for developing single-page web applications, and for keeping various parts of web applications synchronized.",
    },
    WhyAppData: {
      title: "WHY BACKBONEJS FOR APPLICATION DEVELOPMENT ?",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/backbonejsSkillsPhotos/computer-leaf.webp",
            alt: "backbonejsSkillsPhotos/computer-leaf.webp",
          },
          title: "Lightweight",

          description:
            "The weight of any project is essential when you talk about downloading speed and responsive applications. Backbone.js size is nearly 7.6kb.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/backbonejsSkillsPhotos/frames.webp",
            alt: "backbonejsSkillsPhotos/frames.webp",
          },
          title: "MV structure and abstract code",
          description:
            "Abstract code plays a crucial role in programming. It also incorporates Object Oriented Programming language.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/backbonejsSkillsPhotos/database-docs.webp",
            alt: "backbonejsSkillsPhotos/database-docs.webp",
          },
          title: "Lots of small libraries",
          description:
            "Extensibility is the core idea of Backbone.js. It includes several libraries that could be used whenever required.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/backbonejsSkillsPhotos/chatting.webp",
            alt: "backbonejsSkillsPhotos/chatting.webp",
          },
          title: "Event-driven communication",
          description:
            "The jQuery declarations become complex and get distributed over the place, making the code difficult to clutter and read. Backbone.js solves this through event-driven communication.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/backbonejsSkillsPhotos/api-cloud.webp",
            alt: "backbonejsSkillsPhotos/api-cloud.webp",
          },
          title: "API and documentation",
          description:
            "It is easy to learn due to several reasons. It has tons of documentation and guides that could be browsed from the internet. It is tested and supported by several todo applications.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/backbonejsSkillsPhotos/coding-screen.webp",
            alt: "backbonejsSkillsPhotos/coding-screen.webp",
          },
          title: "Conventions for coding style",
          description:
            "Conventions are a great choice when you have to introduce a common coding style. The more the developer would stick to backbone conventions, the developers have to code less.",
        },
      ],
    },
    WhyBFData: {
      title: "Why Bottom Funnel For Backbonejs",
      image: "/Images/skillsPhotos/backbonejsSkillsPhotos/big-left-image.webp",
      bulletPointData: [
        "We use an agile approach.",
        "Provides integrity and transparency.",
        "Commitments with NDA agreements.",
        "Flexible engagement models.",
        "Experienced and talented team of developers.",
        "Offers variety of exclusive backbonejs solutions.",
      ],
    },
    BookCallData: {
      title: "Need our backbonejs developers to build your application?",
      btn: "Book a call now",
      image: "/Images/skillsPhotos/nodejsphotos/mid-banner.webp",
    },
    RemarkableData: {
      title: "benefits of using backbonejs",
      description:
        "Backbone.js is one of the most widely used JavaScript libraries that rely on the MVP designer pattern. This is a lightweight library that provides models, routes and collections to configure her web application on the client side.",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/backbonejsSkillsPhotos/computer-leaf.webp",
            alt: "backbonejsSkillsPhotos/computer-leaf.webp",
          },
          title: "Lightweight",
        },
        {
          img: {
            src: "/Images/skillsPhotos/cakephpPhotos/mvc-pattern.webp",
            alt: "cakephpPhotos/mvc-pattern.webp",
          },
          title: "MVP Design",
        },
        {
          img: {
            src: "/Images/skillsPhotos/backbonejsSkillsPhotos/chatting.webp",
            alt: "backbonejsSkillsPhotos/chatting.webp",
          },
          title: "Event-driven",
        },
      ],
    },
  };

  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>{backbonejsData.title}</title>
        <meta name="description" content={backbonejsData.description} />
      </Head>
      <SkillsComBanner data={backbonejsData.BannerData} />
      <hr style={{ margin: 0 }} />
      <SkillsComDes DescrptionData={backbonejsData.desData} />
      <SkillsComWhyApp data={backbonejsData.WhyAppData} />
      <SkillsComWhyBF data={backbonejsData.WhyBFData} />
      <SkillsComBookCall data={backbonejsData.BookCallData} />
      <SkillsComRemarkable data={backbonejsData.RemarkableData} />
    </div>
  );
}

export default SkillsBackbonejs;
