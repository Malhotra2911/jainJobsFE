import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'SNO', label: 's.no.', minWidth: 120 },
  { id: 'LENGTH_OF_PLAN', label: 'Plan\u00a0Name', minWidth: 170 },
  { id: 'AMMOUNT', label: 'Price', minWidth: 100 },
  { id: 'createdAt', label: 'Active\u00a0Date', minWidth: 170, format: (value) => value.toLocaleString('en-US'), },
  { id: 'EXPIREDATE', label: 'Expairy\u00a0Date', minWidth: 170, format: (value) => value.toLocaleString('en-US'), },
  { id: 'PAYMENT_ID', label: 'Order id ', minWidth: 170, format: (value) => value.toFixed(2), },
  { id: 'ISDELETED', label: 'Status', minWidth: 170, format: (value) => parseInt(value) == 1 ? "Expired" : "Active" },
];


export default function SubscriptionTable({ isTable }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (event, newPage) => { setPage(newPage); };

  const handleChangeRowsPerPage = (event) => { setRowsPerPage(+event.target.value); setPage(0); };

  return (
    <Paper sx={{ width: '68vw', overflow: 'hidden', boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.25)" }}>
      <TableContainer sx={{ maxHeight: 440, borderRadius: "7px",width:"68vw",margin:0 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  sx={{ background: "rgba(140, 221, 220, 0.5)", fontWeight: "600" }}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ background: "EEEEEE" }}>
            {isTable
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        sx={{ background: "rgba(140, 221, 220, 0.5)", fontWeight: "600" }}
        component="div"
        count={isTable.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
