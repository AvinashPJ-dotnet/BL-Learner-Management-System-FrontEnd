import { Badge, createTheme ,Divider,ThemeProvider} from "@mui/material";
import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import './RecruitmentCard.css';

const theme= createTheme({
    components:{
        MuiSvgIcon:{
            styleOverrides:{
                root:{
                    height: "44px",
                    color: "#7F961E",
                    fontSize: "31px",
                    cursor:"pointer"
                }
            }
        },
        MuiBadge:{
            styleOverrides:{
                badge:{
                    position: "absolute",
                    fontSize: "11px",
                    height: "13px",
                    top: "22px",
                    right: "-14px",
                    backgroundColor: "#1976d2",
                    marginRight: "15px"
                }
            }
        }
    }
});
const iconTheme= createTheme({
    components:{
        MuiSvgIcon:{
            styleOverrides:{
                root:{
                    height: "22px",
                    color: "#fff0f0"
                }
            }
        }
    }
});

function RecruitmentCard(props) {
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
        <p className="heading">Didn't Respond</p>
        <Badge badgeContent={4} color="primary"/>
        <p className="heading">Accepted</p>
        <Badge badgeContent={4} color="primary"/>
        <p className="heading">Rejected</p>
        <Badge badgeContent={4} color="primary"/>
        </span>
    <Divider></Divider>
    </div>
    </ThemeProvider>
  );
}

export default RecruitmentCard;
