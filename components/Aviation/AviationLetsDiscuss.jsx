import React from 'react'
import styles from "./AviationLetsDiscuss.module.css"
import Image from 'next/image';

export default function AviationLetsDiscuss (){
  return (
    <div className={styles.aviationletsdiscussmainboxes}>
    <button className={styles.aviationletsdiscussbutton}>Lets Discuss Your Project</button>

    <div className={styles.letsdiscussheaderboxfortext}>
    <h1><span className={styles.specialcolor}>Airline Software</span> Development Service We Offer</h1>
    <p>As a leading aviation consultancy firm,Appinventiv ensures excellence at each stage of the
    software development process.Our team follows DevOps or agile methodology as per
    the business needs of the client and meets all the deliverables successfully.
    </p>
    </div>
    <div className={styles.letsdiscussalternateboxhavetoflex}>
    <div className={styles.innerboxforimageletsdiscuss}>
          <Image
              src={"/Images/aviation/airport-terminal.webp"}
              alt={"image"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
              />
    
    </div>
    <div className={styles.innerboxfortextletsdiscuss}>
    <h3>Actionable Industry Insight</h3>
    <p>With our proficient team of aviation consultants and AI developers,we help you structure and utilize your data to retrieve the best insights required
    to support your business growth.By utilizing data insights, you can analyze the industry demands and keep yourself updated
    with the latest trends trends that will help you make better business decisions.</p>
    </div>
    </div>


<div className={styles.letsdiscussalternate2boxhavetoflex}>
<div className={styles.innerboxfortextletsdiscuss2}>
<h3>Extensive AI and ML</h3>
<p>Our developers have proven experience in AI an ML which plays a big role in delivering state-of-the-art
aviation software development services.Being an aviation service company, we offer modeling services and solutions for segmentation, risk analysis
demand forecasting and predictive maintainance which are all tied to automation.</p>
</div>
<div className={styles.innerboxforimageletsdiscuss2}>
          <Image
              src={"/Images/aviation/andres-dallimonti-kjqTlMHLci4-unsplash.webp"}
              alt={"image"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
              />

</div>

</div>


<div className={styles.letsdiscussalternateboxhavetoflex}>
<div className={styles.innerboxforimageletsdiscuss}>
      <Image
          src={"/Images/aviation/william-topa-7_4bU5tHRLQ-unsplash.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
          />
</div>
<div className={styles.innerboxfortextletsdiscuss}>
<h3>Data Security</h3>
<p>Our team understands what it means to lose important data that can drive great results for the business.Our team thus 
exsures complete data security of your airline management software by maintaining confidentiality and ensuring that your data is end-to-end
encrypted with a signatory to the non-disclosure
agreement.</p>

</div>
</div>


<div className={styles.letsdiscussalternate2boxhavetoflex}>
<div className={styles.innerboxfortextletsdiscuss2}>
<h3>Compliance</h3>
<p>we adapt the proven best practices of the aviation industry and drive excellence by complying with all the aviation regulatory
requirements.Our custom aviation software development adhares to the safety norms and standards of the Civil Aeronautics Board(CAB),
Federal Aviation Administration(FAA), Temporary flight Restrictions (TFR), Advisory Circulars(AC), and othe industry regulatory standers.

</p>

</div>
<div className={styles.innerboxforimageletsdiscuss2}>
      <Image
          src={"/Images/aviation/claudio-schwarz-fyeOxvYvIyY-unsplash.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
          />
</div>

</div>


<div className={styles.letsdiscussalternateboxhavetoflex}>
<div className={styles.innerboxforimageletsdiscuss}>
    <Image
      src={"/Images/aviation/bao-menglong--FhoJYnw-cg-unsplash.webp"}
      alt={"image"}
      width={"0"}
      height={"0"}
      sizes={"100vw"}
      style={{ width: "100%", height: "100%" }}
      />
</div>
<div className={styles.innerboxfortextletsdiscuss}>
<h3>Scalability</h3>
<p>Designing a reliable aviation software development solution is something that we take take pride in. We make it completely
future-proof so that you can become a leader in the world of aviation. we offer scalable software solutions that can help you stramline you airline
operations, like inventory control,online booking management,revenue management, crew and cargo management and lots more.
</p>

</div>
</div>


<div className={styles.letsdiscussalternate2boxhavetoflex}>
<div className={styles.innerboxfortextletsdiscuss2}>
<h3>Development Tools</h3>
<p>
We have always remained at the forefront of the technology sphere as we utilize the latest principles for incorporating the latest technology into our workflow.
This includes leveraging the latest populated software that will actually lessen the entire development time cycle.
</p>

</div>
<div className={styles.innerboxforimageletsdiscuss2}>
    <Image
      src={"/Images/aviation/ashim-d-silva-pGcqw1ARGyg-unsplash.webp"}
      alt={"image"}
      width={"0"}
      height={"0"}
      sizes={"100vw"}
      style={{ width: "100%", height: "100%" }}
      />
</div>

</div>




    </div>
  )
}

