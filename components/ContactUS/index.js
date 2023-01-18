import React from "react";
import styles from "./ContactUS.module.css";
import { ContactUSBanner } from "./ContactUSBanner/ContactUSBanner";
import { ContactUSForm } from "./ContactUSForm/ContactUSForm";




export default function ContactUS  () {


  return (
    <div>
    
      <div className={styles.ContactUScontainer}>
        <ContactUSBanner />
        {/* --------------- Contact form from home page and other pages will come here ----------- */}
        <ContactUSForm />
       
      </div>
    </div>
  );
};
