import React from "react";
import styles from "./EducationGroupwise.module.css";

export const EducationGroupwise = () => {
  return (
    <div className={styles.educationgroupwisemainboxes}>
      <div className={styles.educationgroupwisebordertopbox}></div>
      <div className={styles.educationgroupwiseuppertextbox}>
        <h1>Student Groups</h1>
        <p>
          All schools and universities have student groups that work towards
          common goals, share common interests or have members from similar
          backgrounds. With the growth of social media usage amongst students,
          student groups are now more active ever.
        </p>
        <p>
          With a simple helpdesk solution like Freshdesk, organizing events,
          campaigns and keeping members engaged can be made so much more
          efficient. Student organizers needn't compromise on their academic
          scores or their participation in their group. Here’s why students will
          love using Freshdesk.
        </p>

        <div className={styles.educationgroupwiseflexonebox}>
          <div className={styles.educationgroupwiseflexoneboxleft}>
            <h2>Manage social media easily</h2>
            <p>
              Student groups generally have a strong social presence. Student
              group heads can engage with messages from their group on Facebook
              and Twitter with a single Freshdesk account.
            </p>
            <div className={styles.educationgroupimageboxflexsideleft}>
              <img
                src="https://bottom-funnel-images.sfo3.digitaloceanspaces.com/Images/Education/vectors/Group 770618.png"
                alt="images"
              />
            </div>
          </div>

          <div className={styles.educationgroupwiseflexoneboxright}>
            <h2>Organize on the go</h2>
            <p>
              Freshdesk's mobile app makes it easy for students to manage
              activities related to their student groups on the go. With the
              app, students can collaborate, socialize, organize and get work
              done faster.
            </p>
            <div className={styles.educationgroupimageboxflexsideright}>
              <img
                src="/Images/Education/vectors/Group 770627.png"
                alt="images"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.educationgroupwiserightsideborder}></div>
    </div>
  );
};
