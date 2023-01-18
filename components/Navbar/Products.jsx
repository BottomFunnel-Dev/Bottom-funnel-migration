import React, { useState } from "react";
import prods from "./products.module.css";
import  Link  from "next/link";
import { product1, product2, product3, product4 } from "../../Data/Navbar";
export const Products = ({ serHoverIn, serHoverOut, scroll, productMount }) => {
  return (
    <div
      onMouseEnter={() => serHoverIn()}
      onMouseLeave={() => serHoverOut()}
      className={prods.productVisible}
      style={{ top: scroll || productMount.navMount ? "68px" : "98px" }}
    >
      <div className={prods.productDropdownSection}>
        <div
          className={prods.productDropdownContent}
          style={{ marginLeft: "1%", width: "35%" }}
        >
          <h5
            className={prods.noStyleMain}
            onClick={() => {
              // navigate(`web-development`);
              serHoverOut();
            }}
            style={{ color: "#ef4c23" ,marginBottom:"10px"}}
          >
            SAAS
          </h5>

          <div className={prods.listItems} style={{ width: "100%" }}>
            {product1.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  // navigate(`/${item.path}`);
                  serHoverOut();
                }}
                className={`${prods.productimageIconDivSection} ${prods.hoveringDiv}`}
                style={{
                  height: "75px",
                  width: "100%",
                  marginTop: "0%",
                  "--i": item.productHover,
                }}
              >
                <div>
                  <img
                    className={prods.productLogoImages}
                    src={item.navIcons}
                    alt=""
                    style={{ width: "90px", height: "60px" }}
                  />
                </div>
                <Link
                  onClick={serHoverOut}
                  href={item.path}
                  className={prods.productSaasRow}
                  style={{ width: "100%", marginLeft: "10%", marginTop: "0%" }}
                >
                  <p style={{ fontWeight: "500", fontSize: "14px" }}>
                    {item.dropContent}
                  </p>
                  <p style={{ fontSize: "11px" }}>{item.title}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div
          className={prods.productDropdownContent}
          style={{ marginLeft: "4%", width: "35%", marginTop: "2%" }}
        >
          <div className={prods.listItems} style={{ width: "100%" }}>
            {product2.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  // navigate(`/${item.path}`);
                  serHoverOut();
                }}
                className={`${prods.productimageIconDivSection} ${prods.hoveringDiv}`}
                style={{
                  height: "75px",
                  width: "100%",
                  marginTop: "0%",
                  "--i": item.productHover,
                }}
              >
                <div>
                  <img
                    className={prods.productLogoImages}
                    src={item.navIcons}
                    alt=""
                    style={{ width: "90px", height: "60px" }}
                  />
                </div>
                <Link
                  onClick={serHoverOut}
                  href={item.path}
                  className={prods.productSaasRow}
                  style={{ width: "100%", marginLeft: "10%", marginTop: "0%"}}
                >
                  <p style={{ fontWeight: "500", fontSize: "14px" }}>
                    {item.dropContent}
                  </p>
                  <p style={{ fontSize: "11px" }}>{item.title}</p>
                </Link>
              </div>
            ))}
          </div>
          <Link
            href="newProductPage"
            onClick={serHoverOut}
            style={{ textDecoration: "none" }}
          >
            <p className={prods.viewAllButton}>View All Products</p>
          </Link>
        </div>

        <div
          className={prods.productDropdownContent}
          style={{ marginLeft: "3%", marginTop: "0%", width: "25%" }}
        >
          <h5
            className={prods.noStyleMain}
            style={{ marginLeft: "5%" ,color:"#ef4c23" }}
            onClick={() => {
              // navigate(`web-development`);
              serHoverOut();
            }}
          >
            Platforms
          </h5>
          <div className={prods.listItems}>
            {product4.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  // navigate(`/${item.path}`);
                  serHoverOut();
                }}
                className={`${prods.productimageIconDivSection} ${prods.saasHoveringData}`}
                style={{ marginTop: i == 0 ? "0" : "2%" }}
              >
                <div>
                  <img
                    className={prods.iconDivSection}
                    src={item.navIcons}
                    alt=""
                    style={{ width: "40px" }}
                  />
                </div>
                <Link
                  onClick={serHoverOut}
                  href={item.path}
                  className={prods.linkP}
                  style={{width:"70%", color:"black", fontSize: "14px"}}
                >
                  {/* <p style={{ marginTop: "0%", marginLeft: "10%" }}> */}
                    {item.dropContent}
                  {/* </p> */}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div
          className={prods.productDropdownContent}
          style={{ marginLeft: "3%", width: "25%" }}
        >
          <h5
            className={prods.noStyleMain}
            onClick={() => {
              // navigate(`web-development`);
              serHoverOut();
            }}
            style={{ color: "#ef4c23" }}
          >
            
            Features
          </h5>

          <div
            className={prods.listItems}
            style={{ marginTop: "5%", marginLeft: "7%" }}
          >
            {/* <h5> <img src=""/> Features</h5> */}
            {product3.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  // navigate(`/${item.path}`);
                  serHoverOut();
                }}
                className={prods.productimageIconDivSection}
              >
                {/* <div>
                    <img
                      className="iconDivSection"
                      src={item.navIcons}
                      alt=""
                    />
                  </div> */}

                <Link
                  onClick={serHoverOut}
                  href={item.path}
                  style={{ margin: "5px",fontSize:"14px", color:"black",padding: "0 10px" }}
                  // className={prods.linkP}
                 
                >
                  {/* <p style={{ margin: "0", paddingLeft: "7%" }}> */}
                    {item.dropContent}
                  {/* </p> */}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div
          className={prods.productDropdownContent}
          style={{ marginLeft: "1%", width: "25%" }}
        >
          <div style={{ marginTop: "1%", color: "#ef4c23", marginLeft: "0" ,display:"flex", alignItems:"center", columnGap:"5px"}}>
            <img height="40px" src="Images/navbar/product/Neo.png" />
           <h5> Bottom Funnel Neo</h5>
          </div>
          <p style={{ marginLeft: "5%" }}>
            Leverage a flexible, end-to-end, AI-powered enterprise platform to
            unify customer experiences
          </p>
          <div style={{ marginTop: "15%", color: "#ef4c23" ,display:"flex", alignItems:"center", columnGap:"5px"}}>
            <img src="Images/navbar/product/knowmore.png" />
            <h5> Know more</h5>
          </div>
          <p>What's New?</p>
          <p>Blog</p>
        </div>
      </div>
    </div>
  );
};
