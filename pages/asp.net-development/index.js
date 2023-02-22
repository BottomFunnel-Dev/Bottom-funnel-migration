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
const aspnetwebDevServices = {
  title: "ASP.NET",
  description:
    "We have developed years of expertise in creating world-class websites and apps using ASP.NET. We offer comprehensive services that include application design, coding, testing, deployment, and maintenance so you can sleep easy knowing your website will be up and running smoothly day after day.",
  serviceCard: [
    {
      icon: "Images/asp.netpagephotos/database.webp",
      alt: "database.webp",
      serviceTitle: "Database Development",
      serviceDesc:
        "With our sophisticated database development framework and expertise, your site will be up and running in no time. We have experience working with all major databases including MySQL, SQL Server, Oracle, PostgreSQL, and more.",
    },
    {
      icon: "Images/asp.netpagephotos/Ecommerce.webp",
      alt: "Ecommerce",
      serviceTitle: "Ecommerce Development",
      serviceDesc:
        "We use ASP.NET and its frameworks to develop web applications and websites for our clients. With years of experience, we have built robust applications that support all types of requirements, from small shops to large enterprises.",
    },
    {
      icon: "Images/asp.netpagephotos/aspintegration.webp",
      alt: "aspintegration.png",
      serviceTitle: "Asp.net Integration",
      serviceDesc:
        "With ASP.NET, you can easily create web applications that run smoothly on any device without causing any errors. From backend to frontend, everything is organized in such a way that it'll be easy for you to understand how the whole system works.",
    },
    {
      icon: "Images/asp.netpagephotos/migration.webp",
      alt: "migration.png",
      serviceTitle: "Asp.net Migration",
      serviceDesc:
        "Bottom Funnel is the best ASP.NET development company that offers migration services for your existing ASP.NET application, website or API. We have years of experience in this domain and our team of experts can handle any kind of migration problem quickly and efficiently ",
    },
    {
      icon: "Images/asp.netpagephotos/cloudapp.webp",
      alt: "cloudapp.png",
      serviceTitle: "Cloud App Development",
      serviceDesc:
        "A quick way to build app is using ASP.NET and its frameworks. ASP.NET is a platform for building web applications that run on Windows or IOS devices. It uses C# programming language which is easy for beginners but powerful enough for experts as well!",
    },

    {
      icon: "Images/asp.netpagephotos/support.webp",
      alt: "support.png",
      serviceTitle: "Support and Maintenance",
      serviceDesc:
        "With the help of experts like us, you can be sure that your project will be handled by professionals who understand the ins and outs of this technology. We have years of experience working with clients to build their dreams in the form of websites, apps, and more.",
    },
  ],
};
const whyAspnet = {
  heading: "ASP.NET",
  desc: "ASP.NET is a popular framework for developing web applications that uses Microsoft's .NET platform. As a result, it offers many features and benefits that make it an excellent choice for developers who are looking to create high-quality websites. These include: ASP.NET provides modularity - This allows you to divide your code into separate files so that it is easier to maintain and update.",

  cardData: [
    {
      title: "Extremely High Performance",
      description:
        "With ASP.NET Core, you can now build and run high performance web applications with ease. Kestrel is the web server that powers ASP.NET Core, and it provides fast page load times by serving your website assets from a local cache. This gives your applications the responsiveness they need without weighing them down with unnecessary baggage.",
    },
    {
      title: "Support for Cross-Platform",
      description:
        "The latest is ASP.NET which supports Windows, macOS and Linux. It also has great support for cross-platform development which allows you to develop an application across different desktop operating systems.",
    },
    {
      title: "Comprehensive Development Environments",
      description:
        "ASP.NET development is a powerful and complex way to build web applications, but it takes a lot of time to get up and running with the basics. We are using Visual Studio as an integrated development environment (IDE), so we can quickly drag and drop components into our app. ",
    },
    {
      title: "Support for Web Sockets",
      description:
        "Sockets have been widely used in recent years to develop client-server applications that communicate with one another. For example, standard socket programming allows us to create web-based, client-server applications. These are responsible for the browser’s back and forth communication. It is also used for creating the most common chat applications.",
    },
    {
      title: "Security",
      description:
        " ASP.NET is compatible with the .net framework, meaning it will ensure the security of our app. Because each application has its unique identification before letting it run, .net will verify the objects’ authenticity. It will also assess how secure your operating system is to make sure that your programs are running in a safe and secure environment.",
    },
    {
      title: "use of Async/Await",
      description:
        "Asynchronous programming patterns have been supported by all of the.net framework’s classes and 3rd-party libraries and frameworks since kestrel 2.0. However, you may not be as familiar with them when it comes to asp.net development. That's because a lot of programs spend a significant amount of time waiting for database queries, web services calls. ",
    },
  ],
};
const aspnetWhyContent = {
  intro:
    "Bottom funnel is one of the most effective ways to get a hold on your web development. It offers an easy way for beginners to learn and understand the basics of ASP.NET, as well as for advanced users who want to take things to the next level.",
  feature: [
    {
      title: "Agile",
      description:
        "If you're looking for a way to speed up your ASP.NET development process, look no further than bottom funnel. We have an agile team that is always striving to improve ourselves and our software, so that we can offer you the best possible experience.",
      icon: "Images/mern/settings.webp",
    },
    {
      title: "Experienced and Talented Team",
      description:
        "We are a top-notch ASP.NET development firm that brings experience and expertise to work on your project. Our team has years of experience working on web applications and understands the needs of modern businesses. We use cutting-edge technologies to build efficient, scalable systems that are easy to maintain.",
      icon: "Images/mern/group.webp",
    },
    {
      title: "Integrity and Transparency",
      description:
        "Bottom funnel is a leading web development company that believes in integrity and transparency. We offer top-notching ASP.NET development services to our clients to help them build an efficient website or app. Our team of highly skilled experts has vast experience in the field, so you can be sure that we will deliver quality work on time.",
      icon: "Images/mern/integration.webp",
    },
    {
      title: "Flexible Engagement",
      description:
        "We're here with ASP.NET bottom funnel development. We give our clients a flexible engagement so they can choose which technologies they want to use and get the desired results from their projects.",
      icon: "Images/mern/direction.webp",
    },
  ],
};

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
