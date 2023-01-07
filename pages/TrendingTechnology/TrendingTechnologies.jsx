import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ChnageNavbarColor } from '../../Redux/Navbar/NavbarAction';
import { TrendingTechnologyBanner } from './TrendingTechnologyBanner'
import { TrendingTechnologyLowerBanner } from './TrendingTechnologyLowerBanner';
import { TrendingTechnologyService } from './TrendingTechnologyService';
import { TrendingWhyChoose } from './TrendingWhyChoose';

import PlanProject from '../PlanProject/PlanProject'
import Revamping from '../revamping/Revamping'
import { SeoblogSection } from '../SeoBlogs/Seoblogs'
import { TextDropdown } from '../faqSection/Faqs'
import ContectForm from '../ContectForm/ContectForm'
import MainFooter from '../FooterSection/MainFooter'

export const TrendingTechnologies = () => {
    const dispatch = useDispatch();
    useEffect(function () {
      dispatch(ChnageNavbarColor({ color: "white", logo: false }));
    }, []);

  return (
    <div>
    <TrendingTechnologyBanner />
    <TrendingTechnologyService />
    <TrendingTechnologyLowerBanner />
    <TrendingWhyChoose />

    <PlanProject />
    <SeoblogSection />
    <Revamping />
    <TextDropdown />
    <ContectForm />
    <MainFooter />


    
    </div>
  )
}
