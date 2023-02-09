import React, { useState } from "react";
import styles from "./bannerFull.module.css";
import Slider from "react-slick";
import { MobileBanner } from "./BannerAnimations/MobileBanner";
import { SoftwareBanner } from "./BannerAnimations/SoftwareBanner";
import { DigitalMarketing } from "./BannerAnimations/DigitalMarketing";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PopupForm } from "../PopupForm/PopupForm";

export default function BannerFull() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    height: 550,
    bgcolor: "background.paper",
    border: "2px solid #000",
    // boxShadow: 24,
    backgorund: "green",
    p: 1,
    borderRadius: 2,
  };

  const banner = [
    {
      title: "Mobile App Development",
      bannerImage: "/Images/banner/app dev.gif",
      desc: "Connect to your customers in real time with the latest in mobile app development.",
      background: "/Images/banner/mobilefull.webp",
    },
    {
      title: "Software Product Development",
      bannerImage: "/Images/banner/customsde.gif",
      desc: "Turn your company's opportunities into realities with enterprise-level custom software development.",
      background: "/Images/banner/softwarefull.webp",
    },
    {
      title: "Digital Marketing",
      bannerImage: "/Images/banner/digitalmarketing.gif",
      desc: "Break through the noise and grow your business with the power of digital marketing",
      background: "/Images/banner/dmfull.webp",
    },
    {
      title: "Web Development",
      bannerImage: "/Images/banner/web dev.gif",
      desc: "Developing websites that develop your business",
      background: "/Images/banner/webdevfull.webp",
    },
  ];

  var settings = {
    autoplay: true,
    dots: false,
    autoplaySpeed: 5000,
    cssEase: "linear",
    speed: 300,
    swipeToSlide: true,
    slidesToShow: 1,
    pauseOnHover: false,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className={styles.bannerparentdivhomemodule}>
      <Slider {...settings}>
        {banner.map((item, i) => (
          <div key={i} style={{ background: "blue" }}>
            <div
              className={styles.bannerslidebackground}
              style={{
                backgroundImage: `url(${item.background})`,
                backgroundRepeat: "no-repeat",
                // backgroundPosition: "center",
                backgroundSize: "100% 100%",
              }}
            >
              {item.title === "Mobile App Development" && <MobileBanner />}
              {item.title === "Web Development" && <SoftwareBanner />}

              {item.title === "Digital Marketing" && <DigitalMarketing />}

              <div className={styles.bannertextcontentfull}>
                <h1> {item.title} </h1>
                <p> {item.desc} </p>
                <button onClick={handleOpen}> Get Started </button>

                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby={styles.modalmodaltitle}
                  aria-describedby={styles.modamodaldescription}
                >
                  <Box sx={style}>
                    <Typography
                      id="modalmodaltitle"
                      variant="h6"
                      component="h2"
                    >
                      <div className={styles.popform}>
                        <PopupForm />
                      </div>
                    </Typography>
                  </Box>
                </Modal>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
