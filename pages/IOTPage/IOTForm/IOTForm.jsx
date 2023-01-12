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

import styles from "./IOTForm.module.css";

import { countrycodes, interested, budget } from "./countrycode";

export const IOTForm = () => {
  return (
    <div className={styles.IOTFormContainer}>
      <div className={styles.IOTFormStats}>
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

      <div className={styles.IOTFormMain}>
        <div className={styles.IOTFormFormOuterMain}>
          <h1>Get Started Now!</h1>
          <div className={styles.IOTFormForm}>
            <div className={styles.IOTFormFormSection}>
              <div className={styles.IOTFormInputWithIcon}>
                <IconContext.Provider value={{ className: styles.IOTFormFormIcon }}>
                  <BsFillPersonFill />
                </IconContext.Provider>
                <input
                  type="text"
                  className={styles.IOTFormInputPart}
                  placeholder="Name"
                />
              </div>

              <div className={styles.IOTFormInputWithIcon}>
                <IconContext.Provider value={{ className: styles.IOTFormFormIcon }}>
                  <AiTwotoneMail />
                </IconContext.Provider>
                <input
                  type="text"
                  className={styles.IOTFormInputPart}
                  placeholder="Email"
                />
              </div>

              <div className={styles.IOTForm-phoneClass}>
                <IconContext.Provider value={{ className: styles.IOTFormFormIcon }}>
                  <BsFillTelephoneFill />
                </IconContext.Provider>
                <select className={styles.IOTForm-countryCode} name="" id="">
                  {countrycodes.map((item, i) => (
                    <option key={i} value={item.code}>
                      {item.code} {item.dial_code}
                    </option>
                  ))}
                </select>
              </div>

              <input
                className={styles.IOTForm-phoneNumber}
                type="number"
                placeholder="Phone Number"
              />

              <div className={styles.IOTForm-selectClass}>
                <IconContext.Provider value={{ className: styles.IOTFormFormIcon }}>
                  <CgMenuGridR />
                </IconContext.Provider>
                <select className={styles.IOTForm-selectPart} name="" id="">
                  <option value="Select">Interested In*</option>
                  {interested.map((item, i) => (
                    <option key={i} value={item.service}>
                      {item.service}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.IOTForm-selectClass}>
                <IconContext.Provider value={{ className: styles.IOTFormFormIcon }}>
                  <BsCurrencyDollar />
                </IconContext.Provider>
                <select className={styles.IOTForm-selectPart} name="" id="">
                  <option value="Select">Your Budget</option>
                  {budget.map((item, i) => (
                    <option key={i} value={item.budget}>
                      {item.budget}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.IOTFormInputWithIcon}>
                <IconContext.Provider value={{ className: styles.IOTFormFormIcon }}>
                  <RiMessage2Fill />
                </IconContext.Provider>
                <input
                  type="text"
                  className={styles.IOTFormInputPart}
                  placeholder="Skype/Whatsapp"
                />
              </div>

              <div className={styles.IOTFormTextareaClass}>
                <IconContext.Provider
                  value={{ className: styles.IOTFormFormMessageIcon }}
                >
                  <BiMessage />
                </IconContext.Provider>
                <label htmlFor="textarea"> Message</label>
                <textarea
                  className={styles.IOTFormMessagePart}
                  name="textarea"
                  id=""
                  cols="15"
                  rows="5"
                ></textarea>
              </div>
            </div>

            <div className={styles.IOTFormRobotCaptcha}>
              <button>Get Started</button>
            </div>
          </div>
        </div>

        <div className={styles.IOTFormFeatureMain}>
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
