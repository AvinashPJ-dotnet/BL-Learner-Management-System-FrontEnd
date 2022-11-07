import {
  Badge,
  createTheme,
  styled,
  ThemeProvider,
  Tabs,
  Tab,
  // Card,
  // Avatar
} from "@mui/material";
import React, { useEffect } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./OnBoarding.css";
// import PhoneIcon from "@mui/icons-material/Phone";
// import MailIcon from "@mui/icons-material/Mail";
import {
  fetchCandidatesByStatus,
  fetchCandidatesCountByStatus,
} from "../../services/OnboardingService";
import DisplayCard from "../DisplayCard/DisplayCard";

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

// const phoneIconTheme = createTheme({
//     components: {
//       MuiSvgIcon: {
//         styleOverrides: {
//           root: {
//             color: "grey",
//             height: "12px",
//             fontSize: "unset",
//             marginTop: "3px",
//           },
//         },
//       },
//     },
//   });

// const avatarTheme = createTheme({
//     components: {
//       MuiSvgIcon: {
//         styleOverrides: {
//           root: {
//             height: "22px",
//             color: "#fff0f0",
//           },
//         },
//       },
//       MuiAvatar: {
//         styleOverrides: {
//           root: {
//             margin: "14px 5px",
//             height: "45px",
//             width: "45px",
//           },
//           fallback: {
//             color: "white",
//           },
//         },
//       },
//     },
//   });

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

// const candidateData = [
//   { name: "sdfsdfsd", phoneNo: "64564545656", emailId: "fsadad@sdfddf.com" },
//   { name: "esfsdf", phoneNo: "546435", emailId: "turtuer@sdfddf.com" },
//   { name: "grgs", phoneNo: "457457456", emailId: "ujtryher@sdfddf.com" },
//   { name: "werwer", phoneNo: "568567567", emailId: "fsdfdfrd@sdfddf.com" },
//   { name: "werwer", phoneNo: "568567567", emailId: "fsdfdfrd@sdfddf.com" },
//   { name: "werwer", phoneNo: "568567567", emailId: "fsdfdfrd@sdfddf.com" },
//   { name: "werwer", phoneNo: "568567567", emailId: "fsdfdfrd@sdfddf.com" },
// ];

function OnBoarding(props) {
  let [value, setValue] = React.useState(0);
  const [tabStatus, setTabStatus] = React.useState("");
  const [candidateData, setCanidateData] = React.useState([]);
  const [pandingCount, setPendingCount] = React.useState(0);
  const [receivedCount, setReceivedCount] = React.useState(0);
  const [verifiedCount, setVerifiedCount] = React.useState(0);

  const handleChange = (event, newValue) => {
    // console.log(value);
    setValue(newValue);
    if (value === 0) {
        setTabStatus("pending");
        console.log(tabStatus);
    } else if (value === 2) {
        setTabStatus("received");
        console.log(tabStatus);
    } else if (value === 4) {
        setTabStatus("verified");
        console.log(tabStatus);
    }
    

    fetchCandidatesByStatus({tabStatus}).then((items) => {
        setCanidateData(items.data.data);
      }).catch(error=>{
        console.log(error);
      });

      fetchCandidatesCountByStatus({tabStatus}).then((res) => {
          console.log("count: "+tabStatus);
        if (tabStatus === 'pending') {
            setPendingCount(res.data.data);
          } else if (tabStatus === 'received') {
            setReceivedCount(res.data.data);
          } else if (tabStatus === 'verified') {
            setVerifiedCount(res.data.data);
          }
      }).catch(error=>{
        console.log(error);
      });
}

    useEffect(() => {
      fetchCandidatesByStatus({tabStatus}).then((items) => {
        setCanidateData(items.data.data);
      }).catch(error=>{
        console.log(error);
      });

      fetchCandidatesCountByStatus('pending').then((res) => {
        setPendingCount(res.data.data);
      }).catch(error=>{
        console.log(error);
      });

      fetchCandidatesCountByStatus('received').then((res) => {
        setReceivedCount(res.data.data);
      }).catch(error=>{
        console.log(error);
      });

      fetchCandidatesCountByStatus('verified').then((res) => {
        setVerifiedCount(res.data.data);
      }).catch(error=>{
        console.log(error);
      });
    }, 0);

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
          {/* <span className="dividerContent">
          <p className="heading">Pending</p>
          <Badge badgeContent={4} color="primary" />
          <p className="heading">Received</p>
          <Badge badgeContent={4} color="primary" />
          <p className="heading">Verified</p>
          <Badge badgeContent={4} color="primary" />
        </span>
        <Divider></Divider> */}
          <AntTabs
            value={value}
            onChange={handleChange}
            aria-label="ant example"
          >
            <AntTab label="Pending"/>
            <Badge badgeContent={pandingCount} color="primary"  />

            <AntTab label="Received"/>
            <Badge badgeContent={receivedCount} color="primary" />
            <AntTab label="Verified"/>
            <Badge badgeContent={verifiedCount} color="primary" />
          </AntTabs>
          <div className="cardContainer">
            {candidateData.map((data, index) => (
              <DisplayCard values={data} key={index} />
            ))}
          </div>
        </div>
      </ThemeProvider>
    );
  };


export default OnBoarding;
