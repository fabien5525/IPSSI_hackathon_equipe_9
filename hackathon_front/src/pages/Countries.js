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
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

function Countries() {
  const [countries, setCountries] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    axios.get(`${API_URL}/countries`)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error('Error fetching countries:', error);
      });
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
      <h2 style={{ textAlign: 'center' }}>Pays</h2>
      <div className="table-container" style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <div className="table-wrapper" style={{ width: '80%' }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="countries table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Nom</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {countries
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((country) => (
                    <TableRow key={country.id}>
                      <TableCell>{country.id}</TableCell>
                      <TableCell>{country.name}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={countries.length}
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

export default Countries;
