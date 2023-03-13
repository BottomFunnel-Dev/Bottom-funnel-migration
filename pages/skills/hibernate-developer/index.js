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
function SkillsHibernate() {
  const hiberateData = {
    title: "Best hibernate developers in the market | Bottom Funnel",
    description:
      "bottom funnel's hibernate developers provides reliable and high-quality java web application development services using hibernate framework to cater to all your stable application needs.",
    BannerData: {
      points: [
        "Guaranteed 160 man-hours",
        "Direct access to resources",
        "Agile development process",
        "Daily/Weekly/Monthly reporting",
        "Flexible working hours",
      ],
      icon: "/Images/skillsPhotos/hibernateSkillsPhotos/icon.webp",
      image: "/Images/skillsPhotos/banner.webp",
      title: ["Hire", "Hibernate", "developer"],
      description:
        "Hire dedicated Hibernate developers at a risk-free 14 days trial to build enterprise-grade software.",
    },
    desData: {
      title: "Hibernate",
      image: "/Images/skillsPhotos/hibernateSkillsPhotos/hiberate-logo.webp",
      description: `Hibernate is the perfect tool for developers who want a lightweight, open-source solution to manage their Java data. It implements the specifications of JPA (Java Persistence API) for data persistence, so you can rely on it to take care of your database requirements.
      Start working with Hibernate today and enjoy the benefits of its simple, flexible approach to database interaction.`,
    },
    WhyAppData: {
      title: "WHY HIBERNATE FOR APPLICATION DEVELOPMNET",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/hibernateSkillsPhotos/open-source.webp",
            alt: "hibernateSkillsPhotos/open-source.webp",
          },
          title: "Open source and Lightweight",

          description: `With Hibernate Query Language (HQL) and Criteria Queries as the primary tools for querying your data, you can write SQL-like queries against your database objects. Or if you're an object-oriented developer, then you can use BottomFunnel's own Object Query language (OQL) which is inspired by SQL!`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/hibernateSkillsPhotos/fast-performance.webp",
            alt: "hibernateSkillsPhotos/fast-performance.webp",
          },
          title: "Fast Performance",
          description: `Hibernate has always been known for its performance but this release takes it to another level by making use of leading-edge improvements in memory management and caching. You'll notice a dramatic improvement in application performance as well as reduced resource usage – all without incurring any extra development complexity or maintenance cost."`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/hibernateSkillsPhotos/Frame-5.webp",
            alt: "hibernateSkillsPhotos/Frame-5.webp",
          },
          title: "Database Independent Query",
          description: `With Hibernate, we don't have to write database-specific queries anymore. Before Hibernate, if the database is changed for the project, we need to change the SQL query as well which leads to the maintenance problem. BottomFunnel gives us convenient and uniform way to generate database independent queries which makes our life easier `,
        },
        {
          img: {
            src: "/Images/skillsPhotos/hibernateSkillsPhotos/automatic-table.webp",
            alt: "hibernateSkillsPhotos/automatic-table.webp",
          },
          title: "Automatic Table Creation",
          description: `Creating tables in database can be a tedious task, especially when you have to do it every time you start working with a new database. With Hibernate Framework, this task becomes extremely easy and convenient. The framework provides the facility to create the tables of your database automatically, saving on valuable time.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/hibernateSkillsPhotos/simplifies.webp",
            alt: "hibernateSkillsPhotos/simplifies.webp",
          },
          title: "Simplifies Complex Join",
          description: `Hibernate framework support Auto DDL operations so you can create tables with ease and get started with your data-driven business savvy today. Add in our simple yet powerful database management system, and you've got everything you need to manage your database confidently.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/hibernateSkillsPhotos/query-static.webp",
            alt: "hibernateSkillsPhotos/query-static.webp",
          },
          title: "Provides Query Statistics",
          description: `Data consistency is important in any application, and Hibernate makes sure your data stays up-to-date by mapping changes to the database automatically. Best of all, all of this happens behind the scenes so you don't have to worry about it at all. You'll be able to focus on what matters most - building your app!`,
        },
      ],
    },
    WhyBFData: {
      title: "Why Bottom Funnel For Hibernate",
      image: "/Images/skillsPhotos/hibernateSkillsPhotos/big-left-image.webp",
      bulletPointData: [
        "We use an agile approach.",
        "Provides integrity and transparency.",
        "Commitments with NDA agreements.",
        "Flexible engagement models.",
        "Experienced and talented team of developers.",
        "Offers variety of exclusive hibernate solutions.",
      ],
    },
    BookCallData: {
      title: "Need our hibernate developers to build your application?",
      btn: "Book a call now",
      image: "/Images/skillsPhotos/nodejsphotos/mid-banner.webp",
    },
    RemarkableData: {
      title: "Benefits of using hibernate web development",
      description:
        "Hibernate saves lines of code by managing the object table mapping itself and returning the results to your application in the form of Java objects. This eliminates the need for programmers to manually handle persistent data, reducing development time and maintenance costs.",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/vuejsSkillsPhotos/speedometer.webp",
            alt: "vuejsSkillsPhotos/speedometer.webp",
          },
          title: "High performance",
        },
        {
          img: {
            src: "/Images/skillsPhotos/springbootSkillsPhotos/java.webp",
            alt: "springbootSkillsPhotos/java.webp",
          },
          title: "Java Developer",
        },
        {
          img: {
            src: "/Images/skillsPhotos/vuejsSkillsPhotos/easy.webp",
            alt: "vuejsSkillsPhotos/easy.webp",
          },
          title: "Simplicity",
        },
        {
          img: {
            src: "/Images/skillsPhotos/angularjsSkillsPhotos/open-source.webp",
            alt: "angularjsSkillsPhotos/open-source.webp",
          },
          title: "Open-source",
        },
        {
          img: {
            src: "/Images/skillsPhotos/hibernateSkillsPhotos/database.webp",
            alt: "hibernateSkillsPhotos/database.webp",
          },
          title: "Database Independent",
        },
        {
          img: {
            src: "/Images/skillsPhotos/angularjsSkillsPhotos/complex-handling.webp",
            alt: "angularjsSkillsPhotos/complex-handling.webp",
          },
          title: "Easy complex component handling",
        },
      ],
    },
  };

  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>{hiberateData.title}</title>
        <meta name="description" content={hiberateData.description} />
      </Head>
      <SkillsComBanner data={hiberateData.BannerData} />
      <hr style={{ margin: 0 }} />
      <SkillsComDes DescrptionData={hiberateData.desData} />
      <SkillsComWhyApp data={hiberateData.WhyAppData} />
      <SkillsComWhyBF data={hiberateData.WhyBFData} />
      <SkillsComBookCall data={hiberateData.BookCallData} />
      <SkillsComRemarkable data={hiberateData.RemarkableData} />
    </div>
  );
}

export default SkillsHibernate;
