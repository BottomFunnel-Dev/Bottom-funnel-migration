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
function SkillsEmberjs() {
  const emberjsData = {
    title: "Best emberjs developers in the market | Bottom Funnel",
    description:
      "Bottom Funnel's ember.js web development services enhance your business with clean and attractive web applications. Contact our ember.js developers now to get the most out of your business.",
    BannerData: {
      points: [
        "Guaranteed 160 man-hours",
        "Direct access to resources",
        "Agile development process",
        "Daily/Weekly/Monthly reporting",
        "Flexible working hours",
      ],
      icon: "/Images/skillsPhotos/emberjSkillsPhotos/icon.webp",
      image: "/Images/skillsPhotos/banner.webp",
      title: ["Hire", "Ember", "developer"],
      description:
        "Bottom funnel offer you to hire professional ember expert developers on a contract and project basis with a risk-free 14-days trial.",
    },
    desData: {
      title: "EmberJs",
      image: "/Images/skillsPhotos/emberjSkillsPhotos/ember-logo.webp",
      description:
        "Ember.js is an open-source JavaScript web framework that utilizes a component-service pattern. It allows developers to create scalable single-page web applications by incorporating common idioms, best practices, and patterns from other single-page-app ecosystem patterns into the framework.",
    },
    WhyAppData: {
      title: "WHY EMBER JS FOR APPLICATION DEVELOPMENT",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/emberjSkillsPhotos/patent-adds.webp",
            alt: "emberjSkillsPhotos/patent-adds.webp",
          },
          title: "Patent add-ons",

          description:
            "Due to the plugin design of EmberJS, add-ons can be added and provide further functionality with little to no configuration. Improve SEO or initial render performance of complex, highly dynamic web pages using server-side rendering.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/emberjSkillsPhotos/ember-cli.webp",
            alt: "emberjSkillsPhotos/ember-cli.webp",
          },
          title: "Ember CLI",
          description:
            "One of the issues you're dealing with is app performance across multiple devices, as many people check things out on their mobile phones. A web app will not operate properly, and you will also need to construct a mobile app.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/emberjSkillsPhotos/convention.webp",
            alt: "emberjSkillsPhotos/convention.webp",
          },
          title: "Convention over configuration",
          description:
            "To give consumers a flawless experience, you must guarantee that the program is free of problems. Debugging, though, can occasionally become a challenge. But this is not the case with Ember.js because it has an inspection tool.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/emberjSkillsPhotos/stability-sans.webp",
            alt: "emberjSkillsPhotos/stability-sans.webp",
          },
          title: "Stability sans stagnation",
          description:
            "Ember.js is the best choice for long-term projects, single-page apps, online apps with native capabilities, programs that require an environment similar to Python, and apps with challenging functionality integration.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/emberjSkillsPhotos/community.webp",
            alt: "emberjSkillsPhotos/community.webp",
          },
          title: "Community",
          description:
            "One of the challenging and time-consuming tasks in app development is coding. Ember, on the other hand, streamlines it and makes it easier. As a result, it will cost you less money and take less time to develop codes.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/emberjSkillsPhotos/ember-oct.webp",
            alt: "emberjSkillsPhotos/ember-oct.webp",
          },
          title: "Ember Octane",
          description:
            "Ember.js and React. Both of these well-known JavaScript frameworks are most effective when used to build user interfaces and the front-end development of websites. These technologies have received positive feedback from the development community.",
        },
      ],
    },
    WhyBFData: {
      title: "Why Bottom Funnel For Emberjs",
      image: "/Images/skillsPhotos/emberjSkillsPhotos/big-left-image.webp",
      bulletPointData: [
        "We use an agile approach.",
        "Provides integrity and transparency.",
        "Commitments with NDA agreements.",
        "Flexible engagement models.",
        "Experienced and talented team of developers.",
        "Offers variety of exclusive emberjs solutions.",
      ],
    },
    BookCallData: {
      title: "Need our emberjs developers to build your application?",
      btn: "Book a call now",
      image: "/Images/skillsPhotos/nodejsphotos/mid-banner.webp",
    },
    RemarkableData: {
      title: "BENEFITS OF USING ember.js FOR WEB DEVELOPMENT",
      description:
        "embers. js is a battle-tested JavaScript framework for building modern web applications. It includes everything you need to create rich user interfaces that work on any device.",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/emberjSkillsPhotos/practice.webp",
            alt: "emberjSkillsPhotos/practice.webp",
          },
          title: "Built-in Best Practices",
        },
        {
          img: {
            src: "/Images/skillsPhotos/emberjSkillsPhotos/blockchain.webp",
            alt: "emberjSkillsPhotos/blockchain.webp",
          },
          title: "Integrates With Large Teams",
        },
        {
          img: {
            src: "/Images/skillsPhotos/emberjSkillsPhotos/future.webp",
            alt: "emberjSkillsPhotos/future.webp",
          },
          title: "Future of the Web",
        },
        {
          img: {
            src: "/Images/skillsPhotos/emberjSkillsPhotos/features.webp",
            alt: "emberjSkillsPhotos/features.webp",
          },
          title: "Amazing Features",
        },
        {
          img: {
            src: "/Images/skillsPhotos/emberjSkillsPhotos/computer.webp",
            alt: "emberjSkillsPhotos/computer.webp",
          },
          title: "Giant Ecosystem",
        },
        {
          img: {
            src: "/Images/skillsPhotos/emberjSkillsPhotos/stability.webp",
            alt: "emberjSkillsPhotos/stability.webp",
          },
          title: "Stability",
        },
      ],
    },
  };

  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>{emberjsData.title}</title>
        <meta name="description" content={emberjsData.description} />
      </Head>
      <SkillsComBanner data={emberjsData.BannerData} />
      <hr style={{ margin: 0 }} />
      <SkillsComDes DescrptionData={emberjsData.desData} />
      <SkillsComWhyApp data={emberjsData.WhyAppData} />
      <SkillsComWhyBF data={emberjsData.WhyBFData} />
      <SkillsComBookCall data={emberjsData.BookCallData} />
      <SkillsComRemarkable data={emberjsData.RemarkableData} />
    </div>
  );
}

export default SkillsEmberjs;
