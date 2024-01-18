import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { CircularLoding } from "../../../redux/action/AuthAction";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import { getcities } from "../../../redux/action/CommonAction";
import { get_Activity_table } from "../../../redux/action/EmployerAction";
import EditCardDialog from "./EditCardDialog";
import AddTaskRoundedIcon from "@mui/icons-material/AddTaskRounded";
import { Link } from "react-router-dom";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";

const headCells = [
  {
    id: "SHORTLISTED",
    numeric: false,
    disablePadding: true,
    label: "STATUS",
  },

  {
    id: "CANDIDATE_NAME",
    numeric: false,
    disablePadding: false,
    label: "FRISTNAME",
  },
  {
    id: "ASSINGMENT",
    numeric: false,
    disablePadding: false,
    label: "ASSIGNASSGNMENT",
  },
  {
    id: "SCREENING_QUESTIONS",
    numeric: false,
    disablePadding: false,
    label: "ASSIGNSCREENING",
  },
  {
    id: "TELEPHONICINTERVIEW",
    numeric: false,
    disablePadding: false,
    label: "TELEPHONIC INTERVIEW",
  },
  {
    id: "VIRTUALINVITATION",
    numeric: false,
    disablePadding: false,
    label: "VIRTUAL INVITATION",
  },
  {
    id: "SHORTLISTED",
    numeric: false,
    disablePadding: false,
    label: "SHORTLISTED",
  },
];

function EnhancedTableHead(props) {
  const [deletesign, setDeleteSign] = React.useState(false);
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow sx={{ background: "FFFFFF" }}>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            sx={{
              pl: 2,
              border: "3px black",
              borderStyle: "none solid solid none",
            }}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
        <TableCell
          padding="checkbox"
          sx={{ border: "3px black", borderStyle: "none none solid none" }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              gap: "1rem",
            }}
          >
            <Link
              to="/mailmessage"
              style={{ textDecoration: "none", color: "black" }}
            >
              <EmailIcon sx={{ cursor: "pointer" }} />
            </Link>
            <CallIcon sx={{ cursor: "pointer" }} />
            <Link
              to="/choosetemplate"
              style={{ textDecoration: "none", color: "black" }}
            >
              <WhatsAppIcon sx={{ cursor: "pointer" }} />
            </Link>
          </div>
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function ActivityBookTable({ isUserDetais }) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("JC_CANDIDATE_NAME");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [deletesign, setDeleteSign] = React.useState(false);
  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  };

  const dispatch = useDispatch();
  const CityData = useSelector((state) => state.EmployerReducer.activitytable);

  const rows = CityData;

  var numSelected = selected.length;

  const handleCheckboxClick = () => {
    setDeleteSign(true);
  };

  const deleteBlogs = () => {
    if (selected.length == 1) {
      var jiId = selected[0];
    } else {
      var jiId = JSON.stringify(selected);
    }
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.AT_ID);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, AT_ID) => {
    const selectedIndex = selected.indexOf(AT_ID);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, AT_ID);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };
  const isSelected = (AT_ID) => selected.indexOf(AT_ID) !== -1;
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  React.useEffect(() => {
    dispatch(get_Activity_table(Loading));
  }, []);

  return (
    <div classNAME="admin_dashboard_container">
      <div className="tables">
        <Box sx={{ width: "100%",mt:3 }}>
          <Paper
            sx={{
              width: "70vw",
              mb: 2,
              boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.25)",
            }}
          >
            {numSelected > 0 ? (
              <>
                <Toolbar
                  sx={{
                    pl: { sm: 2 },
                    pr: { xs: 1, sm: 1 },
                    ...(numSelected > 0 && {
                      bgcolor: (theme) =>
                        alpha(
                          theme.palette.primary.main,
                          theme.palette.action.activatedOpacity
                        ),
                    }),
                  }}
                >
                  {numSelected > 0 ? (
                    <Typography
                      sx={{ flex: "1 1 100%" }}
                      color="inherit"
                      variant="subtitle1"
                      component="div"
                    >
                      {numSelected} selected
                    </Typography>
                  ) : (
                    <Typography
                      sx={{ flex: "1 1 100%" }}
                      variant="h6"
                      id="tableTitle"
                      component="div"
                    >
                      Nutrition
                    </Typography>
                  )}

                  {numSelected > 0 ? (
                    <Tooltip title="Delete">
                      <IconButton onClick={deleteBlogs}>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  ) : (
                    <Tooltip title="Filter list">
                      <IconButton>
                        <FilterListIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                </Toolbar>
              </>
            ) : (
              <div style={{ display: "none" }}></div>
            )}

            <TableContainer sx={{width:"70vw"}}>
              <Table
                stickyHeader
                sx={{ minWidth: 600 }}
                aria-labelledby="tableTitle"
                size={dense ? "small" : "medium"}
              >
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={isUserDetais.length}
                />
                <TableBody>
                  {isUserDetais.map((row, index) => {
                    const isItemSelected = isSelected(row.AT_ID);
                    const labelId = `enhanced-table-checkbox-${index}`;
                    const sta = row.SHORTLISTED;
                    const inter = row.TELEPHONICINTERVIEW;
                    const short = row.SHORTLISTED;
                    const ques = row.ASSIGNSCREENING;
                    const que = row.SCREENING;
                    const assign = row.ASSIGNASSGNMENT;
                    const invi = row.VIRTUALINVITATION;
                    function readdata(data) {
                      if (data) {
                        return true;
                      } else {
                        return false;
                      }
                    }

                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        sx={{ background: "rgba(140, 221, 220, 0.5)" }}
                        key={row.AT_ID}
                        selected={isItemSelected}
                      >
                        <TableCell
                          sx={{
                            pl: 2,
                            border: "3px black",
                            borderStyle: "none solid solid none",
                          }}
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {sta ? (
                            <FiberManualRecordIcon sx={{ color: "green" }} />
                          ) : (
                            <FiberManualRecordIcon sx={{ color: "red" }} />
                          )}
                        </TableCell>
                        <TableCell
                          sx={{
                            pl: 2,
                            border: "3px black",
                            borderStyle: "none solid solid none",
                          }}
                          align="left"
                        >
                          {row.F_NAME + " " + row.M_NAME  + " " + row.L_NAME}
                        </TableCell>
                        <TableCell
                          sx={{
                            pl: 2,
                            border: "3px black",
                            borderStyle: "none solid solid none",
                          }}
                          align="left"
                        >
                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <Tooltip title={row.ASSIGNASSGNMENT_REMARK}>
                              <p>{readdata(assign) ? "Yes " : "No"}</p>
                            </Tooltip>
                            <EditCardDialog
                              type={"ASSIGNASSGNMENT_REMARK"}
                              data={isUserDetais}
                            />
                          </div>
                        </TableCell>
                        <TableCell
                          sx={{
                            pl: 2,
                            border: "3px black",
                            borderStyle: "none solid solid none",
                          }}
                          align="left"
                        >
                          {/* {row.SCREENING_QUESTIONS} */}
                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <Tooltip title={row.ASSIGNSCREENING_REMARK}>
                              <p>{readdata(ques) ? " Yes" : "No"}</p>
                            </Tooltip>
                            {readdata(que) ? (
                              <Tooltip
                                arrow
                                title="Screening Questions already given."
                              >
                                <TaskAltRoundedIcon
                                  sx={{
                                    color: "green",
                                    cursor: "pointer",
                                    backgroundColor: "solid green",
                                    "&:hover": {
                                      color: "green",
                                      transform: "scale(2)",
                                    },
                                  }}
                                />
                              </Tooltip>
                            ) : (
                              <Tooltip
                                arrow
                                title="Are you like to assign Screening Questions ??"
                              >
                                <Link to="/screeningquestion">
                                  <AddTaskRoundedIcon
                                    sx={{ color: "red", cursor: "pointer" }}
                                  />
                                </Link>
                                {/* <TaskAltRoundedIcon sx={{color:"green",cursor:"pointer"}}/> */}
                              </Tooltip>
                            )}
                            <EditCardDialog
                              type={"ASSIGNSCREENING_REMARK"}
                              data={isUserDetais}
                            />
                          </div>
                        </TableCell>
                        <TableCell
                          sx={{
                            pl: 2,
                            border: "3px black",
                            borderStyle: "none solid solid none",
                          }}
                          align="left"
                        >
                          {/* {row.TELEPHONIC_INTERVIEW} */}
                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <Tooltip title={row.TELEPHONICINTERVIEW_REMARK}>
                              <p>{readdata(inter) ? "Yes " : "No"}</p>
                            </Tooltip>
                            <EditCardDialog
                              type={"TELEPHONICINTERVIEW_REMARK"}
                              data={isUserDetais}
                            />
                          </div>
                        </TableCell>
                        <TableCell
                          sx={{
                            pl: 2,
                            border: "3px black",
                            borderStyle: "none solid solid none",
                          }}
                          align="left"
                        >
                          {/* {row.VIRTUAL_INVITATION} */}
                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <Tooltip title={row.VIRTUALINVITATION_REMARK}>
                              <p>{readdata(invi) ? "Yes " : "No"}</p>
                            </Tooltip>
                            <EditCardDialog
                              type={"VIRTUALINVITATION_REMARK"}
                              data={isUserDetais}
                            />
                          </div>
                        </TableCell>
                        <TableCell
                          sx={{
                            pl: 2,
                            border: "3px black",
                            borderStyle: "none solid solid none",
                          }}
                          align="left"
                        >
                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <Tooltip title={row.SHORTLISTED_REMARK}>
                              <p>{readdata(short) ? "Yes " : "No"}</p>
                            </Tooltip>
                            <EditCardDialog
                              type={"SHORTLISTED_REMARK"}
                              data={isUserDetais}
                            />
                          </div>
                        </TableCell>
                        <TableCell
                          padding="checkbox"
                          align="center"
                          sx={{
                            border: "3px solid black",
                            borderStyle: "none none solid none",
                          }}
                        >
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            onClick={handleCheckboxClick}
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow
                      style={{
                        height: (dense ? 33 : 53) * emptyRows,
                      }}
                    >
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              sx={{
                background: "rgba(140, 221, 220, 0.5)",
                border: "3px black",
                borderStyle: "none none solid none",
              }}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      </div>
    </div>
  );
}
