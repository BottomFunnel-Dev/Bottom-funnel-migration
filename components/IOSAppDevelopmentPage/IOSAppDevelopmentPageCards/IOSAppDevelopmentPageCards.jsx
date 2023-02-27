import React from "react";
import styles from "./IOSAppDevelopmentPageCards.module.css";
import Image from "next/image";
import { PopupForm } from "../../PopupForm/PopupForm";

export const IOSAppDevelopmentPageCards = () => {
  return (
    <div>
      <div className={styles.IOSAppDevelopmentPageCardsMainDiv}>
        <div className={styles.IOSAppDevelopmentPageCardsInnerMainDiv}>
          <div className={styles.IOSAppDevelopmentPageCardsInnerMainDivcontain}>
            <h1>IOS Application Development Service </h1>

            <p>
              Are you searching for an iPhone applications development company
              which could help you expand your reach to more than a billion
              users of Apple products? Digiteum team could be the one you are
              looking for. Over a decade in custom iOS app development, we have
              built dozens of applications for different Apple devices. Some of
              them won prestigious design awards, others became new profit
              centers. And all our products have made an impact in the market
              and helped our clients achieve their business goals, and even
              outdo them. Let’s see what we can do for you.
            </p>
          </div>

          <div className={styles.IOSAppDevelopmentPageCardsInnerMainDivimage}>
            <Image
              src={"/Images/iosappdevelopmentphotos/Component 64.webp"}
              alt={"image"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>

        <div className={styles.IOSAppDevelopmentPageCardsInnerMainDiv2}>
          <div className={styles.innermaindiv2}>
            <div className={styles.innermaindiv2box}>
              <div className={styles.mainbox}>
                <Image
                  src={"/Images/iosappdevelopmentphotos/Rectangle 4497.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <h3> Vetted IOS Developers </h3>
              <p>
                We have a team of experienced developers who specialize in iOS
                development and are designated for your project.
              </p>
            </div>

            <div className={styles.innermaindiv2box}>
              <div className={styles.mainbox}>
                <Image
                  src={"/Images/iosappdevelopmentphotos/Rectangle 4498.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <h3> All In-House Code </h3>
              <p>
                All of our iOS development services happen in-house at our
                Toronto office. Not a single line of code is outsourced.
              </p>
            </div>

            <div className={styles.innermaindiv2box}>
              <div className={styles.mainbox}>
                <Image
                  src={"/Images/iosappdevelopmentphotos/Rectangle 4499.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <h3> Custom Agile Process </h3>
              <p>
                Our iOS development process leverages a custom agile framework
                that minimizes risk, maximizes velocity, and promotes
                transparency.
              </p>
            </div>
          </div>

          <div className={styles.innermaindiv2}>
            <div className={styles.innermaindiv2box}>
              <div className={styles.mainbox}>
                <Image
                  src={"/Images/iosappdevelopmentphotos/apple (1) 2.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <h3> End-To-End Service </h3>
              <p>
                Our iOS development services include consulting, product
                strategy, UX/UI development, testing, and technical delivery.
              </p>
            </div>

            <div className={styles.innermaindiv2box}>
              <div className={styles.mainbox}>
                <Image
                  src={"/Images/iosappdevelopmentphotos/social-care 2.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <h3> App Store Deployment </h3>
              <p>
                Clearbridge Mobile handles the entire App Store submission
                process including, the listing, description, assets, and more.
              </p>
            </div>

            <div className={styles.innermaindiv2box}>
              <div className={styles.mainbox}>
                <Image
                  src={"/Images/iosappdevelopmentphotos/app-development 2.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <h3> Maintenance & Support </h3>
              <p>
                We offer personalized maintenance and support packages on top of
                our iOS development services that help you manage platform
                updates and ongoing version releases.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.IOSAppDevelopmentPageCardsInnerMainDiv3}>
          <div className={styles.innermaindiv3Contain}>
            <h1>
              {" "}
              We Offer Custom Android App Development across all platforms{" "}
            </h1>
            <p>
              We offer iOS application development for the whole family of Apple
              devices — smartphones, tablets, TV and smartwatches. Whether you
              are looking for the experts to turn your business idea into a
              functional iOS application, to design a sleek interface and
              seamless user experience, to provide high-end coding or need
              full-cycle iOS development services, Digiteum is the partner you
              need. Using more than a decade of experience in mobile
              development, we’ve had a chance to design and develop iOS apps for
              different industries and niches, including healthcare, energy,
              photography, sport, education and travel.
            </p>
            <button className={styles.btnios}
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            >
              Hire IOS Android developer
            </button>
            <div
          className="modal fade"
          id="staticBackdrop1"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div>
                <PopupForm />
              </div>
            </div>
          </div>
        </div>



          </div>
          <div className={styles.innermaindiv3Image}>
            <Image
              src={"/Images/iosappdevelopmentphotos/Group 340002.webp"}
              alt={"image"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>

        <div className={styles.iosCardsInnermaindiv4}>
          <div className={styles.iosinnermaindiv41stdiv}>
            <div className={styles.iosinnermaindiv41stdivbox}>
              <div className={styles.ios1stdivbox}>
                <div className={styles.iosapplogo}>
                  <Image
                    src={"/Images/iosappdevelopmentphotos/analyse 1.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className={styles.iosappdevelopmentparagraph}>
                  <h3> Platform Ideation </h3>
                  <p>
                    Our team of app designers, developers, and marketing
                    professionals work altogether to ideate the finest iOS app
                    development strategy for your business.
                  </p>
                </div>
              </div>

              <div className={styles.ios1stdivbox}>
                <div className={styles.iosapplogo}>
                  <Image
                    src={"/Images/iosappdevelopmentphotos/interest-rate 1.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className={styles.iosappdevelopmentparagraph}>
                  <h3> Dedicated Development </h3>
                  <p>
                    Our frontend and backend app developers work in a concord
                    pattern after finalizing the most suitable framework serving
                    all essential requirements of your app.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.iosinnermaindiv41stdivbox}>
              <div className={styles.ios1stdivbox}>
                <div className={styles.iosapplogo}>
                  <Image
                    src={
                      "/Images/iosappdevelopmentphotos/app-development (2) 1.webp"
                    }
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className={styles.iosappdevelopmentparagraph}>
                  <h3> Detailed Quality Check </h3>
                  <p>
                    Once your app is designed and developed completely, it goes
                    through a cycle of thorough error-proofing, testing, and
                    quality assurance.
                  </p>
                </div>
              </div>

              <div className={styles.ios1stdivbox}>
                <div className={styles.iosapplogo}>
                  <Image
                    src={"/Images/iosappdevelopmentphotos/agile (2) 1.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className={styles.iosappdevelopmentparagraph}>
                  <h3> Detailed Quality Check </h3>
                  <p>
                    Once your app is designed and developed completely, it goes
                    through a cycle of thorough error-proofing, testing, and
                    quality assurance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.iosinnermaindiv42nddiv}>
            <h1>User-Centric Mobile App Development Solutions </h1>

            <p
              style={{
                textAlign: "justify",
              }}
            >
              Our cost-effective iOS app development services are distinguished
              by the sacrosanct operational methodologies we follow while
              designing your business app. The entire process of iOS mobile app
              development begins with platform ideation and insight analysis.
              Our marketing strategists and iOS app developers scrutinize every
              possible element of user engagement during the brainstorming
              sessions. Our UI/UX designers work along with developers to match
              every feature with seamless functionality. And this is how every
              iOS mobile application project starts at Trank Technologies.
            </p>
          </div>
        </div>

        <div className={styles.IOSAppDevelopmentPageCardsInnermaindiv5}>
          <h2>
            Convert Your Ideas Into Steadfast Reality With Bottom funnel The
            world-class mobile app development company
          </h2>
          <div className={styles.innermaindiv5BoxDiv}>
            <div className={styles.innermaindiv4Boxdiv1stColum}>
              <div className={styles.innermaindiv4Row}>
                <div className={styles.div5logoimg}>
                  <Image
                    src={"/Images/iosappdevelopmentphotos/1lightbulb.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <h4> Custom App Development </h4>
                <p
                  style={{
                    textAlign: "justify",
                  }}
                >
                  Our innovative iOS app development services in India solutions
                  mainly comprise custom application design and development
                  practices. Our developers come from an extensive programming
                  background who can assemble a complete set of features to
                  customize a brand-new application platform that you can
                  navigate and manage hassle-free. These top iOS developers also
                  take care of the interface management to make sure that your
                  users can operate your iOS app effortlessly.
                </p>
              </div>
              <div className={styles.innermaindiv4Row}>
                <div className={styles.div5logoimg}>
                  <Image
                    src={"/Images/iosappdevelopmentphotos/1best-employee.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <h4> Redesign & Redevelopment </h4>
                <p
                  style={{
                    textAlign: "justify",
                  }}
                >
                  If you are planning on refurbishing your digital presence from
                  scratch, you can rely on our app development team for
                  redesigning and redevelopment solutions. Our business-specific
                  iOS development services also cover improvement practices to
                  revamp your business application through effective planning.
                  We have certified iPhone app developers who can craft the
                  perfect resurgence for your online brand and make your
                  services stand apart in the assiduous competition out there.
                </p>
              </div>
              <div className={styles.innermaindiv4Row}>
                <div className={styles.div5logoimg}>
                  <Image
                    src={"/Images/iosappdevelopmentphotos/1security.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <h4> Hybrid iOS App Design & Development </h4>
                <p
                  style={{
                    textAlign: "justify",
                  }}
                >
                  Your business doesn’t have to limit its reach especially when
                  you have an IT partner like Trank Technologies offering
                  top-notch solutions for your projects. Hybrid app development
                  which is an integral part of our mobile app development comes
                  in handy when our iOS app designers build a customized layout
                  for your mobile app. Before boarding on the core development
                  part, we formulate a strategy roadmap and suggest the best iOS
                  frameworks through concise consulting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
