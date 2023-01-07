import React, { useState } from "react";
import "./Seostats.css";
import { useInView } from "react-intersection-observer";

export default function Seostats() {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [num, setnum] = useState(0);
  const [p, setp] = useState(0);
  const [g, setg] = useState(0);

  let count = 0;

  const interval = setInterval(() => {
    count++;

    if (inView === true && count === 1) {
      if (num <= 9) {
        setnum(num + 1);
      }
      if (p < 90) {
        setp(p + 4);
      }
      if (g < 746) {
        setg(g + 20);
      }
    }
  }, 100);

  if (g === 746) {
    clearInterval(interval);
  }
  // console.log(inView)

  return (
    <div ref={ref} className="_Seostats" inView={inView}>
      <div className="_Seostats1">
        <span> {p}+</span>
        <br />
        Professional SEO Experts
      </div>
      <div className="_Seostats1">
        <span>${num}+</span>
        <br />
        Million Media Spend Managed
      </div>
      <div className="_Seostats2">
        <span> {g}+</span>
        <br />
        Global clients
      </div>
    </div>
  );
}
