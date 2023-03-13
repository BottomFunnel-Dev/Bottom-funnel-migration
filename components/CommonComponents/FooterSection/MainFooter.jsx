import React, { useState } from "react";
import dynamic from "next/dynamic";
import styles from "./mainFooter.module.css";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IconContext } from "react-icons/lib";

import { PopupForm } from "../../CommonComponents/PopupForm/PopupForm";
const Positions = dynamic(() => import("./Positions"));
const FooterTable = dynamic(() => import("./FooterTable"), {
  loading: () => "loading...",
});
const MoreServices = dynamic(() => import("./MoreServices"), {
  loading: () => "loading...",
});

const MainFooter = () => {
  const [more, setMore] = useState(false);
  const moreServices = () => {
    more ? setMore(false) : setMore(true);
  };

  return (
    <div className={styles.mainFooterSection}>
      <div className={styles.rightFooter}>
        <div className={styles.mapImageSection}>
          <Positions />

          <lottie-player
            src="/Animation/Bottom funnel footer map animation.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>

        <div className={styles.footerLogo}>
          <div className={styles.logoBottom}>
            <img
              src="/Images/footer/whitelogobottom.webp"
              alt="image"
            />
            <i className={styles.taglinefooter}>"Build Your Brands Presence"</i>
          </div>

          <div className={styles.footerAddress}>
            <div className={styles.footerMapContactSection}>
              <li>
                <FaPhoneAlt /> +91 8209366227
              </li>
              <li></li>
              <li>
                <FaWhatsapp fontSize="20px" cursor={"pointer"} /> +971553070316
              </li>
              <li>
                {" "}
                <AiOutlineMail fontSize="20px" /> hr@bottomfunnel.net
              </li>
            </div>

            <div className={styles.footerSocialMediaSection}>
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100075774771610"
              >
                <IconContext.Provider value={{ className: styles.socialIcons }}>
                  <FaFacebookF />
                </IconContext.Provider>
              </a>
              <a target="_blank" href="https://twitter.com/BottomFunnel">
                <IconContext.Provider value={{ className: styles.socialIcons }}>
                  <FaTwitter />
                </IconContext.Provider>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/bottomfunnel/mycompany/verification/"
              >
                <IconContext.Provider value={{ className: styles.socialIcons }}>
                  <FaLinkedin />
                </IconContext.Provider>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/bottomfunnelmarketing/"
              >
                <IconContext.Provider value={{ className: styles.socialIcons }}>
                  <AiFillInstagram />
                </IconContext.Provider>
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UC-zyghDYFUgRSUlKTadvJuQ"
              >
                <IconContext.Provider value={{ className: styles.socialIcons }}>
                  <FaYoutube />
                </IconContext.Provider>
              </a>
            </div>

            <div
              className={`${styles.footerMapContactSection}  ${styles.privacySection}`}
            >
              <li>Privacy Policy</li>
              <li></li>
              <li>ISMS Policy</li>
            </div>
            <p>
              © 2022 bottom funnel technologies Private Limited. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.leftFooter}>
        {/* <p>Lorem ipsum dolor sit amet.</p> */}
        <div className={styles.startWith}>
          <h3>Start With Bottom Funnel Today</h3>

          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Plan Project
          </button>

          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                <div>
                  <PopupForm />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerServices}>
          <FooterTable />
          <div onClick={moreServices} className={styles.moreServ}>
            <div>More Services</div>
            <div>
              <FiChevronDown />
            </div>
          </div>
          {more && <MoreServices />}
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
