import React from "react";
import "./banner.css";
import Slider from "react-slick";
import { useState } from "react";
import { ParallexSection } from "../Parallex/ParallexSection";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PopupForm } from "../PopupForm/PopupForm";

const Banner = () => {
  const [open, setOpen] = React.useState(false);
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

  var settings = {
    // autoplay: true,
    dots: false,
    autoplaySpeed: 5000,
    cssEase: "linear",
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 1,
    pauseOnHover: true,
    slidesToScroll: 1,
    arrows: true,
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

  const banner = [
    {
      title: "Mobile App Development",
      bannerImage: "Images/banner/app dev.gif",
      desc: "Connect to your customers in real time with the latest in mobile app development.",
      backgorund: "Images/banner/mobilefull.png",
    },
    {
      title: "Custom Software Development",
      bannerImage: "Images/banner/customsde.gif",
      desc: "Turn your company’s opportunities into realities with enterprise-level custom software development.",
      backgorund: "Images/banner/mobilefull.png",
    },
    {
      title: "Digital Marketing",
      bannerImage: "Images/banner/digitalmarketing.gif",
      desc: "Break through the noise and grow your business with the power of digital marketing",
      backgorund: "Images/banner/mobilefull.png",
    },
    {
      title: "Web Development",
      bannerImage: "Images/banner/web dev.gif",
      desc: "Developing websites that develop your business",
      backgorund: "Images/banner/mobilefull.png",
    },
    {
      title: "Software Product Development",
      bannerImage: "Images/banner/app dev.gif",
      desc: "Don’t settle for anything less, get the finest software product for you company.",
      backgorund: "Images/banner/mobilefull.png",
    },
  ];

  return (
    <div className="bannerSection">
      <div className="bannerSlide">
        {/* <div className="backAnimation">
          <ParallexSection />
        </div> */}
        <Slider {...settings}>
          {banner.map((item, i) => (
            <div key={i} className="slideMainDiv">
              <div className="slideInnerContent">
                <div className="textContent">
                  <div>
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                    <button onClick={handleOpen}>Get Started</button>

                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          <div className="popform">
                            <PopupForm />
                          </div>
                        </Typography>
                      </Box>
                    </Modal>
                  </div>
                </div>

                <div className="imageContent">
                  <div className="imageInner">
                    <img src={item.bannerImage} alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
