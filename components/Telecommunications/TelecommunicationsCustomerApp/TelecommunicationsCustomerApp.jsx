import React, { useState } from 'react';
import styles from './telecommunicationsCustomerApp.module.css';

export const TelecommunicationsCustomerApp = () => {
  const [imageChange, setImageChange] = useState("https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Telecommunication/Customer-App/Default-model.png"
  );
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath);
  };

  const TelecommunicationsCustomerAppData = [
    {
      img: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Telecommunication/Customer-App/Default-model.png",
      icon: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Telecommunication/Icons/Rectangle34624094.png",
      title: "Recharge Your Prepaid Mobile Phone",
      para: "You can add money and choose a plan for your prepaid mobile phone. This way you can make more of your payments from one place.",
    },

    {
      img: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Telecommunication/Customer-App/Default-model-1.png",
      icon: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Telecommunication/Icons/Rectangle 34624094-1.png",
      title: "Pay Bills",
      para: "Bill payment is a facillity provided to the customer to make their utility payment online throughdigital banking. The cstomer has diffrent utility payments like Mobile bill, Water bill etc.",
    },

    {
      img: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Telecommunication/Customer-App/Default-model.png",
      icon: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Telecommunication/Icons/Rectangle-34624094-2.png",
      title: "Port Your Network",
      para: "Seamlessly move your current number from any mobile operator onto the any network with the MNP process online or in the nearest any Store to enjoy the ultimate network experiences on your current number itself.",
    },
  ];

  return (
    <div className={styles.telecommunicationsCustomerAppContainerMain}>

      <div className={styles.telecommunicationsCustomerAppImgMainDivLeft}>

        <div className={styles.telecommunicationsCustomerAppImgFrameLeft}>
          <img src={imageChange} alt="image" />
        </div>
      </div>

      <div className={styles.telecommunicationsCustomerAppBoxMainDivRight}>

        <div className={styles.telecommunicationsCustomerAppTitle}>
          <h1>Customer App</h1>
        </div>
        <div className={styles.telecommunicationsCustomerAppBoxContentDivRight}>
          {TelecommunicationsCustomerAppData.map((e) => {
            return (
              <div
                className={styles.telecommunicationsCustomerAppCardsDivRight}
                key={e.htxt}
                onMouseEnter={() => {
                  handleImageChange(e.img);
                }}
              >

                <div className={styles.telecommunicationsCustomerAppTextDivRight}>
                  <h3>{e.title}</h3>
                  <div className={styles.telecommunicationsCustomerAppRightBoxCardsIcon}>
                    <img src={e.icon} alt="image" />
                  </div>
                  <p>{e.para}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
