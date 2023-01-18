import React from 'react'
import styles from "./RealEstateSolution.module.css"

export const RealEstateSolution = () => {

    const realestatesolutiondata = [
        {
            txt:"Price Trands",
            stxt:"Check property & real estate prize",
            icon:"Images/RealEstate/Icons/Rectangle 137.png",
        },

        {
            txt:"Locality Insight",
            stxt:"Know more about the different location",
            icon:"Images/RealEstate/Icons/Rectangle 137-1.png",
        },

        {
            txt:"User Guides",
            stxt:"To help home buyer, tenants & sellers",
            icon:"Images/RealEstate/Icons/Rectangle 137-2.png",
        },

        {
            txt:"Check Articles",
            stxt:"To help home buyer,tenants & sellers",
            icon:"Images/RealEstate/Icons/Rectangle 137-3.png",
        },

        {
            txt:"About Properties",
            stxt:"Track prices & analyses market demand",
            icon:"Images/RealEstate/Icons/Rectangle 137-4.png",
        },

        

    ]


  return (
    <div className={styles.realstatesolutionmainboxes}>
    <div className={styles.realestatesolutionsometetxboxupper}>
    <p>our on demand real estate app development company</p>
    <h1>Provide You With Robust Solution For Your Real Estate Business</h1>
    </div>
    <div className={styles.mainrealestatesolutionflexingwithupertextbox}>
    <div className={styles.realestateuppertextingbox}>
    <h1>Exculusive Features</h1>
    </div>
     <div className={styles.exuclusivefeaturedatamappingrealestatesolution}>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
</svg>
     {realestatesolutiondata.map((e)=>{
        return (
            <div className={styles.exclusivefeaturerealestateflexindi}>
            
            <div className={styles.exclusivefeaturerealestateflexindih4}><h3>{e.txt}</h3></div>
            <div className={styles.indivisualimageforsolutionrealestate}><img src={e.icon} alt='images' /></div>
            <div className={styles.indivisualtextforsolutionrealestate}><p>{e.stxt}</p></div>

            
            </div>
        )
     })}
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
</svg>
     </div>
    
    </div>
    </div>
  )
}
