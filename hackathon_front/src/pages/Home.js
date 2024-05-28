import React from 'react';
import { Container, Box, Typography, Grid, Avatar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import logo from '../assets/OlympicsAI.png';  // Assurez-vous que le logo est dans ce chemin

const teamMembers = [
  { name: 'Aastha Arora', image: 'path/to/aastha.png' }, // Remplacez par le chemin réel de l'image
  { name: 'Dianne Jardinez', image: 'path/to/dianne.png' }, // Remplacez par le chemin réel de l'image
  { name: 'Duong Luu', image: 'path/to/duong.png' }, // Remplacez par le chemin réel de l'image
  { name: 'Ritika Bhansali', image: 'path/to/ritika.png' }, // Remplacez par le chemin réel de l'image
  { name: 'Swarna Guntaka', image: 'path/to/swarna.png' }, // Remplacez par le chemin réel de l'image
  { name: 'Votre Nom', image: 'path/to/votre_image.png' } // Remplacez par votre image
];

function Home() {
  return (
    <Container maxWidth="lg">
      <Box textAlign="center" my={4}>
        <img src={logo} alt="Olympics Logo" width="200" />
        <Typography variant="h3" component="h1" gutterBottom>
          RACE TO THE FINISH LINE
        </Typography>
      </Box>

      <Box my={4}>
        <Typography variant="h4" component="h2" color="primary" gutterBottom>
          PROJECT OBJECTIVES
        </Typography>
        <Typography variant="body1" gutterBottom>
          1. Analyze and create visualizations on an Olympic dataset from 1896 to 2016 to uncover which countries stay at the top overtime, by season, and by sport; what it takes for an Olympian to be at the top for each sport, sport popularity, and the relationship between Olympic Medal counts and country's GDP.
        </Typography>
        <Typography variant="body1" gutterBottom>
          2. Additionally from the Olympic dataset, machine learning was incorporated to predict the amount of medals 25 countries would obtain in the 2020 Tokyo Olympics with Linear Regression, Logistic Regression, and Auto Regressive Integrated Moving Average (ARIMA) model.
        </Typography>
      </Box>

      <Box my={4}>
        <Typography variant="h4" component="h2" color="primary" gutterBottom>
          TEAM
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.name}>
              <Box textAlign="center">
                <Avatar alt={member.name} src={member.image} sx={{ width: 100, height: 100, margin: 'auto' }} />
                <Typography variant="h6" component="p">
                  {member.name}
                </Typography>
                <GitHubIcon />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box my={4}>
        <Typography variant="h4" component="h2" color="primary" gutterBottom>
          KEY TAKEAWAYS
        </Typography>
        <Box>
          <Typography variant="h6" component="h3">
            WHAT WENT WELL
          </Typography>
          <Typography variant="body1" gutterBottom>
            • Creating the following charts: Racing barchart, static bar and line chart, and Leaflet map with two different layers (street map and choropleth) with Plotly.js, D3.js, Chart.js, and Leaflet.js.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" component="h3">
            CHALLENGES WE OVERCAME
          </Typography>
          <Typography variant="body1" gutterBottom>
            • Utilizing and connecting Python Flask-powered RESTful API.
            <br />
            • Web browser cache accurately displaying visualizations.
            <br />
            • New Machine Learning model: ARIMA.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
