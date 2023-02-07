import React from "react";
import styles from "./contectForm.module.css";
import {
  BsFillPersonFill,
  BsFillTelephoneFill,
  BsCurrencyDollar,
} from "react-icons/bs";

import { AiTwotoneMail } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import { RiMessage2Fill } from "react-icons/ri";
import { BiMessage } from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import { BsSkype } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { countrycodes } from "./countrycode";
import { budget } from "./countrycode";
import { interested } from "./countrycode";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { PopupForm } from "../PopupForm/PopupForm";

const ContectForm = () => {
  const handleform = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.mainLeadform}>
      <div className={styles.backgroundDiv}>
        <div className={styles.formHeader}>
          <h2>Interested in working with us?</h2>
          <h5>Let's talk and get started</h5>
        </div>
      </div>

      <div className={styles.contectSection}>
        <div className={styles.addressSection}>
          <img src="Images/services/service.webp" alt="images" />
          <div>
            <div className={styles.mailAddress}>
              <div className={styles.iconDiv}>
                <IconContext.Provider value={{ className: styles.mailIcon }}>
                  <MdEmail />
                </IconContext.Provider>
              </div>

              <div className={styles.mailtextDiv}>
                <p>Mail to our sales department</p>
                <h3>sales@bottomFunnel.net</h3>
              </div>
            </div>

            <div className={styles.mailAddress}>
              <div className={styles.iconDiv}>
                <IconContext.Provider value={{ className: styles.mailIcon }}>
                  <BsSkype />
                </IconContext.Provider>
              </div>

              <div className={styles.mailtextDiv}>
                <p>Our Skype ID</p>
                <h3>bottomfunnel</h3>
              </div>
            </div>

            <div className={styles.assistanceSection}>
              <h3>& What you will get:</h3>
              <ul>
                <li>On-call inquiry assistance</li>
                <li>Project consulting by experts</li>
                <li>Detailed project estimation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.contactFormCss}>  <PopupForm /></div>
      </div>
    </div>
  );
};

export default ContectForm;
