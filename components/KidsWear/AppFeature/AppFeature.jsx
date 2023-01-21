import React from 'react'
import styles from './AppFeature.module.css';

export const AppFeature = () => {
  return (
    <div>
      <div className={styles.appFeatureMaindiv}>
        <div className={styles.appFeatureInnermaindiv1}>
          <h1>Customer App</h1>
          {/* <h1>
            <span style={{ color: "orangered" }}>App</span>
            Features
          </h1> */}

          <div className={styles.appFeatureInnerMaindivBox}>
            <div className={styles.appFeatureInnerMaindivBoxcontain}>
              <div>
                <img src="/Images/kidswearappservice/_Group_.png" alt="image" />
              </div>

              <h4>Product Filtering & Sorting</h4>
              <p>
                With advanced search filter, users will be able to find their products and service in a more efficient way.
              </p>
            </div>

            <div className={styles.appFeatureInnerMaindivBoxcontain} >
              <div>
                <img src="/Images/kidswearappservice/Tracking delivery.png" alt="image" />
              </div>
              <h4>Shipment tracking</h4>
              <p>With advanced search filter, users will be able to find their products and service in a more efficient way.</p>
            </div>
          </div>

          <div className={styles.appFeatureInnerMaindivBox}>
            <div className={styles.appFeatureInnerMaindivBoxcontain} >
              <div>
                <img src="/Images/kidswearappservice/Vector.png" alt="image" />
              </div>
              <h4>Multiple Payment Option</h4>
              <p>With advanced search filter, users will be able to find their products and service in a more efficient way.</p>
            </div>

            <div className={styles.appFeatureInnerMaindivBoxcontain} >
              <div>
                <img src="/Images/kidswearappservice/Group.png" alt="image" />
              </div>
              <h4>Push Notification</h4>
              <p>With advanced search filter, users will be able to find their products and service in a more efficient way.</p>
            </div>
          </div>
        </div>

        <div className={styles.appFeatureInnermaindiv21}>
          <img src="/Images/kidswearappservice/Component191.png" alt="img" />
        </div>
      </div>

      <div className={styles.appFeatureMaindivadmin}>

        <div className={styles.appFeatureInnermaindiv2admin}>
          <img src="/Images/kidswearappservice/Component193.png" alt="img" />
        </div>

        <div className={styles.appFeatureInnermaindiv1admin}>
          <h1><span style={{ color: "orangered" }}>Admin</span> Panel</h1>
          <h1>Features </h1>
          <div className={styles.appFeatureInnerMaindivBoxadmin}>
            <div className={styles.appFeatureInnerMainDivboxContain1admin} >
              <div>
                <img src="/Images/kidswearappservice/28-Dashboard.png" alt="image" />
              </div>
              <h4>Dashboard Management</h4>
              <p>With advanced search filter, users will be able to find their products and service in a more efficient way.</p>
            </div>
            <div className={styles.appFeatureInnerMainDivboxContainadmin} >
              <div>
                <img src="/Images/kidswearappservice/management 2.png" alt="image" />
              </div>
              <h4>Manage Users</h4>
              <p>With advanced search filter, users will be able to find their products and service in a more efficient way.</p>
            </div>
          </div>

          <div className={styles.appFeatureInnerMaindivBoxadmin}>
            <div className={styles.appFeatureInnerMainDivboxContainadmin} >
              <div>
                <img src="/Images/kidswearappservice/business-and-finance 1.png" alt="image" />
              </div>
              <h4>Track Sales</h4>
              <p>With advanced search filter, users will be able to find their products and service in a more efficient way.</p>
            </div>
            <div className={styles.appFeatureInnerMainDivboxContainadmin} >
              <div>
                <img src="/Images/kidswearappservice/content-management-system 1.png" alt="image" />
              </div>
              <h4>Content Management System</h4>
              <p>With advanced search filter, users will be able to find their products and service in a more efficient way.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.appFeatureMaindiv}>
        <div className={styles.appFeatureInnermaindiv1}>
          <h1>Customer </h1>
          <h1>
            <span style={{ color: "orangered" }}>App</span> Features
          </h1>
          <div className={styles.appFeatureInnerMaindivBox}>
            <div className={styles.appFeatureInnerMainDivboxContain1} >
              <div>
                <img src="/Images/kidswearappservice/online-registration 1.png" alt="image" />
              </div>
              <h4>Simple Registration Process</h4>
              <p>With advanced search filter, users will be able to find their products and service in a more efficient way.</p>
            </div>

            <div className={styles.appFeatureInnerMainDivboxContain} >
              <div>
                <img src="/Images/kidswearappservice/Layer 2.png" alt="image" />
              </div>
              <h4>Super Navigation</h4>
              <p>With advanced search filter, users will be able to find their products and service in a more efficient way.</p>
            </div>
          </div>

          <div className={styles.appFeatureInnerMaindivBox}>
            <div className={styles.appFeatureInnerMainDivboxContain} >
              <div>
                <img src="/Images/kidswearappservice/bag 1.png" alt="image" />
              </div>
              <h4>Click and Collect Option</h4>
              <p>With advanced search filter, users will be able to find their products and service in a more efficient way.</p>
            </div>
            <div className={styles.appFeatureInnerMainDivboxContain} >
              <div>
                <img src="/Images/kidswearappservice/tap 1.png" alt="image" />
              </div>
              <h4>Click to Call </h4>
              <p>With advanced search filter, users will be able to find their products and service in a more efficient way.</p>
            </div>
          </div>
        </div>
        <div className={styles.appFeatureInnermaindiv2}>
          <img src="/Images/kidswearappservice/Component192.png" alt="img" />
        </div>
      </div>
    </div>
  );
};
