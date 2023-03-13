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
function SkillsDotNet() {
  const DotnetData = {
    title:
      "Best .NET developers in the market | Bottom Funnel Technologies Pvt. Ltd.",
    description:
      "Bottom Funnel gets you the best .NET developers in the market who can develop robust applications and websites using the latest technologies like ASP.net and VB.net on an hourly, part-time and full-time contract basis.",
    BannerData: {
      points: [
        "Guaranteed 160 man-hours",
        "Direct access to resources",
        "Agile development process",
        "Daily/Weekly/Monthly reporting",
        "Flexible working hours",
      ],
      icon: "/Images/skillsPhotos/dotnetphotos/icon.webp",
      image: "/Images/skillsPhotos/banner.webp",
      title: ["Hire", ".NET", "developer"],
      description:
        "Hire dedicated .Net developers at a risk-free 14 days trial to build enterprise-grade software.",
    },
    desData: {
      title: ".Net",
      image: "/Images/skillsPhotos/dotnetphotos/dotnetlogo.webp",
      description:
        ".NET is a free, cross-platform, open-source developer platform that has been designed to support many different types of application development needs. This system uses various languages, editors and libraries which can be used for web, mobile, desktop games and other projects too. The .NET framework has been developed based on certain guidelines to create applications ranging from small scale website creation all the way up to large enterprise level client programmes",
    },
    WhyAppData: {
      title: "POPULAR .NET WEB DEVELOPMENT SERVICES",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/dotnetphotos/simple.webp",
            alt: "dotnetphotos/simple.webp",
          },
          title: "B2B and B2C web portal development",

          description:
            "Engage in web page design and development that is dynamic, rich, responsive and offers multiple languages for your B2B and B2C website. .Net uses asynchronous programming to make sure your pages load quickly.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/dotnetphotos/xml.webp",
            alt: "dotnetphotos/xml.webp",
          },
          title: "XML web application development",
          description:
            "The .Net framework makes XML web application development easy and efficient by providing powerful tools for development, data binding, validation, routing, security, and more. it creates compatible, safe and robust applications.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/dotnetphotos/framework.webp",
            alt: "dotnetphotos/framework.webp",
          },
          title: "CMS web application development",
          description:
            "CMS web application development provides you with the latest and most robust technologies so that your applications run effectively and securely to manage the content in the most effective way.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/dotnetphotos/e-commerce.webp",
            alt: "dotnetphotos/e-commerce.webp",
          },
          title: "E-commerce web application development",
          description:
            "E-commerce web application development using .NET can provide you with industry-standard solutions that will secure your online shopping and protect your data. It makes the application convenient and easy to use.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/dotnetphotos/shopping-cart.webp",
            alt: "dotnetphotos/shopping-cart.webp",
          },
          title: "Shopping cart web application development",
          description:
            "By using .NET for shopping cart web application development, you will have a custom designed shopping cart that that is user-friendly and dynamic with wide range of features such as product management, currecy conversion, etc.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/dotnetphotos/custom-website.webp",
            alt: "dotnetphotos/custom-website.webp",
          },
          title: "MS-SQL customised web development",
          description:
            "Microsoft SQL is a web-based database used to store and search for data from websites. It operates best with .NET sites and provides an interactive analysis of users' profiles that are updates at all.",
        },
      ],
    },
    WhyBFData: {
      title: "Why Bottom funnel For .NET",
      image: "/Images/skillsPhotos/dotnetphotos/image-2.webp",
      bulletPointData: [
        "We use an agile approach.",
        "Provides integrity and transparency.",
        "Commitments with NDA agreements.",
        "Flexible engagement models.",
        "Experienced and talented team of developers.",
        "Offers variety of exclusive .NET solutions.",
      ],
    },
    BookCallData: {
      title: "Need our .NET developers to build your application?",
      btn: "Book a call now",
      image: "/Images/skillsPhotos/nodejsphotos/mid-banner.webp",
    },
    RemarkableData: {
      title: "BENEFITS OF USING .NET FOR APPLICATION DEVELOPMENT",
      description:
        "We provide a wide range of .net development solutions that will help you with your business goals. Our team is skilled in different areas such as web development, application development, and e-commerce..",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/dotnetphotos/agile-software.webp",
            alt: "dotnetphotos/agile-software.webp",
          },
          title: "Excellent performance",
        },
        {
          img: {
            src: "/Images/skillsPhotos/dotnetphotos/creative.webp",
            alt: "dotnetphotos/creative.webp",
          },
          title: "Platform independent",
        },
        {
          img: {
            src: "/Images/skillsPhotos/dotnetphotos/trusted.webp",
            alt: "dotnetphotos/trusted.webp",
          },
          title: "Excellent user interface",
        },
        {
          img: {
            src: "/Images/skillsPhotos/dotnetphotos/custom-software.webp",
            alt: "dotnetphotos/custom-software.webp",
          },
          title: "Object oriented",
        },
        {
          img: {
            src: "/Images/skillsPhotos/dotnetphotos/techie.webp",
            alt: "dotnetphotos/techie.webp",
          },
          title: "Cross platform design",
        },
        {
          img: {
            src: "/Images/skillsPhotos/dotnetphotos/security.webp",
            alt: "dotnetphotos/security.webp",
          },
          title: "Easy maintenance",
        },
      ],
    },
  };

  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>{DotnetData.title}</title>
        <meta name="description" content={DotnetData.description} />
      </Head>
      <SkillsComBanner data={DotnetData.BannerData} />
      <hr style={{ margin: 0 }} />
      <SkillsComDes DescrptionData={DotnetData.desData} />
      <SkillsComWhyApp data={DotnetData.WhyAppData} />
      <SkillsComWhyBF data={DotnetData.WhyBFData} />
      <SkillsComBookCall data={DotnetData.BookCallData} />
      <SkillsComRemarkable data={DotnetData.RemarkableData} />
    </div>
  );
}

export default SkillsDotNet;
