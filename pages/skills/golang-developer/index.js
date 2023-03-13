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
function SkillsGolang() {
  const golangData = {
    title: "Best golang developers in the market | Bottom Funnel",
    description:
      "Bottom Funnel's golang web development services offers you the most suitable and innovative golang web solutions available in the market. Hire our golang developers on an hourly or full-time basis now.",
    BannerData: {
      points: [
        "Guaranteed 160 man-hours",
        "Direct access to resources",
        "Agile development process",
        "Daily/Weekly/Monthly reporting",
        "Flexible working hours",
      ],
      icon: "/Images/skillsPhotos/golangSkillsPhotos/icon.webp",
      image: "/Images/skillsPhotos/banner.webp",
      title: ["Hire", "Golang", "developer"],
      description:
        "Hire dedicated Golang developers at a risk-free 14 days trial to build a high-performing product.",
    },
    desData: {
      title: "Golang",
      image: "/Images/skillsPhotos/golangSkillsPhotos/golang-logo.webp",
      description: `Golang is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. It is syntactically similar to C but with memory safety, garbage collection, structural typing and concurrency support. Go is often referred to as Golang because of its former domain name golang.org but its proper name is Go.`,
    },
    WhyAppData: {
      title: "WHY GOLANG FOR APPLICATION DEVELOPMENT ?",
      cardsData: [
        {
          img: {
            src: "/Images/skillsPhotos/golangSkillsPhotos/open-source.webp",
            alt: "golangSkillsPhotos/open-source.webp",
          },
          title: "Open Source",

          description: `Golang is the latest programming language that has gained a lot of attention in recent times. It is being adopted by companies as it offers great productivity improvements over other languages and platforms. With its modern features such as pointer number-crunching, type legacy and administrators over-burdening, Golang is an apt choice to turn your application into a robust one.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/golangSkillsPhotos/sync.webp",
            alt: "golangSkillsPhotos/sync.webp",
          },
          title: "Cross-platform development",
          description: `Golang is quickly becoming a top contender in the language world because of its speed, reliability, and most importantly, its ability to scale. No matter how big or small your project is, Golang has you covered.And when you're new to a language like Golang and its basics are still a bit foggy for you.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/golangSkillsPhotos/printing.webp",
            alt: "golangSkillsPhotos/printing.webp",
          },
          title: "Testing capabilities",
          description: `Golang's distributed memory architecture and simple syntax make it easy for developers to understand and use, while its powerful tooling ensures that applications run efficiently. And since Golang is an open source project, there are plenty of resources available online if you want to learn more.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/golangSkillsPhotos/keyboard.webp",
            alt: "golangSkillsPhotos/keyboard.webp",
          },
          title: "Static typing",
          description: `Golang has been growing in popularity over the last few years and it seems like everyone's talking about it now! So why not give it a try and see how different it can make your application development process!`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/golangSkillsPhotos/books.webp",
            alt: "golangSkillsPhotos/books.webp",
          },
          title: "Powerful standard library",
          description: `Golang is a programming language that provides software bundles and packages that make it easy for engineers to manage their I/O, cryptography, web servers and more. As the popularity of Golang increases, so does its library. TravelFlap is a golang package used to create automated web applications with ease.`,
        },
        {
          img: {
            src: "/Images/skillsPhotos/golangSkillsPhotos/proccess.webp",
            alt: "golangSkillsPhotos/proccess.webp",
          },
          title: "Concurrency support",
          description: `Golang is a programming language that has taken the world by storm. It offers exceptional performance, scalability, and lightweight nature. It is perfect for building large-scale applications or scaling existing ones. In this post, we are going to explore how you can make use of GoDoc tool in Golang for documentation creation using Golang.`,
        },
      ],
    },
    WhyBFData: {
      title: "Why Bottom Funnel For Golang",
      image: "/Images/skillsPhotos/golangSkillsPhotos/big-left-image.webp",
      bulletPointData: [
        "We use an agile approach.",
        "Provides integrity and transparency.",
        "Commitments with NDA agreements.",
        "Flexible engagement models.",
        "Experienced and talented team of developers.",
        "Offers variety of exclusive golang solutions.",
      ],
    },
    BookCallData: {
      title: "Need our golang developers to build your application?",
      btn: "Book a call now",
      image: "/Images/skillsPhotos/nodejsphotos/mid-banner.webp",
    },
    RemarkableData: {
      title: "benefits of using golang",
      description:
        "Go is a modern programming language with an open source design. It is preferred by many software developers due to its reliability. Golang allows you to create simple and efficient web products.",
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
            src: "/Images/skillsPhotos/nextjsSKillsPhotos/fast-run.webp",
            alt: "nextjsSKillsPhotos/fast-run.webp",
          },
          title: "Fast and efficiency",
        },
        {
          img: {
            src: "/Images/skillsPhotos/mysqlSkillsPhotos/user-database.webp",
            alt: "mysqlSkillsPhotos/user-database.webp",
          },
          title: "Scalability",
        },
        {
          img: {
            src: "/Images/skillsPhotos/svelteSkillsPhotos/settings-loading.webp",
            alt: "svelteSkillsPhotos/settings-loading.webp",
          },
          title: "Ease of learning",
        },
        {
          img: {
            src: "/Images/skillsPhotos/dotnetphotos/creative.webp",
            alt: "dotnetphotos/creative.webp",
          },
          title: "Transparency",
        },
        {
          img: {
            src: "/Images/skillsPhotos/larvelskillsphotos/automated-test.webp",
            alt: "larvelskillsphotos/automated-test.webp",
          },
          title: "In-built testing",
        },
      ],
    },
  };

  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>{golangData.title}</title>
        <meta name="description" content={golangData.description} />
      </Head>
      <SkillsComBanner data={golangData.BannerData} />
      <hr style={{ margin: 0 }} />
      <SkillsComDes DescrptionData={golangData.desData} />
      <SkillsComWhyApp data={golangData.WhyAppData} />
      <SkillsComWhyBF data={golangData.WhyBFData} />
      <SkillsComBookCall data={golangData.BookCallData} />
      <SkillsComRemarkable data={golangData.RemarkableData} />
    </div>
  );
}

export default SkillsGolang;
