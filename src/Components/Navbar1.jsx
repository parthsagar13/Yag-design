import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";   
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/logo5.png";
// import { onAuthStateChanged, signOut } from "firebase/auth";
export default function Navbar({ isScrolled }) {
  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Service", link: "/service" },
    { name: "Project", link: "/project" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];

  const [showSearh, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);

  const navigate = useNavigate("");
  // onAuthStateChanged(firebaseAuth, (currentUser) => {
  //     if(!currentUser) navigate("/login")
  //   })
  return (
    <Container>
      <nav className={`${isScrolled ? "scrolled" : ""} flex defaultMargin `}>
        <div className="left flex a-center">
          <div className="brand flex a-center j-center" onClick={() => navigate("/")}>
            <img src={logo} alt="logo" />
            <p>- design</p>
          </div>

          <ul className="links flex">
            {links.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="right flex a-center">
          <div className={`search ${showSearh ? "show-search" : ""}`}>
            <button
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) setShowSearch(false);
              }}
              >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search"
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setShowSearch(false);
                setInputHover(false);
              }}
            />
          </div>

          <button className="btn" onClick={() => navigate("/login")}>Log in</button>
              
          <button  className="btn" onClick={() => navigate("/signup")}>Sign Up</button>
 
        </div>
      </nav>
    </Container>
  );
}

const Container = styled.div`
  .scrolled {
    background-color: rgb(0 0 0 / 85%);
  }
  nav {
    position: sticky;
    top: 0;
    height: 4.5rem;
    background-color:rgba(0, 0, 0, 0.6);
    width: 100%;
    justify-content: space-between;
    /* position: fixed; */
    top: 0;
    z-index: 6;
    padding: 0 4rem;
    align-items: center;
    transition: 0.3s ease-in-out;
    .left {
      .links {
        margin-left: 135px;
        list-style-type: none;
        gap: 2.6rem;
        li{
          a {
            font-size: 1.2rem;
            color: #ffffff;
            text-decoration: none;
          }
          a:hover{
            font-size: 1.2rem;
            color: grey;
          }
        }
      }
      gap: 2rem;
      .brand {
        cursor: pointer;
        img {
          height: 4rem;
          mix-blend-mode: difference;
        }
        p {
          color: #2871b1;;
          font-family: sans-serif;
          font-size: 18px;
        }
      }
    }

    .right {
      margin-right: -42px;
      gap: 0.4rem;

      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        &:focus {
          outline: none;
        }
        svg {
          color: #f34242;
          font-size: 1rem;
        }
      }
      .search {
        display: flex;
        align-items: center;
        justify-content: center;
        button {
          background-color: transparent;
          border: none;
          &:focus {
            outline: none;
          }
          svg {
            color: #ffffff;
            font-size: 1rem;
          }
        }
        input {
          width: 0;
          opacity: 0;
          visibility: hidden;
          transition: 0.3s ease-in-out;
          background-color:rgba(0, 0, 0, 0.6);
          border: none;
          color: white;
          &:focus {
            outline: none;
          }
        }
      }
      .show-search {
        border: 2px solid black;
        border-radius: 3px;
        input {
          width: 100%;
    opacity: 1;
    visibility: visible;
    padding: 7px 4px;
        }
      }
      button {
        font-weight: bolder;
    font-family: 'Ubuntu', sans-serif;
        border: 2px solid white;
        padding: 8px 13px;
        color: white;
        border-radius: 62px;
      }
    
    }
  }






  @media screen and (min-width: 280px) and (max-width: 1080px) {
    
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
      















  }
`;
