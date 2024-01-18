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
  { id: 'EMAIL', label: 'email', minWidth: 170 },
  {
    id: 'createdAt',
    label: 'Refer\u00a0 joined',
    minWidth: 170,
  },
  {
    id: 'REFERAL_CODE',
    label: 'Refferal \u00a0Code',
    minWidth: 170,
  },
  {
    id: 'STATUS',
    label: 'Status',
    minWidth: 170,
    format: (value) => value.toFixed(2),
  },
];


export default function TodayReferal({ isrefferal }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);
  const [isroe, setisroe] = React.useState([])



  React.useEffect(() => {

    let tabledata = [];
    isrefferal && isrefferal.length !== 0 && isrefferal.map((data, index) => {
      return tabledata.push({
        EMAIL: data.EMAIL,
        createdAt: data.createdAt.toString(),
        REFERAL_CODE: data.REFERAL_CODE,
        STATUS: "joined",
      })
    })
    setisroe(tabledata);
  }, [isrefferal])


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  console.log("todaysrefferl0", isrefferal)
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.25)" }}>
      <TableContainer sx={{ maxHeight: 440, borderRadius: "7px" }}>
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
            {isroe && isroe
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.email}>
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
        rowsPerPageOptions={[3, 5, 10, 25, 100]}
        sx={{ background: "rgba(140, 221, 220, 0.5)", fontWeight: "600" }}
        component="div"
        count={isroe.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
