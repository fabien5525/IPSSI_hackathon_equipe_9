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
  Typography
} from '@mui/material';

function MedalPredictions() {
  const [medalPredictions] = useState([
    { Country: 'USA', Predicted_Medals: 1794 },
    { Country: 'Germany', Predicted_Medals: 1483 },
    { Country: 'Russia', Predicted_Medals: 1371 },
    { Country: 'Italy', Predicted_Medals: 548 },
    { Country: 'Norway', Predicted_Medals: 496 },
    { Country: 'France', Predicted_Medals: 422 },
    { Country: 'China', Predicted_Medals: 417 },
    { Country: 'Hungary', Predicted_Medals: 414 },
    { Country: 'Finland', Predicted_Medals: 386 },
    { Country: 'Sweden', Predicted_Medals: 375 },
  ]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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
          <div style={{
            marginBottom: '8px',
          }}>
            <Typography variant="p" gutterBottom>
              En utilisant un modèle de réseau de neuronne (4 couches) avec Tensorflow et Keras, nous avons prédits les résultats suivants pour les médailles olympiques.
            </Typography>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="medal predictions table">
              <TableHead>
                <TableRow>
                  <TableCell>Pays</TableCell>
                  <TableCell>Nombre de médailles sur toute les années</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {medalPredictions
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((prediction, index) => (
                    <TableRow key={index}>
                      <TableCell>{prediction.Country}</TableCell>
                      <TableCell>{prediction.Predicted_Medals}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={medalPredictions.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default MedalPredictions;
