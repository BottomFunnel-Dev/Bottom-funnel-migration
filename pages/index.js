import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { BannerFull } from "./../components/mainSection/BannerFull";
import CompanyLogo from "./../components/CompanyLogos/CompanyLogo";
import About from "./../components/AboutSection/About";
import Services from "./../components/Services/Services";
import Awards from "./../components/AwardSection/Awards";
import MainFooter from "./../components/CommonComponents/FooterSection/MainFooter";

// const inter = Inter({ subsets: ["latin"] });

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <BannerFull />
      <CompanyLogo />
      <About />
      <Services />
      <Awards />
      <MainFooter/>
    </div>
  );
}
