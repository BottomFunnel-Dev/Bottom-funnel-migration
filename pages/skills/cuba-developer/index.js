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
function SkillsCuba() {
  const cubaData = {
    title: "Cuba frameword services | Bottom Funnel Technologies PVT. LTD.",
    description:
      "Looking for the best cuba developers? We've rounded up some of the top companies to hire for your web application development needs. Read on to know about their features.",
    BannerData: {
      points: [
        "Guaranteed 160 man-hours",
        "Direct access to resources",
        "Agile development process",
        "Daily/Weekly/Monthly reporting",
        "Flexible working hours",
      ],
      icon: "/Images/skillsPhotos/cubaSkillsPhotos/icon.webp",
      image: "/Images/skillsPhotos/banner.webp",
      title: ["Hire", "Cuba", "developer"],
      description:
        "Hire dedicated Cuba developers at a risk-free 14 days trial to build enterprise-grade software.",
    },
    desData: {
      title: "Cuba",
      image: "/Images/skillsPhotos/cubaSkillsPhotos/cuba-logo.webp",
      description:
        "Bottom Funnel, an app that helps you build a business around your content. With modern tools like a website, newsletter, and paid subscriptions, it's the perfect way to grow your audience online! And with Ghost, you'll have an easy way to publish your content on the go without sacrificing quality.",
    },
    WhyAppData: {
      title: "POPULAR WEEBLY WEB DEVELOPMENT SERVICES",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/backbonejsSkillsPhotos/computer-leaf.webp",
            alt: "backbonejsSkillsPhotos/computer-leaf.webp",
          },
          title: "Lightweight",

          description:
            "Ghost is a website builder that lets you design and develop responsive websites in any language quickly and easily. With our drag-and-drop interface, you'll be up and running in no time.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/cubaSkillsPhotos/building.webp",
            alt: "cubaSkillsPhotos/building.webp",
          },
          title: "Enterprise apps development",
          description:
            "With Ghost, you can create stunning websites in no time. It offers easy-to-use tools that allow anyone to build a website in an instant.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/cubaSkillsPhotos/fast-run.webp",
            alt: "cubaSkillsPhotos/fast-run.webp",
          },
          title: "Powerful pre-built components",
          description:
            "You can now create your website in minutes with Ghost Website Builder! It comes packed with lots of features for you to use and makes it easy to customize the way you want.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/cubaSkillsPhotos/leaf.webp",
            alt: "cubaSkillsPhotos/leaf.webp",
          },
          title: "Built to fit the user's environment",
          description:
            "Ghost is an excellent choice for SEO-savvy businesses. Built-in SEO options help your website rank higher in search results, while built-in security safeguards your online reputation.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/cubaSkillsPhotos/people.webp",
            alt: "cubaSkillsPhotos/people.webp",
          },
          title: "Community support",
          description:
            "Ghost is here to help! With its comprehensive plugin, you can export your data and import it into WordPress with just a few clicks. Ghost is one such plugin that makes transferring data easy.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/cubaSkillsPhotos/advance.webp",
            alt: "cubaSkillsPhotos/advance.webp",
          },
          title: "Built-in management interface",
          description:
            "Ghost is a lightweight alternative of WordPress that focuses on blogging. It's fast, reliable, and easy to use - meaning you can focus on enjoying blogging without worrying about technicalities.",
        },
      ],
    },
    WhyBFData: {
      title: "Why Bottom Funnel for cuba",
      image: "/Images/skillsPhotos/cubaSkillsPhotos/big-left-image.webp",
      bulletPointData: [
        "We use an agile approach.",
        "Provides integrity and transparency.",
        "Commitments with NDA agreements.",
        "Flexible engagement models.",
        "Experienced and talented team of developers.",
        "Offers variety of exclusive cuba solutions.",
      ],
    },
    BookCallData: {
      title: "Need our cuba developers to build your application?",
      btn: "Book a call now",
      image: "/Images/skillsPhotos/cubaSkillsPhotos/mid-banner.webp",
    },
    RemarkableData: {
      title: "benefits of using cuba",
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
        <title>{cubaData.title}</title>
        <meta name="description" content={cubaData.description} />
      </Head>
      <SkillsComBanner data={cubaData.BannerData} />
      <hr style={{ margin: 0 }} />
      <SkillsComDes DescrptionData={cubaData.desData} />
      <SkillsComWhyApp data={cubaData.WhyAppData} />
      <SkillsComWhyBF data={cubaData.WhyBFData} />
      <SkillsComBookCall data={cubaData.BookCallData} />
      <SkillsComRemarkable data={cubaData.RemarkableData} />
    </div>
  );
}

export default SkillsCuba;
