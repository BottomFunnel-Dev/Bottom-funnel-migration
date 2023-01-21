import About from "../components/AboutSection/About";
import Awards from "../components/AwardSection/Awards";
import { TextDropdown } from "../components/CommonComponents/faqSection/Faqs";
import MainFooter from "../components/CommonComponents/FooterSection/MainFooter";
import Industries from "../components/CommonComponents/industries/Industries";
import OndemandSection from "../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../components/CommonComponents/PlanProject/PlanProject";
import PortFolio from "../components/CommonComponents/PortFolioSection/PortFolio";
import Revamping from "../components/CommonComponents/revamping/Revamping";
import { SeoblogSection } from "../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../components/CommonComponents/StoriesSection/StoriesSection";
import CompanyLogo from "../components/CompanyLogos/CompanyLogo";
import { Companystats } from "../components/CompanyStats/Companystats";
import ContectForm from "../components/ContectForm/ContectForm";
import { BannerFull } from "../components/mainSection/BannerFull";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <BannerFull />
      <CompanyLogo />
      <About />
      <Services />
      <Awards />
      <StoriesSection />
      <Industries />
      <OndemandSection />
      <PlanProject />
      <Companystats />
      <Revamping />
      <SeoblogSection />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    
    </>
  );
}
