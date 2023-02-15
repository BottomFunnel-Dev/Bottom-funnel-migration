import React from "react";
import styles from "./Diversesection.module.css";

export default function Diversesection() {
const diver = [
{
img: "/Images/beautycare/salonbook.png",
h1: "Salon booking app devlopment",
p: "Making your customer’s salon appointment experience easier, faster and more accessible with our salon appointment app service.",
},
{
img: "/Images/beautycare/Girl.png",
h1: "Beauty salon application",
p: "Provide all kinds of services to you customer at one place with beauty salon application and unleash your full potential in the Beauty Industry.",
},
{
img: "/Images/beautycare/hairsalon.png",
h1: "Hair salon application",
p: "Make your customers more satisfied with your hair salon by providing them the ease to explore different hairstyles with our hair salon application.",
},
{
img: "/Images/beautycare/comb.png",
h1: "Salon scheduling software",
p: "Get more people to come to your salon, with the app that makes booking appointments easier than ever before.",
},
{
img: "/Images/beautycare/hire.png",
h1: "Hair salon app developer",
p: "Building a custom salon app is a breeze with our app developers. Turn your hair salon into a success with our efficient salon app developer team.",
},
{
img: "/Images/beautycare/demand.png",
h1: "On demand beauty service",
p: "The future of beauty is here! Our on-demand beauty service app provides customers with a range of services, enabling them to enjoy beauty at home.",
},
];
return (
<div className={styles.diversesection}>
<h1 className={styles.diverseheading}> OUR EXCLUSIVE SERVICES </h1>


<div className={styles.diversesalon}>
{diver.map((item) => {
return (
<div className={styles.hairsalon}>
<div className={styles.hairimage}>
<img src={item.img} alt="image"/>{" "}
</div>
<h1>{item.h1}</h1>

<p>{item.p}</p>
</div>
);
})}
</div>
</div>
);
};
