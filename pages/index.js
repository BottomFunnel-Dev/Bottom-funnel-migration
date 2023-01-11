import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { BannerFull } from './mainSection/BannerFull'
import CompanyLogo from './CompanyLogos/CompanyLogo'
import About from './AboutSection/About'
import Services from './Services/Services'
import Awards from './AwardSection/Awards'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
   <BannerFull />
   <CompanyLogo />
  <About />
 <Services />
      <Awards />
  

   </div>
  )
}
