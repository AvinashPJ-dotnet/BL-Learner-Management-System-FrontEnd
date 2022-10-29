import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import "./DisplayCard.css";
import {
  ThemeProvider,
  createTheme,
  Avatar,
  CardContent,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  Table,
} from "@mui/material";

const phoneIconTheme = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "grey",
          height: "12px",
          fontSize: "unset",
          marginTop: "3px",
        },
      },
    },
  },
});

const avatarTheme = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          height: "22px",
          color: "#fff0f0",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          margin: "15px 5px",
          height: "69px",
          width: "64px",
          backgroundColor: "#f9f9f9",
          position: "absolute",
        },
        fallback: {
          color: "#cdcccc",
          width: "106%",
          height: "168%",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          margin: "-16px 1px 1px 81px",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          border: "1px solid grey",
          lineHeight: "12px",
          fontSize: "12px",
          padding: "0px",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "lightgray",
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          width: "auto",
        },
      },
    },
  },
});

function DisplayCard(props) {
  return (
    <div>
      <ThemeProvider theme={avatarTheme}>
        <div className="displayDetailCardDiv">
          <Avatar src="/broken-image.jpg" />
          <CardContent className="displayCardContent">
            <p className="candidateName">Swati Shinde</p>
            <ThemeProvider theme={phoneIconTheme}>
              <div className="phoneDiv">
                <div className="phoneDiv">
                  <PhoneIcon />
                  <p className="mobileNo">9876434567 </p>
                </div>
                <div className="phoneDiv">
                  <MailIcon />
                  <p className="emailId">swati@gmail.com</p>
                </div>
              </div>
            </ThemeProvider>
          </CardContent>

          <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" style={{ width: "76px" }} rowSpan={3}>
                  Hired City
                </TableCell>
                <TableCell align="center" style={{ width: "76px" }} rowSpan={2}>
                  Hired Date
                </TableCell>
                <TableCell align="center" style={{ width: "76px" }} rowSpan={2}>
                  Degree
                </TableCell>
                <TableCell
                  align="center"
                  style={{ width: "66px", lineHeight: "14px" }}
                  rowSpan={2}
                >
                  Agg. Degree %
                </TableCell>
                <TableCell align="center" style={{ width: "86px" }} rowSpan={2}>
                  Current Location Pin
                </TableCell>
                <TableCell align="center" style={{ width: "91px" }} rowSpan={2}>
                  Permanent Location Pin
                </TableCell>
                <TableCell align="center" style={{ width: "86px" }} rowSpan={2}>
                  Hired Lab
                </TableCell>
                <TableCell
                  align="center"
                  style={{ width: "34px", padding: "7px 0px 0px 0px" }}
                  colSpan={3}
                >
                  Remarks
                </TableCell>
              </TableRow>
            </TableHead>

            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  style={{ borderTop: "hidden" }}
                ></TableCell>
                <TableCell
                  align="center"
                  style={{ borderTop: "hidden" }}
                ></TableCell>
                <TableCell
                  align="center"
                  style={{ borderTop: "hidden" }}
                ></TableCell>
                <TableCell
                  align="center"
                  style={{ borderTop: "hidden" }}
                ></TableCell>
                <TableCell
                  align="center"
                  style={{ borderTop: "hidden" }}
                ></TableCell>
                <TableCell
                  align="center"
                  style={{ borderTop: "hidden" }}
                ></TableCell>
                <TableCell
                  align="center"
                  style={{ borderTop: "hidden" }}
                ></TableCell>
                <TableCell align="center" style={{ padding: "7px" }}>
                  Attitude
                </TableCell>
                <TableCell align="center">Communication</TableCell>
                <TableCell align="center">Knowledge</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {rows.map((row) => ( */}
              <TableRow
                key="name"
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: "1px solid grey",
                  },
                }}
              >
                <TableCell component="th" scope="rows" align="center">
                  xxx
                </TableCell>
                <TableCell align="center">xxx</TableCell>
                <TableCell align="center">xxx</TableCell>
                <TableCell align="center">xxx</TableCell>
                <TableCell align="center">xxx</TableCell>
                <TableCell align="center">xxx</TableCell>
                <TableCell align="center" style={{ padding: "7px" }}>
                  xxx
                </TableCell>
                <TableCell align="center">xxx</TableCell>
                <TableCell align="center">xxx</TableCell>
                <TableCell align="center">xxx</TableCell>
              </TableRow>
              {/* ))} */}
            </TableBody>
          </Table>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default DisplayCard;
