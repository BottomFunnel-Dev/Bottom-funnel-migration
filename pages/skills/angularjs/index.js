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
function SkillsAngularjs() {
  const angularjsData = {
    title:
      "Best angularjs developers in the market | Bottom Funnel Technologies Pvt. Ltd.",
    description:
      "Bottom Funnel is a leading company for angular web development services having expert angular web developers to help you build sophisticated web applications rapidly at affordable prices",
    BannerData: {
      points: [
        "Guaranteed 160 man-hours",
        "Direct access to resources",
        "Agile development process",
        "Daily/Weekly/Monthly reporting",
        "Flexible working hours",
      ],
      icon: "/Images/skillsPhotos/angularjsSkillsPhotos/icon.webp",
      image: "/Images/skillsPhotos/banner.webp",
      title: ["Hire", "Angular", "developer"],
      description: `Bottom funnel offer you to hire professional angular expert developers on a contract and project basis with a risk-free 14-days trial.`,
    },
    desData: {
      title: "Angularjs",
      image: "/Images/skillsPhotos/angularjsSkillsPhotos/angularjs-logo.webp",
      description: `When it comes to building the framework most suited to your application development needs, AngularJS is hard to beat. Bottom Funnel is one of the leading providers of Angular.js web app development services in Asia, USA, Middle East and Africa -- and we have a reputation for delivering world-class quality in every project we undertake.
    We take pride in our work and consider ourselves stewards of a powerful new technology that will continue to transform the way people interact with the internet. We believe in providing cutting-edge solutions that are tailored to meet our clients' needs, while also adhering to industry best practices and security standards.`,
    },
    WhyAppData: {
      title: "Angular.js Web Development Services",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/angularjsSkillsPhotos/two-way-bind.webp",
            alt: "angularjsSkillsPhotos/two-way-bind.webp",
          },
          title: "Custom AngularJS Development",

          description: `That's the future of customer-centric businesses. With AngularJS development services from BottomFunng, you can build and deliver applications that delight your users and increase their ongoing engagement with your brand.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/angularjsSkillsPhotos/trouble-free.webp",
            alt: "angularjsSkillsPhotos/trouble-free.webp",
          },
          title: "Portal development",
          description: `Our angular.js portal development services will provide you a web app portal that is easy to use, visually appealing, function smoothly and innovative by utilizing the most up-to-date tools and technologies.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/angularjsSkillsPhotos/complete-client-solution.webp",
            alt: "angularjsSkillsPhotos/complete-client-solution.webp",
          },
          title: `Single page application development`,
          description: `Our SPA developers are experts in Angular.js and know exactly how to create quality SPA's that seamlessly integrate with your site's architecture. We offer a range of services that will help you get your SPA up and running quickly, including project management.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/angularjsSkillsPhotos/captivating-support.webp",
            alt: "angularjsSkillsPhotos/captivating-support.webp",
          },
          title: "Angular.js support and maintenance",
          description: `With our AngularJS support and maintenance services, you can easily clear out outdated coding and improve user experience with the latest tools and technology. We ensure constant quality and timely services so that you never face any inconvenience.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/angularjsSkillsPhotos/features-excited.webp",
            alt: "angularjsSkillsPhotos/features-excited.webp",
          },
          title: "UI/UX Development",
          description: `Their angular.js UI/UX development services offer an appealing user interface and user experience with customizable and responsive designs which are user feedback integrated to enhance the visuals of the web application!.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/cakephpPhotos/mvc-pattern.webp",
            alt: "cakephpPhotos/mvc-pattern.webp",
          },
          title: "Integrating API Services",
          description: `Hire our angular.js developers to develop and integrate APIs for your business. Our
          angular.js development services can help you design, develop, and deploy your own APIs
          quickly and efficiently.`,
        },
      ],
    },
    WhyBFData: {
      title: "Why Bottom Funnel For Angularjs",
      image: "/Images/skillsPhotos/angularjsSkillsPhotos/big-left-image.webp",
      bulletPointData: [
        "We use an agile approach.",
        "Provides integrity and transparency.",
        "Commitments with NDA agreements.",
        "Flexible engagement models.",
        "Experienced and talented team of developers.",
        "Offers variety of exclusive angularjs solutions.",
      ],
    },
    BookCallData: {
      title: "Need our angularjs developers to build your application?",
      btn: "Book a call now",
      image: "/Images/skillsPhotos/nodejsphotos/mid-banner.webp",
    },
    RemarkableData: {
      title: "Benefits Of Using angular.js for Application Development",
      description: `Develop engaging and sophisticated single page application with Angular.js. Bottom funnel’s
      React.js web application developers develop attractive high quality web applications and
      avail the following benefits:`,
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
            src: "/Images/skillsPhotos/angularjsSkillsPhotos/complex-handling.webp",
            alt: "angularjsSkillsPhotos/complex-handling.webp",
          },
          title: "Easy complex component handling",
        },
        {
          img: {
            src: "/Images/skillsPhotos/angularjsSkillsPhotos/time-saving.webp",
            alt: "angularjsSkillsPhotos/time-saving.webp",
          },
          title: "Time-Saving Process",
        },
        {
          img: {
            src: "/Images/skillsPhotos/angularjsSkillsPhotos/effective-framework.webp",
            alt: "angularjsSkillsPhotos/effective-framework.webp",
          },
          title: "Effective Framework",
        },
        {
          img: {
            src: "/Images/skillsPhotos/angularjsSkillsPhotos/reuseable-code.webp",
            alt: "angularjsSkillsPhotos/reuseable-code.webp",
          },
          title: "Reusable code",
        },
        {
          img: {
            src: "/Images/skillsPhotos/angularjsSkillsPhotos/testing-now-then.webp",
            alt: "angularjsSkillsPhotos/testing-now-then.webp",
          },
          title: "Enables Testing Now and Then",
        },
      ],
    },
  };

  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>{angularjsData.title}</title>
        <meta name="description" content={angularjsData.description} />
      </Head>
      <SkillsComBanner data={angularjsData.BannerData} />
      <hr style={{ margin: 0 }} />
      <SkillsComDes DescrptionData={angularjsData.desData} />
      <SkillsComWhyApp data={angularjsData.WhyAppData} />
      <SkillsComWhyBF data={angularjsData.WhyBFData} />
      <SkillsComBookCall data={angularjsData.BookCallData} />
      <SkillsComRemarkable data={angularjsData.RemarkableData} />
    </div>
  );
}

export default SkillsAngularjs;
