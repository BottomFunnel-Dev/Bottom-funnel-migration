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
function SkillsHubspot() {
  const hubspotData = {
    title: "Best hubspot developers in the market | Bottom Funnel",
    description:
      "Want to become a certified HubSpot developer? Our Learn to Develop for the Enterprise course covers everything you need to know, including certification exam",
    BannerData: {
      points: [
        "Guaranteed 160 man-hours",
        "Direct access to resources",
        "Agile development process",
        "Daily/Weekly/Monthly reporting",
        "Flexible working hours",
      ],
      icon: "/Images/skillsPhotos/hubSkillsPhotos/icon.webp",
      image: "/Images/skillsPhotos/banner.webp",
      title: ["Hire", "Hubspot CMS hub", "developer"],
      description:
        "Bottom funnel offer you to hire professional Hubspot CMS hub expert developers on a contract and project basis with a risk-free 14-day trial.",
    },
    desData: {
      title: "Hubspot CMS hub",
      image: "/Images/skillsPhotos/hubSkillsPhotos/hubspot-logo.webp",
      description:
        "Hubspot CMS hub is a free, cross-platform, open-source developer platform that has been designed to support many different types of application development needs. This system uses various languages, editors and libraries which can be used for web, mobile, desktop games and other projects too. The .NET framework has been developed based on certain guidelines to create applications ranging from small scale website creation all the way up to large enterprise level client programmes",
    },
    WhyAppData: {
      title: "POPULAR HUBSPOT CMS HUB WEB DEVELOPMENT SERVICES",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/hubSkillsPhotos/drone-setting.webp",
            alt: "hubSkillsPhotos/drone-setting.webp",
          },
          title: "Combined publishing",

          description:
            "Engage in web page design and development that is dynamic, rich, responsive and offers multiple languages for your B2B and B2C website. .Net uses asynchronous programming to make sure your pages load quickly.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/hubSkillsPhotos/newsletter.webp",
            alt: "hubSkillsPhotos/newsletter.webp",
          },
          title: "Smart content",
          description:
            "The .Net framework makes XML web application development easy and efficient by providing powerful tools for development, data binding, validation, routing, security, and more. it creates compatible, safe and robust applications.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/hubSkillsPhotos/settings.webp",
            alt: "hubSkillsPhotos/settings.webp",
          },
          title: "Personalization without CMS",
          description:
            "CMS web application development provides you with the latest and most robust technologies so that your applications run effectively and securely to manage the content in the most effective way.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/hubSkillsPhotos/light.webp",
            alt: "hubSkillsPhotos/light.webp",
          },
          title: "Google AMP support",
          description:
            "E-commerce web application development using .NET can provide you with industry-standard solutions that will secure your online shopping and protect your data. It makes the application convenient and easy to use.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/hubSkillsPhotos/security.webp",
            alt: "hubSkillsPhotos/security.webp",
          },
          title: "Security through obscurity",
          description:
            "By using .NET for shopping cart web application development, you will have a custom designed shopping cart that that is user-friendly and dynamic with wide range of features such as product management, currecy conversion, etc.",
        },
        {
          img: {
            src: "/Images/skillsPhotos/hubSkillsPhotos/checked-setting.webp",
            alt: "hubSkillsPhotos/checked-setting.webp",
          },
          title: "Easy to use",
          description:
            "Microsoft SQL is a web-based database used to store and search for data from websites. It operates best with .NET sites and provides an interactive analysis of users' profiles that are updates at all.",
        },
      ],
    },
    WhyBFData: {
      title: "Why Bottom Funnel For Hubspot CMS Hub",
      image: "/Images/skillsPhotos/hubSkillsPhotos/big-left-image.webp",
      bulletPointData: [
        "We use an agile approach.",
        "Provides integrity and transparency.",
        "Commitments with NDA agreements.",
        "Flexible engagement models.",
        "Experienced and talented team of developers.",
        "Offers variety of exclusive hubspot cms hub solutions.",
      ],
    },
    BookCallData: {
      title: "Need our hubspot CMS hub developers to build your application?",
      btn: "Book a call now",
      image: "/Images/skillsPhotos/nodejsphotos/mid-banner.webp",
    },
    RemarkableData: {
      title: "benefits of using hubspot",
      description:
        "As an all-in-one platform, HubSpot offers many benefits you won't find anywhere else. Of course this is not perfect. No marketing automation platform is perfect.",
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
            src: "/Images/skillsPhotos/dotnetphotos/simple.webp",
            alt: "dotnetphotos/simple.webp",
          },
          title: "Social media integration",
        },
        {
          img: {
            src: "/Images/skillsPhotos/nodejsphotos/collab.webp",
            alt: "nodejsphotos/collab.webp",
          },
          title: "Website integration",
        },
      ],
    },
  };

  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>{hubspotData.title}</title>
        <meta name="description" content={hubspotData.description} />
      </Head>
      <SkillsComBanner data={hubspotData.BannerData} />
      <hr style={{ margin: 0 }} />
      <SkillsComDes DescrptionData={hubspotData.desData} />
      <SkillsComWhyApp data={hubspotData.WhyAppData} />
      <SkillsComWhyBF data={hubspotData.WhyBFData} />
      <SkillsComBookCall data={hubspotData.BookCallData} />
      <SkillsComRemarkable data={hubspotData.RemarkableData} />
    </div>
  );
}

export default SkillsHubspot;
