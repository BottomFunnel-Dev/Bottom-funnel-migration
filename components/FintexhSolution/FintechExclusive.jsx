import React from 'react';
import styles from "./FintechExclusive.module.css";

export const FintechExclusive = () => {

  const fintechexclusivedata = [
    {
      htxt: "Intuitive Interface",
      stxt: "Gone are the days when you need to spend hours on end to understand your bank and credit card accounts. With Fintech app, everything is a click away.",
    },

    {
      htxt: "Personalized Experience",
      stxt: "Fintech is the new age of financial technologies and services in the world. With hundreds of options, it has become easy to choose what suits your needs best.",
    },
    {
      htxt: "Customer Service Options",
      stxt: "We're so confident in this approach that we offer all our customers an unlimited lifetime guarantee, guaranteeing the quality of service they receive over time. ",
    },

    {
      htxt: "Alerts and Notifications",
      stxt: "Fintech is the new buzzword these days. It's not just about stocks or shares! It can be anything from Loans, Credit Cards or even Insurance. ",
    },

    {
      htxt: "Secure Sign-In",
      stxt: "You know the feeling of being kept under the radar and having to watch every move you make, until you've got your way through surveillance.",
    },


    {
      htxt: "Digital Payments",
      stxt: "Fintech app solution is being adopted by every organization these days, and soon it will be a must-have software tool for your small Enterprise as well!",
    },
  ]

  return (
    <div className={styles.fintechsolutionexclusivemainboxes}>
      <div className={styles.fintechsolutionexclusivetextboxheader}>
        <div className={styles.fintechexclusiveleftboxfortext}>
          <h1>
            <span className={styles.specialtextcolored}> Exclusive </span> Features
          </h1>
        </div>

        <div className={styles.fintechexclusiverightboxfortext}>
          <p>
            We are Fintech App Solution and we offer you exclusive features. Here, you can get the best of banking services
            in a hassle-free manner that is quick, convenient and secure.
          </p>
        </div>
      </div>

      <div className={styles.flexingboxoffintechexclusive}>
        {fintechexclusivedata.map((e) => {
          return (
            <div className={styles.fintechsolutionsflexingboxaftermapping}>
              <h3> {e.htxt} </h3>
              <p> {e.stxt} </p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

