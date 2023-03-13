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
function SkillsIris() {
  const irisData = {
    title: "iris framework services | Bottom Funnel Technologies PVT. LTD.",
    description:
      "Looking for the best iris web application development company? Look no further. Our experience in developing top-notch web applications has led us to become the top choice for all such projects. Read on to know how",
    BannerData: {
      points: [
        "Guaranteed 160 man-hours",
        "Direct access to resources",
        "Agile development process",
        "Daily/Weekly/Monthly reporting",
        "Flexible working hours",
      ],
      icon: "/Images/skillsPhotos/irisSkillsPhotos/icon.webp",
      image: "/Images/skillsPhotos/banner.webp",
      title: ["Hire", "Iris", "developer"],
      description:
        "Hire dedicated Iris developers at a risk-free 14 days trial to build enterprise-grade software.",
    },
    desData: {
      title: "Iris",
      image: "/Images/skillsPhotos/irisSkillsPhotos/iris-logo.webp",
      description:
        "Bottom Funnel, an app that helps you build a business around your content. With modern tools like a website, newsletter, and paid subscriptions, it's the perfect way to grow your audience online! And with Ghost, you'll have an easy way to publish your content on the go without sacrificing quality.",
    },
    WhyAppData: {
      title: "POPULAR IRIS WEB DEVELOPMENT SERVICES",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/irisSkillsPhotos/right.webp",
            alt: "irisSkillsPhotos/right.webp",
          },
          title: "Simplicity",

          description:
            "Ghost is a website builder that lets you design and develop responsive websites in any language quickly and easily. With our drag-and-drop interface, you'll be up and running in no time.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/irisSkillsPhotos/cloud.webp",
            alt: "irisSkillsPhotos/cloud.webp",
          },
          title: "Open source",
          description:
            "With Ghost, you can create stunning websites in no time. It offers easy-to-use tools that allow anyone to build a website in an instant.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/irisSkillsPhotos/fast-run.webp",
            alt: "irisSkillsPhotos/fast-run.webp",
          },
          title: "Focus on performance",
          description:
            "You can now create your website in minutes with Ghost Website Builder! It comes packed with lots of features for you to use and makes it easy to customize the way you want.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/irisSkillsPhotos/analysis.webp",
            alt: "irisSkillsPhotos/analysis.webp",
          },
          title: "Targeting Vision",
          description:
            "Ghost is an excellent choice for SEO-savvy businesses. Built-in SEO options help your website rank higher in search results, while built-in security safeguards your online reputation.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/irisSkillsPhotos/grid.webp",
            alt: "irisSkillsPhotos/grid.webp",
          },
          title: "Multiple templates",
          description:
            "Ghost is here to help! With its comprehensive plugin, you can export your data and import it into WordPress with just a few clicks. Ghost is one such plugin that makes transferring data easy.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/irisSkillsPhotos/center.webp",
            alt: "irisSkillsPhotos/center.webp",
          },
          title: "Smart Compressions",
          description:
            "Ghost is a lightweight alternative of WordPress that focuses on blogging. It's fast, reliable, and easy to use - meaning you can focus on enjoying blogging without worrying about technicalities.",
        },
      ],
    },
    WhyBFData: {
      title: "Why Bottom Funnel for iris",
      image: "/Images/skillsPhotos/irisSkillsPhotos/big-left-image.webp",
      bulletPointData: [
        "We use an agile approach.",
        "Provides integrity and transparency.",
        "Commitments with NDA agreements.",
        "Flexible engagement models.",
        "Experienced and talented team of developers.",
        "Offers variety of exclusive iris solutions.",
      ],
    },
    BookCallData: {
      title: "Need our iris developers to build your application?",
      btn: "Book a call now",
      image: "/Images/skillsPhotos/yiiSkillsPhotos/mid-banner.webp",
    },
    RemarkableData: {
      title: "benefits of using iris",
      description: "",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/irisSkillsPhotos/meter.webp",
            alt: "irisSkillsPhotos/meter.webp",
          },
          title: "Fast processing",
        },
        {
          img: {
            src: "/Images/skillsPhotos/irisSkillsPhotos/setting.webp",
            alt: "irisSkillsPhotos/setting.webp",
          },
          title: "Customizable",
        },
        {
          img: {
            src: "/Images/skillsPhotos/irisSkillsPhotos/recycle.webp",
            alt: "irisSkillsPhotos/recycle.webp",
          },
          title: "Multi work adaptivity",
        },
        {
          img: {
            src: "/Images/skillsPhotos/irisSkillsPhotos/currency.webp",
            alt: "irisSkillsPhotos/currency.webp",
          },
          title: "Affordable",
        },
        {
          img: {
            src: "/Images/skillsPhotos/irisSkillsPhotos/versatile.webp",
            alt: "irisSkillsPhotos/versatile.webp",
          },
          title: "Versatile",
        },
        {
          img: {
            src: "/Images/skillsPhotos/irisSkillsPhotos/automated.webp",
            alt: "irisSkillsPhotos/automated.webp",
          },
          title: "Secure & up-to-date",
        },
      ],
    },
  };

  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>{irisData.title}</title>
        <meta name="description" content={irisData.description} />
      </Head>
      <SkillsComBanner data={irisData.BannerData} />
      <hr style={{ margin: 0 }} />
      <SkillsComDes DescrptionData={irisData.desData} />
      <SkillsComWhyApp data={irisData.WhyAppData} />
      <SkillsComWhyBF data={irisData.WhyBFData} />
      <SkillsComBookCall data={irisData.BookCallData} />
      <SkillsComRemarkable data={irisData.RemarkableData} />
    </div>
  );
}

export default SkillsIris;
