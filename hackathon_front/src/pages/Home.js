import React from 'react';
import { Container, Box, Typography, Grid, Avatar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const teamMembers = [
  { name: 'Fabien COLARD', image: '/images/tabletennis.png', role: 'Chef de projet' },
  { name: 'Chaymae HOUBBADI', image: '/images/athletism.png', role: 'Data analyst' },
  { name: 'Jemima-doria KOUMBA', image: '/images/gymnastic.png', role: 'Développeur web & Data analyst' },
  { name: 'Omar MUFTI', image: '/images/weightlifting.png', role: 'Développeur web' },
  { name: 'Mamoudou NDONGO', image: '/images/judo.png', role: 'Data analyst' },
  { name: 'Loris HASLAY', image: '/images/swimming.png', role: '' },
];

function Home() {
  return (
    <Container maxWidth="lg">
      <Box textAlign="center"
           my={4}
           sx={{
             position: 'relative',
             color: 'black',
             minHeight: 400,
             marginLeft: '-24px',
             marginRight: '-24px',
             '&::before': {
               content: '""',
               background: 'url("/images/jo4.jpg")',
               backgroundRepeat: 'no-repeat',
               backgroundSize: 'cover',
               backgroundPosition: 'bottom',
               position: 'absolute',
               top: 0,
               right: 0,
               bottom: 0,
               left: 0,
               zIndex: -1,
             },
           }}
      >
        <Typography variant="h3" component="h1" gutterBottom style={{
          paddingTop: '128px',
          textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)', // Ombre blanche
        }}>
          COURSE VERS LA LIGNE D'ARRIVÉE
        </Typography>
      </Box>


      <Box my={4}>
        <Typography variant="h4" component="h2" color="primary" gutterBottom>
          Objectif du projet
        </Typography>
        <Typography variant="body1" gutterBottom>
          Analyser et créer des visualisations sur un ensemble de données olympiques de 1896 à 2022 pour découvrir quels pays restent en tête au fil du temps, par saison et par sport ; ce qu'il faut pour qu'un Olympien soit au sommet dans chaque sport, la popularité des sports et la relation entre le nombre de médailles olympiques.
        </Typography>
      </Box>

      <Box my={4}>
        <Typography variant="h4" component="h2" color="primary" gutterBottom>
          L'Équipe
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.name}>
              <Box textAlign="center">
                <Avatar alt={member.name} src={member.image} sx={{ width: 100, height: 100, margin: 'auto' }} />
                <Typography variant="h6" component="p">
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" display="block" gutterBottom>
                  {member.role}
                </Typography>
                <GitHubIcon />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box my={4}>
        <Typography variant="h4" component="h2" color="primary" gutterBottom>
          Point clés
        </Typography>
          <ul>
            <li>
              <Typography variant="body1" gutterBottom>
                Traitement des données avec Pandas.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" gutterBottom>
                Création de visualisations avec Matplotlib et Seaborn.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" gutterBottom>
                Création d'une API RESTful avec Python Flask.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" gutterBottom>
                Création d'une application web avec React.
              </Typography>
            </li>
          </ul>
        </Box>
    </Container>
  );
}

export default Home;
