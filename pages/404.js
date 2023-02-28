import React, { useEffect } from "react";
import Image from "next/image";
import styles from "../styles/404.module.css";
import { useRouter } from "next/router";

export default function Notfound() {
  const navigate = useRouter();

  useEffect(() => {
    navigate.replace("/");
  });

  return null;
}
