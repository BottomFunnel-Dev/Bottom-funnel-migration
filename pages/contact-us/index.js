import React from "react";
import Head from "next/head";
import styles from "./ContactUS.module.css";

import { ContactUSBanner } from "../../components/ContactUS/ContactUSBanner/ContactUSBanner";
import { ContactUSForm } from "../../components/ContactUS/ContactUSForm/ContactUSForm";

export default function ContactUs() {
  return (
    <div className={styles.ContactUScontainer}>
      <Head>
        <title> Contact Us - Bottom Funnel </title>
        <meta
          name="description"
          content="If you're looking for the answers to your questions and want to learn more about our product offerings, 
          then please feel free to contact us! We'll be happy to answer all of your questions and help you make an informed
          decision about which solution is best for you and your organization."
        />
      </Head>
      <main>
        <ContactUSBanner />
        {/* --------------- Contact form from home page and other pages will come here ----------- */}
        <ContactUSForm />
      </main>
    </div>
  );
}
