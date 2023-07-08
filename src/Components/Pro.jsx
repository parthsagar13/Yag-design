// import React from "react";
// import styled from "styled-components";
// import img from "../assets/hero.jpg";
// import img2 from "../assets/hero-2.jpg";
// import img3 from "../assets/hero-3.jpg";
// import { useNavigate } from "react-router-dom";

// export default function Pro() {
//   const navigate = useNavigate("")
//   return (
//     <Container>
//       <div className="info ">
//         <h1 className="text-[#2871b1]" >Project</h1>
//         <h3 className="text-[#2871b1]" >RECENTLY COMPLETED</h3>
//       </div>
//       <div className="container flex  z justify-center items-center flex-col md:flex-row  lg:flex-row xl:flex-row 2xl:flex-row  center">
//         <div className="card ">
//           <div className="face  face1 ">
//             <img src={img} alt="image" />
//           </div>
//           <div className="face  face2">
//             <div className="content">
//               <p>
//                 {" "}
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab
//                 repudiandae, explicabo voluptate et hic cum ratione a. Officia
//                 delectus illum perferendis maiores quia molestias vitae fugiat
//                 aspernatur alias corporis?
//               </p>
//               <a onClick={() => navigate("/project")} href="#" type="button">
//                 Read More
//               </a>
//             </div>
//           </div> 
//         </div>

//         <div className="card">
//           <div className="face face1">
//             <img  src={img2} alt="image" />
//           </div>
//           <div className="face face2">
//             <div className="content">
//               <p>
//                 {" "}
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab
//                 repudiandae, explicabo voluptate et hic cum ratione a. Officia
//                 delectus illum perferendis maiores quia molestias vitae fugiat
//                 aspernatur alias corporis?
//               </p>
//               <a onClick={() => navigate("/project")} href="#" type="button">
//                 Read More
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="card">
//           <div className="face face1">
//             <img  src={img3} alt="image" />
//           </div>
//           <div className="face face2">
//             <div className="content">
//               <p>
//                 {" "}
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab
//                 repudiandae, explicabo voluptate et hic cum ratione a. Officia
//                 delectus illum perferendis maiores quia molestias vitae fugiat
//                 aspernatur alias corporis?
//               </p>
//               <a onClick={() => navigate("/project")} href="#" type="button">
//                 Read More
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// }

// const Container = styled.div`
//   .center {
//     display: flex;
//     justify-content: center;
//   }

//   .info {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;

//   }
//   /* body{
//   display:flex;
//   margin:0;
//   padding:0;
//   min-height: 100vh;
//   background: #444;
//   justify-content: center;
//   align-items: center;
//   font-family: arial;
// } */

//   .container {
//     /* width: 1000px; */
//     position: relative;
//     display: flex;
//     justify-content: space-between;
//     flex-wrap: wrap;
    
//   }

//   .container .card {
//     position: relative;
//     margin: 25px;
//   }

//   .container .card .face {
//     width: 270px;
//     height: 200px;
//     transition: 0.4s;
//   }

//   .container .card .face.face1 {
//     position: relative;
//     background: #333;
//     display: flex;
//     justify-content: center;
//     align-content: center;
//     align-items: center;
//     z-index: 1;
//     transform: translateY(100px);
//     img {
//       cursor: pointer;
//       height: 200px;
//       width: 300px;
//     }
//   }

//   .container .card:hover .face.face1 {
//     transform: translateY(0);
//     box-shadow: inset 0 0 60px whitesmoke, inset 5px 0 80px #383238,
//       inset -20px 0 80px #3a4141, inset 20px 0 100px #4d494d,
//       inset -20px 0 100px #546161, 0 0 50px #4d4a4a, -10px 0 80px #575257,
//       10px 0 80px #5a5e5e;
//   }

//   .container .card .face.face1 .content {
//     opacity: 0.2;
//     transition: 0.5s;
//     text-align: center;
//   }

//   .container .card:hover .face.face1 .content {
//     opacity: 1;
//   }

//   .container .card .face.face1 .content a {
//     transition: 0.5s;
//   }

//   .container .card .face.face2 {
//     position: relative;
//     background: whitesmoke;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding: 20px;
//     box-sizing: border-box;
//     box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
//     transform: translateY(-100px);
//   }

//   .container .card:hover .face.face2 {
//     transform: translateY(0);
//   }

//   .container .card .face.face2 .content p,
//   a {
//     font-size: 10pt;
//     margin: 0;
//     padding: 0;
//     color: #333;
//   }

//   .container .card .face.face2 .content a {
//     text-decoration: none;
//     color: black;
//     box-sizing: border-box;
//     outline: 1px dashed #333;
//     /* border: 2px solid black; */
//     padding: 10px;
//     /* margin: 15px 0 0; */
//     display: inline-block;
//   }

//   .container .card .face.face2 .content a:hover {
//     background: #333;
//     color: whitesmoke;
//     box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);
//   }


//   @media screen and (min-width: 280px) and (max-width: 1080px) {
//     .center{
//     /* display: none;
//     justify-content: center; */
//   }

// }





  
import React from "react";
import { Grid, Typography, Card, CardMedia, CardContent, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "http://localhost:3000/static/media/hero.b2a20053e51524fcda9d.jpg",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "http://localhost:3000/static/media/hero.b2a20053e51524fcda9d.jpg",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "http://localhost:3000/static/media/hero.b2a20053e51524fcda9d.jpg",
  },
];

export default function Pro() {
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate("/project");
  };

  return (
    <Container > 
      <Typography variant="h3" align="center" mb={4}>
        Our Projects
      </Typography>
      <Grid container spacing={4} mb={3}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {project.description}
                </Typography>
              </CardContent>
              <Button
                 sx={{margin:"22px"}}
                variant="contained"
                color="primary"
                onClick={() => handleProjectClick(project.id)}
              >
                View Project
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

