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

import styles from "./MLForm.module.css";

import { countrycodes, interested, budget } from "./countrycode";

export const MLForm = () => {
  return (
    <div className={styles.MLFormContainer}>
      <div className={styles.MLFormStats}>
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

      <div className={styles.MLFormMain}>
        <div className={styles.MLFormFormOuterMain}>
          <h1>Get Started Now!</h1>
          <div className={styles.MLFormForm}>
            <div className={styles.MLFormFormSection}>
              <div className={styles.MLFormInputWithIcon}>
                <IconContext.Provider value={{ className: styles.MLFormFormIcon }}>
                  <BsFillPersonFill />
                </IconContext.Provider>
                <input
                  type="text"
                  className={styles.MLFormInputPart}
                  placeholder="Name"
                />
              </div>

              <div className={styles.MLFormInputWithIcon}>
                <IconContext.Provider value={{ className: styles.MLFormFormIcon }}>
                  <AiTwotoneMail />
                </IconContext.Provider>
                <input
                  type="text"
                  className={styles.MLFormInputPart}
                  placeholder="Email"
                />
              </div>

              <div className={styles.MLFormPhoneClass}>
                <IconContext.Provider value={{ className: styles.MLFormFormIcon }}>
                  <BsFillTelephoneFill />
                </IconContext.Provider>
                <select className={styles.MLFormCountryCode} name="" id="">
                  {countrycodes.map((item, i) => (
                    <option key={i} value={item.code}>
                      {item.code} {item.dial_code}
                    </option>
                  ))}
                </select>
              </div>
              <input
                className={styles.MLFormPhoneNumber}
                type="number"
                placeholder="Phone Number"
              />

              <div className={styles.MLFormSelectClass}>
                <IconContext.Provider value={{ className: styles.MLFormFormIcon }}>
                  <CgMenuGridR />
                </IconContext.Provider>

                <select className={styles.MLFormSelectPart} name="" id="">
                  <option value="Select">Interested In*</option>
                  {interested.map((item, i) => (
                    <option key={i} value={item.service}>
                      {item.service}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.MLFormSelectClass}>
                <IconContext.Provider value={{ className: styles.MLFormFormIcon }}>
                  <BsCurrencyDollar />
                </IconContext.Provider>

                <select className={styles.MLFormSelectPart} name="" id="">
                  <option value="Select">Your Budget</option>
                  {budget.map((item, i) => (
                    <option key={i} value={item.budget}>
                      {item.budget}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.MLFormInputWithIcon}>
                <IconContext.Provider value={{ className: styles.MLFormFormIcon }}>
                  <RiMessage2Fill />
                </IconContext.Provider>
                <input
                  type="text"
                  className={styles.MLFormInputPart}
                  placeholder="Skype/Whatsapp"
                />
              </div>

              <div className={styles.MLFormTextareaClass}>
                <IconContext.Provider
                  value={{ className: styles.MLFormFormMessageIcon }}
                >
                  <BiMessage />
                </IconContext.Provider>
                <label htmlFor="textarea"> Message</label>
                <textarea
                  className={styles.MLFormMessagePart}
                  name="textarea"
                  id=""
                  cols="15"
                  rows="5"
                ></textarea>
              </div>
            </div>

            <div className={styles.MLFormRobotCaptcha}>
              <button>Get Started</button>
            </div>
          </div>
        </div>

        <div className={styles.MLFormFeatureMain}>
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
