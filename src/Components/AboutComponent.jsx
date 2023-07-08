import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

const AboutComponent = () => {
  return (
    <Container >
    <Grid container spacing={8}  mb={3}>
      <Grid item xs={12} md={6}>
        <img
          src="http://localhost:3000/static/media/hero-2.4a11927210b0592c58cd.jpg"
          alt="About"
          style={{ width: '100%', height: 'auto' }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" component="h2" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu
          feugiat ante. Duis eget accumsan metus. Morbi tincidunt metus in
          tortor vestibulum, ac finibus est consectetur. Aenean tincidunt
          venenatis mauris eu ultrices. Vestibulum eu mauris eget neque
          pharetra fringilla. Duis rhoncus cursus dolor ac feugiat. Vestibulum
          ante ipsum primis in faucibus
        </Typography>
        <Typography variant="body1" paragraph>
          Donec cursus velit non orci ullamcorper, ac fermentum quam suscipit.
          Etiam interdum sem at libero aliquam, a eleifend lacus pretium. Fusce
          at neque a est finibus gravida. Nulla eget purus eros. Aliquam
          scelerisque neque quis risus sagittis, in sollicitudin neque
          ullamcorper. Maecenas auctor ex odio, at tristique nisl fringilla sed.
          Suspendisse ut scelerisque 
        </Typography>
      </Grid>
    </Grid>
    </Container>
  );
};

export default AboutComponent;
