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
function SkillsJquery() {
  const jqueryData = {
    title: "Best jquery developers in the market | Bottom Funnel",
    description:
      "Bottom Funnel is a leading company for jquery web development services having expert jquery developers to help you build sophisticated web applications rapidly at affordable prices",
    BannerData: {
      points: [
        "Guaranteed 160 man-hours",
        "Direct access to resources",
        "Agile development process",
        "Daily/Weekly/Monthly reporting",
        "Flexible working hours",
      ],
      icon: "/Images/skillsPhotos/jquerySkillsPhotos/icon.webp",
      image: "/Images/skillsPhotos/banner.webp",
      title: ["Hire", "Jquery", "developer"],
      description:
        "Bottom funnel offer you to hire professional Jquery expert developers on a contract and project basis with a risk-free 14-day trial.",
    },
    desData: {
      title: "Jquery",
      image: "/Images/skillsPhotos/jquerySkillsPhotos/jquery-logo.webp",
      description:
        "jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax. It is free, open-source software using the permissive MIT License. As of Aug 2022, jQuery is used by 77% of the 10 million most popular websites.",
    },
    WhyAppData: {
      title: "WHY JQUERY FOR APPLICATION DEVELOPEMENT ?",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/jquerySkillsPhotos/easy-understand.webp",
            alt: "jquerySkillsPhotos/easy-understand.webp",
          },
          title: "Easy to understand",

          description:
            "It has simpler code than JavaScript. So you just have to write few lines of code to do the same thing. In addition, builders ought not to be professionals in programming or web layout to create incredible patterns for their sites.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/jquerySkillsPhotos/speed-thing.webp",
            alt: "jquerySkillsPhotos/speed-thing.webp",
          },
          title: "Speed thing up",
          description:
            "Many search engines are considering page load time as one of the main factors because it affects SEO. For this reason, every developer in today's world wants to make codes as concise as possible. Best way to make your website faster.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/jquerySkillsPhotos/lot-plugins.webp",
            alt: "jquerySkillsPhotos/lot-plugins.webp",
          },
          title: "Lots of plugins",
          description:
            "jQuery was developed to save the time of developers by reducing the code. It takes loads of common duties that require many lines of js code to perform and wrap them into strategies that you may name with a single line of code.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/jquerySkillsPhotos/community.webp",
            alt: "jquerySkillsPhotos/community.webp",
          },
          title: "Community",
          description:
            "jQuery is open source (meaning anyone can contribute to or modify it) and has a large user community(opens in a new tab), meaning it is consistently supported and added-on to. jQuery plays well with any other JavaScript libraries.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/jquerySkillsPhotos/cross-support.webp",
            alt: "jquerySkillsPhotos/cross-support.webp",
          },
          title: "Animation becomes easy",
          description:
            "jQuery makes use of CSS, HTML, JavaScript, and AJAX. In this method, you could practice an optimization approach on your website online while not having to make unique changes for technologies like Flash.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/jquerySkillsPhotos/extension.webp",
            alt: "jquerySkillsPhotos/extension.webp",
          },
          title: "Extension",
          description:
            "The purpose why jQuery's recognition keeps developing with .Net developers. With the addition of the jQuery cell difficulty for Windows, you currently have all the development benefits of the jQuery library for the Windows platform.",
        },
      ],
    },
    WhyBFData: {
      title: "Why Bottom Funnel For Jquery",
      image: "/Images/skillsPhotos/jquerySkillsPhotos/big-left-image.webp",
      bulletPointData: [
        "We use an agile approach.",
        "Provides integrity and transparency.",
        "Commitments with NDA agreements.",
        "Flexible engagement models.",
        "Experienced and talented team of developers.",
        "Offers variety of exclusive jquery solutions.",
      ],
    },
    BookCallData: {
      title: "Need our jquery developers to build your application?",
      btn: "Book a call now",
      image: "/Images/skillsPhotos/nodejsphotos/mid-banner.webp",
    },
    RemarkableData: {
      title: "benefits of using jquery for web development",
      description:
        "Web developers typically use JavaScript to build the functionality they need into the websites they create. jQuery is a tool that offers web designers a lot of flexibility and power.",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/angularjsSkillsPhotos/effective-framework.webp",
            alt: "angularjsSkillsPhotos/effective-framework.webp",
          },
          title: "jQuery is widely used",
        },
        {
          img: {
            src: "/Images/skillsPhotos/codeigniterPhotos/simply-sol.webp",
            alt: "codeigniterPhotos/simply-sol.webp",
          },
          title: "Promotes simplicity",
        },
        {
          img: {
            src: "/Images/skillsPhotos/emberjSkillsPhotos/computer.webp",
            alt: "emberjSkillsPhotos/computer.webp",
          },
          title: "Cross-browser compatibility",
        },
        {
          img: {
            src: "/Images/skillsPhotos/larvelskillsPhotos/easy-develop.webp",
            alt: "larvelskillsPhotos/easy-develop.webp",
          },
          title: "Clean and beautiful syntax",
        },
        {
          img: {
            src: "/Images/skillsPhotos/angularjsSkillsPhotos/open-source.webp",
            alt: "angularjsSkillsPhotos/open-source.webp",
          },
          title: "Open-source library",
        },
        {
          img: {
            src: "/Images/skillsPhotos/springbootSkillsPhotos/software-application.webp",
            alt: "springbootSkillsPhotos/software-application.webp",
          },
          title: "Highly extensible",
        },
      ],
    },
  };

  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>{jqueryData.title}</title>
        <meta name="description" content={jqueryData.description} />
      </Head>
      <SkillsComBanner data={jqueryData.BannerData} />
      <hr style={{ margin: 0 }} />
      <SkillsComDes DescrptionData={jqueryData.desData} />
      <SkillsComWhyApp data={jqueryData.WhyAppData} />
      <SkillsComWhyBF data={jqueryData.WhyBFData} />
      <SkillsComBookCall data={jqueryData.BookCallData} />
      <SkillsComRemarkable data={jqueryData.RemarkableData} />
    </div>
  );
}

export default SkillsJquery;
