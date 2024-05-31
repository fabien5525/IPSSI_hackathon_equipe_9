import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Typography, CardContent, Card, CardMedia
} from '@mui/material';

function MedalPredictions() {
  const [medalPredictions] = useState([
    { name: 'USA', source: '/images/USA.png' },
    { name: 'Germany', source: '/images/Germany.png' },
    { name: 'Russia', source: '/images/Russia.png' },
    { name: 'Italy', source: '/images/Italy.png' },
    { name: 'Norway', source: '/images/Norway.png' },
    { name: 'France', source: '/images/France.png' },
    { name: 'China', source: '/images/Chine.png' },
    { name: 'Hungary', source: '/images/Hungary.png' },
    { name: 'Finland', source: '/images/Finland.png' },
    { name: 'Sweden', source: '/images/Sweden.png' },
  ]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>PRÉVISIONS DE MÉDAILLES OLYMPIQUES</h1>
      <div className="table-container" style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <div className="table-wrapper" style={{ width: '80%' }}>
          <Paper sx={{ padding: 2, marginBottom: '8px' }}>
            <Typography variant="p" gutterBottom>
              En utilisant un modèle de réseau de neuronne (4 couches) avec Tensorflow et Keras, nous avons prédits les résultats suivants pour le top des pays.
            </Typography>
          </Paper>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            // align center
            alignItems: 'center'

          }}>
            {medalPredictions.map((country, index) =>
              <Card sx={{ width: 345, marginBottom: '8px' }} key={`country-${index}`}>
                <CardMedia
                  sx={{ width: 345, height: 195 }}
                  image={country.source}
                  title={country.name}
                />
                <CardContent>
                  {/* Typo country at begining of the row and place at the end */}
                  <Typography gutterBottom variant="h5" component="div">
                    {country.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {index + 1} place
                  </Typography>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedalPredictions;
