import Hero from "../Components/Hero";
import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import img from "../assets/hero.jpg";
import img1 from "../assets/hero-3.jpg";
import hero from "../assets/hero-2.jpg";
import sym1 from "../assets/sym-1.gif";
import sym2 from "../assets/sym-2.gif";
import sym3 from "../assets/sym-3.gif";
import { useNavigate } from "react-router-dom";
import Pro from "../Components/Pro";
import Footer from "../Components/Footer";

export default function Home() {
  const navigate = useNavigate("");
  return (
    <Container>
      <Navbar/>
      
        <Hero />
     
      <div className=" container1 m-8 flex xl:m-30 a-center j-center">
        <div className="image1 md:w-1/2  md:block hidden">
          <img src={hero } className=" ml-6 " alt="image" />
        </div>
        <div className="info md:w-1/2 flex justify-center items-center flex-col ">
       
          <div className="column flex">
            <div className=" flex mr-0 justify-center items-center">
            <img src={sym1} className='w-24' alt="image" />
            <h2 className="text-[#2871b1]" >Best Quality</h2>
            </div>
            <p className="p-4 xl:px-40 lg:px-21 md:px-12">
              Publishing packages and web page editors now use Lorem Ipsum as
              their default model text and a search for lorem ipsumwill uncover
            </p>
          </div>
          <div className="column flex  ">
            <div className=" flex mr-0 justify-center items-center">
            <img src={sym2} className='w-24' alt="image" />
            <h2 className="text-[#2871b1]" >Top Rated</h2>
            </div>
            <p className="p-4 xl:px-40 lg:px-21 md:px-12 ">
              Publishing packages and web page editors now use Lorem Ipsum as
              their default model text and a search for lorem ipsumwill uncover
            </p>
          </div>
          <div className="column flex  ">
            <div className=" flex mr-0 justify-center items-center">
            <img src={sym3} className='w-24' alt="image" />
            <h2 className="text-[#2871b1]" >Low Price</h2>
            </div>
            <p className="p-4 xl:px-40 lg:px-21 md:px-12">
              Publishing packages and web page editors now use Lorem Ipsum as
              their default model text and a search for lorem ipsumwill uncover
            </p>
          </div>
    
        
        
        </div>
      </div>
      <div className="md:flex m-8 flex-row-reverse xl:m-20 justify-center items-center">
        <div className="md:w-1/2 image w-60  flex justify-center items-center mx-auto md:mx-none" onClick={() => navigate("/about")}>
          <img className="img1 md:w-80 " src={img} alt="image" />
          {/* <img className="img2" src={img1} alt="image" /> */}
        </div>
      <div className="info md:w-1/2 mt-6">
          <h1 className="px-4 py-2 text-[#2871b1]  ">About Us</h1>
          <h2  className="px-4 py-3">Create various innovative and creative environments.</h2>
          <p  className="px-4 ">
            Pradeep Makhijani & Associates is an architectural design firm
            practicing in Ahmedabad since 30 years. We serve the bridge between
            the building, people and consultant in serving the better
            environment..
          </p>
          <button  className="px-4 py-2 mx-4 my-3 border border-[#2871b1] rounded-lg  bg-[#2871b1]   hover:bg-inherit " onClick={() => navigate("/about")}>Read More</button>
        </div>
    
      </div>
      <Pro/>
      <Footer/>
    </Container>
  );
}

const Container = styled.div`


`