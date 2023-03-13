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
function SkillsGhost() {
  const GhostData = {
    title: "Ghost Website Development | Hire web developer | Bottom Funnel",
    description:
      "Bottom Funnel, an app that helps you build a business around your content. With modern tools like a website, newsletter, and paid subscriptions, it's the perfect way to grow your audience online",
    BannerData: {
      points: [
        "Guaranteed 160 man-hours",
        "Direct access to resources",
        "Agile development process",
        "Daily/Weekly/Monthly reporting",
        "Flexible working hours",
      ],
      icon: "/Images/skillsPhotos/ghostPhotos/icon.webp",
      image: "/Images/skillsPhotos/banner.webp",
      title: ["Hire", "Ghost", "developer"],
      description:
        "Bottom funnel offer you to hire professional Ghost expert developers on a contract and project basis with a risk-free 14-day trial.",
    },
    desData: {
      title: "Ghost",
      image: "/Images/skillsPhotos/ghostPhotos/ghost-logo.webp",
      description:
        "Bottom Funnel, an app that helps you build a business around your content. With modern tools like a website, newsletter, and paid subscriptions, it's the perfect way to grow your audience online! And with Ghost, you'll have an easy way to publish your content on the go without sacrificing quality.",
    },
    WhyAppData: {
      title: "POPULAR GHOST WEB DEVELOPMENT SERVICES",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/ghostPhotos/leafs.webp",
            alt: "ghostPhotos/leafs.webp",
          },
          title: "Lightweight and minimal",

          description:
            "Ghost is a website builder that lets you design and develop responsive websites in any language quickly and easily. With our drag-and-drop interface, you'll be up and running in no time.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/ghostPhotos/aritficial.webp",
            alt: "ghostPhotos/aritficial.webp",
          },
          title: "Integrations",
          description:
            "With Ghost, you can create stunning websites in no time. It offers easy-to-use tools that allow anyone to build a website in an instant.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/ghostPhotos/setting.webp",
            alt: "ghostPhotos/setting.webp",
          },
          title: "Easy to customize and themes",
          description:
            "You can now create your website in minutes with Ghost Website Builder! It comes packed with lots of features for you to use and makes it easy to customize the way you want.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/ghostPhotos/stars.webp",
            alt: "ghostPhotos/stars.webp",
          },
          title: "SEO friendly",
          description:
            "Ghost is an excellent choice for SEO-savvy businesses. Built-in SEO options help your website rank higher in search results, while built-in security safeguards your online reputation.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/ghostPhotos/document.webp",
            alt: "ghostPhotos/document.webp",
          },
          title: "Good documentation",
          description:
            "Ghost is here to help! With its comprehensive plugin, you can export your data and import it into WordPress with just a few clicks. Ghost is one such plugin that makes transferring data easy.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/ghostPhotos/fast-run.webp",
            alt: "ghostPhotos/fast-run.webp",
          },
          title: "Fast performance",
          description:
            "Ghost is a lightweight alternative of WordPress that focuses on blogging. It's fast, reliable, and easy to use - meaning you can focus on enjoying blogging without worrying about technicalities.",
        },
      ],
    },
    WhyBFData: {
      title: "Why Bottom Funnel for ghost",
      image: "/Images/skillsPhotos/ghostPhotos/big-left-image.webp",
      bulletPointData: [
        "We use an agile approach.",
        "Provides integrity and transparency.",
        "Commitments with NDA agreements.",
        "Flexible engagement models.",
        "Experienced and talented team of developers.",
        "Offers variety of exclusive ghost solutions.",
      ],
    },
    BookCallData: {
      title: "Need our ghost developers to build your application?",
      btn: "Book a call now",
      image: "/Images/skillsPhotos/ghostPhotos/mid-banner.webp",
    },
    RemarkableData: {
      title: "benefits of using ghost for website building",
      description: "",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/nextjsSkillsPhotos/fast-run.webp",
            alt: "nextjsSkillsPhotos/fast-run.webp",
          },
          title: "Fast performance",
        },
        {
          img: {
            src: "/Images/skillsPhotos/ghostPhotos/stars.webp",
            alt: "ghostPhotos/stars.webp",
          },
          title: "SEO friendly",
        },
        {
          img: {
            src: "/Images/skillsPhotos/ghostPhotos/setting.webp",
            alt: "ghostPhotos/setting.webp",
          },
          title: "Easy to customise",
        },
      ],
    },
  };

  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>{GhostData.title}</title>
        <meta name="description" content={GhostData.description} />
      </Head>
      <SkillsComBanner data={GhostData.BannerData} />
      <hr style={{ margin: 0 }} />
      <SkillsComDes DescrptionData={GhostData.desData} />
      <SkillsComWhyApp data={GhostData.WhyAppData} />
      <SkillsComWhyBF data={GhostData.WhyBFData} />
      <SkillsComBookCall data={GhostData.BookCallData} />
      <SkillsComRemarkable data={GhostData.RemarkableData} />
    </div>
  );
}

export default SkillsGhost;
