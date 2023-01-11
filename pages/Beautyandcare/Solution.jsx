import React from "react";
import "./solution.css";

export default function Solution() {
  return (
    <div className="solutionsection">
      <h1>Solution for your beauty app </h1>

      <div className="customer-main">
        <div className="customer">
          <div className="customerapp">
            <div>
              <h2 className="customer-heading">Customer app</h2>
              <p>
                Improve customer service with a customer app and website that
                provides services they can easily avail and manage on the go and
                can be easily accessed through both android/iOS, where they can
                make an appointment, track their service pro and manage or
                reschedule bookings with one convenient app.
              </p>
            </div>
          </div>
          <div className="customerappimg">
            <img
              className="customermobile"
              src="Images/beautycare/solutionbeauty.png"
            />
          </div>
        </div>

        {/* //////////bussiness//////// */}
        <div className="bussinescontainer">
          <div className="bussinessleft">
            <div className="toprectangle">
              <img src="Images/beautycare/toprectangle.png" />
            </div>
            <div className="rectangle">
              <img src="Images/beautycare/lastrectangle.png" />
            </div>
            <div className="admin">
              <img src="Images/beautycare/adiminpannel.png" />
            </div>
          </div>

          <div className="bussinessright">
            <div>
            <h2 className="customer-heading">Buisnessn dashboards</h2>
            <p>
              We built this easy-to-use admin dashboard so that you can manage
              everything related to your business in one place. A single
              platform for all your beauty and salon services. From managing
              multiple users at a single screen to generating earnings and sales
              reports, we've thought of everything so that you don't have to!
            </p>
            </div>
          </div>
        </div>

        <div className="szapp">
          <div className="szservice">
            <div>
              <h2 className="customer-heading">Service professional’s app</h2>
              <p>
                With service professional’s app, you can coordinate with your
                beauticians on daily appointments, reschedule and cancel right
                through the app. With advanced features, customized for in-venue
                and home-based clients, location tracking and live chat, this
                app is suited to help you organize your time efficiently while
                giving utmost satisfaction to your customers.
              </p>
            </div>
          </div>

          <div className="szserviceimg">
            <div className="szservicemobile">
              <img src="Images/beautycare/services.png" />
            </div>
            <div className="boxsection"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
