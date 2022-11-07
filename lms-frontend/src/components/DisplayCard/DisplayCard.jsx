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
  Card,
} from "@mui/material";
import CandidateEdit from "../CandidateEditModel/CandidateEdit";
import { useState } from "react";

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
  let isEditCandidateDialogClosed = true;
  const [isEditCandidateDialogOpened, setIsEditCandidateDialogOpened] = useState(false);
  const [anchorEle, setAnchorEle] = useState(null);

  function handleEditCandidateDialog(event){
    setAnchorEle(event.currentTarget);
    setIsEditCandidateDialogOpened(true)
  }


  return (
    <div>
      <ThemeProvider theme={avatarTheme}>
        <div className="displayDetailCardDiv">
          <Card className="detailsCard" key={props.key} >
            <Avatar src="/broken-image.jpg" />
            <CardContent className="displayCardContent" onClick={handleEditCandidateDialog}>
              <p className="candidateName">
                {props.values.firstName}. {props.values.lastName}
              </p>
              <ThemeProvider theme={phoneIconTheme}>
                <div className="phoneDiv">
                  <div className="phoneDiv">
                    <PhoneIcon />
                    <p className="mobileNo">{props.values.mobileNumber} </p>
                  </div>
                  <div className="phoneDiv">
                    <MailIcon />
                    <p className="emailId">{props.values.emailId}</p>
                  </div>
                </div>
              </ThemeProvider>
              <CandidateEdit open={isEditCandidateDialogOpened} close={isEditCandidateDialogClosed} event={anchorEle}/>
            </CardContent>

            {/* <Table sx={{ minWidth: 500 }} aria-label="simple table"> */}
            {/* <TableHead>
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
            </TableHead> */}

            {/* <TableHead>
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
            </TableHead> */}
            {/* <TableBody> */}
            {/* {rows.map((row) => ( */}
            {/* <TableRow
                key="name"
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: "1px solid grey",
                  },
                }}
              > */}
            {/* <TableCell component="th" scope="rows" align="center">
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
              </TableRow> */}

            {/* </TableBody> */}
            {/* </Table> */}
          </Card>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default DisplayCard;