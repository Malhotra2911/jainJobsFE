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
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import Chip from "@mui/material/Chip";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDispatch, useSelector } from "react-redux";
import JobSeekerdashboard from "../../../components/Employer/employersidebar/JobSeekerdashboard";
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import "../../../css/Employer/JobPosted.css";
import MailPopup from "./MailPopup";
import axiosInstance from "../../../utils/axiosInstance";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "USER_NAME",
  },
  {
    id: "FREELANCE_BETAMT",
    numeric: true,
    disablePadding: false,
    label: "bid",
  },
  {
    id: "LINKEDIN",
    numeric: true,
    disablePadding: false,
    label: "linkedin",
  },
  {
    id: "PR_ESCRIPTION",
    numeric: true,
    disablePadding: false,
    label: "user description",
  },
  {
    id: "createdAt",
    numeric: true,
    disablePadding: false,
    label: "Applied Date",
  },
];

function EnhancedTableHead(props) {
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
            align={headCell.numeric ? "left" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
          >
            {headCell.label}
          </TableCell>
        ))}
        <TableCell
          padding="checkbox"
          sx={{
            border: "3px black",
            borderStyle: "none none solid solid",
            pl: 2,
          }}
        >
          Approve
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

export default function AppliedFreelancer() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("JC_caloried");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState();
  const [isrow, setrow] = React.useState([]);
  const { state } = useLocation();

  const gettable = () => {
    axiosInstance
      .post("employer/getApplied-freelancejob", {
        FREELANCE_JOB_ID: state.FREELANCE_JOB_ID,
      })
      .then((res) => {
        if (res.data.status === 1) {
          setrow(res.data.data);
        }
      });
  };
  React.useEffect(() => {
    gettable();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var numSelected = selected.length;
  const deleteBlogs = () => {
    if (selected.length === 1) {
      var jiId = selected[0];
      console.log("check blogs " + jiId);
      // dispatch(deleteFeedback(jiId));
    } else {
      jiId = JSON.stringify(selected);
      // dispatch(deleteFeedbacks(jiId));
    }
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = isrow.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
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

  const isSelected = (name) => selected.indexOf(name) !== -1;
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - isrow.length) : 0;

  const chnagestatus = (
    FREELANCE_JOB_ID,
    FREELACE_USER_ID,
    FREELANCE_BETAMT,
    FREELANCE_ANSWER_ID
  ) => {
    axiosInstance
      .post("employer/chnage-freelancejob", {
        FREELANCE_JOB_ID: FREELANCE_JOB_ID,
        FREELACE_USER_ID: FREELACE_USER_ID,
        FREELANCE_BETAMT: FREELANCE_BETAMT,
        FREELANCE_ANSWER_ID: FREELANCE_ANSWER_ID,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === 1) {
          gettable();
          toast.success("selected person successfully");
        }
      });
  };

  return (
    <div className="background_img">
      <div className="Job_posted_main_content">
        <JobSeekerdashboard />
        <div className="Job_Posted_content">
          <DashboardProfile />
          <Box
            sx={{
              width: "98%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "3.5rem",
            }}
          >
            <Paper
              sx={{
                width: "100%",
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
              <TableContainer>
                <Table
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
                    rowCount={isrow.length}
                  />
                  <TableBody>
                    {isrow &&
                      isrow.length > 0 &&
                      isrow
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row, index) => {
                          const isItemSelected = isSelected(row.name);
                          const labelId = `enhanced-table-checkbox-${index}`;

                          return (
                            <TableRow
                              hover
                              role="checkbox"
                              aria-checked={isItemSelected}
                              tabIndex={-1}
                              sx={{ background: "#EEEEEE" }}
                              key={index}
                              selected={isItemSelected}
                            >
                              <TableCell
                                component="th"
                                sx={{
                                  pl: 2,
                                  border: "3px black",
                                  borderStyle: "solid solid solid none",
                                }}
                                id={labelId}
                                scope="row"
                                padding="none"
                              >
                                {row.F_NAME + row.L_NAME}
                              </TableCell>
                              <TableCell
                                sx={{ pl: 2, border: "3px solid black" }}
                                align="left"
                              >
                                {row.FREELANCE_BETAMT}
                              </TableCell>
                              <TableCell
                                sx={{ pl: 2, border: "3px solid black" }}
                                align="left"
                              >
                                {row.LINKEDIN}
                              </TableCell>
                              <TableCell
                                sx={{ pl: 2, border: "3px solid black" }}
                                align="left"
                              >
                                {row.PR_ESCRIPTION}
                              </TableCell>
                              <TableCell
                                sx={{ pl: 2, border: "3px solid black" }}
                                align="left"
                              >
                                {row.createdAt}
                              </TableCell>

                              <TableCell
                                padding="checkbox"
                                sx={{
                                  border: "3px solid black",
                                  borderStyle: "solid none solid solid",
                                }}
                              >
                                {row.APPLICATION_STATUS === 2 ? (
                                  <div
                                    style={{
                                      alignItems: "center",
                                      display: "flex",
                                      justifyContent: "center",
                                      width: "100%",
                                    }}
                                  >
                                    <Chip
                                      icon={
                                        <CheckCircleIcon
                                          style={{ color: "green" }}
                                        />
                                      }
                                      variant="outlined"
                                      size="small"
                                      sx={{
                                        width: "75%",
                                        background: "white",
                                        alignItems: "center",
                                        display: "flex",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        border: "2px solid green",
                                      }}
                                      label="Selected"
                                    />
                                  </div>
                                ) : row.APPLICATION_STATUS === 3 ? (
                                  <div
                                    style={{
                                      alignItems: "center",
                                      display: "flex",
                                      justifyContent: "center",
                                      width: "100%",
                                    }}
                                  >
                                    <Chip
                                      disabled
                                      icon={
                                        <CheckCircleIcon
                                          style={{ color: "red" }}
                                        />
                                      }
                                      variant="outlined"
                                      size="small"
                                      sx={{
                                        width: "75%",
                                        background: "white",
                                        alignItems: "center",
                                        display: "flex",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        border: "2px solid green",
                                      }}
                                      label="rejected"
                                    />
                                  </div>
                                ) : (
                                  <div
                                    style={{
                                      alignItems: "center",
                                      display: "flex",
                                      justifyContent: "center",
                                      width: "100%",
                                    }}
                                  >
                                    <Chip
                                      icon={
                                        <CheckCircleIcon
                                          style={{ color: "green" }}
                                        />
                                      }
                                      onClick={() => {
                                        chnagestatus(
                                          row.FREELANCE_JOB_ID,
                                          row.FREELACE_USER_ID,
                                          row.FREELANCE_BETAMT,
                                          row.FREELANCE_ANSWER_ID
                                        );
                                      }}
                                      variant="outlined"
                                      size="small"
                                      sx={{
                                        width: "75%",
                                        background: "white",
                                        alignItems: "center",
                                        display: "flex",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        border: "2px solid green",
                                      }}
                                      label="approve"
                                    />
                                  </div>
                                )}

                                {open && <MailPopup popup={setOpen} />}
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
                  background: "#EEEEEE",
                  border: "3px black",
                  borderStyle: "none none solid none",
                }}
                component="div"
                count={isrow.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </Box>
        </div>
      </div>
    </div>
  );
}
