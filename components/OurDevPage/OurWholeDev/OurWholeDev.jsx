import React from "react";
import styles from "./OurWholeDev.module.css";
import { OurWholeLeft } from "./OurWholeLeft/OurWholeLeft";
import { OurWholeRight } from "./OurWholeRight/OurWholeRight";

export const OurWholeDev = () => {
  const point1 = {
    body: "As clients express an interest in doing business with us, our expert strategists begin the work process. Once everyone in the team has an agreement on an idea, all of us immerse ourselves in the project.",
    image: "/Images/ourDevPhotos/point-1.png",
    points: [
      "First Contact",
      "Conceptualizing the Idea",
      "In-depth Research and Planning",
      "Requirement & Estimation Approval",
    ],
    btn: "Project Agreement",
  };

  const point2 = {
    body: "After approval of the project, we advance to the pre-engineering process. This is where we address the root-level construction, comprehensive analysis, concept strategy, technical consultation.",
    image: "/Images/ourDevPhotos/point-2.png",
    points: [
      "Internal analysis",
      "Creating Wireframe / Prototype / Storyboards",
      "Submit a resource plan",
      "Select right development platform",
    ],
    btn: "Scope Sign-Off",
  };

  const point3 = {
    body: "To us, design is much more than just the aesthetics. It's about the functionality. We want your users to have the best experience with your users to have the best experience with your digital business, so we focus on making user experience intriguing, addictive, intuitive and friendly.",
    image: "/Images/ourDevPhotos/point-3.png",
    points: [
      "Study Demographics and Use Cases",
      "Use of latest, relevant UI design features",
      "Emotional design with colors",
      "UX Personalization",
      "UX Metrics Evaluation",
    ],
    btn: "Visual Design Ready",
  };

  const point4 = {
    body: "Advanced project management tools like Jira, GitLab and Hubstaff form the essential part of our development process. Experienced and competent developers at Kontstant take the lead and pair the right technology for a perfect solution.",
    image: "/Images/ourDevPhotos/point-4.png",
    points: [
      "Release Plan",
      "Coding with stipulated timeframe",
      "Full stack backend development",
      "Update routine status",
    ],
    btn: "Optimized Code",
  };

  const point5 = {
    body: "Now starts the real excitement, when you can see your website or app being brought to life! We put the whole developed plan into action by creating a beta version of your product.",
    image: "/Images/ourDevPhotos/point-5.png",
    points: [
      "Static and automated tests",
      "Eliminate bugs",
      "Real-time User testing",
      "Gether feedback",
      "Make final adjustment",
    ],
    btn: "Premier Quality",
  };

  const point6 = {
    body: "Get ready to see your finished masterpiece! After all of the testing has been completed and after incremental quality assurance, our experts deploy the end product on respective app stores and web browsers, assuring the passing of the fickle approval process and the standards of the online stores.",
    image: "/Images/ourDevPhotos/point-6.png",
    points: [
      "Release to live environment",
      "Ensure integrity",
      "Post-deployment maintenance & support",
    ],
    btn: "Perfectly Working App",
  };

  return (
    <div className={styles.ourWholeDevContainer}>
      <h1>
        Our Whole <span>Development</span> Process
      </h1>

      <p>
        We focus on the development of an appealing and functional websites, that allow your business or organization to reach its goals.
        We are a team of developers and designers, who design and develop websites in accordance with your needs. From start to finish,
        we work closely with you to determine what you want, build it, and make it work. We are committed to our customers and will strive
        to create high-quality software in the best interest of our clients.
      </p>

      <OurWholeLeft data={point1} />
      <OurWholeRight data={point2} />
      <OurWholeLeft data={point3} />
      <OurWholeRight data={point4} />
      <OurWholeLeft data={point5} />
      <OurWholeRight data={point6} />
    </div>
  );
};
