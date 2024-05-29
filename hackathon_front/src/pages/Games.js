import React, { useEffect, useState } from 'react';
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
import data from '../data.json'; // Assurez-vous que le chemin est correct

function Games() {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    setGames(data.games);
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Jeux</h2>
      <div className="table-container" style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <div className="table-wrapper" style={{ width: '80%' }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="games table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Nom</TableCell>
                  <TableCell>Année</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {games
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((game) => (
                    <TableRow key={game.id}>
                      <TableCell>{game.id}</TableCell>
                      <TableCell>{game.name}</TableCell>
                      <TableCell>{game.year}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={games.length}
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

export default Games;
