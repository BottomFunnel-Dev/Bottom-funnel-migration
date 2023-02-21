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
function SkillsJSF() {
  const jsfData = {
    title:
      "Best jsf developers in the market | Bottom Funnel Technologies PVT. LTD.",
    description:
      "Bottom Funnel's jsf developers provides reliable and high-quality java web application development services using jsf framework to cater to all your stable application needs.",
    BannerData: {
      points: [
        "Guaranteed 160 man-hours",
        "Direct access to resources",
        "Agile development process",
        "Daily/Weekly/Monthly reporting",
        "Flexible working hours",
      ],
      icon: "/Images/skillsPhotos/jsfSkillsPhotos/icon.webp",
      image: "/Images/skillsPhotos/banner.webp",
      title: ["Hire", "JSF", "developer"],
      description:
        "Hire dedicated JSF developers at a risk-free 14 days trial to build enterprise-grade software.",
    },
    desData: {
      title: "JSF",
      image: "/Images/skillsPhotos/jsfSkillsPhotos/jsf-logo.webp",
      description: `Jakarta Faces is a Java specification for building component-based user interfaces for web applications and was formalized as a standard through the Java Community Process. It is also an MVC web framework that simplifies the construction of user interfaces(UI) for server-based applications by using reusable UI components on a page. In this tutorial, we will cover some of its more popular features, like Ajax based communication, data binding with change detection etc.`,
    },
    WhyAppData: {
      title: "WHY JSF FOR APPICATIONS DEVELOPMENT ?",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/jsfSkillsPhotos/help.webp",
            alt: "jsfSkillsPhotos/help.webp",
          },
          title: "Default exception handling",

          description: `When it comes to bug-free applications, JavaServer Faces offers a default exception handling mechanism. However, this might not be enough for you in case of complex situations where multiple pages and components need to be handled in different ways.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/jsfSkillsPhotos/html.webp",
            alt: "jsfSkillsPhotos/html.webp",
          },
          title: "Support HTML5",
          description: `With JSF2.2, you can now easily add these features with ease. By including attributes of HTML5 to your components, you will be able to take full advantage of all its awesome capabilities. For example, using video and audio tags, and CSS3 animations, etc.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/jsfSkillsPhotos/coding.webp",
            alt: "jsfSkillsPhotos/coding.webp",
          },
          title: "Ease and rapid web development",
          description: `When it comes to bug-free applications, JavaServer Faces offers a default exception handling mechanism. However, this might not be enough for you in case of complex situations where multiple pages and components need to be handled in different ways.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/jsfSkillsPhotos/security.webp",
            alt: "jsfSkillsPhotos/security.webp",
          },
          title: "Security",
          description: `Expression Languages have been making waves in the web development world over the past few years. Here's a brief explanation of what they are, why you should consider using them and how they can help improve your projects.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/jsfSkillsPhotos/ajax.webp",
            alt: "jsfSkillsPhotos/ajax.webp",
          },
          title: "Inbuilt AJAX support",
          description: `Ajax is an HTML5 technique where data is exchanged between the client and server using HTTP XML messages. With this rapid approach, it becomes possible for your website to load data faster without compromising on the response time.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/jsfSkillsPhotos/database.webp",
            alt: "jsfSkillsPhotos/database.webp",
          },
          title: "Templating",
          description: `While annotating a to-do list on your browser, you'll think that it's not possible to do it any other way. But with BottomFunnel, you can now validate tasks using annotations in your Managed Bean rather than through HTML page.`,
        },
      ],
    },
    WhyBFData: {
      title: "Why Bottom Funnel For JSF",
      image: "/Images/skillsPhotos/jsfSkillsPhotos/big-left-image.webp",
      bulletPointData: [
        "We use an agile approach.",
        "Provides integrity and transparency.",
        "Commitments with NDA agreements.",
        "Flexible engagement models.",
        "Experienced and talented team of developers.",
        "Offers variety of exclusive JSF solutions.",
      ],
    },
    BookCallData: {
      title: "Need our JSF developers to build your application?",
      btn: "Book a call now",
      image: "/Images/skillsPhotos/nodejsphotos/mid-banner.webp",
    },
    RemarkableData: {
      title: "benefits of using JSF",
      description:
        "JSF is becoming more and more popular as a framework for developing the user interface layer, and many architects and companies assume that Struts will become obsolete and JSF will catch up with the market. I don't know if that is true at this point.",
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
            src: "/Images/skillsPhotos/cakephpPhotos/mvc-pattern.webp",
            alt: "cakephpPhotos/mvc-pattern.webp",
          },
          title: "MVC design",
        },
        {
          img: {
            src: "/Images/skillsPhotos/angularjsSkillsPhotos/reuseable-code.webp",
            alt: "angularjsSkillsPhotos/reuseable-code.webp",
          },
          title: "Reusable UI components",
        },
      ],
    },
  };

  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>{jsfData.title}</title>
        <meta name="description" content={jsfData.description} />
      </Head>
      <SkillsComBanner data={jsfData.BannerData} />
      <hr style={{ margin: 0 }} />
      <SkillsComDes DescrptionData={jsfData.desData} />
      <SkillsComWhyApp data={jsfData.WhyAppData} />
      <SkillsComWhyBF data={jsfData.WhyBFData} />
      <SkillsComBookCall data={jsfData.BookCallData} />
      <SkillsComRemarkable data={jsfData.RemarkableData} />
    </div>
  );
}

export default SkillsJSF;
