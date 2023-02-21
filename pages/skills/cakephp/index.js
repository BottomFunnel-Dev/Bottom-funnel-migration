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
function SkillsShopify() {
  const cakePHPData = {
    title:
      "Best cakePHP developers in the market | Bottom Funnel Technologies Pvt. Ltd.",
    description:
      "Bottom Funnel is a leading company for CakePHP web development services having expert CakePHP developers to help you build robust web applications rapidly at affordable prices",
    BannerData: {
      points: [
        "Guaranteed 160 man-hours",
        "Direct access to resources",
        "Agile development process",
        "Daily/Weekly/Montly reporting",
        "Flexible working hours",
      ],
      icon: "/Images/skillsPhotos/cakephpPhotos/icon.webp",
      image: "/Images/skillsPhotos/banner.webp",
      title: ["Hire", "cakePhp", "developer"],
      description:
        "Hire dedicated CakePhp developers at a risk-free 14 days trial to build enterprise-grade software.",
    },
    desData: {
      title: "CakePHP",
      image: "/Images/skillsPhotos/cakephpPhotos/cakephp-logo.webp",
      description: `CakePHP framework allows us to create elegant, functional, and stable applications. What makes Cake so special? Let's find out!- Cake PHP offers easy to understand paradigms that help you build your app. Also, it is easy to integrate with other frameworks/libraries. Lastly, its shortcommings are also good for newbies.

      If you're still undecided about CakePHP or thinking about switching over from another Framework, then think no more! Onward with cake funnels!`,
    },
    WhyAppData: {
      title: "POPULAR CAKEPHP WEB DEVELOPMENT SERVICES",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/cakephpPhotos/compatible.webp",
            alt: "cakephpPhotos/compatible.webp",
          },
          title: "Compatible",
          description: `The framework is compatible with different versions of PHP as well as with popular website directories, so you can start building your site right away. And since the platform is built on WordPress, it's easy to install and uses the same tools and SEO strategies that you're already familiar with.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/cakephpPhotos/code-reuse.webp",
            alt: "cakephpPhotos/code-reuse.webp",
          },
          title: "Code reusability",
          description: `Coding from scratch isn't required as code-written can be used multiple times in the project reducing time and effort. Bottom Funnel is an extremely user-friendly UI kit for developers that allows you to build any kind of app in minutes. It's responsive, retina ready, and has a mobile menu which enables users to access your site on the go.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/cakephpPhotos/facile-database.webp",
            alt: "cakephpPhotos/facile-database.webp",
          },
          title: "Facile database management",
          description: `You do know how to handle the database in a smart way, but is CakePHP web development helping you extract maximum value from your databases? Not only does it provide strong support for handling databases, but it also ensures that you're using them efficiently.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/cakephpPhotos/custom-element.webp",
            alt: "cakephpPhotos/custom-element.webp",
          },
          title: "Customizable elements",
          description: `CakePhp makes it easy to build websites by providing pre-built elements that can be easily modified to suit your needs. This framework is also very customizable. On top of that, CakePhp is very user-friendly, which helps you understand how the different elements work and function on a website.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/cakephpPhotos/mvc-pattern.webp",
            alt: "cakephpPhotos/mvc-pattern.webp",
          },
          title: "MVC pattern",
          description: `Getting large apps up and running can be challenging, especially when you are new to the field. Thankfully, CakePHP helps bridge that gap with its MVC pattern. This makes it easy to understand how your application should be structured so that it can run smoothly without any hiccups.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/cakephpPhotos/easy-debug.webp",
            alt: "cakephpPhotos/easy-debug.webp",
          },
          title: "Easy debugging",
          description: `Debugging of applications is simple as you don't have to get into details of the code all over again. With BottomFunnel, you can catch bugs in your apps within minutes, and save time and money.`,
        },
      ],
    },
    WhyBFData: {
      title: "Why Bottom Funnel For CakePHP",
      image: "/Images/skillsPhotos/cakephpPhotos/big-left-image.webp",
      bulletPointData: [
        "We use an agile approach.",
        "Provides integrity and transparency.",
        "Commitments with NDA agreements.",
        "Flexible engagement models.",
        "Experienced and talented team of developers.",
        "Offers variety of exclusive cakePHP solutions.",
      ],
    },
    BookCallData: {
      title: "Need our cakePHP developers to build your application?",
      btn: "Book a call now",
      image: "/Images/skillsPhotos/nodejsphotos/mid-banner.webp",
    },
    RemarkableData: {
      title: "BENEFITS OF USING CAKEPHP FOR APPLICATION DEVELOPMENT",
      description: `Choosing a cake-and-PHP app developer is never an easy task. Your requirements must be thoroughly understood and then matched with their expertise and experience. We are proud to say that we have built a strong reputation as one of the best CakePHP Development Services in the market today. Our team of talented and experienced dot net developers understand your business needs, and they work tirelessly to deliver high quality solutions tailored specifically for your company.`,
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/cakephpPhotos/built-feature.webp",
            alt: "cakephpPhotos/built-feature.webp",
          },
          title: "In-built features",
        },
        {
          img: {
            src: "/Images/skillsPhotos/cakephpPhotos/model-view.webp",
            alt: "cakephpPhotos/model-view.webp",
          },
          title: "Model-view-control model",
        },
        {
          img: {
            src: "/Images/skillsPhotos/cakephpPhotos/enables-test.webp",
            alt: "cakephpPhotos/enables-test.webp",
          },
          title: "Enables testing now and team",
        },
        {
          img: {
            src: "/Images/skillsPhotos/cakephpPhotos/content-framework.webp",
            alt: "cakephpPhotos/content-framework.webp",
          },
          title: "Content-accommodating framework",
        },
        {
          img: {
            src: "/Images/skillsPhotos/cakephpPhotos/crud-scaffolding.webp",
            alt: "cakephpPhotos/crud-scaffolding.webp",
          },
          title: "CRUD scaffolding",
        },
        {
          img: {
            src: "/Images/skillsPhotos/cakephpPhotos/lang-compat.webp",
            alt: "cakephpPhotos/lang-compat.webp",
          },
          title: "Language compatibility",
        },
      ],
    },
  };

  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>{cakePHPData.title}</title>
        <meta name="description" content={cakePHPData.description} />
      </Head>
      <SkillsComBanner data={cakePHPData.BannerData} />
      <hr style={{ margin: 0 }} />
      <SkillsComDes DescrptionData={cakePHPData.desData} />
      <SkillsComWhyApp data={cakePHPData.WhyAppData} />
      <SkillsComWhyBF data={cakePHPData.WhyBFData} />
      <SkillsComBookCall data={cakePHPData.BookCallData} />
      <SkillsComRemarkable data={cakePHPData.RemarkableData} />
    </div>
  );
}

export default SkillsShopify;
