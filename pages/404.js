import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function Notfound() {
  const navigate = useRouter();

  useEffect(() => {
    navigate.replace("/");
  });

  return null;
}
