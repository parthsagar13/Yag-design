import { useNavigate, Link, useLocation } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { firebaseConfig } from "../Utils/firebaseconfig";
import React, { useEffect, useState } from "react";
import logo from "../assets/logo5.png";
import showPwdImg from '../assets/show-password.svg';
import hidePwdImg from '../assets/hide-password.svg';
import styled from "styled-components";
import Navbar from "../Components/Navbar";

const Signup = () => {
            // eslint-disable-next-line
  const app = initializeApp(firebaseConfig);
  const navigate = useNavigate();
  const location = useLocation();
  const page = location.pathname === "/login" ? true : false;
  const [email, setEmail] = useState("");
  const [isUserExist, setUserExist] = useState(false);
  const [isEmailUsed, setIsEmailUsed] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [pwd, setPwd] = useState('');
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const auth = getAuth();

  const validation = (fieldName, value) => {
    switch (fieldName) {
      case "email":
        return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      case "password":
        return value.length >= 6;
      default:
        break;
    }
  };
  const ctaClickHandler = (e) => {
    e.preventDefault();

    if (!validation("email", email) || !validation("password", pwd)) {
      setEmailValid(validation("email", email));
      setPasswordValid(validation("password", pwd));
      return;
    }

    if (page) {
      signInWithEmailAndPassword(auth, email, pwd)
        .then((auth) => {
          if (auth) {
            navigate("/");
          }
        
        })
        .catch((error) => setUserExist(true));
    } else {
      createUserWithEmailAndPassword(auth, email, pwd)
        .then((auth) => {
          if (auth) {
            navigate("/");
          }
        })
        .catch((error) => setIsEmailUsed(true));
    }
    setTimeout(() => {
      setUserExist(null);
      setIsEmailUsed(null);
    }, 3000);
  };

  useEffect(() => {
    setUserExist(false);
    setIsEmailUsed(false);
  }, [location]);

  const emailOnChangeHendler = (e) => {
    setEmail(e.target.value);
  };



  return (
    <Container>
    <Navbar/>
      <div className="login">
        <div className="holder">
          <h2 className="text-white">{page ? "Sign in" : "Sign Up"}</h2>
          <br />
          <form>

            {!emailValid && (
              <p className="text-danger">Email is invalid/blank</p>
            )}
            <div>
            <input
              className="form-control"
              value={email}
              onChange={emailOnChangeHendler}
              type="email"
              placeholder="Email"
            />
            {!passwordValid && (<p className="text-danger">Password is invalid/blank</p>)}
            </div>
<div className="App">
      <div className="pwd-container">
        <input
          name="pwd"
          placeholder="Enter Password"
          type={isRevealPwd ? "text" : "password"}
          value={pwd}
          onChange={e => setPwd(e.target.value)}
          />
        <img
          // eslint-disable-next-line
          title={isRevealPwd ? "Hide password" : "Show password"}
          src={isRevealPwd ? hidePwdImg : showPwdImg}
          onClick={() => setIsRevealPwd(prevState => !prevState)}
        />
      </div>

    </div>
            
            <button
              className="btn btn-danger btn-block"
              onClick={ctaClickHandler}
            >
              {page ? "Sign in" : "Sign up"}
            </button>
            <br />
            {page && (
              <div className="form-check">
                <br />
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-labele"
                  htmlFor="flexCheckDefault"
                >
                  Remember Me
                </label>
              </div>
            )}
          </form>
          <br />
          <div style={{ height: "30px" }}>
            {isUserExist && (
              <p className="text-warning">
                User dose not exist | Go for Sign up
              </p>
            )}
            {isEmailUsed && (
              <p className="text-warning">
                Email already in Use | Go for Sign in
              </p>
            )}
          </div>
          <div className="login-form-other">
            <div className="login-signup-now">
              {page ? "New to Netflix?" : "Existing User"} &nbsp;
              <Link
                className=" "
                target="_self"
                to={page ? "/signup" : "/login"}
              >
                {page ? "Sign up now?" : "Sign in "}
              </Link>
              .
            </div>
          </div>
        </div>
     
      </div>
    </Container>
  );
};

export default Signup;


const Container = styled.div`

    

  nav {
    position: sticky;
    top: 0;
    height: 4.5rem;
    /* background-color: #1477d1; */
    width: 100%;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 2;
    padding: 0 4rem;
    align-items: center;
    transition: 0.3s ease-in-out;
    .left {

      .brand {
        cursor: pointer;
        img {
          height: 4rem;
          mix-blend-mode: difference;
        }
        p {
          color: #2e2e2e;
          font-family: sans-serif;
          font-size: 18px;
        }
      }
    }

  }


  
    
  
  // Login Page
.login{
  height: 100vh;
  overflow: hidden;
  /* background-color: #1477d1; */
  
  .holder{
  .btn{
    padding: 7px 19px;
    /* background-color: #1477d1; */
    color: #000000;
    font-size: 1rem;
    border-radius: 6px;
    border: 2px;
    cursor: pointer;
  }
    padding: 60px 68px 40px;
    border-radius: 4px;
    background-color: #978787;
    width: 450px;
    position: absolute;
    z-index: 1;
    margin-top: 100px;
    left: calc(50% - 225px);

    input{
    padding: 8px 107px 9px 11px;
    font-size: 15px;
    border-radius: 4px;
    border: 2px solid black;
    margin-bottom: 22px;
      margin-bottom: 20px;
    }
    form{
      p{
        color: #c92c2c;
      }
    }
  }
  .shadow{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }
  img{
    max-width: 100%;
  }
  .login-form-other{
    .login-signup-now {
      font-size: 16px;
      margin-top: 16px;
      a {
        color: #1477d1;
        text-decoration: none;
      }
    }
  }
}

.pwd-container {
    position: relative;
    width: 266px;
  }
  
  .pwd-container input {
      padding: 8px 107px 9px 11px;
    font-size: 15px;
    border-radius: 4px;
    border: 2px solid black;
    margin-bottom: 22px;
  }
  
  .pwd-container img {
    cursor: pointer;
    position: absolute;
    width: 20px;
    right: -32px;
    top: 8px;
}

`