import React, {useState} from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'
import { FaSearch } from "react-icons/fa";
import logo from "../assets/logo5.png";
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const navigate = useNavigate("");

      const [showSearh, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);
  return (
    <Container className='w-screen h-[80px]  text-white  z-10 fixed   '>
      <div className=' flex justify-between  bg-zinc-900/[.87] items-center  w-full h-full'>
        <div className='flex  items-center'>
          {/* <h1 className='text-3xl font-bold mr-4 sm:text-4xl '>BRAND.</h1> */}
          <div className="flex a-center  j-center ml-5 " onClick={() => navigate("/")}>
            <img src={logo} className='w-20' alt="logo" />
            <p className='font-sans text-[#2871b1] '>- design</p>
          </div>
          <ul className='hidden md:flex md:gap-4 lg:gap-6 lg:ml-20 xl:gap-10 xl:text-lg md:text-sm md:ml-10  cursor-pointer  xl:ml-52 '>
          <li><Link onClick={() => navigate("/")}smooth={true} duration={500}>Home</Link></li>
          <li><Link onClick={() => navigate("/about")} smooth={true} offset={-200} duration={500}>About</Link></li>
          <li><Link onClick={() => navigate("/service")} smooth={true} offset={-50} duration={500}>Service</Link></li>
          <li><Link onClick={() => navigate("/project")} smooth={true} offset={-50} duration={500}>Project</Link></li>
          <li><Link onClick={() => navigate("/blog")}smooth={true} offset={-100} duration={500}>Blog</Link></li>
          <li><Link onClick={() => navigate("/contact")} smooth={true} offset={-50} duration={500}>Contact</Link></li>
          </ul>
        </div>
        {/* <div className="right flex  ">
          <div className={`search ${showSearh ? "show-search" : ""}`}>
            <button className=''
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) setShowSearch(false);
              }}
              >
              <FaSearch />
            </button>
            <input className='
            text-sm '
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
          </div> */}
{/* 
          <button className="btn" onClick={() => navigate("/login")}>Log in</button>
              
          <button  className="btn" onClick={() => navigate("/signup")}>Sign Up</button> */}
 
        <div className='hidden md:flex md:text-xs xl:text-sm  pr-8'>
          <button onClick={() => navigate("/login")}className='  px-5 py-2 border rounded-lg border-[#2871b1]  mr-4 hover:bg-[#2871b1] '>
            Log In
          </button>
          <button  onClick={() => navigate("/signup")} className=' border border-[#2871b1] rounded-lg  bg-[#2871b1] px-5 py-2  hover:bg-inherit '>Sign Up</button>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}

        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute   bg-zinc-900/[.87]  w-full px-8 '}>
          <li className='  w-full        py-2'><Link onClick={() => navigate("/")} to="/" smooth={true} duration={500}>Home</Link></li>
          <li className='         py-2 w-full'><Link   onClick={() => navigate("/about")} smooth={true} offset={-200} duration={500}>About</Link></li>
          <li className='       py-2 w-full'><Link onClick={() => navigate("/service")} smooth={true} offset={-50} duration={500}>service</Link></li>
          <li className='       py-2 w-full'><Link onClick={() => navigate("/project")} smooth={true} offset={-50} duration={500}>Project</Link></li>
          <li className='       py-2 w-full'><Link onClick={() => navigate("/blog")} to="platforms" smooth={true} offset={-100} duration={500}>blog</Link></li>
          <li className='       py-2 w-full'><Link onClick={() => navigate("/contact")} to="pricing" smooth={true} offset={-50} duration={500}>contact</Link></li>

        <div className='flex flex-col text-sm my-4'>
            <button onClick={() => navigate("/login")}className='  border rounded border-[#2871b1]  px-8 py-2 mb-3'>Log In</button>
            <button  onClick={() => navigate("/signup")} className='px-8 rounded py-2 bg-[#2871b1] '>Sign Up</button>
        </div>
      </ul>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`

.right {

      button {
        padding: 8px 13px;
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
      /* button {
        font-weight: bolder;
    font-family: 'Ubuntu', sans-serif;
        border: 2px solid white;
        padding: 8px 13px;
        color: white;
        border-radius: 62px;
      } */
    
    }
`