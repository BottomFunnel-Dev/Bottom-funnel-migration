import React from "react";
import "./seoForm.css";
export const SeoForm = () => {
  return (
    <div className="_Seoform">
      <div className="_Seoformcontent">
        <div className="_Seoformheading">
          Want to kickstart your first SEO Campaign? no contracts, no
          commitments
        </div>
        <div className="_Seoenterform">
          <input type="text" placeholder="Name" className="_seoforminput" />
          <br />
          <input
            type="text"
            placeholder="Work email"
            className="_seoforminput"
          />
          <br />
          <input type="text" placeholder="Phone" className="_seoforminput" />
          <br />
          <label>How soon do you want to start the project ?*</label>
          <br />
          <select name="time">
            <option value="Within 8 weeks">Within 8 weeks</option>
            <option value="8 weeks">8 weeks</option>
          </select>
          <br />
          <select name="time" label="budget">
            <option>select your budget</option>
            <option value="1000$ to 2000$">1000$ to 2000$</option>
            <option value="2000$ to 3000$">2000$ to 3000$</option>
          </select>
          <br />
          <input
            placeholder="tell your requirement"
            className="_seoforminput"
            type="text"
          />
          <br />
          <div className="_SeoSubmitbutton">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
