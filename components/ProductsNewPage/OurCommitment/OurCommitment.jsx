import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import styles from "./OurCommitment.module.css";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export const OurCommitment = () => {

    const productsTalentProfilesCardsData = [
        {
            // title: "Jumia Egypt and MSMEs Agency join forces to support SMEs in Egypt",
            body: `This new partneship will make it possible to support the digitization of local commerce, in particular
            through the referencing of more than 10,000 merchants at the level of these two 10,000 jobs will be created thanks 
            to these agreements.`,
            image: "/Images/ProductsPage/OurCommitments/CommunitySupport1.jpg",
            experience: "Ex:6 years",
            communication: "Communication Score",
            technicalscore: "Technical Score",
            buttondetails: "See more",
        },
        {
            // title: "The Ministry of industry and Trade of UAE signed a partnership agreement with...",
            body: `This new partneship will make it possible to support the digitization of local commerce, in particular
             through the referencing of more than 10,000 merchants at the level of these two 10,000 jobs will be created thanks 
             to these agreements.`,
            image: "/Images/ProductsPage/OurCommitments/CommunitySupport1.jpg",
            experience: "Ex:4 years",
            communication: "Communication Score",
            technicalscore: "Technical Score",
            buttondetails: "See more",
        },
        {
            // title: "The Ministry of industry and Trade of UAE signed a partnership agreement with...",
            body: `This new partneship will make it possible to support the digitization of local commerce, in particular
            through the referencing of more than 10,000 merchants at the level of these two 10,000 jobs will be created thanks 
            to these agreements.`,
            image: "/Images/ProductsPage/OurCommitments/CommunitySupport1.jpg",
            experience: "Ex:2 years",
            communication: "Communication Score",
            technicalscore: "Technical Score",
            buttondetails: "See more",
        },
    ];

    const ourImpactCardsData = [
        {
            // title: "Jumia Egypt and MSMEs Agency join forces to support SMEs in Egypt",
            body: `This new partneship will make it possible to support the digitization of local commerce, in particular
            through the referencing of more than 10,000 merchants at the level of these two 10,000 jobs will be created thanks 
            to these agreements.`,
            image: "/Images/ProductsPage/OurCommitments/CommunitySupport1.jpg",
            experience: "Ex:6 years",
            communication: "Communication Score",
            technicalscore: "Technical Score",
            buttondetails: "See more",
        },
        {
            title: "The Ministry of industry and Trade of UAE signed a partnership agreement with...",
            body: `This new partneship will make it possible to support the digitization of local commerce, in particular
             through the referencing of more than 10,000 merchants at the level of these two 10,000 jobs will be created thanks 
             to these agreements.`,
            image: "/Images/ProductsPage/OurCommitments/CommunitySupport1.jpg",
            experience: "Ex:4 years",
            communication: "Communication Score",
            technicalscore: "Technical Score",
            buttondetails: "See more",
        },
        {
            title: "The Ministry of industry and Trade of UAE signed a partnership agreement with...",
            body: `This new partneship will make it possible to support the digitization of local commerce, in particular
            through the referencing of more than 10,000 merchants at the level of these two 10,000 jobs will be created thanks 
            to these agreements.`,
            image: "/Images/ProductsPage/OurCommitments/CommunitySupport1.jpg",
            experience: "Ex:2 years",
            communication: "Communication Score",
            technicalscore: "Technical Score",
            buttondetails: "See more",
        },
    ];

    const [showtab, setShowtab] = useState(1);
    const [countryid, setCountryid] = useState('');
    const [state, setState] = useState([]);
    const [stateid, setStateid] = useState('');
    const [counter, setCounter] = useState(0);

    const handletab = (e) => {
        setShowtab(e);
    }

    // const handlecounty = (e) => {
    //     const getcountryId = e.target.value;
    //     const getStatedata = countrydata.find(country => country.country_id === getcountryId).states;
    //     setState(getStatedata);
    //     setCountryid(getcountryId);
    //     //console.log(getcountryId);
    // }

    const handlestate = (e) => {
        const stateid = e.target.value;
        //console.log(stateid);
        setStateid(stateid);

    }

    const increase = () => {
        setCounter(count => count + 1);
    };

    const decrease = () => {
        setCounter(count => count - 1);
    };
    return (
        <>
            <div className={styles.productOurCommitmentmainDiv}>
                <div className={styles.productsOurCommitmentMainImageDiv}>
                    <div>
                        <img src='/Images/ProductsPage/OurCommitments/CommitementsBanner.png' alt='image'/>
                    </div>

                    <div className={styles.productsOurCommitmentMainContentDiv}>
                        <h1>
                             Our <span> Commitments </span>
                        </h1>

                        <h5>
                            Create, Build, Collaborate and ship products very faster
                        </h5>

                    </div>
                </div>
                
                <React.Fragment>
                    <Container>
                        <div className="row">
                            <div class="col-sm-12 bg-light " className={styles.productOurCommitmentChangemainDiv}>

                                <ul class="nav nav-pills mb-3 mt-1" id="pills-tab" role="tablist" className={styles.productOurCommitmentbuttonouterDiv}>
                                    <li class="nav-item" role="presentation" className={styles.productOurCommitmentbuttonDiv}>
                                        <button className={showtab === 1 ? "productOurCommitmentHeadingButtons active" : "productOurCommitmentHeadingButtons"} onClick={() => handletab(1)}> Community Support </button>
                                    </li>

                                    <li class="nav-item" role="presentation" className="productOurCommitmentbuttonDiv">
                                        <button className={showtab === 2 ? "productOurCommitmentHeadingButtons active" : "productOurCommitmentHeadingButtons"} onClick={() => handletab(2)}> Our Impact </button>
                                    </li>

                                    <li class="nav-item" role="presentation" className="productOurCommitmentbuttonDiv">
                                        <button className={showtab === 3 ? "productOurCommitmentHeadingButtons active" : "productOurCommitmentHeadingButtons"} onClick={() => handletab(3)}> Technical Service </button>
                                    </li>

                                    <li class="nav-item" role="presentation" className="productOurCommitmentbuttonDiv">
                                        <button className={showtab === 4 ? "productOurCommitmentHeadingButtons active" : "productOurCommitmentHeadingButtons"} onClick={() => handletab(4)}> Saas Products </button>
                                    </li>
                                </ul>
                                <div class="tab-content text-dark" id="pills-tabContent">

                                    <div className={showtab === 1 ? "tab-pane fade show active" : "tab-pane fade show"} style={{ textDecoration: "none", borderBottom: "none" }}>


                                        <div className='ourCommitmentMainDiv'>
                                            {productsTalentProfilesCardsData.map(({ title, body, image, buttondetails, experience, communication, technicalscore }, idx) => (
                                                <div key={idx}>
                                                    <div>
                                                        <img src={image} alt="image" />
                                                    </div>
                                                    <h3>{title}</h3>
                                                    <p>{body}</p>
                                                    {/* <h6>{experience}</h6> */}

                                                    {/* <div className='productsTalentCommunication'>
                                                        <p>{communication}</p>
                                                        <p style={{ fontSize: "12px", marginTop: "1%" }}>
                                                            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiOutlineStar />
                                                        </p>
                                                    </div> */}

                                                    <p className='productsTalentProfilesContentButton'>{buttondetails}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className={showtab === 2 ? "tab-pane fade show active" : "tab-pane fade"} style={{ textDecoration: "none", borderBottom: "none" }} >

                                        <div className='ourCommitmentMainDiv'>
                                            {ourImpactCardsData.map(({ title, body, image, buttondetails}, idx) => (
                                                <div key={idx}>
                                                    <div>
                                                        <img src={image} alt="image" />
                                                    </div>
                                                    <h3>{title}</h3>
                                                    <p>{body}</p>
                                                    {/* <h6>{experience}</h6> */}

                                                    {/* <div className='productsTalentCommunication'>
                                                        <p>{communication}</p>
                                                        <p style={{ fontSize: "12px", marginTop: "1%" }}>
                                                            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiOutlineStar />
                                                        </p>
                                                    </div> */}

                                                    <p className='productsTalentProfilesContentButton'>{buttondetails}</p>
                                                </div>
                                            ))}
                                        </div>

                                    </div>

                                    <div className={showtab === 3 ? "tab-pane fade show active" : "tab-pane fade"} style={{ textDecoration: "none", borderBottom: "none" }} >

                                        <div className='ourCommitmentMainDiv'>

                                        </div>
                                    </div>

                                    <div className={showtab === 4 ? "tab-pane fade show active" : "tab-pane fade show"} style={{ textDecoration: "none", borderBottom: "none" }}>

                                        <div className='ourCommitmentMainDiv'>


                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Container>

                </React.Fragment>

            </div>
        </>
    );
}

