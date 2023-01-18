import React from "react";
import { IconContext } from "react-icons";
import {
  BsFillPersonFill,
  BsFillTelephoneFill,
  BsCurrencyDollar,
} from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import { RiMessage2Fill } from "react-icons/ri";
import { BiMessage } from "react-icons/bi";

import styles from "./VRForm.module.css";

import { countrycodes, interested, budget } from "./countrycode";

export const VRForm = () => {
  return (
    <div className={styles.VRFormContainer}>
      <div className={styles.VRFormStats}>
        <h1>Hire Dedicated Big Data Service</h1>
        <div>
          <div>
            <h1>$999</h1>
            <h3>Full Time Monthly</h3>
          </div>
          <div>
            <h1>$10/hr</h1>
            <h3>Week Basis</h3>
          </div>
          <div>
            <h1>$15</h1>
            <h3>Hourly Basis</h3>
          </div>
        </div>
      </div>
      <div className={styles.VRFormMain}>
        <div className={styles.VRFormFormOuterMain}>
          <h1>Get Started Now!</h1>
          <div className={styles.VRFormForm}>
            <div className={styles.VRFormFormSection}>
              <div className={styles.VRFormInputWithIcon}>
                <IconContext.Provider value={{ className: styles.VRFormFormIcon }}>
                  <BsFillPersonFill />
                </IconContext.Provider>
                <input
                  type="text"
                  className={styles.VRFormInputPart}
                  placeholder="Name"
                />
              </div>
              <div className={styles.VRFormInputWithIcon}>
                <IconContext.Provider value={{ className: styles.VRFormFormIcon }}>
                  <AiTwotoneMail />
                </IconContext.Provider>
                <input
                  type="text"
                  className={styles.VRFormInputPart}
                  placeholder="Email"
                />
              </div>
              <div className={styles.VRFormPhoneClass}>
                <IconContext.Provider value={{ className: styles.VRFormFormIcon }}>
                  <BsFillTelephoneFill />
                </IconContext.Provider>
                <select className={styles.VRFormCountryCode} name="" id="">
                  {countrycodes.map((item, i) => (
                    <option key={i} value={item.code}>
                      {item.code} {item.dial_code}
                    </option>
                  ))}
                </select>
              </div>
              <input
                className={styles.VRFormPhoneNumber}
                type="number"
                placeholder="Phone Number"
              />
              <div className={styles.VRFormSelectClass}>
                <IconContext.Provider value={{ className: styles.VRFormFormIcon }}>
                  <CgMenuGridR />
                </IconContext.Provider>
                <select className={styles.VRFormSelectPart} name="" id="">
                  <option value="Select">Interested In*</option>
                  {interested.map((item, i) => (
                    <option key={i} value={item.service}>
                      {item.service}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.VRFormSelectClass}>
                <IconContext.Provider value={{ className: styles.VRFormFormIcon }}>
                  <BsCurrencyDollar />
                </IconContext.Provider>
                <select className={styles.VRFormSelectPart} name="" id="">
                  <option value="Select">Your Budget</option>
                  {budget.map((item, i) => (
                    <option key={i} value={item.budget}>
                      {item.budget}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.VRFormInputWithIcon}>
                <IconContext.Provider value={{ className: styles.VRFormFormIcon }}>
                  <RiMessage2Fill />
                </IconContext.Provider>
                <input
                  type="text"
                  className={styles.VRFormInputPart}
                  placeholder="Skype/Whatsapp"
                />
              </div>
              <div className={styles.VRFormTextareaClass}>
                <IconContext.Provider
                  value={{ className: styles.VRFormFormMessageIcon }}
                >
                  <BiMessage />
                </IconContext.Provider>
                <label htmlFor="textarea"> Message</label>
                <textarea
                  className={styles.VRFormMessagePart}
                  name="textarea"
                  id=""
                  cols="15"
                  rows="5"
                ></textarea>
              </div>
            </div>
            <div className={styles.VRFormRobotCaptcha}>
              <button>Get Started</button>
            </div>
          </div>
        </div>

        <div className={styles.VRFormFeatureMain}>
          <h1>Features</h1>
          <ul>
            <li>
              We work in real-time to ensure a smooth transitioning process as
              well as prompt and timely deliveries.
            </li>
            <br />
            <li>
              Our work in multiple domains with a diverse clients based in every
              corner of the globe gives us an unparalleled perspective
            </li>
            <br />
            <li>
              We adopt proven industry concepts such as Convention over
              Configuration and DRY (Do not Repeat Yourself)
            </li>
            <br />
            <li>
              We offer dependable support and maintenance services across all
              our projects and ensure long-term client satisfaction.
            </li>
            <br />
            <li>
              We offer dependable support and maintenance services across all
              our projects and ensure long-term client satisfaction.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
