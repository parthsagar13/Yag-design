import Hero from "../Components/Hero";
import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import img from "../assets/hero.jpg";
// import img1 from "../assets/hero-3.jpg";
import hero from "../assets/hero-2.jpg";
import sym1 from "../assets/sym-1.gif";
import sym2 from "../assets/sym-2.gif";
import sym3 from "../assets/sym-3.gif";
import { useNavigate } from "react-router-dom";
import Pro from "../Components/Pro";
import Footer from "../Components/Footer";
import AboutComponent from "../Components/AboutComponent";
import { Box, Container, Grid } from "@mui/material";
import { Margin } from "@mui/icons-material";

export default function Home() {
  const navigate = useNavigate("");
  return (
    <>
      <Navbar/>
      
        <Hero />
     
      {/* <div className=" container1 m-8 flex xl:m-14 xl:pl-16 a-center j-center">  
        <div className="image1 md:w-1/2  md:block hidden">
          <img src={hero } className=" ml-6 " alt="image" />
        </div>
        <div className="info md:w-1/2 flex justify-center items-center flex-col ">
       
          <div className="column flex">
            <div className=" flex  justify-center items-center">
            <img src={sym1} className='w-24' alt="image" />
            <h2 className="text-[#2871b1]" >Best Quality</h2>
            </div>
            <p className="p-4 lg:px-21 xl:px-40  md:px-12    ">
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
      </div> */}
<>
<Grid container spacing={0} m={2} justifyContent="center">
<Grid item md={6} xs={12} style={{ textAlign: 'center' }}>
        <img style={{ margin: '52px' }} src={hero} alt="image" />
      </Grid>
      <Grid item md={6} xs={12} container justifyContent="center" alignItems="center">
        <Box   item xs={12}>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item>
              <img src={sym1} className="w-24" alt="image" />
            </Grid>
            <Grid item>
              <h2 className="text-[#2871b1]">Best Quality</h2>
            </Grid>
          </Grid>
          <p className="p-4 xl:px-40 lg:px-21 md:px-12">
            Publishing packages and web page editors now use Lorem Ipsum as their default model text and a search for
            lorem ipsumwill uncover
          </p>
        </Box>
        <Grid item xs={12}>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item>
              <img src={sym2} className="w-24" alt="image" />
            </Grid>
            <Grid item>
              <h2 className="text-[#2871b1]">Top Rated</h2>
            </Grid>
          </Grid>
          <p className="p-4 xl:px-40 lg:px-21 md:px-12">
            Publishing packages and web page editors now use Lorem Ipsum as their default model text and a search for
            lorem ipsumwill uncover
          </p>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item>
              <img src={sym3} className="w-24" alt="image" />
            </Grid>
            <Grid item>
              <h2 className="text-[#2871b1]">Low Price</h2>
            </Grid>
          </Grid>
          <p className="p-4 xl:px-40 lg:px-21 md:px-12">
            Publishing packages and web page editors now use Lorem Ipsum as their default model text and a search for
            lorem ipsumwill uncover
          </p>
        </Grid>
      </Grid>
    </Grid>
    </>
<AboutComponent/>           
      <Pro/>
      <Footer/>
    </>
  );
}

