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
function Skillshanami() {
  const hanamiData = {
    title: "hanami framework services | Bottom Funnel Technologies PVT. LTD.",
    description:
      "Looking for the best hanami developers? Look no further than Bottom Funnel. Our team of experienced professionals has extensive experience in providing top-noting web application development services.",
    BannerData: {
      points: [
        "Guaranteed 160 man-hours",
        "Direct access to resources",
        "Agile development process",
        "Daily/Weekly/Monthly reporting",
        "Flexible working hours",
      ],
      icon: "/Images/skillsPhotos/hanamiSkillsPhotos/icon.webp",
      image: "/Images/skillsPhotos/banner.webp",
      title: ["Hire", "Hanami", "developer"],
      description:
        "Hire dedicated Hanami developers at a risk-free 14 days trial to build enterprise-grade software.",
    },
    desData: {
      title: "Hanami",
      image: "/Images/skillsPhotos/hanamiSkillsPhotos/hanami-logo.webp",
      description:
        "Bottom Funnel, an app that helps you build a business around your content. With modern tools like a website, newsletter, and paid subscriptions, it's the perfect way to grow your audience online! And with Ghost, you'll have an easy way to publish your content on the go without sacrificing quality.",
    },
    WhyAppData: {
      title: "POPULAR HANAMI WEB DEVELOPMENT SERVICES",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/hanamiSkillsPhotos/thinking.webp",
            alt: "hanamiSkillsPhotos/thinking.webp",
          },
          title: "Multi tasking",

          description:
            "Ghost is a website builder that lets you design and develop responsive websites in any language quickly and easily. With our drag-and-drop interface, you'll be up and running in no time.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/hanamiSkillsPhotos/speed.webp",
            alt: "hanamiSkillsPhotos/speed.webp",
          },
          title: "Fast response times",
          description:
            "With Ghost, you can create stunning websites in no time. It offers easy-to-use tools that allow anyone to build a website in an instant.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/hanamiSkillsPhotos/secure.webp",
            alt: "hanamiSkillsPhotos/secure.webp",
          },
          title: "Secure by default",
          description:
            "You can now create your website in minutes with Ghost Website Builder! It comes packed with lots of features for you to use and makes it easy to customize the way you want.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/hanamiSkillsPhotos/computer-leaf.webp",
            alt: "hanamiSkillsPhotos/computer-leaf.webp",
          },
          title: "Full-featured, but lightweight",
          description:
            "Ghost is an excellent choice for SEO-savvy businesses. Built-in SEO options help your website rank higher in search results, while built-in security safeguards your online reputation.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/hanamiSkillsPhotos/right.webp",
            alt: "hanamiSkillsPhotos/right.webp",
          },
          title: "Simple and productive",
          description:
            "Ghost is here to help! With its comprehensive plugin, you can export your data and import it into WordPress with just a few clicks. Ghost is one such plugin that makes transferring data easy.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/hanamiSkillsPhotos/checked.webp",
            alt: "hanamiSkillsPhotos/checked.webp",
          },
          title: "Easy to use",
          description:
            "Ghost is a lightweight alternative of WordPress that focuses on blogging. It's fast, reliable, and easy to use - meaning you can focus on enjoying blogging without worrying about technicalities.",
        },
      ],
    },
    WhyBFData: {
      title: "Why Bottom Funnel for hanami",
      image: "/Images/skillsPhotos/hanamiSkillsPhotos/big-left-image.webp",
      bulletPointData: [
        "We use an agile approach.",
        "Provides integrity and transparency.",
        "Commitments with NDA agreements.",
        "Flexible engagement models.",
        "Experienced and talented team of developers.",
        "Offers variety of exclusive hanami solutions.",
      ],
    },
    BookCallData: {
      title: "Need our hanami developers to build your application?",
      btn: "Book a call now",
      image: "/Images/skillsPhotos/yiiSkillsPhotos/mid-banner.webp",
    },
    RemarkableData: {
      title: "benefits of using hanami",
      description: "",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/gorillaSkillsPhotos/currency.webp",
            alt: "gorillaSkillsPhotos/currency/webp",
          },
          title: "Affordable",
        },
        {
          img: {
            src: "/Images/skillsPhotos/gorillaSkillsPhotos/versatile.webp",
            alt: "gorillaSkillsPhotos/versatile.webp",
          },
          title: "Versatile",
        },
        {
          img: {
            src: "/Images/skillsPhotos/gorillaSkillsPhotos/automated.webp",
            alt: "GorillaSkillsPhotos/automated.webp",
          },
          title: "Secure & up-to-date",
        },
        {
          img: {
            src: "/Images/skillsPhotos/gorillaSkillsPhotos/meter.webp",
            alt: "gorillaSkillsPhotos/meter.webp",
          },
          title: "Fast processing",
        },
        {
          img: {
            src: "/Images/skillsPhotos/gorillaSkillsPhotos/setting.webp",
            alt: "gorillaSkillsPhotos/setting.webp",
          },
          title: "Customizable",
        },
        {
          img: {
            src: "/Images/skillsPhotos/gorillaSkillsPhotos/recycle.webp",
            alt: "gorillaSkillsPhotos/recycle.webp",
          },
          title: "Multi work adoptivity",
        },
      ],
    },
  };

  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>{hanamiData.title}</title>
        <meta name="description" content={hanamiData.description} />
      </Head>
      <SkillsComBanner data={hanamiData.BannerData} />
      <hr style={{ margin: 0 }} />
      <SkillsComDes DescrptionData={hanamiData.desData} />
      <SkillsComWhyApp data={hanamiData.WhyAppData} />
      <SkillsComWhyBF data={hanamiData.WhyBFData} />
      <SkillsComBookCall data={hanamiData.BookCallData} />
      <SkillsComRemarkable data={hanamiData.RemarkableData} />
    </div>
  );
}

export default Skillshanami;
