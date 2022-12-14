import {
  Badge,
  createTheme,
  styled,
  ThemeProvider,
  Tabs,
  Tab,
  Card,
  Avatar,
  Popover,
} from "@mui/material";
import React, {  useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./RecruitmentCard.css";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";

import { useNavigate } from "react-router-dom";
import {
  getNotRespondedCount,
  getNotRespondedList,
} from "../../../services/RecruitmentService";
import RecruitmentDisplayCard from "../../DisplayCard/RecruitmentDisplayCard";

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
          marginRight: "15px",
          backgroundColor: "#7F961E",
        },
        root: {
          marginRight: "73px",
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
          margin: "14px 5px",
          height: "45px",
          width: "45px",
        },
        fallback: {
          color: "white",
        },
      },
    },
  },
});

const AntTabs = styled(Tabs)({
  borderBottom: "2px solid #d9d6d6",
  marginLeft: "54px",
  width: "1012px",
  "& .MuiTabs-indicator": {
    backgroundColor: "#7F961E",
    height: "4px",
    width: "120.5781px",
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontSize: "17px",
    fontWeight: "550",
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(5),
    color: " dark grey",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#7F961E",
      fontWeight: "550",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  })
);

function RecruitmentCard(props) {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  let navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAddCandidate = () => {
    navigate("/addcandidate");
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  // const data = notRespondedList || {};
  //       console.log(data);

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
          <AddCircleIcon onClick={handleAddCandidate} />
        </div>

        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Didn't Respond" />
          <Badge badgeContent={props.notRespondedCount} color="primary" />

          <AntTab label="Accepted" />
          <Badge badgeContent={props.acceptedCount} color="primary" />
          <AntTab label="Rejected" />
          <Badge badgeContent={props.rejectedCount} color="primary" />
        </AntTabs>

        <ThemeProvider theme={avatarTheme}>
          <div className="detailCardDivR">
            <Card className="detailsCard" onClick={handleClick}>
              <Avatar src="/broken-image.jpg" />
              <div className="cardContent">
                <p className="name">
                  {props.notRespondedList.firstName}{" "}
                  {props.notRespondedList.middleName}{" "}
                  {props.notRespondedList.lastName}
                </p>
                <ThemeProvider theme={phoneIconTheme}>
                  <div className="phoneDiv">
                    <PhoneIcon />
                    <p className="mobile">
                      {props.notRespondedList.mobileNumber}{" "}
                    </p>
                  </div>
                  <div className="phoneDiv">
                    <MailIcon />
                    <p className="email">{props.notRespondedList.emailId}</p>
                  </div>
                </ThemeProvider>
              </div>
            </Card>

            <Popover
              anchorOrigin={{
                vertical: "center",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
            >
              <RecruitmentDisplayCard status="pending" />
            </Popover>

            <Card className="detailsCard" onClick={handleClick}>
              <Avatar src="/broken-image.jpg" />
              <div className="cardContent">
                <p className="name">
                  {props.acceptedList.firstName} {props.acceptedList.middleName}{" "}
                  {props.acceptedList.lastName}
                </p>
                <ThemeProvider theme={phoneIconTheme}>
                  <div className="phoneDiv">
                    <PhoneIcon />
                    <p className="mobile">{props.acceptedList.mobileNumber} </p>
                  </div>
                  <div className="phoneDiv">
                    <MailIcon />
                    <p className="email">{props.acceptedList.emailId}</p>
                  </div>
                </ThemeProvider>
              </div>
            </Card>

            <Popover
              anchorOrigin={{
                vertical: "center",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
            >
              <RecruitmentDisplayCard />
            </Popover>

            <Card className="detailsCard" onClick={handleClick}>
              <Avatar src="/broken-image.jpg" />
              <div className="cardContent">
                <p className="name">
                  {props.rejectedList.firstName} {props.rejectedList.middleName}{" "}
                  {props.rejectedList.lastName}
                </p>
                <ThemeProvider theme={phoneIconTheme}>
                  <div className="phoneDiv">
                    <PhoneIcon />
                    <p className="mobile">{props.rejectedList.mobileNumber}</p>
                  </div>
                  <div className="phoneDiv">
                    <MailIcon />
                    <p className="email">{props.rejectedList.emailId}</p>
                  </div>
                </ThemeProvider>
              </div>
            </Card>
            <Popover
              anchorOrigin={{
                vertical: "center",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
            >
              <RecruitmentDisplayCard />
            </Popover>
          </div>
        </ThemeProvider>
      </div>
    </ThemeProvider>
  );
}

export default RecruitmentCard;
