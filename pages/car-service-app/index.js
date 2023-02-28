import Head from 'next/head'
import React from 'react'
import CarServiceAdmin from '../../components/carService/CarServiceAdmin'
import  {CarServiceBanner}  from '../../components/carService/CarServiceBanner'
import CarServiceCustomer from '../../components/carService/CarServiceCustomer'
import CarServiceMidbanner from '../../components/carService/carServiceMidbanner'
import CarServiceSolution from '../../components/carService/CarServiceSolution'
import CarServiceTech from '../../components/carService/CarServiceTech'


export default function carService () {
  return (
    <div>
        <Head>
        <title>Car Services Web and App Development Company | Bottom Funnel </title>
        <meta
          name="description"
          content="Are you looking for a Car Services Web and App development 
          company that can help you take your business to the next 
          level? Look no further! We specialize in developing Web and Apps 
          for car services businesses, and we can help turn your dream
           into a reality. Contact us today to learn more!"
        />
        </Head>

        <main>
           <CarServiceBanner/>
            <CarServiceSolution/>
            <CarServiceMidbanner/>
            <CarServiceCustomer/>
            <CarServiceAdmin/>
            <CarServiceTech/>
        </main>
    </div>
  )
}
