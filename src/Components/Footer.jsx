import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo5.png";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaMapMarked,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  const navigate = useNavigate("");
  return (
    <Container>
      <footer className="footer-distributed">
        <div className="footer-left">
          {/* <h3>Company<span>logo</span></h3> */}
          <div
            className="brand flex a-center j-center"
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="logo" />
            <p>- design</p>
          </div>
          <p className="footer-links">
            <a href="#" className="link-1">
              Home
            </a>

            <a onClick={() => navigate("/about")}>About</a>
            <a onClick={() => navigate("/service")}>Service</a>
            <a onClick={() => navigate("/project")}>Project</a>
            <a onClick={() => navigate("/blog")}>Blog</a>
            <a onClick={() => navigate("/contact")}>Contact</a>
          </p>

          <p className="footer-company-name">Company Name © 2015</p>
        </div>

        <div className="footer-center">
          <div>
            <a href="#">
              <FaMapMarked />             
            </a>
            <p>
              <span>444 S. Cedros Ave</span> Solana Beach, California
            </p>
          </div>

          <div className="icon-2" >
            <a href="#">
              <FaPhone />
            </a>
            <p>+91 7573010762</p>
          </div>

          <div>
            <a href="#">
              <FaEnvelope />
            </a>
            <p>
              <i href="mailto:support@company.com">yagniksagar008@gmail.com</i>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Pradeep Makhijani & Associates is an architectural design firm the
            building, people and consultant in serving the better environment..
          </p>

          <div className="footer-icons">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaGithub />
            </a>
          </div>
        </div>
      </footer>
    </Container>
  );
}

const Container = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,500,300,700);

  * {
    font-family: "Ubuntu", sans-serif;
    font-weight: bolder;
  }

  section {
    width: 100%;
    display: inline-block;
    background: #333;
    height: 50vh;
    text-align: center;
    font-size: 22px;
    font-weight: 700;
    text-decoration: underline;
  }

  .footer-distributed {
    background: rgba(0, 0, 0, 75%);
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    font: bold 16px sans-serif;
    padding: 55px 50px;
  }

  .footer-distributed .footer-left,
  .footer-distributed .footer-center,
  .footer-distributed .footer-right {
    display: inline-block;
    vertical-align: top;
  }

  /* Footer left */

  .footer-distributed .footer-left {
    width: 40%;
  }

  /* The company logo */
  .brand {
    cursor: pointer;
    padding: 0px 172px;
    margin-left: -349px;
    margin-top: -29px;
    img {
      height: 4rem;
    }
    p {
      color: #2871b1;
      font-family: sans-serif;
      font-size: 18px;
    }
  }

  /* Footer links */

  .footer-distributed .footer-links {
    color: #ffffff;
    margin: 42px 0 12px;
  }

  .footer-distributed .footer-links a {
    display: inline-block;
    line-height: 1.8;
    font-weight: 400;
    text-decoration: none;
    color: inherit;
    padding: 3px;
    cursor: pointer;
  }

  .footer-distributed .footer-company-name {
    color: #222;
    font-size: 14px;
    font-weight: normal;
    margin: 0;
  }

  /* Footer Center */

  .footer-distributed .footer-center {
    width: 35%;
  }

  .footer-distributed .footer-center a {
    display: inline-block;
    width: 35px;
    height: 35px;
    cursor: pointer;
    background-color: #33383b;
    border-radius: 2px;
    padding: 8px;
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    line-height: 35px;

    margin-right: 16px;
    margin-bottom: 5px;
  }

  .footer-distributed .footer-center a.fa-envelope {
    font-size: 17px;
    line-height: 38px;
  }

  .footer-distributed .footer-center p {
    display: inline-block;
    color: #ffffff;
    font-weight: 400;
    vertical-align: middle;
    margin: 0;
  }

  .footer-distributed .footer-center p span {
    display: block;
    font-weight: normal;
    font-size: 14px;
    line-height: 2;
  }

  .footer-distributed .footer-center p i {
    color: lightseagreen;
    cursor: pointer;
    text-decoration: none;
    font-family:"Ubuntu", sans-serif ;
  }

  .footer-distributed .footer-links a:before {
    content: "|";
    font-weight: 300;
    font-size: 20px;
    left: 0;
    color: #fff;
    display: inline-block;
    padding-right: 5px;
  }

  .footer-distributed .footer-links .link-1:before {
    content: none;
  }

  /* Footer Right */

  .footer-distributed .footer-right {
    width: 20%;
  }

  .footer-distributed .footer-company-about {
    line-height: 20px;
    color: #92999f;
    font-size: 13px;
    font-weight: normal;
    margin: 0;
  }

  .footer-distributed .footer-company-about span {
    display: block;
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .footer-distributed .footer-icons {
    /* margin-top: 25px; */
  }

  .footer-distributed .footer-icons a {
    display: inline-block;
    width: 35px;
    height: 35px;
    cursor: pointer;
    background-color: #33383b;
    border-radius: 2px;
    padding: 8px; 
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    line-height: 35px;

    margin-right: 3px;
    margin-bottom: 5px;
  }

  /* If you don't want the footer to be responsive, remove these media queries */

  @media (max-width: 880px) {
    .footer-distributed {
      font: bold 14px sans-serif;
    }
    .brand {
      cursor: pointer;
    padding: 0px 30px;
    margin-left: -6px;
    img {
      height: 4rem;
    }
    p {
      color: #2871b1;
      font-family: sans-serif;
      font-size: 18px;
    } 
  }
    .footer-distributed .footer-left,
    .footer-distributed .footer-center,
    .footer-distributed .footer-right {
      display: block;
      width: 100%;
      margin-bottom: 40px;
      text-align: center;
    }

    .footer-distributed .footer-center a {
      padding: 8px;
      
    }
    .icon-2{
      padding-right: 47px;

    }
  }
`;
