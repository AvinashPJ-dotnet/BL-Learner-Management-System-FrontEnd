import {
  Badge,
  Button,
  createTheme,
  Divider,
  ThemeProvider,
} from "@mui/material";
import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./OnBoarding.css";
import { Card } from "@material-ui/core";

const theme = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          height: "44px",
          color: "#7F961E",
          fontSize: "31px",
          cursor: "pointer",
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          position: "absolute",
          fontSize: "11px",
          height: "13px",
          top: "22px",
          right: "-14px",
          backgroundColor: "#1976d2",
          marginRight: "15px",
        },
      },
    },
  },
});
const iconTheme = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          height: "22px",
          color: "#fff0f0",
        },
      },
    },
  },
});

const candidateData = [
  { name: "sdfsdfsd", phoneNo: "64564545656", emailId: "fsadad@sdfddf.com" },
  { name: "esfsdf", phoneNo: "546435", emailId: "turtuer@sdfddf.com" },
  { name: "grgs", phoneNo: "457457456", emailId: "ujtryher@sdfddf.com" },
  { name: "werwer", phoneNo: "568567567", emailId: "fsdfdfrd@sdfddf.com" },
  { name: "werwer", phoneNo: "568567567", emailId: "fsdfdfrd@sdfddf.com" },
  { name: "werwer", phoneNo: "568567567", emailId: "fsdfdfrd@sdfddf.com" },
  { name: "werwer", phoneNo: "568567567", emailId: "fsdfdfrd@sdfddf.com" },
];

function OnBoarding(props) {
  return (
    <ThemeProvider theme={theme}>
      <div className="cardDiv">
        <div className="buttonDiv">
          <div id="logo-search">
            <SearchOutlinedIcon id="logo" />
            <input className="search" type="text" placeholder="Search" />
          </div>
          <ThemeProvider theme={iconTheme}>
            <div className="uploadIconDiv">
              <DriveFolderUploadIcon />
            </div>
          </ThemeProvider>

          <AddCircleIcon />
        </div>
        <span className="dividerContent">
          <p className="heading">Pending</p>
          <Badge badgeContent={4} color="primary" />
          <p className="heading">Received</p>
          <Badge badgeContent={4} color="primary" />
          <p className="heading">Verified</p>
          <Badge badgeContent={4} color="primary" />
        </span>
        <Divider></Divider>
        <div className="cardContainer" >
          {
            candidateData.map((data, index) => (
              <Card key={index}
                className="cardBody">
                    <img src="public\logo192.png"></img>
                <p>{data.name}</p>
                <p>{data.phoneNo}</p>
                <p>{data.emailId}</p>
              </Card>
            ))
          }
        </div>
      </div>
    </ThemeProvider>
  );
}

export default OnBoarding;
