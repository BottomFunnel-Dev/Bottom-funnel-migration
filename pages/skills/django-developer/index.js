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

function SkillsDjango() {
  const djangoData = {
    title:
      "Best django developers in the market | Bottom Funnel Technologies Pvt. Ltd.",
    description:
      "Bottom Funnel's Django web development services enhance your business with clean and practical web applications. Contact our Django developers now to get the most out of your business.",
    BannerData: {
      points: [
        "Guaranteed 160 man-hours",
        "Direct access to resources",
        "Agile development process",
        "Daily/Weekly/Monthly reporting",
        "Flexible working hours",
      ],
      icon: "/Images/skillsPhotos/djangoPhotos/icon.webp",
      image: "/Images/skillsPhotos/banner.webp",
      title: ["Hire", "Django", "developer"],
      description: `Hire dedicated Django developers at a risk-free 14 days trial to build enterprise-grade software.`,
    },
    desData: {
      title: "Django",
      image: "/Images/skillsPhotos/djangoPhotos/django-logo.webp",
      description: `Django is the leading framework for building web apps in Python. It follows a clean architecture, encourages rapid development and provides you with clean and pragmatic design patterns. Bottom Funnel is among the top Django web application development company in Asia, USA, middle-east and Africa which provides the best Django web application development services by experienced and best Django web developers.
      BottomFunnel believes that every app should be built with love. With an eye for detail and a dedication to quality, we work hard to exceed your expectations. From our start to finish process, you can be sure that your project will be delivered on time and with quality!`,
    },
    WhyAppData: {
      title: "OUR DJANGO WEB DEVELOPMENT SERVICES",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/djangoPhotos/remark-speed.webp",
            alt: "djangoPhotos/remark-speed.webp",
          },
          title: "Django application development",

          description: `BottomFunnel is the leading Django app development company which provides you with powerful and secure solutions that help your business grow. With our years of experience in this domain, we know what works and what fails when it comes to building apps for businesses.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/djangoPhotos/complete-load.webp",
            alt: "djangoPhotos/complete-load.webp",
          },
          title: "Django website Development ",
          description: `Django is one of the most versatile web development frameworks out there, and it offers an incredible amount of flexibility when it comes to creating complex sites. That's why BottomFunnel uses it to build responsive, engaging websites for our clients. Whether you're looking for an ecommerce site or a relationship management system!`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/djangoPhotos/exception-secure.webp",
            alt: "djangoPhotos/exception-secure.webp",
          },
          title: "Django Web Interface Design",
          description: `BottomFunnel lets you create backend as well as frontend codes with a single framework of Django. With our customized Django interface design services, by developers, we'll help you create interactive and attractive webpage interfaces through our cutting-edge frameworks and software.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/djangoPhotos/wealthy-feature.webp",
            alt: "djangoPhotos/wealthy-feature.webp",
          },
          title: "Django Template Design",
          description: `BottomFunnel is a top company in the world of web development. We have built our reputation on delivering high-quality work and providing clients with the best possible service. We understand the importance of building solid foundations, so we always start by laying down a strong foundation for your website with Django.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/djangoPhotos/very-scalable.webp",
            alt: "djangoPhotos/very-scalable.webp",
          },
          title: "Django REST framework",
          description: `Django REST framework is here to help! With Django REST framework, you can build efficient, scalable APIs that are easy to use. Our talented team of web developers will work with you to create a custom API that fits your unique business needs. We'll deliver quality code that works across many different platforms and devices.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/djangoPhotos/very-scalable.webp",
            alt: "djangoPhotos/very-scalable.webp",
          },
          title: "Django Support and Maintenance",
          description: `Django is a powerful and flexible web application framework, but it can be tricky to work with because of its large community and growing feature set. That's where Bottom Funnel comes in! We know Django inside out, so we're confident our Django web application developers can make your website run smoothly without any issues.`,
        },
      ],
    },
    WhyBFData: {
      title: "Why Bottom Funnel For Django",
      image: "/Images/skillsPhotos/djangoPhotos/big-left-image.webp",
      bulletPointData: [
        "We use an agile approach.",
        "Provides integrity and transparency.",
        "Commitments with NDA agreements.",
        "Flexible engagement models.",
        "Experienced and talented team of developers.",
        "Offers variety of exclusive django solutions.",
      ],
    },
    BookCallData: {
      title: "Need our django developers to build your application?",
      btn: "Book a call now",
      image: "/Images/skillsPhotos/nodejsphotos/mid-banner.webp",
    },
    RemarkableData: {
      title: "BENEFITS OF USING DJANGO FOR APPLICATION DEVELOPMENT",
      description: `Django is a powerful and flexible web application framework, but it can be tricky to work with because of its large community and growing feature set. That's where Bottom Funnel comes in! We know Django inside out, so we're confident our Django web application developers can make your website run smoothly without any issues. And if they encounter any trouble, we'll be there to help them fix it quickly!`,
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/djangophotos/backward-compatible.webp",
            alt: "djangophotos/backward-compatible.webp",
          },
          title: "Backward compatible",
        },
        {
          img: {
            src: "/Images/skillsPhotos/djangoPhotos/community-driven.webp",
            alt: "djangoPhotos/community-driven.webp",
          },
          title: "Community driven",
        },
        {
          img: {
            src: "/Images/skillsPhotos/djangoPhotos/rest-framework.webp",
            alt: "djangoPhotos/rest-framework.webp",
          },
          title: "REST framework",
        },
        {
          img: {
            src: "/Images/skillsPhotos/djangoPhotos/infastructure.webp",
            alt: "djangoPhotos/infastructure.webp",
          },
          title: "Infrastructure",
        },
        {
          img: {
            src: "/Images/skillsPhotos/djangoPhotos/versatile.webp",
            alt: "djangoPhotos/versatile.webp",
          },
          title: "Versatile",
        },
        {
          img: {
            src: "/Images/skillsPhotos/djangoPhotos/sercure-update.webp",
            alt: "djangoPhotos/sercure-update.webp",
          },
          title: "Secure & up-to-date",
        },
      ],
    },
  };

  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>{djangoData.title}</title>
        <meta name="description" content={djangoData.description} />
      </Head>
      <SkillsComBanner data={djangoData.BannerData} />
      <hr style={{ margin: 0 }} />
      <SkillsComDes DescrptionData={djangoData.desData} />
      <SkillsComWhyApp data={djangoData.WhyAppData} />
      <SkillsComWhyBF data={djangoData.WhyBFData} />
      <SkillsComBookCall data={djangoData.BookCallData} />
      <SkillsComRemarkable data={djangoData.RemarkableData} />
    </div>
  );
}

export default SkillsDjango;
