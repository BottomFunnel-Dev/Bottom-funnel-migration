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
function SkillsCherrypy() {
  const cherryData = {
    title: "Cherrypy online services | Bottom Funnel Technologies PVT. LTD.",
    description:
      "Looking for top cherrypy developers? Our comprehensive list includes the best in the industry. Read on to know where to find the best cherrypy web application development companies",
    BannerData: {
      points: [
        "Guaranteed 160 man-hours",
        "Direct access to resources",
        "Agile development process",
        "Daily/Weekly/Monthly reporting",
        "Flexible working hours",
      ],
      icon: "/Images/skillsPhotos/cherrypySkillsPhotos/icon.webp",
      image: "/Images/skillsPhotos/banner.webp",
      title: ["Hire", "Cherrypy", "developer"],
      description:
        "Hire dedicated Cherrypy developers at a risk-free 14 days trial to build enterprise-grade software.",
    },
    desData: {
      title: "Cherrypy",
      image: "/Images/skillsPhotos/cherrypySkillsPhotos/cherrypy-logo.webp",
      description:
        "Bottom Funnel, an app that helps you build a business around your content. With modern tools like a website, newsletter, and paid subscriptions, it's the perfect way to grow your audience online! And with Ghost, you'll have an easy way to publish your content on the go without sacrificing quality.",
    },
    WhyAppData: {
      title: "POPULAR CHERRYPY WEB DEVELOPMENT SERVICES",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/cherrypySkillsPhotos/leaf.webp",
            alt: "cherrypySkillsPhotos/leaf.webp",
          },
          title: "Lightweight and minimal",

          description:
            "Ghost is a website builder that lets you design and develop responsive websites in any language quickly and easily. With our drag-and-drop interface, you'll be up and running in no time.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/cherrypySkillsPhotos/setting.webp",
            alt: "cherrypySkillsPhotos/setting.webp",
          },
          title: "Multiple themes",
          description:
            "With Ghost, you can create stunning websites in no time. It offers easy-to-use tools that allow anyone to build a website in an instant.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/cherrypySkillsPhotos/language.webp",
            alt: "cherrypySkillsPhotos/language.webp",
          },
          title: "Best use of python utilities",
          description:
            "You can now create your website in minutes with Ghost Website Builder! It comes packed with lots of features for you to use and makes it easy to customize the way you want.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/cherrypySkillsPhotos/mobile.webp",
            alt: "cherrypySkillsPhotos/mobile.webp",
          },
          title: "Free to use",
          description:
            "Ghost is an excellent choice for SEO-savvy businesses. Built-in SEO options help your website rank higher in search results, while built-in security safeguards your online reputation.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/cherrypySkillsPhotos/document.webp",
            alt: "cherrypySkillsPhotos/document.webp",
          },
          title: "Easy to understand",
          description:
            "Ghost is here to help! With its comprehensive plugin, you can export your data and import it into WordPress with just a few clicks. Ghost is one such plugin that makes transferring data easy.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/cherrypySkillsPhotos/fast-run.webp",
            alt: "cherrypySkillsPhotos/fast-run.webp",
          },
          title: "Fast performance",
          description:
            "Ghost is a lightweight alternative of WordPress that focuses on blogging. It's fast, reliable, and easy to use - meaning you can focus on enjoying blogging without worrying about technicalities.",
        },
      ],
    },
    WhyBFData: {
      title: "Why Bottom Funnel for cherrypy",
      image: "/Images/skillsPhotos/cherrypySkillsPhotos/big-left-image.webp",
      bulletPointData: [
        "We use an agile approach.",
        "Provides integrity and transparency.",
        "Commitments with NDA agreements.",
        "Flexible engagement models.",
        "Experienced and talented team of developers.",
        "Offers variety of exclusive cherrypy solutions.",
      ],
    },
    BookCallData: {
      title: "Need our cherrypy developers to build your application?",
      btn: "Book a call now",
      image: "/Images/skillsPhotos/cherrypySkillsPhotos/mid-banner.webp",
    },
    RemarkableData: {
      title: "benefits of using cherrypy",
      description: "",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/cubaSkillsPhotos/angle.webp",
            alt: "cubaSkillsPhotos/angle.webp",
          },
          title: "Quick learning curve",
        },
        {
          img: {
            src: "/Images/skillsPhotos/cubaSkillsPhotos/community.webp",
            alt: "cubaSkillsPhotos/community.webp",
          },
          title: "Flexibility",
        },
        {
          img: {
            src: "/Images/skillsPhotos/cubaSkillsPhotos/recycle.webp",
            alt: "cubaSkillsPhotos/recycle.webp",
          },
          title: "Quick swap approach",
        },
        {
          img: {
            src: "/Images/skillsPhotos/cubaSkillsPhotos/currency.webp",
            alt: "cubaSkillsPhotos/currency.webp",
          },
          title: "Affordable",
        },
        {
          img: {
            src: "/Images/skillsPhotos/cubaSkillsPhotos/center.webp",
            alt: "cubaSkillsPhotos/center.webp",
          },
          title: "Versatile",
        },
        {
          img: {
            src: "/Images/skillsPhotos/cubaSkillsPhotos/automated.webp",
            alt: "cubaSkillsPhotos/automated.webp",
          },
          title: "Secure & up-to-date",
        },
      ],
    },
  };

  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>{cherryData.title}</title>
        <meta name="description" content={cherryData.description} />
      </Head>
      <SkillsComBanner data={cherryData.BannerData} />
      <hr style={{ margin: 0 }} />
      <SkillsComDes DescrptionData={cherryData.desData} />
      <SkillsComWhyApp data={cherryData.WhyAppData} />
      <SkillsComWhyBF data={cherryData.WhyBFData} />
      <SkillsComBookCall data={cherryData.BookCallData} />
      <SkillsComRemarkable data={cherryData.RemarkableData} />
    </div>
  );
}

export default SkillsCherrypy;
