import React, { useState } from 'react';
import styles from './telecommunicationsCustomerApp.module.css';
import Image from 'next/image';

export const TelecommunicationsCustomerApp = () => {
  const [imageChange, setImageChange] = useState(
    "/Images/Telecommunication/Default-model.webp"
  );
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath);
  };

  const TelecommunicationsCustomerAppData = [
    {
      img: "/Images/Telecommunication/Default-model.webp",
      icon: "/Images/Telecommunication/Rectangle34624094.webp",
      title: "Recharge Your Prepaid Mobile Phone",
      para: "You can add money and choose a plan for your prepaid mobile phone. This way you can make more of your payments from one place.",
    },

    {
      img: "/Images/Telecommunication/Default-model-1.webp",
      icon: "/Images/Telecommunication/Rectangle 34624094-1.webp",
      title: "Pay Bills",
      para: "Bill payment is a facillity provided to the customer to make their utility payment online throughdigital banking. The cstomer has diffrent utility payments like Mobile bill, Water bill etc.",
    },

    {
      img: "/Images/Telecommunication/Default-model.webp",
      icon: "/Images/Telecommunication/Rectangle-34624094-2.webp",
      title: "Port Your Network",
      para: "Seamlessly move your current number from any mobile operator onto the any network with the MNP process online or in the nearest any Store to enjoy the ultimate network experiences on your current number itself.",
    },
  ];

  return (
    <div className={styles.telecommunicationsCustomerAppContainerMain}>

      <div className={styles.telecommunicationsCustomerAppImgMainDivLeft}>

        <div className={styles.telecommunicationsCustomerAppImgFrameLeft}>
              <Image
                  src={imageChange}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
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
                  <Image
                    src={e.icon}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
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
