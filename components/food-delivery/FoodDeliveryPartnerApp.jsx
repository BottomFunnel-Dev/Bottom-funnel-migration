
import React, { useState } from "react";
import Image from "next/image";
// import styles from "./FoodDeliveryPartnerApp.module.css";
import Head from "next/head";

export default function FoodDeliveryPartnerApp() {
  const [imageChange, setImageChange] = useState("/Images/newcannabispage/Admin Screens/AdminPanelImage.webp");
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath);
  };

  const icecreamadmindata = [
    {
      image: "/Images/newcannabispage/Admin Screens/AdminPanelImage.webp",
      icon: "/Images/PlantBasedMeat/icons/prototyping-10.png",
      headertext: "Dashboard Management",
      paragraph:
        "Build an admin panel for your web app or backend panel with Ready Dashboard.It’s built sophisticatedly with a clean and colorful user interface and modern web building methods and technology. ",
    },

    {
      image: "/Images/newcannabispage/Admin Screens/Reports & analytics.webp",
      icon: "/Images/PlantBasedMeat/icons/prototyping-7.png",
      headertext: "Reports & Analytics",
      paragraph:
        "A report allows you to summarize and chart record data. A dashboard can present summary reports on a single page. It is a collection of Reports.Here is my next exploration of Mersy. Hope you guys like it Cheers! ",
    },

    {
      image: "/Images/newcannabispage/Admin Screens/AdminPanelImage1.webp",
      icon: "/Images/PlantBasedMeat/icons/prototyping-6.png",
      headertext: "Clients Management",
      paragraph:
        "This design is about managing customer reviews. The business owner can see all reviews, and average ratings and give any customer instant feedback using this dashboard. ",
    },

    {
      image: "/Images/newcannabispage/Admin Screens/AdminPanelImage2.webp",
      icon: "/Images/PlantBasedMeat/icons/prototyping-5.png",
      headertext: "Orders Management",
      paragraph:
        "Customer relationship management (CRM) is a technology for managing all your company's relationships and interactions with customers and potential customers.",
    },
  ];

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="/components/food-delivery/FoodDeliveryPartnerApp.module.css"
        />
      </Head>

      <div className="cannabiesadminpannelmainboxes">
        <div className="cannbiesadminpannelmainboxsometextupper">
          <h2> Admin Pannel </h2>
        </div>

        <div className="cannabiesadminpannelmainflexboxclass">
          <div className="cannabieasadminpannelleftbox">
            {icecreamadmindata.map((e, index) => {
              return (
                <div
                  className="cannabiesadminpannelmapperboxindivisyal"
                  key={index}
                  onMouseEnter={() => {
                    handleImageChange(e.image);
                  }}
                >
                  <div className="cannabieasadminpannelmapperboxindivisyalicon" >
                    <Image
                      src={e.icon}
                      alt={"image"}
                      width={"0"}
                      height={"0"}
                      sizes={"100vw"}
                      style={{ width: "100%", height: "80%" }}
                    />
                  </div>

                  <div className="canabisadminpannelmapperboxindivisyaltxt">
                    <h4> {e.headertext} </h4>
                    <p> {e.paragraph} </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="cannabiesamadminpannelrightbox">
            <div className="cannbiesamadminpannelrightboxinnerimage">
              <Image
                src={imageChange}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
