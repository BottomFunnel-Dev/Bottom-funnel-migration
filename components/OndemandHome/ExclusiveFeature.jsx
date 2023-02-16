import React from "react";
import styles from "./exclusiveFeature.module.css";

const ExclusiveFeature = () => {
  const features = [
    {
      service: "Scheduled and automatic dispatch",
      decs: "You can reduce the amount of time you need to spend on dispatch by using our automated function in the app. Schedule your customer's services with just a few clicks and dispatch tasks to the right experts depending on their skills, geography, or groupings.",
    },
    {
      service: "Request Acceptance & Declining",
      decs: "Acceptance or refusal of a request is at the discretion of the service provider. however. Rejection of a request would only take place if the service provider feels that the order is not within his skill set or if it does not meet the requirements specified in the Trot Request Policy.",
    },
    {
      service: "Track appointments",
      decs: "No more waiting for a call back or wondering where your appointment is. Customers can track the status of your service by getting a note after the service provider agrees to the request, schedule the appointment, reach their home and finish the required service.",
    },
    {
      service: "Payments and feedback",
      decs: "Make it easy for your consumers to pay through a preferred payment system within a wide range of payment gateways, without having to switch between different screens and provide them an easy-to-use user interface for their comments, ratings, and reviews.",
    },
    {
      service: "Business analytics and insights",
      decs: "Gain insights about your customers and their behaviour, so that you can offer the best possible service. Understand what is working and what needs to be improved in order to keep your business growing. Make informed decisions about how to allocate resources and focus on areas that are most important.",
    },
    {
      service: "Chatbots and voice assistance",
      decs: "Increase customer retention by providing an immersive and engaging chatbot system. Enhance customer interactions with voice assistants that understands natural language. Facilitate effective communication with customers by responding to customer inquiries in a timely manner.",
    },
  ];
  return (
    <div className={styles.exclusiveFeature}>
      <h1> Exclusive Features </h1>
      <div className={styles.innerFeatures}>
        
        {/* {features.map((item, i) => (
          <div key={i}>
            <h3> {item.service} </h3>
            <p> {item.decs} </p>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default ExclusiveFeature;
