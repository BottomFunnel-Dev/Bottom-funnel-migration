import React from 'react'
import styles from "./EducationITteams.module.css"

export const EducationITteams = () => {

    const educationitteamsdata = [
        {
            htxt: "Streamline customer enquiries",
            stxt: "IT teams at many schools and universities get questions and complaints from staff via email, phone and in-person. A lot of time and effort is spent keeping track of every pending request. With Freshdesk, IT teams don’t have to spend excessive time organizing their work. Customizable inbox views in Freshdesk makes it easy for every person in the team to keep .",
            img: "/Images/education/vectors/Group 770619.png",
        },

        {
            htxt: "Make self-service easily with an IT portal",
            stxt: "IT teams typically spend a lot of time in repeatedly answering simple questions. With Freshdesk, they can easily create a self-service IT portal for staff and students. Staff can get answers to their questions immediately using the portal and hence, the number of enquiries the IT team has to work with decreases.",
            img: "/Images/education/vectors/Social.png",
        },
    ]

    return (
        <div className={styles.educationitteamsmainboxes}>
            <div className={styles.educationitsupporttextandborder}></div>
            <div className={styles.educationitteamsboxfortext}>
                <h1>IT teams</h1>
                <p>
                    IT teams are the backbone of any organization that uses technical infrastructure like wi-fi, computers and printers.
                    They constantly work behind the scenes to ensure the smooth functioning and maintenance of the IT infrastructure.
                </p>

                <p>
                    When students or staff have a problem with an IT equipment or service, it’s the IT team that helps. At schools and
                    universities, in particular, they are closely involved in the organization and management of technical events and
                    competitions. Here’s how Freshdesk helps IT teams.
                </p>
            </div>

            <div className={styles.educationitsupportmappingboxmain}>
                {educationitteamsdata.map((e) => {
                    return (
                        <div className={styles.educationitsupportindivisuallybox}>

                            <div> <h2>{e.htxt}</h2>
                                <p>{e.stxt}</p>
                            </div>

                            <div className={styles.imageboxforeducationitsupportmapper}>
                                <img src={e.img} alt="image" />
                            </div>
                        </div>
                    )
                })}</div>


            <div className={styles.educationitsupportboxnextflexbox}>
                <div className={styles.educationitsupportboxnextflexboxleft}>
                    <h2>
                        Get complete context
                    </h2>

                    <p>
                        For every enquiry, Freshdesk provides context for the person writing to them and the history of issues they have
                        reported. IT teams can immediately get to troubleshooting issues without having to worry about asking the staff for
                        more information.
                    </p>
                </div>

                <div className={styles.educationitsupportboxnextflexboxright}>
                    <img src='/Images/education/vectors/Group 770593.png' alt='images' />
                </div>
            </div>

            <div className={styles.educationitsupportlowerspeciallinefromrightside}>
            </div>
        </div>
    );
};
