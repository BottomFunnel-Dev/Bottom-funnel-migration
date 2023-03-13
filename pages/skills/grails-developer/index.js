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
function SkillsGrails() {
  const grailsData = {
    title:
      "Best grails developers in the market | Bottom Funnel Technologies PVT. LTD.",
    description:
      "Bottom Funnel is a globally dominant company having highly experienced grails developers. Our grails development services can support you for all your different types of application development needs.",
    BannerData: {
      points: [
        "Guaranteed 160 man-hours",
        "Direct access to resources",
        "Agile development process",
        "Daily/Weekly/Monthly reporting",
        "Flexible working hours",
      ],
      icon: "/Images/skillsPhotos/grailsSkillsPhotos/icon.webp",
      image: "/Images/skillsPhotos/banner.webp",
      title: ["Hire", "Grails", "developer"],
      description:
        "Hire dedicated Grails developers at a risk-free 14 days trial to build enterprise-grade software.",
    },
    desData: {
      title: "Grails",
      image: "/Images/skillsPhotos/grailsSkillsPhotos/grails-logo.webp",
      description: `Grails is perfect for building high-productivity web apps that follow the 'coding by convention' paradigm. It provides a stable development environment and hides much of the configuration detail from the developer so they can focus on the code! Plus, compared to other frameworks such as Angular or React, Grails is easier to learn and use because it uses plain old JavaScript instead of its own language (Groovy).`,
    },
    WhyAppData: {
      title: "WHY GRAILS FOR APPLICATIONS DEVELOPMENT ?",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/grailsSkillsPhotos/strategy.webp",
            alt: "grailsSkillsPhotos/strategy.webp",
          },
          title: "Pragmatic Strategy",

          description: `BottomFunnel uses Groovy as its programming language, and compiles the code into Java bytecode so it can run on any Java enabled platform. This means you don't have to worry about learning new frameworks or languages when building your next amazing app.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/grailsSkillsPhotos/printing.webp",
            alt: "grailsSkillsPhotos/printing.webp",
          },
          title: "Build-in testing frameworkd",
          description: `The Grails community provides extensive assistance and support for both novice and advanced programmers. Almost, all questions and queries get answered by the active Grail community. This is how we develop software at Hoodline, so we know a thing or two about making Development Efficient!`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/grailsSkillsPhotos/java.webp",
            alt: "grailsSkillsPhotos/java.webp",
          },
          title: "Seamless java integration",
          description: `Grails is a web application framework that supports scaffolding of CRUD (Create, Read, Update and Delete) functionality. Why is this so important? Well, it's because the more user-friendly your website or app is, the higher chances of gaining traffic and thus growing your business.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/grailsSkillsPhotos/dns.webp",
            alt: "grailsSkillsPhotos/dns.webp",
          },
          title: "Dynamic doman class reloading",
          description: `Grails is very much in demand these days as it offers 700+ plugins that have been collaboratively developed by the core development team and enthusiastic Grail users. These plugins improve the integration for software developers and provide them with all the tools they need to build complex apps quickly and easily. `,
        },
        {
          img: {
            src: "/Images/skillsPhotos/grailsSkillsPhotos/liberary.webp",
            alt: "grailsSkillsPhotos/liberary.webp",
          },
          title: "Plugin liberary",
          description: `Grails plugin that makes internationalization (i18n) simpler. It provides a way to automatically convert existing software into another language via locale files. This saves time and money by avoiding the costs of rewriting the software on an already-maintained platform.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/grailsSkillsPhotos/leaf.webp",
            alt: "grailsSkillsPhotos/leaf.webp",
          },
          title: "Spring boot foundation",
          description: `With Grails, developers find it relatively easy to commence working on a new project. They are familiar with the Java language, and they know how to work with a modular approach. Grails web application framework brings a whole new level of excitement to web-oriented application development.`,
        },
      ],
    },
    WhyBFData: {
      title: "Why Bottom Funnel For Grails",
      image: "/Images/skillsPhotos/grailsSkillsPhotos/big-left-image.webp",
      bulletPointData: [
        "We use an agile approach.",
        "Provides integrity and transparency.",
        "Commitments with NDA agreements.",
        "Flexible engagement models.",
        "Experienced and talented team of developers.",
        "Offers variety of exclusive grails solutions.",
      ],
    },
    BookCallData: {
      title: "Need our grails developers to build your application?",
      btn: "Book a call now",
      image: "/Images/skillsPhotos/nodejsphotos/mid-banner.webp",
    },
    RemarkableData: {
      title: "benefits of using grails",
      description:
        "Grails allows you to create web applications quickly. Its scaffolding feature allows you to create new projects in minutes.",
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
            src: "/Images/skillsPhotos/nextjsSKillsPhotos/fast-run.webp",
            alt: "nextjsSKillsPhotos/fast-run.webp",
          },
          title: "Faster Time to Market",
        },
        {
          img: {
            src: "/Images/skillsPhotos/angularjsSkillsPhotos/reuseable-code.webp",
            alt: "angularjsSkillsPhotos/reuseable-code.webp",
          },
          title: "Reusability",
        },
      ],
    },
  };

  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>{grailsData.title}</title>
        <meta name="description" content={grailsData.description} />
      </Head>
      <SkillsComBanner data={grailsData.BannerData} />
      <hr style={{ margin: 0 }} />
      <SkillsComDes DescrptionData={grailsData.desData} />
      <SkillsComWhyApp data={grailsData.WhyAppData} />
      <SkillsComWhyBF data={grailsData.WhyBFData} />
      <SkillsComBookCall data={grailsData.BookCallData} />
      <SkillsComRemarkable data={grailsData.RemarkableData} />
    </div>
  );
}

export default SkillsGrails;
