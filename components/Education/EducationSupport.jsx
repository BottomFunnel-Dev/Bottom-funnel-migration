import React from 'react'
import styles from "./EducationSupport.module.css"

export const EducationSupport = () => {
  return (

    <div className={styles.educationsupporttextandborderbox}>

      <h2>Support in Education Institutions</h2>

      <div className={styles.educationsupporttextandtextingpara}>
        <div className={styles.educationsupportrighttboxingflexfortext}>
          <p>
            When people think of customer support, they commonly associate it with companies helping end-users with their product or service.
            Support, however, also includes helping people working within a company. It could be support provided to prospects, employees,
            vendors, or partners. One of the best examples of a business that is required to support different sets of people both internally
            and externally is an educational institution.
          </p>
          <p>
            At schools and universities, dedicated teams help prospective students who may have questions about a course or their application
            status. Once an applicant is enrolled as a student, different teams help in administrative tasks like organizing classes, collecting
            fees and finding accommodation. Every day, classes require the use of numerous IT equipment and services such as projectors,
            printers and wifi. Whenever there is an IT-related issue, the IT team provides support to students and staff.
          </p>
          <p>
            These different teams that support students and staff at educational institutions face unique challenges. Administrative teams get
            exceptionally busy at the start of every academic year. IT teams often spend time answering simple questions. All in all, repetitive
            and arduous tasks for the support teams at educational institutions can make work challenging and in the worst case, boring.
          </p>
          <p>
            With a customer support software like Freshdesk in place, teams will only have to spend time in work that requires their skill.
            Repetitive tasks can be automated leading to increased productivity and efficient workload management. Here’s how different teams at
            schools and universities can benefit from Freshdesk.
          </p>
        </div>

        <div className={styles.educationsupportleftboxingflexforimage}>
          <img src='/Images/Education/vectors/vector studying.png' alt='image' />
        </div>
      </div>
    </div>

  )
}
