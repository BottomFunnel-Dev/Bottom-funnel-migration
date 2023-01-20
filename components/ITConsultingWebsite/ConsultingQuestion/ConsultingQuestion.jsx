import React from 'react';
import styles from "./ConsultingQuestion.module.css";

export const ConsultingQuestion = () => {
    return (
        <div className={styles.consultingQuestionParentDiv}>
            <div className={styles.consultingQuestionBackImage}>
                <img src='/Images/ItConsulting/RedOrange Background.png' alt='image' />
            </div>
            <div className={styles.consultingQuestionContentMainDiv}>
                <div className={styles.consultingQuestionContentTextDiv}>
                    <h1> Got Questions ?</h1>

                    <div></div>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ratione perferendis laudantium at iste doloribus omnis. Error sint ducimus reiciendis quis, numquam eius rerum tempora non consectetur autem sequi veniam?
                    </p>
                </div>
                <div className={styles.consultingQuestionContentButtonDiv}>
                    <button> Contact Us </button>
                </div>
            </div>
        </div>
    )
}
