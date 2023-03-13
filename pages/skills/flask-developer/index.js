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
function SkillsFlask() {
  const flaskData = {
    title: "Best flask developers in the market | Bottom Funnel",
    description:
      "Get reliable Flask development services which can create sophisticated micro web applications for you. Bottom Funnel's expert Flask web developers can create flask applications according to your business needs.",
    BannerData: {
      points: [
        "Guranteed 160 man-hours",
        "Direct access to resources",
        "Agile development process",
        "Daily/Weekly/Monthly reporting",
        "Flexible working hours",
      ],
      icon: "/Images/skillsPhotos/flaskSkillsPhotos/icon.webp",
      image: "/Images/skillsPhotos/banner.webp",
      title: ["Hire", "Flask", "developer"],
      description:
        "Hire dedicated Flask developers at a risk-free 14 days trial to build enterprise-grade software.",
    },
    desData: {
      title: "Flask",
      image: "/Images/skillsPhotos/flaskSkillsPhotos/flask-logo.webp",
      description: `Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries. It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions. 
      However, Flask supports extensions that can add application features as if they were implemented in Flask itself. Extensions exist for object-relational mappers, form validation, upload handling, and various other features you might need for your project.`,
    },
    WhyAppData: {
      title: "WHY FLASK FOR APPLICATION DEVELOPMENT ?",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/flaskSkillsPhotos/unicode.webp",
            alt: "flaskSkillsPhotos/unicode.webp",
          },
          title: "Improved SEO Performance",

          description: `Flask is one of the most popular frameworks for handling web traffic. It's a flexible solution that lets you scale your business as your needs grow. With Flask, you can handle a large number of requests without slowing down or sacrificing performance.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/flaskSkillsPhotos/printing.webp",
            alt: "flaskSkillsPhotos/printing.webp",
          },
          title: "Integrated support for unit testing",
          description: `Flask is one such project that has gained immense popularity over time because it provides everything expected out of a modern web framework. It has features like authentication, CSRF protection, internationalization support, etc.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/flaskSkillsPhotos/files.webp",
            alt: "flaskSkillsPhotos/files.webp",
          },
          title: "Complete documentration",
          description: `Flask is the first choice for many developers because of its ease of use and flexibility. With BottomFunnel you can quickly choose the components that are best suited for your next project. And since Flask comes with a variety of extensions, developing your app has never been this easy!`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/flaskSkillsPhotos/cookies-guard.webp",
            alt: "flaskSkillsPhotos/cookies-guard.webp",
          },
          title: "Support for secure cookies",
          description:
            "After development, the next phase in the software development life cycle is testing. Unfortunately, in most web application frameworks, you won't find the testing option.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/flaskSkillsPhotos/bug-setting.webp",
            alt: "flaskSkillsPhotos/bug-setting.webp",
          },
          title: "Development server and debugger",
          description:
            "In the modern era, you want a web application framework to experiment with the development approach. That's where Flask can be your best bet.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/flaskSkillsPhotos/fast-run.webp",
            alt: "flaskSkillsPhotos/fast-run.webp",
          },
          title: "Fast performance",
          description:
            "When web app developers select the framework for their project, they will think about the learning curve, whether it's steep or shallow.",
        },
      ],
    },
    WhyBFData: {
      title: "Why Bottom Funnel For Flask",
      image: "/Images/skillsPhotos/flaskSkillsPhotos/big-left-image.webp",
      bulletPointData: [
        "We use an agile approach.",
        "Provides integrity and transparency.",
        "Commitments with NDA agreements.",
        "Flexible engagement models.",
        "Experienced and talented team of developers.",
        "Offers variety of exclusive flask solutions.",
      ],
    },
    BookCallData: {
      title: "Need our flask developers to build your application?",
      btn: "Book a call now",
      image: "/Images/skillsPhotos/nodejsphotos/mid-banner.webp",
    },
    RemarkableData: {
      title: "benefits of using flask",
      description:
        "Flask allows you to build web applications by providing tools, libraries, and technologies. This web application can be a web page, a wiki, or a large web-based calendar application or commercial website.",
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
            src: "/Images/skillsPhotos/sqliteSkillsPhotos/setting-loading.webp",
            alt: "sqliteSkillsPhotos/setting-loading.webp",
          },
          title: "Highly flexible",
        },
        {
          img: {
            src: "/Images/skillsPhotos/larvelskillsphotos/easy-develop.webp",
            alt: "larvelskillsphotos/easy-develop.webp",
          },
          title: "Easy to deploy",
        },
      ],
    },
  };

  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>{flaskData.title}</title>
        <meta name="description" content={flaskData.description} />
      </Head>
      <SkillsComBanner data={flaskData.BannerData} />
      <hr style={{ margin: 0 }} />
      <SkillsComDes DescrptionData={flaskData.desData} />
      <SkillsComWhyApp data={flaskData.WhyAppData} />
      <SkillsComWhyBF data={flaskData.WhyBFData} />
      <SkillsComBookCall data={flaskData.BookCallData} />
      <SkillsComRemarkable data={flaskData.RemarkableData} />
    </div>
  );
}

export default SkillsFlask;
