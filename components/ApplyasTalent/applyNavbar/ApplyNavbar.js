import React, { useState, useEffect } from "react";
import styles from "./applyNavbar.module.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { jobroles } from "../../../Data/ApplyAsTalent";
import Image from "next/image";
export default function ApplyNavbar() {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  const [applynav, setApplynav] = useState(0);

  const navBackground = () => {
    if (window.scrollY > 1) {
      setApplynav(true);
    } else {
      setApplynav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navBackground);
  });

  return (
    <div
      style={{ background: applynav ? "white" : "transparent" }}
      className={styles.applynav}
    >
      {["xxl"].map((expand) => (
        <Navbar key={expand} bg="transparent" expand={expand} className="p-0">
          <Container>
            <Navbar.Brand href="#">
              <div className={styles.applylogo}>
                <img
                  src={
                    !applynav
                      ? "/Images/navbar/whitelogobottom.png"
                      : "/Images/navbar/blacklogo.png"
                  }
                  alt=""
                />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Image
                    loader={myLoader}
                    src="/Images/navbar/blacklogo.png"
                    alt="Picture of the author"
                    width={200}
                    height={60}
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className={styles.dropdownitem} href="#action1">
                    How it Works
                  </Nav.Link>
                  <NavDropdown
                    title="Apply Now"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className={styles.dropdownitem}
                  >
                    <div className={styles.applyDropdown}>
                      {jobroles.map((item) => (
                        <div className={styles.dropItem} key={item.title}>
                          <NavDropdown.Item href="#action3">
                            {item.title}
                          </NavDropdown.Item>
                        </div>
                      ))}
                    </div>
                  </NavDropdown>
                  <Nav.Link
                    className="px-4"
                    style={{ color: "white" }}
                    href="#action2"
                  >
                    Link
                  </Nav.Link>
                  <Nav.Link
                    className="px-4"
                    style={{ color: "white" }}
                    href="#action2"
                  >
                    FAQ
                  </Nav.Link>
                  <Nav.Link
                    className="px-4"
                    style={{ color: "white" }}
                    href="#action2"
                  >
                    Contact Us
                  </Nav.Link>
                  <Nav.Link
                    className="px-4"
                    style={{ color: "white" }}
                    href="#action2"
                  >
                    Hire a Talent
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}
