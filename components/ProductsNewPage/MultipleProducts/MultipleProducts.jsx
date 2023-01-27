import React from 'react';
import styles from "./MultipleProducts.module.css";

export default function MultipleProducts() {
    return (
        <div className={styles.multipleProductssolution}>
            <h2>
                Try the business software used by over 50,000 companies acorss the globe to exceed customer and employess
                expectations.
            </h2>

            <div className={styles.multipleProductseLearning}>

                <div className={styles.multiProductsImageDiv}>

                    <img src='/Images/ProductsPage/ProductsLogo/animation.gif' alt='animation' />
                    {/* <div className='solutionpara'>
                        <h1> E-learning solutions </h1>
                        <p>
                            Make online tutoring more engaging, interactive and fun for your students with our cuttingedge e-learning solutions. We have a wide range of education app development solutions
                            that can be used for tutorials, lectures, discussions and more.
                        </p>
                    </div> */}
                </div>

                <div className={styles.solright}>
                    <div className={styles.soltop}>
                        <div className={styles.funnelDesk}>
                            <div className={styles.multipleProductsai}>
                                <img src="/Images/ProductsPage/ProductsLogo/desk.png" alt='image'/>
                            </div>
                            <p> Bottomfunnel Desk </p>
                        </div>

                        <div className={styles.team}>
                            <div className={styles.multipleProductsai}>
                                <img src="/Images/ProductsPage/ProductsLogo/teams.png" alt='image'/>
                            </div>

                            <p> Bottomfunnel Team </p>
                        </div>

                        <div className={styles.service}>
                            <div className={styles.multipleProductsai}>
                                <img src="/Images/ProductsPage/ProductsLogo/service.png" alt='image' />
                            </div>

                            <p> Bottomfunnel Service </p>
                        </div>
                    </div>


                    <div className={styles.solbotm}>
                        <div className={styles.market}>
                            <div className={styles.multipleProductsai}>
                                <img src="/Images/ProductsPage/ProductsLogo/marketer.png" alt='image'/>
                            </div>

                            <p> Bottomfunnel Marketer </p>
                        </div>

                        <div className={styles.team}>
                            <div className={styles.multipleProductsai}>
                                <img src="/Images/ProductsPage/ProductsLogo/sales.png" alt='image'/>
                            </div>

                            <p> Bottomfunnel Sales </p>
                        </div>

                        <div className={styles.chat}>
                            <div className={styles.multipleProductsai}>
                                <img src="/Images/ProductsPage/ProductsLogo/chat.png" alt='image'/>
                            </div>

                            <p> Bottomfunnel Chat </p>
                        </div>
                    </div>

                    <div className={styles.solbotm1}>
                        <div className={styles.funnelDesk}>
                            <div className={styles.multipleProductsai}>
                                <img src="/Images/ProductsPage/ProductsLogo/omnichannel.png" alt='image'/>
                            </div>

                            <p> Bottomfunnel Omnichannel </p>
                        </div>

                        <div className={styles.funnelDesk}>
                            <div className={styles.multipleProductsai}>
                                <img src="/Images/ProductsPage/ProductsLogo/contact.png" alt='image'/>
                            </div>

                            <p> Bottomfunnel ContactCenter </p>
                        </div>

                        <div className={styles.funnelDesk}>
                            <div className={styles.multipleProductsai}>
                                <img src="/Images/ProductsPage/ProductsLogo/customer sucess.png" alt='image'/>
                            </div>
                            <p> Bottomfunnel CustomerSuccess </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
