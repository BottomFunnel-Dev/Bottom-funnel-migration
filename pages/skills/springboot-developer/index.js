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
function SkillsSpringBoot() {
  const springBootData = {
    title:
      "Best springboot developers in the market | Bottom Funnel Technologies Pvt. Ltd.",
    description:
      "A leading springboot web development company Bottom Funnel offers customized, robust and complex springboot web application development services for your business needs",
    BannerData: {
      points: [
        "Guaranteed 160 man-hours",
        "Direct access to resources",
        "Agile development process",
        "Daily/Weekly/Monthly reporting",
        "Flexible working hours",
      ],
      icon: "/Images/skillsPhotos/springbootSkillsPhotos/icon.webp",
      image: "/Images/skillsPhotos/banner.webp",
      title: ["Hire", "Springboot", "developer"],
      description:
        "Bottom funnel offer you to hire professional Node.js expert developers on a contract and project basis with a risk-free 14-day trial",
    },
    desData: {
      title: "SpringBoot",
      image: "/Images/skillsPhotos/springbootSkillsPhotos/springboot-logo.webp",
      description: `Planning to build a new project in the spring framework? Or you have an existing application and would like to upgrade it to be more robust and scalable? Then, this is the right time! Spring Boot is gaining popularity day by day. This framework helps developers develop stand-alone, production-grade micro services without requiring an entire Spring configuration setup. In today's world of huge apps, where everyone wants their own department to work independently but still share data seamlessly without any glitches, that's not just a dream anymore but reality now!`,
    },
    WhyAppData: {
      title: "WHY SPRINGBOOT FOR APPLICATION DEVELOPMENT",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/springbootSkillsPhotos/easy-development.webp",
            alt: "springbootSkillsPhotos/easy-development.webp",
          },
          title: "Easy Development",

          description: `Spring Boot is a remarkably powerful framework that simplifies the development of web-based applications. One of its most anticipated features is implicit dependency management, which allows you to add external libraries and classes without having to manually add them to the application classpath.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/springbootSkillsPhotos/war-files.webp",
            alt: "springbootSkillsPhotos/war-files.webp",
          },
          title: "No war files develoyment",
          description: `Spring Boot is the most preferred option. Its lightweight structure makes it easier to understand and use while its dependency injection feature helps in promoting code-reuse and higher level of abstraction. BottomFunnel is here with an easy solution for this problem by explaining how JAR files are different from WAR files.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/springbootSkillsPhotos/xml-logo.webp",
            alt: "springbootSkillsPhotos/xml-logo.webp",
          },
          title: "No XML configuration",
          description: `Spring project developers can choose to use annotations or XML configurations. The option to avoid XML configurations appeals to a lot of software engineers who don't want to go through the extra steps required.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/springbootSkillsPhotos/stand-application.webp",
            alt: "springbootSkillsPhotos/stand-application.webp",
          },
          title: "Standalone Applications",
          description: `SaaS projects rely on automation to save time and resources, but not everyone has the expertise or background to write code. That's why we've made it easy for project developers to use annotations or XML configurations. BottomFunnel gives you the best of both worlds--the convenience of using annotations without sacrificing control over your project.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/springbootSkillsPhotos/simple-setup.webp",
            alt: "springbootSkillsPhotos/simple-setup.webp",
          },
          title: "Simple setup and management",
          description: `Spring Boot apps are secure by default because they use basic HTTP authentication and HTTPS transport to protect your data from unauthorized access. Plus, the rich set of endpoints available will let you develop a secure Spring Boot application in no time.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/springbootSkillsPhotos/easy-start.webp",
            alt: "springbootSkillsPhotos/easy-start.webp",
          },
          title: "Easy to start",
          description: `Spring boot is one of the best ways to get started with a new web project. By using Spring Boot, you can take advantage of the many benefits offered by this framework, such as auto-configuration and code sharing. The starter pack helps you quickly assemble everything you need so that your website can be up and running in no time at all.`,
        },
      ],
    },
    WhyBFData: {
      title: "Why Bottom Funnel For Springboot",
      image: "/Images/skillsPhotos/springbootSkillsPhotos/big-left-image.webp",
      bulletPointData: [
        "We use an agile approach.",
        "Provides integrity and transparency.",
        "Commitments with NDA agreements.",
        "Flexible engagement models.",
        "Experienced and talented team of developers.",
        "Offers variety of exclusive springboot solutions.",
      ],
    },
    BookCallData: {
      title: "Need our springboot developers to build your application?",
      btn: "Book a call now",
      image: "/Images/skillsPhotos/nodejsphotos/mid-banner.webp",
    },
    RemarkableData: {
      title: "Benefits Of Using sprintboot for Application Development",
      description:
        "There are many reasons why developers choose Spring Boot to build microservices for mobile and web applications. The following list summarizes some of the key benefits that come with migrating to Spring Boot.",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/springbootSkillsPhotos/java.webp",
            alt: "springbootSkillsPhotos/java.webp",
          },
          title: "Java Developer",
        },
        {
          img: {
            src: "/Images/skillsPhotos/springbootSkillsPhotos/software-application.webp",
            alt: "springbootSkillsPhotos/software-application.webp",
          },
          title: "Application Developer",
        },
        {
          img: {
            src: "/Images/skillsPhotos/springbootSkillsPhotos/cpu.webp",
            alt: "springbootSkillsPhotos/cpu.webp",
          },
          title: "Software Engineer",
        },
      ],
    },
  };

  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>{springBootData.title}</title>
        <meta name="description" content={springBootData.description} />
      </Head>
      <SkillsComBanner data={springBootData.BannerData} />
      <hr style={{ margin: 0 }} />
      <SkillsComDes DescrptionData={springBootData.desData} />
      <SkillsComWhyApp data={springBootData.WhyAppData} />
      <SkillsComWhyBF data={springBootData.WhyBFData} />
      <SkillsComBookCall data={springBootData.BookCallData} />
      <SkillsComRemarkable data={springBootData.RemarkableData} />
    </div>
  );
}

export default SkillsSpringBoot;
