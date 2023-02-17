import Image from "next/image";
import React from "react";
import styles from "./EducationWhyUS.module.css";

export default function EducationWhyUS({ data, bgcolor }) {
  const { heading, cardData } = data;

  return (
    <div
      className={styles.EducationWhyUSContainer}
      style={{ background: bgcolor ? bgcolor : "#fff" }}
    >
      <h1>{heading}</h1>
      <div>
        {cardData.map(({ image, title }) => (
          <div key={title} className={styles.EducationWhyUSCards}>
            <div>
              <Image
                src={image}
                alt={image}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <h2>{title}</h2>
            <p>
              fdaspoifdn apsoidfnaspo difnap oinfp awoinef poawinefpawo ienfpaow
              inefpowaie nfpaokdnf apsokdfhiawe hgopifh asdnkv cmpasoie fdaknc
              apso ieiouhrfj knqewp ioadhfnkcp cneruifc uerivia hfsndk
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
