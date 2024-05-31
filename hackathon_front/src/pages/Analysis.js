import React from 'react';
import {Card, CardContent, CardMedia, Typography, Grid} from "@mui/material";

const API_URL = process.env.REACT_APP_API_URL;

function Analysis() {
  const cards = [
    {
      description: 'Les disciplines les plus populaires.',
      source: `${API_URL}/images/top_10_disc.png`,
      title: 'Top 10 disciplines'
    },
    {
      description: 'Les disciplines les plus populaires avec médailles.',
      source: `${API_URL}/images/top_10_disc_medal.png`,
      title: 'Top 10 disciplines par avec médailles'
    },
    {
      description: 'Les médailles gagnée par pays.',
      source: `${API_URL}/images/repart_medal_par_pays.png`,
      title: 'Répartition des médailles par pays'
    },
    {
      description: 'La répartition des saison.',
      source: `${API_URL}/images/saison.png`,
      title: 'Répartition des saison'
    },
    {
      description: 'Les pays avec le plus de médailles.',
      source: `${API_URL}/images/top_10_country_medal.png`,
      title: 'Top 10 pays avec médailles'
    },
    {
      description: 'Les mots les plus utilisés pour décrire les événements.',
      source: `${API_URL}/images/wordcloud_type_event.png`,
      title: 'Types d\'événements les plus populaires'
    },
  ];

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Analyses</h2>
      <div className="table-container" style={{
        margin: '8px'
      }}>
        <Grid container spacing={2}>
          {cards.map((card, index) =>
            <Grid key={`card-graph-${index}`} item sm={12} lg={6} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                maxWidth: 840,
                marginBottom: 4
              }}>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
                <CardMedia
                  sx={{ maxWidth: 800, padding: 2 }}
                  component={'img'}
                  image={card.source}
                  title={card.title}
                />
              </Card>
            </Grid>
          )}
        </Grid>
      </div>
    </div>
  );
}

export default Analysis;
