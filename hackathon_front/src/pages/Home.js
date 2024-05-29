import React from 'react';
import { Container, Box, Typography, Grid, Avatar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import logo from '../assets/olympic.svg';  // Assurez-vous que le logo est dans ce chemin

const teamMembers = [
  { name: 'Fabien COLARD', image: 'path/to/aastha.png' }, // Remplacez par le chemin réel de l'image
  { name: 'Loris HASLAY', image: 'path/to/dianne.png' }, // Remplacez par le chemin réel de l'image
  { name: 'Chaymae HOUBBADI', image: 'path/to/duong.png' }, // Remplacez par le chemin réel de l'image
  { name: 'Jemimadoria KOUMBA', image: 'path/to/ritika.png' }, // Remplacez par le chemin réel de l'image
  { name: 'Omar MUFTI', image: 'path/to/swarna.png' }, // Remplacez par le chemin réel de l'image
  { name: 'Mamoudou NDONGO', image: 'path/to/votre_image.png' } // Remplacez par votre image
];

function Home() {
  return (
    <Container maxWidth="lg">
      <Box textAlign="center" my={4}>
        <img src={logo} alt="Olympics Logo" width="400" />
        <Typography variant="h3" component="h1" gutterBottom>
          COURSE VERS LA LIGNE D'ARRIVÉE
        </Typography>
      </Box>

      <Box my={4}>
        <Typography variant="h4" component="h2" color="primary" gutterBottom>
          OBJECTIFS DU PROJET
        </Typography>
        <Typography variant="body1" gutterBottom>
          Analyser et créer des visualisations sur un ensemble de données olympiques de 1896 à 2016 pour découvrir quels pays restent en tête au fil du temps, par saison et par sport ; ce qu'il faut pour qu'un Olympien soit au sommet dans chaque sport, la popularité des sports et la relation entre le nombre de médailles olympiques et le PIB du pays.
        </Typography>
        <Typography variant="body1" gutterBottom>
          En outre, à partir de l'ensemble de données olympiques, l'apprentissage automatique a été intégré pour prédire le nombre de médailles que 25 pays obtiendraient aux Jeux olympiques de Tokyo 2020 avec la régression linéaire, la régression logistique et le modèle ARIMA (Auto Regressive Integrated Moving Average).
        </Typography>
      </Box>

      <Box my={4}>
        <Typography variant="h4" component="h2" color="primary" gutterBottom>
          ÉQUIPE
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
          POINTS CLÉS
        </Typography>
        <Box>
          <Typography variant="h6" component="h3">
            CE QUI A BIEN FONCTIONNÉ
          </Typography>
          <Typography variant="body1" gutterBottom>
            • Création des graphiques suivants : diagramme à barres dynamique, diagramme à barres statique et graphique linéaire, ainsi qu'une carte Leaflet avec deux couches différentes (carte des rues et carte choroplèthe) avec Plotly.js, D3.js, Chart.js et Leaflet.js.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" component="h3">
            DÉFIS QUE NOUS AVONS SURMONTÉS
          </Typography>
          <Typography variant="body1" gutterBottom>
            • Utilisation et connexion d'une API RESTful alimentée par Python Flask.
            <br />
            • Cache du navigateur web affichant correctement les visualisations.
            <br />
            • Nouveau modèle d'apprentissage automatique : ARIMA.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
