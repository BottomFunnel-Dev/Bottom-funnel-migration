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
function SkillsCodeigniter() {
  const codeigniterData = {
    title:
      "Best codeigniter developers in the market | Bottom Funnel Technologies Pvt. Ltd.",
    description:
      "when it comes to codeigniter web application development services, Bottom Funnel is the most reliable company providing robust and stable codeigniter solutions.",
    BannerData: {
      points: [
        "Guaranteed 160 man-hours",
        "Direct access to resources",
        "Agile development process",
        "Daily/Weekly/Monthly reporting",
        "Flexible working hours",
      ],
      icon: "/Images/skillsPhotos/codeigniterPhotos/icon.webp",
      image: "/Images/skillsPhotos/banner.webp",
      title: ["Hire", "Codeigniter", "developer"],
      description:
        "Hire dedicated Codeigniter developers at a risk-free 14 days trial to build enterprise-grade software.",
    },
    desData: {
      title: "CodeIgniter",
      image: "/Images/skillsPhotos/codeigniterPhotos/CodeIgniter-logo.webp",
      description:
        "Codelgniter empowers programmers to build robust applications from scratch bypassing all the possible constraints that ultimately leads to functional and dynamic products. Feature-rich apps made in a hassle-free way require high understandability of the framework and expertise in making things work. Thankfully, we at Konstant possess both.",
    },
    WhyAppData: {
      title: "POPULAR CODEIGNITER WEB DEVELOPMENT SERVICES",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/codeigniterPhotos/framework-footprint.webp",
            alt: "codeigniterPhotos/framework-footprint.webp",
          },
          title: "Framework with right footprint",

          description:
            "CodeIgniter foundation offers many security-rich functions and a number of features that have diverse inbuilt functionalities for input and output filtering.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/codeigniterPhotos/simply-sol.webp",
            alt: "codeigniterPhotos/simply-sol.webp",
          },
          title: "Simplified solutions",
          description:
            "CodeIgniter PHP framework is made of a linear arrangement and has a freely usable folder set-up.  This aids in streamlining the syntax of PHP while utilizing this framework.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/codeigniterPhotos/restriction-coding.webp",
            alt: "codeigniterPhotos/restriction-coding.webp",
          },
          title: "no restrictions on coding",
          description:
            "PHP CodeIgniter model view controller framework has a modest interface which makes it simple to learn and use.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/cakephpPhotos/custom-element.webp",
            alt: "cakephpPhotos/custom-element.webp",
          },
          title: "Accepts Third-party Scripts",
          description:
            "Developers are free to integrate scripts on their own or create a new library based on project's requirements.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/cakephpPhotos/mvc-pattern.webp",
            alt: "cakephpPhotos/mvc-pattern.webp",
          },
          title: "MVC approach",
          description:
            "Developers can relish the systematic approach to website development via MVC (Model, View, Controller).",
        },
        {
          img: {
            src: "/Images/skillsPhotos/cakephpPhotos/easy-debug.webp",
            alt: "cakephpPhotos/easy-debug.webp",
          },
          title: "Documentation",
          description:
            "It comes with a comprehensive documentation that allows PHP developers to get started on the fly.",
        },
      ],
    },
    WhyBFData: {
      title: "Why Bottom Funnel For CodeIgniter",
      image: "/Images/skillsPhotos/codeigniterPhotos/big-left-image.webp",
      bulletPointData: [
        "We use an agile approach.",
        "Provides integrity and transparency.",
        "Commitments with NDA agreements.",
        "Flexible engagement models.",
        "Experienced and talented team of developers.",
        "Offers variety of exclusive codeigniter solutions.",
      ],
    },
    BookCallData: {
      title: "Need our codeigniter developers to build your application?",
      btn: "Book a call now",
      image: "/Images/skillsPhotos/nodejsphotos/mid-banner.webp",
    },
    RemarkableData: {
      title: "BENEFITS OF USING CODEIGNITER FOR APPLICATION DEVELOPMENT",
      description:
        "Codelgniter empowers programmers to build robust applications from scratch, bypassing all kinds of limitations and ultimately yielding functional and dynamic products. Easy-to-build, feature-rich apps require advanced understanding and expertise in frameworks to function.",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/codeigniterPhotos/customWeb.webp",
            alt: "codeigniterPhotos/customWeb.webp",
          },
          title: "Custom web development",
        },
        {
          img: {
            src: "/Images/skillsPhotos/codeigniterPhotos/appDev.webp",
            alt: "codeigniterPhotos/appDev.webp",
          },
          title: "Application development",
        },
        {
          img: {
            src: "/Images/skillsPhotos/codeigniterPhotos/api.webp",
            alt: "codeigniterPhotos/api.webp",
          },
          title: "API & liberary development",
        },
        {
          img: {
            src: "/Images/skillsPhotos/codeigniterPhotos/portal-design.webp",
            alt: "codeigniterPhotos/portal-design.webp",
          },
          title: "Portal design & development",
        },
        {
          img: {
            src: "/Images/skillsPhotos/codeigniterPhotos/integration.webp",
            alt: "codeigniterPhotos/integration.webp",
          },
          title: "Customization and integration",
        },
        {
          img: {
            src: "/Images/skillsPhotos/codeigniterPhotos/maintenance.webp",
            alt: "codeigniterPhotos/maintenance.webp",
          },
          title: "Maintenance & support",
        },
      ],
    },
  };

  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>{codeigniterData.title}</title>
        <meta name="description" content={codeigniterData.description} />
      </Head>
      <SkillsComBanner data={codeigniterData.BannerData} />
      <hr style={{ margin: 0 }} />
      <SkillsComDes DescrptionData={codeigniterData.desData} />
      <SkillsComWhyApp data={codeigniterData.WhyAppData} />
      <SkillsComWhyBF data={codeigniterData.WhyBFData} />
      <SkillsComBookCall data={codeigniterData.BookCallData} />
      <SkillsComRemarkable data={codeigniterData.RemarkableData} />
    </div>
  );
}

export default SkillsCodeigniter;
