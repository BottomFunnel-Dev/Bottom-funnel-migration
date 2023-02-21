import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const SkillsComBanner = dynamic(
  () => import("../../../components/SkillsCom/SkillsComBanner"),
  { loading: "loading..." },
);
const SkillsComRemarkable = dynamic(
  () => import("../../../components/SkillsCom/SkillsComRemarkable"),
  { loading: "loading..." },
);
const SkillsComDes = dynamic(
  () => import("../../../components/SkillsCom/SkillsComDes"),
  { loading: "loading..." },
);
const SkillsComWhyApp = dynamic(
  () => import("../../../components/SkillsCom/SkillsComWhyApp"),
  { loading: "loading..." },
);
const SkillsComWhyBF = dynamic(
  () => import("../../../components/SkillsCom/SkillsComWhyBF"),
  { loading: "loading..." },
);
const SkillsComBookCall = dynamic(
  () => import("../../../components/SkillsCom/SkillsComBookCall"),
  { loading: "loading..." },
);

function SkillsBigcommerce() {
  const bigcommerceData = {
    title: "Best big-commerce developers in the market | Bottom Funnel",
    description:
      "Looking for BigCommerce developers? Visit Big Commerce Mac app development to hire top-notch BigCommerce experts. Read on to learn about BigCommerce",
    BannerData: {
      points: [
        "Guaranteed 160 man-hours",
        "Direct access to resources",
        "Agile development process",
        "Daily/Weekly/Monthly reporting",
        "Flexible working hours",
      ],
      icon: "/Images/skillsPhotos/bigcommerceSkillsPhotos/icon.webp",
      image: "/Images/skillsPhotos/banner.webp",
      title: ["Hire", "Big commerce", "developer"],
      description:
        "Bottom funnel offer you to hire professional Big commerce expert developers on a contract and project basis with a risk-free 14-day trial.",
    },
    desData: {
      title: "Big commerce",
      image:
        "/Images/skillsPhotos/bigcommerceSkillsPhotos/bigcommerce-logo.webp",
      description:
        "Big commerce is a free, cross-platform, open-source developer platform that has been designed to support many different types of application development needs. This system uses various languages, editors and libraries which can be used for web, mobile, desktop games and other projects too. The .NET framework has been developed based on certain guidelines to create applications ranging from small scale website creation all the way up to large enterprise level client programmes",
    },
    WhyAppData: {
      title: "POPULAR BIG COMMERCE WEB DEVELOPMENT SERVICES",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/bigcommerceSkillsPhotos/analysis.webp",
            alt: "bigcommerceSkillsPhotos/analysis.webp",
          },
          title: "Improved SEO performance",

          description:
            "Engage in web page design and development that is dynamic, rich, responsive and offers multiple languages for your B2B and B2C website. .Net uses asynchronous programming to make sure your pages load quickly.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/bigcommerceSkillsPhotos/uiux-layout.webp",
            alt: "bigcommerceSkillsPhotos/uiux-layout.webp",
          },
          title: "Better user experience",
          description:
            "The .Net framework makes XML web application development easy and efficient by providing powerful tools for development, data binding, validation, routing, security, and more. it creates compatible, safe and robust applications.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/bigcommerceSkillsPhotos/thumbs-up.webp",
            alt: "bigcommerceSkillsPhotos/thumbs-up.webp",
          },
          title: "Rating & Reviews",
          description:
            "CMS web application development provides you with the latest and most robust technologies so that your applications run effectively and securely to manage the content in the most effective way.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/bigcommerceSkillsPhotos/fast-run.webp",
            alt: "bigcommerceSkillsPhotos/fast-run.webp",
          },
          title: "Fast performance",
          description:
            "E-commerce web application development using .NET can provide you with industry-standard solutions that will secure your online shopping and protect your data. It makes the application convenient and easy to use.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/bigcommerceSkillsPhotos/support.webp",
            alt: "bigcommerceSkillsPhotos/support.webp",
          },
          title: "Excellent support",
          description:
            "By using .NET for shopping cart web application development, you will have a custom designed shopping cart that that is user-friendly and dynamic with wide range of features such as product management, currecy conversion, etc.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/bigcommerceSkillsPhotos/setting-loading.webp",
            alt: "bigcommerceSkillsPhotos/setting-loading.webp",
          },
          title: "Flexible",
          description:
            "Microsoft SQL is a web-based database used to store and search for data from websites. It operates best with .NET sites and provides an interactive analysis of users' profiles that are updates at all.",
        },
      ],
    },
    WhyBFData: {
      title: "Why Bottom Funnel For Big Commerce",
      image: "/Images/skillsPhotos/bigcommerceSkillsPhotos/big-left-image.webp",
      bulletPointData: [
        "We use an agile approach.",
        "Provides integrity and transparency.",
        "Commitments with NDA agreements.",
        "Flexible engagement models.",
        "Experienced and talented team of developers.",
        "Offers variety of exclusive big commerce solutions.",
      ],
    },
    BookCallData: {
      title: "Need our big commerce developers to build your application?",
      btn: "Book a call now",
      image: "/Images/skillsPhotos/nodejsphotos/mid-banner.webp",
    },
    RemarkableData: {
      title: "benefits of using bigcommerce",
      description:
        "BigCommerce is one of the best choices when it comes to shopping cart software, and for good reason. BigCommerce is an easy-to-use program with an incredible amount of features.",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/codeigniterPhotos/portal-design.webp",
            alt: "codeigniterPhotos/portal-design.webp",
          },
          title: "Best At Design",
        },
        {
          img: {
            src: "/Images/skillsPhotos/codeigniterPhotos/simply-sol.webp",
            alt: "codeigniterPhotos/simply-sol.webp",
          },
          title: "Smart Solutions",
        },
        {
          img: {
            src: "/Images/skillsPhotos/dotnetphotos/security.webp",
            alt: "dotnetphotos/security.webp",
          },
          title: "Security At Its Best",
        },
        {
          img: {
            src: "/Images/skillsPhotos/phpskillsphotos/support.webp",
            alt: "phpskillsphotos/support.webp",
          },
          title: "Great Support",
        },
        {
          img: {
            src: "/Images/skillsPhotos/reactjsSkillsPhotos/great-developer.webp",
            alt: "reactjsSkillsPhotos/great-developer.webp",
          },
          title: "Mobile Friendly",
        },
        {
          img: {
            src: "/Images/skillsPhotos/nodejsphotos/collab.webp",
            alt: "nodejsphotos/collab.webp",
          },
          title: "Easily Manage Returns",
        },
      ],
    },
  };

  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>{bigcommerceData.title}</title>
        <meta name="description" content={bigcommerceData.description} />
      </Head>
      <SkillsComBanner data={bigcommerceData.BannerData} />
      <hr style={{ margin: 0 }} />
      <SkillsComDes DescrptionData={bigcommerceData.desData} />
      <SkillsComWhyApp data={bigcommerceData.WhyAppData} />
      <SkillsComWhyBF data={bigcommerceData.WhyBFData} />
      <SkillsComBookCall data={bigcommerceData.BookCallData} />
      <SkillsComRemarkable data={bigcommerceData.RemarkableData} />
    </div>
  );
}

export default SkillsBigcommerce;
