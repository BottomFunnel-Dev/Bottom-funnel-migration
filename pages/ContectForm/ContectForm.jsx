import React from "react";
import "./contectForm.css";
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
    <div className="mainLeadform">
      <div className="backgroundDiv">
        <div className="formHeader">
          <h2>Interested in working with us?</h2>
          <h5>Let's talk and get started</h5>
        </div>
      </div>

      <div className="contectSection">
        <div className="addressSection">
          <img src="Images/services/service.png" alt="" />
          <div>
            <div className="mailAddress">
              <div className="iconDiv">
                <IconContext.Provider value={{ className: "mailIcon" }}>
                  <MdEmail />
                </IconContext.Provider>
              </div>

              <div className="mailtextDiv">
                <p>Mail to our sales department</p>
                <h3>sales@bottomFunnel.net</h3>
              </div>
            </div>
            <div className="mailAddress">
              <div className="iconDiv">
                <IconContext.Provider value={{ className: "mailIcon" }}>
                  <BsSkype />
                </IconContext.Provider>
              </div>

              <div className="mailtextDiv">
                <p>Our Skype ID</p>
                <h3>bottomfunnel</h3>
              </div>
            </div>

            <div className="assistanceSection">
              <h3>& What you will get:</h3>
              <ul>
                <li>On-call inquiry assistance</li>
                <li>Project consulting by experts</li>
                <li>Detailed project estimation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* <form onSubmit={handleform} className="formPart">
          <div className="formSection">
            <div className="inputWithIcon">
              <IconContext.Provider value={{ className: "formIcon" }}>
                <BsFillPersonFill />
              </IconContext.Provider>
              <input
                type="text"
                className="inputPart"
                placeholder="Name"
                name="user_name"
              />
            </div>
            <div className="inputWithIcon">
              <IconContext.Provider value={{ className: "formIcon" }}>
                <AiTwotoneMail />
              </IconContext.Provider>
              <input
                type="text"
                className="inputPart"
                placeholder="Email"
                name="user_email"
              />
            </div>
            <div className="phoneClass">
              <IconContext.Provider value={{ className: "formIcon" }}>
                <BsFillTelephoneFill />
              </IconContext.Provider>
              <select className="countryCode" name="country_code" id="">
                {countrycodes.map((item, i) => (
                  <option key={i} value={item.code}>
                    {item.code} {item.dial_code}
                  </option>
                ))}
              </select>
            </div>
            <input
              className="phoneNumber"
              type="number"
              placeholder="Phone Number"
              name="phone_number"
            />
            <div className="selectClass">
              <IconContext.Provider value={{ className: "formIcon" }}>
                <CgMenuGridR />
              </IconContext.Provider>
              <select className="selectPart" name="interest" id="">
                <option value="Select">Interested In*</option>
                {interested.map((item, i) => (
                  <option key={i} value={item.service}>
                    {item.service}
                  </option>
                ))}
              </select>
            </div>
            <div id="budgetSelect" className="selectClass">
              <IconContext.Provider value={{ className: "formIcon" }}>
                <BsCurrencyDollar />
              </IconContext.Provider>
              <select className="selectPart" name="budget" id="">
                <option value="Select">Your Budget</option>
                {budget.map((item, i) => (
                  <option key={i} value={item.budget}>
                    {item.budget}
                  </option>
                ))}
              </select>
            </div>
            <div className="inputWithIcon">
              <IconContext.Provider value={{ className: "formIcon" }}>
                <RiMessage2Fill />
              </IconContext.Provider>
              <input
                type="text"
                className="inputPart"
                placeholder="Skype/Whatsapp"
                name="whatsapp_number"
              />
            </div>
            <div className="textareaClass">
              <IconContext.Provider value={{ className: "formMessageIcon" }}>
                <BiMessage />
              </IconContext.Provider>
              <label htmlFor="textarea"> Message</label>
              <textarea
                className="messagePart"
                name="message"
                placeholder="write your requirement (100-150 words)"
                id=""
                cols="15"
                rows="5"
              ></textarea>
            </div>
          </div>
          <div className="robotCaptcha">
            <input type="submit" value="Send Your Enquiry" />
          </div>
        </form> */}
      <div className="contact-form-css">  <PopupForm  /></div>
      </div>
    </div>
  );
};

export default ContectForm;
