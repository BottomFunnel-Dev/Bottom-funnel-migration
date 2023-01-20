import React from 'react'
import styles from "./EducationAdministration.module.css"



export const EducationAdministration = () => {

    const educationadministrationdata = [
        {
            htxt: "Work more efficiently",
            stxt: "Administrative teams at educational institutions are often required to perform repetitive tasks. With Freshdesk, emails can be sent in bulk and records can be updated with a single click enabling teams to get minutes of work done in seconds.",
            img: "/Images/education/vectors/Group 770616.png",
        },

        {
            htxt: "Save time from repetitive work",
            stxt: "Freshdesk’s powerful automations can scan through every single task at hand and have it triaged, categorized and updated. A person’s efforts will be required only in tasks that engage their skill.",
            img: "/Images/education/vectors/Group 770606.png",
        },
    ]

    return (
        <div className={styles.educationadminsmainboxes}>

            <div className={styles.educationadministartionboxfortext}>
                <h1>Administrative teams</h1>
                <p>
                    Smooth operations in any company depend on administrative teams. On an everyday basis, different administrative teams
                    in a company oversee operations within their department, coordinate between different teams, and plan according to the
                    needs of the company. The role of administrative teams is crucial in schools and universities. Different administrative
                    teams help in enrolling students, onboarding them and managing finances and facilities. During busy months, some
                    administrative teams tend to have an overload of work. As an example, teams responsible for admissions need to work
                    with a huge volume of student enrollments before the start of school.
                </p>
                <p>
                    Educational institutions that use email or legacy solutions always have trouble managing work, especially during these
                    busy months. Delays and lapses in communication from the administrative teams are a common sight in even the best of
                    schools and universities. With Freshdesk, Administrative teams can:
                </p>
            </div>

            <div className={styles.educationadministrationmappingboxmain}>
                {educationadministrationdata.map((e) => {
                    return (
                        <div className={styles.educationadminstrationindivisuallybox}>

                            <div> <h2>{e.htxt}</h2>
                                <p>{e.stxt}</p>
                            </div>

                            <div className={styles.imageboxforeducationadministrationmapper}>
                                <img src={e.img} alt="image" />
                            </div>
                        </div>
                    )
                })}</div>


            <div className={styles.educationadministrationboxnextflexbox}>
                <div className={styles.educationadminboxnextflexboxleft}>
                    <h2>Collaborate effortlessly</h2>
                    <p>Administrative teams have dependencies on different departments at their school or university to complete tasks. As an example, teams responsible for admissions coordinate between prospective students and teaching staff to finalize applications. They typically follow-up with teaching staff and applicants on different email threads or chat windows before making updates on yet another system. With Freshdesk, teams can collaborate effortlessly with different departments they need help from while never losing sight of their task.</p>

                </div>
                <div className={styles.educationadministartionboxnextflexboxright}>
                    <img src='Images/education/vectors/Frame.png' alt='images' />
                </div>
            </div>

        </div>
    )
}
