import React from "react";
import styles from "./TicketingServices.module.css";

export const TicketingServices = () => {
  return (
    <div className={styles.ticketingServicesMainDiv}>
      <h1>Our Ticketing Service Offers</h1>
      <div className={styles.TicketingServicesContainer}>
        <div>
          <div className={styles.TicketingServicesImages}>
            <img
              src="/Images/ticketingPhotos/Tickets-2.png"
              alt="ticketingPhotos/Tickets-2.png"
            />
          </div>
          <h1>Collaborative Ticketing</h1>
          <p>
            Help Your Team to Collaborate Effectively to provide better Support
            experience.
          </p>
          <ul>
            <li>
              Share OwnerShip of Tickets without losing visibilty.Loop in
              teammates for a discussion right inside the tickets for full
              context.
            </li>
            <li>
              Split tickets with several task into sub tickets. Have multiple
              team to work on that on parallel.
            </li>
            <li>
              Link and keep Track of your tickets related to similiar
              issues.Send Bulk updates to customers in one go.
            </li>
          </ul>
        </div>
        <div>
          <span className={styles.TicketingServicesMidLineUpper}></span>
          <span className={styles.TicketingServicesMidLineLower}></span>
        </div>
        <div>
          <div className={styles.TicketingServicesImages}>
            <img
              src="/Images/ticketingPhotos/Tickets-3.png"
              alt="ticketingPhotos/Tickets-3.png"
            />
          </div>
          <h1>SLA Management</h1>
          <p>
            A service level agreement accross your freshDesk sets performance
            threshold that can be managed and optimizedover time.
          </p>
          <ul>
            <li>
              Set up rules for when every tickets needs to be replied to and
              solved so agents are clear about deadlines.
            </li>
            <li>
              Redistribute the workLoad or add more people to the team based on
              SLA compliance rates
            </li>
            <li>
              SetUp automatic reminders for agents and escalations to managers
              whenever SLA's are not met.
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.TicketingServicesContainer}>
        <div>
          <div className={styles.TicketingServicesImages}>
            <img
              src="/Images/ticketingPhotos/Tickets.png"
              alt="ticketingPhotos/Tickets.png"
            />
          </div>
          <h1>Field Service Ticketing</h1>
          <p>
            Create service task for customer tickets that require field visits.
          </p>
          <ul>
            <li>
              Assign to the right field employee or service group based on
              problem type,locations,skills needed and more.
            </li>
            <li>
              Field employee can access their service tasks via the FreshDesk
              app for ios and Android.
            </li>
            <li>
              Updates from field employees are fully integrated with freshdesk
              ticketing so dispatch and field are united in delivering an
              amazing customer experience.
            </li>
          </ul>
        </div>
        <div>
          <span className={styles.TicketingServicesMidLineUpper}></span>
          <span className={styles.TicketingServicesMidLineLower}></span>
        </div>
        <div>
          <div className={styles.TicketingServicesImages}>
            <img
              src="/Images/ticketingPhotos/Tickets-1.png"
              alt="ticketingPhotos/Tickets-1.png"
            />
          </div>
          <h1>Contextual Ticketing with Custom Objects</h1>
          <p>
            Bring in all the business-critical information unique to your
            organization right inside your freshDesk.
          </p>
          <ul>
            <li>
              Create and manage custom objects, gather information you need
              related to your customers and business.
            </li>
            <li>
              Associates these objects with other custom or standard objects,
              bring in complete context without switching multiple tabs or
              tools.
            </li>
            <li>
              Empower your agents by making this data available to them right on
              the ticket page.
            </li>
            <li>
              Use a rich variety of filters to slice and dice your custom and
              standard objects.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
