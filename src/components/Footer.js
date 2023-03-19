import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: " white", textAlign: "center", marginTop: "-50px" }}>
        This Disney+ HotStar Clone done by Saurabh for Knowledge purposes :
        Non-Profitable
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Github</FooterLink>
            <FooterLink href="#">Firebase</FooterLink>
            <FooterLink href="#">React.js</FooterLink>
            <FooterLink href="#">Styled Components</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Contact Us</FooterLink>
            <FooterLink href="#">Github Access</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Jharkhand</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <a href="https://github.com/saurabh-singh-au13" target="_blank">
                <span style={{ marginLeft: "10px" }}>Github</span>
                </a>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
              <a href="https://www.facebook.com/S.Rajvansh001" target="_xo">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
                </a>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <a href="https://www.linkedin.com/in/saurabh-kumar-singh-904a11190/" target="_xo">
                  <span style={{ marginLeft: "10px" }}>LinkedIn </span>
                </a>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
