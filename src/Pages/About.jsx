import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Typography, Grid, Card, CardContent   } from '@mui/material';

export default function About() {
  return (
    <div>
      <Navbar/>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam vestibulum, urna ut viverra aliquam, nisi ligula
              tristique felis, vel aliquet enim lacus vitae urna.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Our Vision
            </Typography>
            <Typography variant="body1">
              Sed ullamcorper augue at posuere condimentum. Quisque
              dapibus ullamcorper lacus, sed malesuada metus blandit vitae.
              Mauris vitae ligula at est tincidunt rhoncus sed ut lectus.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
      <Footer/>
    </div>
  )
}


  