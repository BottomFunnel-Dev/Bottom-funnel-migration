import React from "react";
import styles from "./enterpriseDeskService.module.css";
import { RiArrowDropRightLine } from "react-icons/ri";
import { IconContext } from "react-icons";

export const EnterpriseDeskService = () => {
  return (
    <div className={styles.deskService}>
      <div className={styles.enterpriseDeskService}>
        <div className={styles.enterpriseContentSide}>
          <h2>Seemless Customer Experience</h2>
          <p>
            Provide the best, most streamlined customer experience across
            channels with flexible technology that makes customer support a
            strategic differentiator.
          </p>
          <p>
            Supportdesk Omnichannel offers the scale and customizability that
            supports your growth. Our open and extensible architecture allows
            seamless integration of mission-critical business systems through
            out App Marketplace and APIs.
          </p>
          <h5>
            Learn More
            <IconContext.Provider value={{ className: styles.dropright }}>
              <RiArrowDropRightLine />
            </IconContext.Provider>
          </h5>
        </div>
        <div className={styles.enterpriseGifSide}>
          <img
            src="/Images/Enterprise/Animations/experience.gif"
            alt="Enterprise/Animations/experience.gif"
          />
        </div>
      </div>
      <div className={styles.enterpriseDeskServiceReverse}>
        <div className={styles.enterpriseContentSide}>
          <h2>Power to Scale</h2>
          <p>
            Leverage the Bottom funnel platform to deliver a secure, stress-free
            solution for your modern enterprise.
          </p>
          <p>
            Execute your strategy a cloud platform that can handle global scale
            and volumes, along with the workflow needs of large, complex
            organizations. Connect all your tools and data with our extensive
            catalog of partner solutions, more than 1000 marketplace apps, and
            robust APIs.
          </p>
          <p>
            Furthermore, our certifications and standards demonstrate our
            commitment to safeguarding your customer and business data.
          </p>
          <h5>
            Learn More
            <IconContext.Provider value={{ className: styles.dropright }}>
              <RiArrowDropRightLine />
            </IconContext.Provider>
          </h5>
        </div>
        <div className={styles.enterpriseGifSide}>
          <img
            src="/Images/Enterprise/Animations/power.gif"
            alt="Enterprise/Animations/power.gif"
          />
        </div>
      </div>
      <div className={styles.enterpriseDeskService}>
        <div className={styles.enterpriseContentSide}>
          <h2>Scale your operation with AI & bots</h2>
          <p>
            Automate customer service so that you can scale your operations
            without adding headcount. Keep resolutions quick with our
            conversational Al and chatbots. Improve your agent onboarding and
            efficiency, and keep the team productive with agent-assist bots.
          </p>
          <ul>
            <li>
              Reduce ticket volumes and deliver 24/7 support with Freddy, our Al
              engine
            </li>
            <li>
              Provide proactive support by detecting online frustration signals
            </li>
            <li>Configure and operationalize bots quickly, without coding</li>
          </ul>
          <h5>
            Learn More
            <IconContext.Provider value={{ className: styles.dropright }}>
              <RiArrowDropRightLine />
            </IconContext.Provider>
          </h5>
        </div>
        <div className={styles.enterpriseGifSide}>
          <img
            src="/Images/Enterprise/Animations/animation.gif"
            alt="Enterprise/Animations/animation.gif"
          />
        </div>
      </div>
      <div className={styles.enterpriseDeskServiceReverse}>
        <div className={styles.enterpriseContentSide}>
          <h2>Take control of your support operations</h2>
          <p>
            Bottom Funnel SupportDesk provides management tools to optimize your
            end-to-end customer service operations. Help your agents drive
            customer satisfaction and loyalty with a set of features that drives
            efficiency across the team.
          </p>
          <ul>
            <li>
              Monitor support operations with metrics on real-time dashboards
            </li>
            <li>Forecast ticket trends and plan staffing levels effectively</li>
            <li>
              Reduce the impact of setting and workflow changes by testing in
              your own private Sandbox environment
            </li>
            <li>
              Measure SLAS and CSAT scores to enable data-driven decisions that
              enhance the customer experience
            </li>
            <li>
              Get complete visibility into all changes made on your Freshdesk
              with audit logs
            </li>
          </ul>
          <h5>
            Learn More
            <IconContext.Provider value={{ className: styles.dropright }}>
              <RiArrowDropRightLine />
            </IconContext.Provider>
          </h5>
        </div>
        <div className={styles.enterpriseGifSide}>
          <img
            src="/Images/Enterprise/Animations/vector3.gif"
            alt="Enterprise/Animations/vector3.gif"
          />
        </div>
      </div>
      <div className={styles.enterpriseDeskService}>
        <div className={styles.enterpriseContentSide}>
          <h2>Personalised at scale</h2>
          <p>
            The more context you have about your customers, the more you can
            personalize their experience. As you scale, your customer operations
            span multiple teams and tools. Eliminate data silos by creating a
            360- degree view of the customer across marketing, sales and
            support. Deliver personalized service without making customers
            repeat themselves.
          </p>
          <ul>
            <li>
              Maintain a unified view of the customer with all the context hom
              past interaction history across channels
            </li>
            <li>
              Identify and prioritize premium clients by routing them to
              priority queues
            </li>
            <li>
              Leverage rich customer context with Custom Objects to reduce
              resolution time and improve team efficiency
            </li>
          </ul>
          <h5>
            Learn More
            <IconContext.Provider value={{ className: styles.dropright }}>
              <RiArrowDropRightLine />
            </IconContext.Provider>
          </h5>
        </div>
        <div className={styles.enterpriseGifSide}>
          <img
            src="/Images/Enterprise/Animations/vector4.gif"
            alt="Enterprise/Animations/vector4.gif"
          />
        </div>
      </div>
      <div className={styles.enterpriseDeskServiceReverse}>
        <div className={styles.enterpriseContentSide}>
          <h2>Support in your customer's language</h2>
          <p>
            Bottom funnel supportdesk provides the ability to completely
            customize the customer experience for multilingual needs. We now
            support 42 languages to meet the needs of customers all around the
            globe.
          </p>
          <ul>
            <li>Multilingual customer self-service</li>
            <li>Multilingual email and agent notifications</li>
            <li>Localization of ticket fields</li>
            <li>Multilingual customer satisfaction surveys</li>
            <li>Live translations on chat</li>
          </ul>
          <h5>
            Learn More
            <IconContext.Provider value={{ className: styles.dropright }}>
              <RiArrowDropRightLine />
            </IconContext.Provider>
          </h5>
        </div>
        <div className={styles.enterpriseGifSide}>
          <img
            src="/Images/Enterprise/Animations/chat.gif"
            alt="Enterprise/Animations/chat.gif"
          />
        </div>
      </div>
    </div>
  );
};
