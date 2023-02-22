import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

// ---------------importing components data from data folder from components-----------------------
const aspnetBanner = {
  background:
    "Images/webdevmain/webdevnewbanners/Aspnetdevelopementbanner.webp",
  title: {
    orange: "Best ASP.Net",
    normal: "Development Around the Globe",
  },
  description:
    "With ASP.net, you can create an e-commerce website that looks beautiful and functions smoothly on all types of devices. it provide a rich user experience,it also protects your data through encryption and complies to PCI DSS standards for securing customer credit card information.Bottom funnel ASP.NET development gives you a chance to learn how an application works from ground up and provides all the technologies required to build it successfully.",
};
const aspstackIntro = {
  heading: "ASP.NET & .NET",
  description: `ASP.NET is a popular web development framework that allows you to create dynamic websites using an HTML, CSS, and JavaScript language. It comes with features such as authentication and session management, SQL Server support for data storage and retrieval, as well as page aspect ratios (which can be helpful when creating responsive designs). Additionally, ASP.NET supports Razor views which make it easy to develop user interfaces using Templating Language (usually called View Engine) or Model Binding.`,
  aspstack: [
    {
      stackName: "WCF",
      stackIcon: "Images/asp.netpagephotos/wcf.webp",
      description: `WCF is a web services mapping technology that allows you to expose and access business-level functionality from an ASP.NET application. This can be used for things like sending orders, managing customer data, or handling any other interactions between your front end and back end systems.`,
    },
    {
      stackName: "MVC",
      stackIcon: "Images/asp.netpagephotos/mvc.webp",
      description: `In asp net, the MVC pattern is a model of architecture that divides an application into four core components: Model (the data layer), View (the user interface), Controller (the code that manages the interaction between models and views), and Service(s).
      Each component has its own responsibilities, and together they allow for a flexible and organized design.`,
    },
    {
      stackName: ".NET 4.5",
      stackIcon: "Images/asp.netpagephotos/net.webp",
      description: `.net is a domain name extension for web applications developed by Microsoft. It provides an easy way for developers to create cross-platform websites, making it ideal for creating your own website or developing custom software projects. .net allows you to use the same codebase and branding across different platforms, including Windows, Linux, Android, and iOS.`,
    },
    {
      stackName: "Angular.js",
      stackIcon: "Images/asp.netpagephotos/Angularjs.webp",
      description: `Angular.js is a JavaScript library for building user interfaces (UI). It enables developers to create single-page applications (SPAs) with dynamic data and curated components. SPAs are lightweight, interactive websites that are responsive and easy to use, making them perfect for mobile devices.`,
    },
  ],
};
import { aspnetwebDevServices } from "../../components/Data/webdevPageData/Popularservices";
import { whyAspnet } from "../../components/Data/webdevPageData/whyTechStack";
import { aspnetWhyContent } from "../../components/Data/webdevPageData/whyBottomContent";

// ---------------importing components with lazy loading-----------------------

const WebdevBanner = dynamic(
  () => import("../../components/WebDevelopment/bannerWebdev/WebdevBanner"),
  { loading: () => "Loading..." },
);

const Techstackintro = dynamic(
  () => import("../../components/WebDevelopment/techStackintro/Techstackintro"),
  { loading: () => "Loading..." },
);

const WebDevServices = dynamic(
  () => import("../../components/WebDevelopment/webdevServices/WebDevServices"),
  { loading: () => "Loading..." },
);

const WhyTechStack = dynamic(
  () => import("../../components/WebDevelopment/whyTechStack/WhyTechStack"),
  { loading: () => "Loading..." },
);
const GetStarted = dynamic(
  () => import("../../components/WebDevelopment/webGetStartedCard/GetStarted"),
  { loading: () => "Loading..." },
);

const WebDevWhy = dynamic(
  () => import("../../components/WebDevelopment/webDevWhy/WebDevWhy"),
  { loading: () => "Loading..." },
);

// ------------------Main page function-----------------
export default function AspNet() {
  return (
    <div>
      <Head>
        <title>ASP.NET Development | Bottom Funnel</title>
        <meta
          name="description"
          content="ASP.NET is a widely used web development 
          framework that offers many benefits to web 
          developers. Learn about these advantages and 
          get tips on developing ASP.NET solutions"
        />
      </Head>

      <main>
        <WebdevBanner
          paraColor={"#393939"}
          bannerContent={aspnetBanner}
          animateData={"/webdevanimation/Asp.json"}
        />
        <Techstackintro techContent={aspstackIntro} />
        <WebDevServices webservicesContent={aspnetwebDevServices} />
        <WhyTechStack techData={whyAspnet} />
        <GetStarted />
        <WebDevWhy whyDevContent={aspnetWhyContent} />
      </main>
    </div>
  );
}
