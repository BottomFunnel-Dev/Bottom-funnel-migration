import React from "react";
import styles from "./seoForm.module.css";

export const SeoForm = () => {
  return (
    <div className={styles._Seoform}>
      <div className={styles._Seoformcontent}>
        <div className={styles._Seoformheading}>
          Want to kickstart your first SEO Campaign? no contracts, no
          commitments
        </div>
        <div className={styles._Seoenterform}>
          <input type="text" placeholder="Name" className={styles._seoforminput} />
          <br />
          <input
            type="text"
            placeholder="Work email"
            className={styles._seoforminput}
          />
          <br />
          <input type="text" placeholder="Phone" className={styles._seoforminput} />
          <br />
          <label>How soon do you want to start the project ?*</label>
          <br />

          <select type="time" className={styles._seoforminput1} >
            <option value="Within 8 weeks">Within 8 weeks</option>
            <option value="8 weeks">8 weeks</option>
          </select>
          <br />

          <select name="time" label="budget"  className={styles._seoforminput1} >
            <option>select your budget</option>
            <option value="1000$ to 2000$">1000$ to 2000$</option>
            <option value="2000$ to 3000$">2000$ to 3000$</option>
          </select>
          <br />
          <input
            placeholder="tell your requirement"
            className={styles._seoforminput}
            type="text"
          />
          <br />
          <div className={styles._SeoSubmitbutton}>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
