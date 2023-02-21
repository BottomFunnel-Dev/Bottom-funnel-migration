import React from "react";
import Image from "next/image";
import styles from "../styles/404.module.css";
import { useRouter } from "next/router";

export default function Notfound() {
  const navigate = useRouter();
  return (
    <div className={styles.notFoundContainer}>
      <div>
        <Image
          src={"/Images/404-notfound/notfound.webp"}
          alt={"404-notfound/notfound.webp"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <h1>
        We seem to have run into a bit of a problem with this page.{" "}
        <span>kindly reload</span>
      </h1>
      <button onClick={() => navigate.push("/")}>Reload </button>
    </div>
  );
}
