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
} from '@mui/material';

function MedalPredictions() {
  const [medalPredictions] = useState([
    { Country: 'USA', Predicted_Medals: 1794.345947 },
    { Country: 'Germany', Predicted_Medals: 1482.828735 },
    { Country: 'Russia', Predicted_Medals: 1371.086792 },
    { Country: 'Italy', Predicted_Medals: 547.946533 },
    { Country: 'Norway', Predicted_Medals: 495.993683 },
    { Country: 'France', Predicted_Medals: 421.980316 },
    { Country: 'China', Predicted_Medals: 416.937347 },
    { Country: 'Hungary', Predicted_Medals: 413.881622 },
    { Country: 'Finland', Predicted_Medals: 385.904236 },
    { Country: 'Sweden', Predicted_Medals: 375.028229 },
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
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="medal predictions table">
              <TableHead>
                <TableRow>
                  <TableCell>Pays</TableCell>
                  <TableCell>Prévisions de Médailles</TableCell>
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
